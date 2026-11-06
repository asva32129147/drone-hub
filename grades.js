import { chapter } from './chapter1.js';
import { load } from './store.js';
import { sectionsDone, sectionCount } from './reader.js';
import { sb, user } from './auth.js';
// name, weight in percent. Edit these to change the grading scheme.
export const WEIGHTS = { checkpoints: ['Checkpoints', 10], quizzes: ['Unit quizzes', 20], assignments: ['Assignments', 25], test: ['Chapter test', 35], project: ['Project tasks', 10] };
const cat = g => g === 'Checkpoints' ? 'checkpoints' : g.startsWith('Unit Quiz') ? 'quizzes' : g === 'Chapter Test' ? 'test' : g.startsWith('Assignment') ? 'assignments' : null;
export const letter = g => g == null ? '-' : g >= 90 ? 'A' : g >= 80 ? 'B' : g >= 70 ? 'C' : g >= 60 ? 'D' : 'F';
export function compute() {
  const p = load('progress', {}), f = load('first', {}), tasks = load('tasks', []).filter(t => /^Chapter/.test(t.tag));
  const rows = Object.fromEntries(Object.entries(WEIGHTS).map(([k, [name, weight]]) => [k, { name, weight, got: 0, tried: 0, total: 0 }]));
  chapter.items.forEach(it => {
    const k = cat(it.group); if (!k) return; const r = rows[k]; r.total++;
    if (k === 'quizzes' || k === 'test') { if (it.id in f) { r.tried++; if (f[it.id]) r.got++; } }
    else if (p[it.id] || it.id in f) { r.tried++; if (p[it.id]) r.got++; }
  });
  const pr = rows.project; pr.total = tasks.length; tasks.forEach(t => { if (t.col >= 1) { pr.tried++; if (t.col === 2) pr.got++; } });
  let num = 0, den = 0;
  Object.values(rows).forEach(r => { r.score = r.tried ? 100 * r.got / r.tried : null; if (r.score != null) { num += r.weight * r.score; den += r.weight; } });
  const grade = den ? Math.round(10 * num / den) / 10 : null, progress = sectionCount ? Math.round(100 * sectionsDone() / sectionCount) : 0;
  return { rows, grade, progress };
}
export const comboScore = r => 0.5 * (r.grade ?? 0) + 0.5 * (r.progress ?? 0);
export const displayName = () => load('profile', {}).name || (user()?.email || 'You').split('@')[0];
let timer; export function schedulePublish() { clearTimeout(timer); timer = setTimeout(publish, 1500); }
export async function publish() {
  const c = sb(), u = user(); if (!c || !u) return; const g = compute();
  await c.from('leaderboard').upsert({ user_id: u.id, name: displayName().slice(0, 40), grade: g.grade, progress: g.progress, updated_at: new Date().toISOString() });
}
export async function fetchBoard() {
  const c = sb(), g = compute();
  if (!c) return [{ me: true, name: displayName(), grade: g.grade, progress: g.progress }];
  const { data, error } = await c.from('leaderboard').select('user_id,name,grade,progress,updated_at');
  return error ? null : data.map(r => ({ ...r, me: r.user_id === user().id }));
}
