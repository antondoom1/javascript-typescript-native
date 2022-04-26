test('should take old men older then 90', () => {
  const ages = [18, 20, 22, 1, 100, 90, 14]

  const oldAges = ages.filter(el => el > 90)

  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
  const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
  ]

  const filteredCourses = courses.filter(el => el.price < 160)

  expect(filteredCourses.length).toBe(2)
  expect(filteredCourses[0].title).toBe('CSS')
  expect(filteredCourses[1].title).toBe('REACT')
})

test('get only uncompleted tasks', () => {
  const tasks = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'SIlt', isDone: false},
    {id: 4, title: 'Sugar', isDone: true},
  ]

  const uncompletedTasks = tasks.filter(el => !el.isDone)

  expect(uncompletedTasks.length).toBe(2)
  expect(uncompletedTasks[0].id).toBe(1)
  expect(uncompletedTasks[1].id).toBe(3)
})