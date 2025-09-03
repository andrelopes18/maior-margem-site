// /public/config.js
window.CONFIG = {
  // === Supabase
  SUPABASE_URL: "https://maprezivxfitqyifmepq.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hcHJleml2eGZpdHF5aWZtZXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTc4OTcsImV4cCI6MjA2OTE5Mzg5N30.qz8iMEZY0mkh5QgeBKh8lYLITRjcAADbApJkGFwACJI",

  // ⚠️ HOMOLOGAÇÃO: Service Role exposta de propósito (NÃO usar em prod)
  SERVICE_ROLE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hcHJleml2eGZpdHF5aWZtZXBxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzYxNzg5NywiZXhwIjoyMDY5MTkzODk3fQ.-bbj41Or2v_gjd7jPpWE3OdOcbfZkwtNdp0QLpBLfJU",
  
  // === Mercado Pago (TESTE)
  MP_PUBLIC_KEY:  "TEST-bb9637c6-36a6-46f4-8856-e9f1f050fdaa",
  MP_ACCESS_TOKEN:"TEST-2191939829806436-090219-aa0436ab9ff7132ce2044654d4bbb832-82995267",
  
  EDGE_FUNCTION_NAME: "mercado-pago-transparent",

  // === URLs do site
  SITE_URL:   "https://maior-margem-site.vercel.app",
  RETURN_URL: "https://maior-margem-site.vercel.app/retorno.html",

  // Rótulos
  PLAN_LABELS: { trial:"Trial", basico:"Básico", intermediario:"Intermediário", premium:"Premium" }
  
  // Plano em REAIS x100 (sem vírgula). Ex.: R$ 29,90 => 2990
  PLANO_KEY: "basic",
  PLANO_NAME: "Básico",
  PLANO_AMOUNT_CENTS: 2990// Plano em REAIS x100 (sem vírgula). Ex.: R$ 29,90 => 2990
  PLANO_KEY: "basic",
  PLANO_NAME: "Básico",
  PLANO_AMOUNT_CENTS: 2990
};
