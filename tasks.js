import { h, bar } from './dom.js';
import { load, save } from './store.js';
import { chapter } from './chapter1.js';
const COLS = ['To do', 'Doing', 'Done'];
function seed() {
  let t = load('tasks', null);
  if (!t) { t = chapter.projectTasks.map((title, i) => ({ id: 'p' + i, title, col: 0, tag: 'Chapter 1' })); save('tasks', t); }
  return t;
}
export function mount(el) {
  const tasks = seed(), put = () => { save('tasks', tasks); draw(); };
  const draw = () => {
    el.replaceChildren();
    const done = tasks.filter(x => x.col === 2).length, pct = tasks.length ? Math.round(100 * done / tasks.length) : 0;
    el.append(h('div', { class: 'card' }, h('b', {}, `Tasks: ${done} of ${tasks.length} done`), bar(pct)));
    const add = h('input', { placeholder: 'New task', 'aria-label': 'New task' });
    el.append(h('div', { class: 'row' }, add, h('button', { onclick: () => { if (add.value.trim()) { tasks.push({ id: 't' + Date.now(), title: add.value.trim(), col: 0, tag: 'Mine' }); put(); } } }, 'Add task')));
    const board = h('div', { class: 'board' });
    COLS.forEach((name, ci) => {
      const col = h('div', { class: 'col' }, h('b', {}, name));
      col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); });
      col.addEventListener('dragleave', () => col.classList.remove('over'));
      col.addEventListener('drop', e => { e.preventDefault(); const t = tasks.find(x => x.id === e.dataTransfer.getData('text')); if (t) { t.col = ci; put(); } });
      tasks.filter(x => x.col === ci).forEach(t => {
        const card = h('div', { class: 'task', draggable: 'true' }, h('div', { class: 'tag' }, t.tag), h('div', {}, t.title),
          h('div', { class: 'row' },
            ci > 0 ? h('button', { class: 'ghost', onclick: () => { t.col--; put(); } }, 'Back') : '',
            ci < 2 ? h('button', { class: 'ghost', onclick: () => { t.col++; put(); } }, 'Next') : '',
            h('button', { class: 'ghost', onclick: () => { const n = prompt('Edit task', t.title); if (n) { t.title = n; put(); } } }, 'Edit'),
            h('button', { class: 'ghost', onclick: () => { tasks.splice(tasks.indexOf(t), 1); put(); } }, 'Delete')));
        card.addEventListener('dragstart', e => e.dataTransfer.setData('text', t.id));
        col.append(card);
      });
      board.append(col);
    });
    el.append(board);
  };
  draw();
}
