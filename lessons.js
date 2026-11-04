import { h, bar } from './dom.js';
import { load, save } from './store.js';
import { run } from './pyrunner.js';
import { chapter } from '../data/chapter1.js';
const nums = s => (s.match(/-?\d*\.?\d+(?:e-?\d+)?/gi) || []).map(Number);
const close = (x, a) => Math.abs(x - a) <= Math.max(0.01 * Math.abs(a), 1e-9);
export function summary() { const p = load('progress', {}); return { done: chapter.items.filter(i => p[i.id]).length, total: chapter.items.length }; }
export function mount(el) {
  const p = load('progress', {}), mark = (id, ok) => { p[id] = ok; save('progress', p); update(); };
  const top = h('div', { class: 'card' }); el.append(h('h2', {}, chapter.title), top);
  const update = () => { const s = summary(); top.replaceChildren(h('b', {}, `${s.done} of ${s.total} exercises complete`), bar(Math.round(100 * s.done / s.total))); };
  let group = '';
  chapter.items.forEach(it => {
    if (it.group !== group) { group = it.group; el.append(h('h3', {}, group)); }
    const msg = h('div', { class: 'muted' }, p[it.id] ? 'Completed' : '');
    const card = h('div', { class: 'card' }, h('div', { class: 'tag' }, it.label), h('div', {}, it.prompt));
    if (it.type === 'num') {
      const inp = h('input', { placeholder: it.ans.length > 1 ? 'answers separated by commas' : 'your answer', 'aria-label': 'Answer' });
      card.append(h('div', { class: 'row' }, inp, h('button', { onclick: () => { const g = nums(inp.value), ok = g.length === it.ans.length && it.ans.every((a, i) => close(g[i], a)); msg.className = ok ? 'ok' : 'no'; msg.textContent = ok ? 'Correct' : 'Not yet. Check your units and work.'; mark(it.id, ok); } }, 'Check')));
    } else if (it.type === 'code') {
      const ta = h('textarea', { 'aria-label': 'Python code' }); ta.value = it.starter; const out = h('pre');
      card.append(ta, h('div', { class: 'row' }, h('button', { onclick: async () => {
        out.textContent = 'Loading Python (first run takes a few seconds)...';
        try {
          const r = await run(ta.value, it.fn, it.cases);
          if (r.error) { out.textContent = r.error; mark(it.id, false); return; }
          out.textContent = r.results.map(x => `${x.ok ? 'PASS' : 'FAIL'} ${it.fn}(${x.args.map(a => JSON.stringify(a)).join(', ')}) expected ${JSON.stringify(x.exp)}, got ${JSON.stringify(x.got)}`).join('\n');
          const ok = r.results.every(x => x.ok); msg.className = ok ? 'ok' : 'no'; msg.textContent = ok ? 'All tests pass' : 'Some tests fail'; mark(it.id, ok);
        } catch (e) { out.textContent = 'Could not run Python: ' + e; }
      } }, 'Run tests')), out);
    } else {
      const ta = h('textarea', { 'aria-label': 'Your answer' }); ta.value = load('text:' + it.id, ''); const fb = h('div'), mod = h('div', { class: 'muted' });
      const hit = (txt, k) => k.startsWith('/') ? new RegExp(k.slice(1, -1), 'i').test(txt) : txt.includes(k.toLowerCase());
      const btns = [h('button', { onclick: () => {
        save('text:' + it.id, ta.value);
        if (!it.rubric) { mark(it.id, ta.value.trim().length > 0); msg.textContent = 'Saved. Paste it in a Claude chat for feedback.'; return; }
        const txt = ta.value.toLowerCase(), res = it.rubric.map(([hint, kws]) => ({ hint, ok: kws.some(k => hit(txt, k)) }));
        fb.replaceChildren(...res.map(r => h('div', { class: r.ok ? 'ok' : 'no' }, (r.ok ? 'Found: ' : 'Missing: ') + r.hint)));
        const ok = res.every(r => r.ok); mark(it.id, ok);
        msg.textContent = ok ? 'All key points present.' : 'Keyword check only: add the missing points, or rephrase if you think you covered one.';
      } }, it.rubric ? 'Check answer' : 'Save answer')];
      if (it.model) btns.push(h('button', { class: 'ghost', onclick: () => { mod.textContent = 'Model answer: ' + it.model; } }, 'Show model answer'));
      card.append(ta, h('div', { class: 'row' }, ...btns), fb, mod);
    }
    card.append(msg); el.append(card);
  });
  update();
}
