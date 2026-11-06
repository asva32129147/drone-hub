create table user_data (
  user_id uuid references auth.users on delete cascade,
  key text, value jsonb, updated_at timestamptz default now(),
  primary key (user_id, key));
alter table user_data enable row level security;
create policy "own rows" on user_data for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

