create table user_data (
  user_id uuid references auth.users on delete cascade,
  key text, value jsonb, updated_at timestamptz default now(),
  primary key (user_id, key));
alter table user_data enable row level security;
create policy "own rows" on user_data for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


-- Team leaderboard (run this part once)
create table if not exists leaderboard (
  user_id uuid primary key references auth.users on delete cascade,
  name text, grade numeric, progress numeric, updated_at timestamptz default now());
alter table leaderboard enable row level security;
create policy "team can read" on leaderboard for select to authenticated using (true);
create policy "own row insert" on leaderboard for insert to authenticated with check (auth.uid() = user_id);
create policy "own row update" on leaderboard for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
