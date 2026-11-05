create table user_data (
  user_id uuid references auth.users on delete cascade,
  key text, value jsonb, updated_at timestamptz default now(),
  primary key (user_id, key));
alter table user_data enable row level security;
create policy "own rows" on user_data for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- AI grading usage cap (run this part once if you already ran the section above)
create table if not exists grade_usage (
  user_id uuid references auth.users on delete cascade,
  day date, n int default 0,
  primary key (user_id, day));
alter table grade_usage enable row level security;
