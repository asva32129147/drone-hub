import { h, bar } from './dom.js';
import * as auth from './auth.js';
import { pull, onSave, load, save } from './store.js';
import { mount as board } from './tasks.js';
import { mount as reader, printAll, sectionsDone, sectionCount, setFs } from './reader.js';
import { courseView, leaderboardView } from './course.js';
import { compute, letter, schedulePublish, fetchBoard, comboScore, displayName } from './grades.js';
const view = document.getElementById('view');
onSave(k => { if (['progress', 'first', 'reader', 'tasks', 'profile'].includes(k)) schedulePublish(); });
function account() {
  const email = h('input', { type: 'email', placeholder: 'Email', 'aria-label': 'Email' }), pw = h('input', { type: 'password', placeholder: 'Password', 'aria-label': 'Password' }), note = h('div', { class: 'muted' });
  const go = fn => async () => { const r = await fn(email.value.trim(), pw.value); if (r && r.error) note.textContent = r.error.message; else { await pull(); route(); } };
  view.append(h('h2', {}, 'Account'));
  if (auth.mode() === 'local') view.append(h('div', { class: 'banner' }, 'Local mode: no real login yet. Add your Supabase keys in config.js so teammates get secure accounts. See the README.'));
  if (auth.user()) {
    const name = h('input', { value: displayName(), maxlength: '40', 'aria-label': 'Display name' });
    view.append(h('div', { class: 'card' }, 'Signed in as ' + auth.user().email, h('div', { class: 'row' }, h('button', { class: 'ghost', onclick: () => auth.signOut().then(route) }, 'Sign out'))),
      h('div', { class: 'card' }, h('b', {}, 'Display name'), h('div', { class: 'muted' }, 'Shown on the leaderboard.'), h('div', { class: 'row' }, name, h('button', { onclick: () => { save('profile', { name: name.value.trim() }); note.textContent = 'Saved.'; } }, 'Save'), note)));
  } else view.append(h('div', { class: 'card row' }, email, pw, h('button', { onclick: go(auth.signIn) }, 'Sign in'), h('button', { class: 'ghost', onclick: go(auth.signUp) }, 'Create account'), note));
}
function dash() {
  const g = compute(), sd = sectionsDone(), rank = h('div', { class: 'big' }, '-'), rk = h('div', { class: 'muted' }, 'Open the leaderboard to update');
  view.append(h('h2', {}, 'Dashboard'), h('p', { class: 'muted' }, 'Course progress and drone build tasks'));
  view.append(h('div', { class: 'stats' },
    h('div', { class: 'card' }, h('b', {}, 'Textbook'), h('div', { class: 'big' }, `${sd} of ${sectionCount}`), bar(Math.round(100 * sd / sectionCount)), h('a', { href: '#/read' }, 'Continue reading')),
    h('div', { class: 'card' }, h('b', {}, 'Course grade'), h('div', { class: 'big' }, g.grade == null ? 'No grade yet' : `${letter(g.grade)} ${g.grade}%`), h('a', { href: '#/course' }, 'See the breakdown')),
    h('div', { class: 'card' }, h('b', {}, 'Team rank'), rank, rk, h('a', { href: '#/leaderboard' }, 'Open the leaderboard'))));
  fetchBoard().then(rows => { if (!rows) return; rows.sort((a, b) => comboScore(b) - comboScore(a)); const i = rows.findIndex(r => r.me); if (i >= 0) { rank.textContent = `${i + 1} of ${rows.length}`; rk.textContent = 'Based on grade and textbook progress'; } });
  const el = h('div'); view.append(h('h3', {}, 'Project board'), el); board(el);
}
function route() {
  const r = location.hash.slice(2) || 'dashboard'; view.replaceChildren();
  if (r !== 'read') setFs(false);
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#/' + r));
  document.getElementById('who').textContent = auth.user() ? displayName() : 'Not signed in';
  if (!auth.user() && r !== 'account') { location.hash = '#/account'; return; }
  if (r === 'account') account(); else if (r === 'read' || r.startsWith('chapter')) reader(view); else if (r === 'print') printAll(view); else if (r === 'course') courseView(view); else if (r === 'leaderboard') leaderboardView(view); else dash();
}
await auth.init(); await pull(); auth.onChange(route); addEventListener('hashchange', route); route();
