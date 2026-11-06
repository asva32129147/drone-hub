import { user, sb } from './auth.js';
let hook = () => {};
export const onSave = f => { hook = f; };
const k = key => `hub:${user()?.id || 'guest'}:${key}`;
export function load(key, dflt) { try { const v = localStorage.getItem(k(key)); return v ? JSON.parse(v) : dflt; } catch { return dflt; } }
export async function save(key, val) {
  try { localStorage.setItem(k(key), JSON.stringify(val)); } catch {}
  hook(key);
  const c = sb(), u = user();
  if (c && u) await c.from('user_data').upsert({ user_id: u.id, key, value: val, updated_at: new Date().toISOString() });
}
export async function pull() {
  const c = sb(), u = user(); if (!c || !u) return;
  const { data } = await c.from('user_data').select('key,value').eq('user_id', u.id);
  (data || []).forEach(r => localStorage.setItem(k(r.key), JSON.stringify(r.value)));
}
