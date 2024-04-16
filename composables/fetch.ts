import { appendResponseHeader, H3Event } from 'h3'
const config = useRuntimeConfig()
export const fetchWithCookie = async (event: H3Event, url: string) => {
  /* Get the response from the server endpoint */
  console.log('token',config.token);
  const res = await $fetch.raw(url, {
    headers: {
      Authorization: `Bearer ${config.token}`
    }
  })
  /* Get the cookies from the response */
  const cookies = (res.headers.get('set-cookie') || '').split(',')
  /* Attach each cookie to our incoming Request */
  for (const cookie of cookies) {
    appendResponseHeader(event, 'set-cookie', cookie)
  }
  /* Return the data of the response */
  return res._data
}
