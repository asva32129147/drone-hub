import { h } from './dom.js';
import { load, save } from './store.js';
import { run } from './pyrunner.js';
import { chapter } from './chapter1.js';
const nums = s => (s.match(/-?\d*\.?\d+(?:e-?\d+)?/gi) || []).map(Number);
const close = (x, a) => Math.abs(x - a) <= Math.max(0.01 * Math.abs(a), 1e-9);
const hit = (txt, k) => k.startsWith('/') ? new RegExp(k.slice(1, -1), 'i').test(txt) : txt.includes(k.toLowerCase());
export function summary() { const p = load('progress', {}); return { done: chapter.items.filter(i => p[i.id]).length, total: chapter.items.length }; }
// Builds one interactive exercise card. onMark(id, ok) is called after every check.
export function renderItem(it, onMark) {
  const p = load('progress', {}), kind = it.group === 'Checkpoints' ? 'cp' : it.group.startsWith('Unit Quiz') ? 'qz' : it.group === 'Chapter Test' ? 'ts' : 'ex';
  const msg = h('div', { class: 'muted' }, p[it.id] ? 'Completed' : '');
  const card = h('div', { class: 'card ' + kind + (p[it.id] ? ' pass' : '') }, kind !== 'ex' ? h('div', { class: 'chip2' }, it.label) : h('div', { class: 'tag' }, it.label), h('div', { class: 'q' }, it.prompt));
  const mark = (ok) => { const f = load('first', {}); if (!(it.id in f)) { f[it.id] = ok; save('first', f); } const q = load('progress', {}); q[it.id] = ok; save('progress', q); card.classList.toggle('pass', ok); onMark && onMark(it.id, ok); };
  if (it.type === 'mc') {
    const name = 'mc-' + it.id, opts = h('div', {}, ...it.options.map((o, i) => h('label', { class: 'opt' }, h('input', { type: 'radio', name, value: String(i) }), h('span', {}, o)))), exp = h('div', { class: 'muted' });
    card.append(opts, h('div', { class: 'row' }, h('button', { onclick: () => { const c = opts.querySelector('input:checked'); if (!c) return; const ok = +c.value === it.correct; msg.className = ok ? 'ok' : 'no'; msg.textContent = ok ? 'Correct' : 'Not quite. Re-read the explanation, then try the next question.'; exp.textContent = it.explain; mark(ok); } }, 'Check')), exp);
  } else if (it.type === 'num') {
    const inp = h('input', { placeholder: it.ans.length > 1 ? 'answers separated by commas' : 'your answer', 'aria-label': 'Answer' });
    card.append(h('div', { class: 'row' }, inp, h('button', { onclick: () => { const g = nums(inp.value), ok = g.length === it.ans.length && it.ans.every((a, i) => close(g[i], a)); msg.className = ok ? 'ok' : 'no'; msg.textContent = ok ? 'Correct' : 'Not yet. Check your units and work.'; mark(ok); } }, 'Check')));
  } else if (it.type === 'code') {
    const ta = h('textarea', { 'aria-label': 'Python code' }); ta.value = it.starter; const out = h('pre');
    card.append(ta, h('div', { class: 'row' }, h('button', { onclick: async () => {
      out.textContent = 'Loading Python (first run takes a few seconds)...';
      try {
        const r = await run(ta.value, it.fn, it.cases);
        if (r.error) { out.textContent = r.error; mark(false); return; }
        out.textContent = r.results.map(x => `${x.ok ? 'PASS' : 'FAIL'} ${it.fn}(${x.args.map(a => JSON.stringify(a)).join(', ')}) expected ${JSON.stringify(x.exp)}, got ${JSON.stringify(x.got)}`).join('\n');
        const ok = r.results.every(x => x.ok); msg.className = ok ? 'ok' : 'no'; msg.textContent = ok ? 'All tests pass' : 'Some tests fail'; mark(ok);
      } catch (e) { out.textContent = 'Could not run Python: ' + e; }
    } }, 'Run tests')), out);
  } else {
    const ta = h('textarea', { 'aria-label': 'Your answer' }); ta.value = load('text:' + it.id, ''); const fb = h('div'), mod = h('div', { class: 'muted' });
    const btns = [h('button', { onclick: () => {
      save('text:' + it.id, ta.value);
      if (!it.rubric) { mark(ta.value.trim().length > 0); msg.textContent = 'Saved. Paste it in a Claude chat for feedback.'; return; }
      const txt = ta.value.toLowerCase(), res = it.rubric.map(([hint, kws]) => ({ hint, ok: kws.some(k => hit(txt, k)) }));
      fb.replaceChildren(...res.map(r => h('div', { class: r.ok ? 'ok' : 'no' }, (r.ok ? 'Found: ' : 'Missing: ') + r.hint)));
      const ok = res.every(r => r.ok); mark(ok); msg.textContent = ok ? 'All key points present.' : 'Keyword check only: add the missing points, or rephrase if you think you covered one.';
    } }, it.rubric ? 'Check answer' : 'Save answer')];
    if (it.model) btns.push(h('button', { class: 'ghost', onclick: () => { mod.textContent = 'Model answer: ' + it.model; } }, 'Show model answer'));
    card.append(ta, h('div', { class: 'row' }, ...btns), fb, mod);
  }
  card.append(msg); return card;
}
