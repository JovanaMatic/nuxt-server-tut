const router = createRouter()

router.get('/nestedTest', defineEventHandler((event) => {
  return 'Test nested route'
}))

router.post('/nestedPost', defineEventHandler((event) => {
  return 'Test POST nested route'
}))

// create another path after nestedTest (http://localhost:3000/api/nested/nestedTest/category)
router.get('/nestedTest/category', defineEventHandler((event) => {
  return 'Category nested route'
}))

export default useBase('/api/nested', router.handler)