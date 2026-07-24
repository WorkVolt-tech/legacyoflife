/* =========================================================================
   Héritage de Vie — Supabase configuration
   -------------------------------------------------------------------------
   These two PUBLIC values are safe to expose in a public site because Row
   Level Security is enabled on every table and function this key can
   reach (the setup SQL did this). This is NOT limited to a single
   insert-only table — the anon key is used across the public site for:
     - INSERT: contact form, applications, reviews
     - SELECT (narrowly scoped by RLS): open/future booking slots, public
       reviews, and other read-only public data
     - RPC calls (via SECURITY DEFINER functions with their own internal
       checks): live chat send/receive, booking requests
   Nothing this key can do exposes another visitor's private data — each
   permission is scoped per-table/per-function, not a blanket grant.
   ========================================================================= */
window.HDV_CONFIG = {
  SUPABASE_URL: "https://jhsonyazkxilkquisutp.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoc29ueWF6a3hpbGtxdWlzdXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTYyOTEsImV4cCI6MjEwMDQzMjI5MX0._0BsnS6sMFH10MjBXdfyC4psgHE5yp85yEsKew0_4y4"
};
