export default defineEventHandler((event) => {
  const authorization = getRequestHeader(event, 'Authorization')

  if (authorization) {
    event.context.authorization = true
  } else {
    event.context.authorization = false
  }

  if (getRequestURL(event).pathname.includes('/api/test')) {
    setHeader(event, 'authorization', 'my-custom-authorization-value')
  }
})
