import { cfg } from './config.js';
let client = null, current = null; const subs = [];
const fire = () => subs.forEach(f => f());
export const sb = () => client, user = () => current, mode = () => (client ? 'cloud' : 'local'), onChange = f => subs.push(f);
export async function init() {
  if (cfg.url && cfg.anonKey && window.supabase) {
    client = window.supabase.createClient(cfg.url, cfg.anonKey);
    current = (await client.auth.getSession()).data.session?.user || null;
    client.auth.onAuthStateChange((_e, s) => { current = s?.user || null; fire(); });
  } else { const n = localStorage.getItem('hub:localuser'); current = n ? { id: 'local-' + n, email: n } : null; }
}
export async function signIn(email, pw) {
  if (!client) { localStorage.setItem('hub:localuser', email); current = { id: 'local-' + email, email }; fire(); return {}; }
  return client.auth.signInWithPassword({ email, password: pw });
}
export async function signUp(email, pw) { return client ? client.auth.signUp({ email, password: pw }) : signIn(email, pw); }
export async function signOut() {
  if (client) await client.auth.signOut(); else { localStorage.removeItem('hub:localuser'); current = null; fire(); }
}
