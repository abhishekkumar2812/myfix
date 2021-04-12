import { createClient } from "@supabase/supabase-js"

// retrieving environment variables
const supabaseUrl = 'https://mwsywseurfdlzdfkyjtr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTQ4OTk5NCwiZXhwIjoxOTMxMDY1OTk0fQ.KqqZuvUi4GoKLPubJ9oM1NimodUrK1nJRxOINEEpQ3w'

export const supabase = createClient(supabaseUrl, supabaseKey)