import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://klfnwkhqkuoptbjfdvbx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZm53a2hxa3VvcHRiamZkdmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NzMyMDgsImV4cCI6MjA3MjE0OTIwOH0.2RLFFF8jzvnToeN2WnNi8pOUT9Hmw_n1wJFL-kWVp0M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;