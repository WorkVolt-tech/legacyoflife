/* =========================================================================
   Héritage de Vie — Supabase configuration
   -------------------------------------------------------------------------
   Paste your two PUBLIC Supabase values below. Both are safe to expose in a
   public site AS LONG AS Row Level Security is enabled (the setup SQL does
   this for you). The anon key can only INSERT into the submissions table —
   it cannot read, edit, or delete anything.

   Find these in Supabase:  Project Settings → API
     • Project URL   → SUPABASE_URL
     • anon / public → SUPABASE_ANON_KEY
   ========================================================================= */
window.HDV_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT-ref.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-PUBLIC-ANON-KEY"
};
