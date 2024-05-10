import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lfsrsccugnhvozcqlirk.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmc3JzY2N1Z25odm96Y3FsaXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMDY3OTEsImV4cCI6MjAzMDg4Mjc5MX0.1fiH5YJerKrf0hdBAVDnQY4LBlVAIlOZTwZUetW3y54`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
