import { serverSupabaseClient } from '#supabase/server'
export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const searchTerm = getQuery(event).search
  console.log('query', searchTerm);
  
  const { data } = await client.from('post').select('*').like('content', `%${searchTerm}%`)
  return { searchData: data }
})
