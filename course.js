import { h, bar } from './dom.js';
import { compute, letter, fetchBoard, comboScore, publish, WEIGHTS } from './grades.js';
const fmt = g => g == null ? 'No grade yet' : g + '%';
export function courseView(el) {
  const g = compute();
  el.append(h('h2', {}, 'Course grade'), h('div', { class: 'card gradecard' }, h('div', { class: 'letter' }, letter(g.grade)), h('div', {}, h('div', { class: 'big' }, fmt(g.grade)), h('div', { class: 'muted' }, 'Weighted average of the work you have attempted so far'))));
  const t = h('table', { class: 'tbl' }, h('tr', {}, ...['Category', 'Weight', 'Correct', 'Attempted', 'Total', 'Score'].map(x => h('th', {}, x))));
  Object.values(g.rows).forEach(r => t.append(h('tr', {}, h('td', {}, r.name), h('td', {}, r.weight + '%'), h('td', {}, String(r.got)), h('td', {}, String(r.tried)), h('td', {}, String(r.total)), h('td', {}, r.score == null ? 'Not started' : Math.round(r.score) + '%', r.score == null ? '' : bar(Math.round(r.score))))));
  el.append(h('div', { class: 'card' }, t));
  el.append(h('h3', {}, 'How grading works'), h('div', { class: 'card' }, h('ul', {},
    h('li', {}, 'Your grade averages the categories you have started, weighted as in the table.'),
    h('li', {}, 'Unit quizzes and the chapter test count only your first answer to each question.'),
    h('li', {}, 'Checkpoints and assignments count when you eventually get them right, so you can learn from mistakes.'),
    h('li', {}, 'Project tasks count when they reach Done on the board.'),
    h('li', {}, 'Scale: A 90 and up, B 80, C 70, D 60, F below 60.'))));
}
export async function leaderboardView(el) {
  el.append(h('h2', {}, 'Leaderboard'), h('p', { class: 'muted' }, 'Ranked by half your course grade and half your textbook progress.'));
  const box = h('div', { class: 'card' }, 'Loading...'); el.append(box, h('p', { class: 'muted' }, 'This board runs on the honor system: scores are calculated in each person\'s browser.'));
  await publish(); const rows = await fetchBoard();
  if (!rows) { box.textContent = 'The leaderboard is not set up yet. Run the leaderboard SQL from schema.sql in Supabase.'; return; }
  rows.sort((a, b) => comboScore(b) - comboScore(a));
  const t = h('table', { class: 'tbl' }, h('tr', {}, ...['Rank', 'Name', 'Grade', 'Textbook', 'Score'].map(x => h('th', {}, x))));
  rows.forEach((r, i) => t.append(h('tr', { class: r.me ? 'me' : '' }, h('td', {}, String(i + 1)), h('td', {}, r.name + (r.me ? ' (you)' : '')), h('td', {}, r.grade == null ? '-' : `${letter(r.grade)} ${r.grade}%`), h('td', {}, `${r.progress ?? 0}%`, bar(r.progress ?? 0)), h('td', {}, String(Math.round(10 * comboScore(r)) / 10)))));
  box.replaceChildren(t);
}
export { WEIGHTS };
