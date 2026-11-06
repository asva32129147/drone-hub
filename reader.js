import { h, bar } from './dom.js';
import { load, save } from './store.js';
import { textbook } from './textbook.js';
import { chapter } from './chapter1.js';
import { renderItem } from './lessons.js';
const byId = Object.fromEntries(chapter.items.map(i => [i.id, i])), secs = textbook.sections;
const math = el => window.renderMathInElement && window.renderMathInElement(el, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }], throwOnError: false });
const isDone = (s, st, p) => st.read[s.id] && (s.items.every(id => p[id]) || st.skip[s.id]);
export function sectionsDone() { const st = load('reader', { read: {}, skip: {} }), p = load('progress', {}); return secs.filter(s => isDone(s, st, p)).length; }
export const sectionCount = secs.length;
const head = (k, d, n) => k === 'quiz' || k === 'test' ? `Score: ${d} of ${n} correct` : `${k === 'asg' ? 'Exercises' : 'Checkpoints'}: ${d} of ${n} complete`;
const startLabel = { cp: 'I have read this: show checkpoints', quiz: 'Start the quiz', test: 'Start the test', asg: 'Show the assignment' };
export function mount(el) {
  const st = load('reader', { read: {}, skip: {} });
  let focus = null;
  const draw = () => {
    const p = load('progress', {}), open = i => i === 0 || isDone(secs[i - 1], st, p);
    el.replaceChildren();
    const outline = h('aside', { class: 'outline card' }, h('b', {}, 'Contents'), bar(Math.round(100 * secs.filter(s => isDone(s, st, p)).length / secs.length)), h('ul', {}, ...secs.map((s, i) => h('li', { class: !open(i) ? 'lock' : isDone(s, st, p) ? 'done' : '' }, open(i) ? h('a', { href: '#/read', onclick: e => { e.preventDefault(); document.getElementById('sec-' + s.id)?.scrollIntoView({ behavior: 'smooth' }); } }, s.title) : s.title))), h('button', { class: 'ghost noprint', onclick: () => { location.hash = '#/print'; } }, 'Save as PDF'));
    const pages = h('div');
    secs.forEach((s, i) => {
      if (!open(i)) return;
      const body = h('div', { class: 'prose' }); body.innerHTML = s.html;
      const page = h('article', { class: 'page', id: 'sec-' + s.id }, i === 0 ? h('h2', {}, s.title) : h('h2', {}, s.title), body);
      if (!st.read[s.id]) page.append(h('div', { class: 'row' }, h('button', { onclick: () => { st.read[s.id] = true; save('reader', st); focus = s.items.length ? 'cps-' + s.id : 'sec-' + (secs[i + 1]?.id); draw(); } }, s.items.length ? startLabel[s.kind || 'cp'] : 'Continue')));
      else if (s.items.length) {
        const done = s.items.filter(id => p[id]).length, box = h('div', { class: 'cps ' + (s.kind || 'cp'), id: 'cps-' + s.id }, h('h3', {}, head(s.kind, done, s.items.length)), bar(Math.round(100 * done / s.items.length)));
        s.items.forEach(id => box.append(renderItem(byId[id], () => { const q = load('progress', {}); const d = s.items.filter(x => q[x]).length; box.firstChild.textContent = head(s.kind, d, s.items.length); box.children[1].firstChild.style.width = Math.round(100 * d / s.items.length) + '%'; if (d === s.items.length) draw(); })));
        if (!isDone(s, st, p)) box.append(h('div', { class: 'row' }, h('button', { class: 'ghost', onclick: () => { st.skip[s.id] = true; save('reader', st); focus = 'sec-' + (secs[i + 1]?.id); draw(); } }, s.kind === 'test' ? 'Finish' : 'Skip the rest and continue')));
        page.append(box);
      }
      pages.append(page);
    });
    el.append(h('div', { class: 'reader' }, outline, pages)); math(el);
    if (focus) { const t = document.getElementById(focus); focus = null; t && t.scrollIntoView({ behavior: 'smooth' }); }
  };
  draw();
}
export function printAll(el) {
  el.append(h('div', { class: 'row noprint' }, h('button', { onclick: () => window.print() }, 'Print or save as PDF'), h('a', { href: '#/read' }, 'Back to the reader')), h('p', { class: 'muted noprint' }, 'In the print window choose "Save as PDF" as the destination. Formulas print typeset.'));
  secs.forEach(s => {
    const b = h('div', { class: 'prose' }); b.innerHTML = s.html; const art = h('article', { class: 'page' }, h('h2', {}, s.title), b);
    if (s.kind === 'quiz' || s.kind === 'test') art.append(h('ol', {}, ...s.items.map(id => { const it = byId[id]; return h('li', { style: 'margin:10px 0' }, h('div', { style: 'white-space:pre-wrap' }, it.prompt), it.options ? h('ul', {}, ...it.options.map(o => h('li', {}, o))) : ''); })));
    el.append(art);
  }); math(el);
}
