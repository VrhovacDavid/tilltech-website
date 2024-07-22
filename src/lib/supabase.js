import { createClient } from '@supabase/supabase-js'

 const supabase = createClient('https://xvdyfknuysnpbpiyifqb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZHlma251eXNucGJwaXlpZnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxNjI0NjksImV4cCI6MjAzNTczODQ2OX0.IltcOl1Fh2nG5dnmU5r9T3an8hNBhTaKUBmbtB_S5QI')

 export default supabase