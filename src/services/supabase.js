import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tpeffyokunsqnposkiap.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZWZmeW9rdW5zcW5wb3NraWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMDQyMDMsImV4cCI6MjA0MTU4MDIwM30.YHb68ip6wfBKHxNHjJwMx48IIwWbqYzao4iSEuoW0dM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
