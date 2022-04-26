const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = ages.filter(el => el > 90)

const oldAges = [100]

const courses = [
  {title: 'css', price: 110},
  {title: 'JS', price: 200},
  {title: 'REACT', price: 150}
]

const filteredCourses = courses.filter(el => el.price < 160)

console.log(filteredCourses)