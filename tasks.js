import { h, bar } from './dom.js';
import { load, save } from './store.js';
import { chapter } from './chapter1.js';
import { summary } from './lessons.js';
import { sectionsDone, sectionCount } from './reader.js';
const COLS = ['To do', 'In progress', 'Done'], pad = n => String(n).padStart(2, '0');
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`, now = new Date(), TODAY = iso(now.getFullYear(), now.getMonth(), now.getDate());
const okLink = u => /^(https?:\/\/|#\/)/.test(u);
let tasks = [], view = load('taskview', 'board'), month = new Date(now.getFullYear(), now.getMonth(), 1), who = '';
const late = t => t.due && t.due < TODAY && t.col !== 2;
function seed() {
  let t = load('tasks', null);
  if (!t) { t = chapter.projectTasks.map((title, i) => ({ id: 'p' + i, title, desc: '', col: 0, tag: 'Chapter 1', assignee: '', due: '', link: '#/read' })); save('tasks', t); }
  return t;
}
function edit(t, redraw) {
  const isNew = !t; t = t || { id: 't' + Date.now(), title: '', desc: '', col: 0, tag: 'Mine', assignee: '', due: '', link: '' };
  const fld = (label, el) => h('label', { class: 'fld' }, h('span', {}, label), el);
  const title = h('input', { value: t.title }), desc = h('textarea'), col = h('select', {}, ...COLS.map((c, i) => h('option', { value: i }, c))), due = h('input', { type: 'date', value: t.due });
  const names = [...new Set(tasks.map(x => x.assignee).filter(Boolean))], assignee = h('input', { value: t.assignee, list: 'names', placeholder: 'Name' }), link = h('input', { value: t.link, placeholder: 'https://... or #/read' }), tag = h('input', { value: t.tag });
  desc.value = t.desc || ''; col.value = t.col;
  const dlg = h('dialog', { class: 'dlg' }, h('h3', {}, isNew ? 'New task' : 'Edit task'), fld('Title', title), fld('Description', desc), fld('Status', col), fld('Assignee', assignee), h('datalist', { id: 'names' }, ...names.map(n => h('option', { value: n }))), fld('Due date', due), fld('Link (https:// or #/ page)', link), fld('Label', tag),
    h('div', { class: 'row' }, h('button', { onclick: () => {
      if (!title.value.trim()) return;
      Object.assign(t, { title: title.value.trim(), desc: desc.value, col: +col.value, assignee: assignee.value.trim(), due: due.value, link: okLink(link.value.trim()) ? link.value.trim() : '', tag: tag.value.trim() || 'Task' });
      if (isNew) tasks.push(t); save('tasks', tasks); dlg.close(); redraw();
    } }, 'Save'), h('button', { class: 'ghost', onclick: () => dlg.close() }, 'Cancel'), isNew ? '' : h('button', { class: 'ghost', onclick: () => { tasks.splice(tasks.indexOf(t), 1); save('tasks', tasks); dlg.close(); redraw(); } }, 'Delete')));
  dlg.addEventListener('close', () => dlg.remove()); document.body.append(dlg); dlg.showModal();
}
const person = n => n ? h('span', { class: 'av' }, h('b', {}, n.slice(0, 2).toUpperCase()), n) : '';
function boardView(el, redraw) {
  const names = [...new Set(tasks.map(x => x.assignee).filter(Boolean))];
  const sel = h('select', { 'aria-label': 'Filter by assignee' }, h('option', { value: '' }, 'Everyone'), ...names.map(n => h('option', { value: n }, n))); sel.value = who; sel.onchange = () => { who = sel.value; redraw(); };
  el.append(h('div', { class: 'row' }, h('button', { onclick: () => edit(null, redraw) }, 'New task'), sel));
  const board = h('div', { class: 'board' });
  COLS.forEach((name, ci) => {
    const col = h('div', { class: 'col' }, h('b', {}, `${name} (${tasks.filter(x => x.col === ci && (!who || x.assignee === who)).length})`));
    col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); }); col.addEventListener('dragleave', () => col.classList.remove('over'));
    col.addEventListener('drop', e => { e.preventDefault(); const t = tasks.find(x => x.id === e.dataTransfer.getData('text')); if (t) { t.col = ci; save('tasks', tasks); redraw(); } });
    tasks.filter(x => x.col === ci && (!who || x.assignee === who)).forEach(t => {
      const card = h('div', { class: 'task', draggable: 'true' }, h('div', { class: 'tag' }, t.tag), h('div', {}, t.title),
        h('div', { class: 'meta' }, t.due ? h('span', { class: 'badge' + (late(t) ? ' late' : '') }, (late(t) ? 'Overdue ' : 'Due ') + t.due) : '', person(t.assignee), t.link ? h('a', { href: t.link, ...(t.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }, 'Link') : ''),
        h('div', { class: 'row' }, ci > 0 ? h('button', { class: 'ghost', onclick: () => { t.col--; save('tasks', tasks); redraw(); } }, 'Back') : '', ci < 2 ? h('button', { class: 'ghost', onclick: () => { t.col++; save('tasks', tasks); redraw(); } }, 'Next') : '', h('button', { class: 'ghost', onclick: () => edit(t, redraw) }, 'Edit')));
      card.addEventListener('dragstart', e => e.dataTransfer.setData('text', t.id)); col.append(card);
    });
    board.append(col);
  });
  el.append(board);
}
function calendarView(el, redraw) {
  const y = month.getFullYear(), m = month.getMonth(), first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), cells = Math.ceil((first + days) / 7) * 7;
  el.append(h('div', { class: 'row' }, h('button', { class: 'ghost', onclick: () => { month = new Date(y, m - 1, 1); redraw(); } }, 'Previous'), h('b', {}, month.toLocaleString('en', { month: 'long', year: 'numeric' })), h('button', { class: 'ghost', onclick: () => { month = new Date(y, m + 1, 1); redraw(); } }, 'Next'), h('button', { class: 'ghost', onclick: () => { month = new Date(now.getFullYear(), now.getMonth(), 1); redraw(); } }, 'Today'), h('button', { onclick: () => edit(null, redraw) }, 'New task')));
  const grid = h('div', { class: 'cal' }, ...['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => h('div', { class: 'dow' }, d)));
  for (let i = 0; i < cells; i++) {
    const d = i - first + 1, inM = d >= 1 && d <= days, key = inM ? iso(y, m, d) : '';
    const cell = h('div', { class: (inM ? '' : 'off ') + (key === TODAY ? 'today' : '') }, inM ? String(d) : '');
    tasks.filter(t => key && t.due === key).forEach(t => cell.append(h('button', { class: 'chip' + (late(t) ? ' late' : ''), title: t.title, onclick: () => edit(t, redraw) }, (t.col === 2 ? '\u2713 ' : '') + t.title)));
    grid.append(cell);
  }
  el.append(grid); const none = tasks.filter(t => !t.due).length; if (none) el.append(h('p', { class: 'muted' }, `${none} task${none > 1 ? 's' : ''} without a due date are not shown here.`));
}
function progressView(el) {
  const pct = (a, b) => (b ? Math.round(100 * a / b) : 0), row = (label, a, b) => h('div', { class: 'prow' }, h('span', {}, label), bar(pct(a, b)), h('span', { class: 'muted' }, `${a} of ${b}`));
  const group = key => { const g = {}; tasks.forEach(t => { const k = key(t) || 'Unassigned'; (g[k] = g[k] || []).push(t); }); return Object.entries(g).map(([k, v]) => row(k, v.filter(t => t.col === 2).length, v.length)); };
  const s = summary();
  el.append(h('div', { class: 'card' }, h('h3', {}, 'Overall'), row('All tasks', tasks.filter(t => t.col === 2).length, tasks.length), row('Textbook sections', sectionsDone(), sectionCount), row('Exercises', s.done, s.total)),
    h('div', { class: 'card' }, h('h3', {}, 'By label'), ...group(t => t.tag)), h('div', { class: 'card' }, h('h3', {}, 'By assignee'), ...group(t => t.assignee)),
    h('div', { class: 'card' }, h('h3', {}, 'By status'), ...COLS.map((c, i) => row(c, tasks.filter(t => t.col === i).length, tasks.length))));
}
export function mount(el) {
  tasks = seed();
  const draw = () => {
    el.replaceChildren(h('div', { class: 'tabs' }, ...[['board', 'Board'], ['calendar', 'Calendar'], ['progress', 'Progress']].map(([k, n]) => h('button', { class: view === k ? 'on' : '', onclick: () => { view = k; save('taskview', k); draw(); } }, n))));
    (view === 'calendar' ? calendarView : view === 'progress' ? progressView : boardView)(el, draw);
  };
  draw();
}
