/* =========================================================================
   Héritage de Vie — Supabase configuration
   -------------------------------------------------------------------------
   These two PUBLIC values are safe to expose in a public site because Row
   Level Security is enabled (the setup SQL did this). The anon key can only
   INSERT into the submissions table — it cannot read, edit, or delete.
   ========================================================================= */
window.HDV_CONFIG = {
  SUPABASE_URL: "https://nncnshrgrwgdbcrdebry.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uY25zaHJncndnZGJjcmRlYnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MzMyODksImV4cCI6MjA5ODAwOTI4OX0.LRTUqtVoHrG6A1Kcm5LeJBt6A9yxB6OEs43cW7jHhCY"
};
