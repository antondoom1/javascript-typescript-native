type UserType = {
  name: string
  age: number
  address: { title: string }
}

const increaseAge = (u: UserType) => {
  u.age = u.age + 1
}

test('reference type test', () => {
  let user: UserType = {
    name: 'Anton',
    age: 29,
    address: {
      title: 'Minsk'
    }
  }

  increaseAge(user)

  expect(user.age).toBe(30)

  const superman = user

  superman.age = 1000

  expect(user.age).toBe(1000)
})

test('array reference test', () => {
  let users = [
    {
      name: 'Anton',
      age: 29
    },
    {
      name: 'Anton',
      age: 29
    }
  ]

  let admins = users

  admins.push({name: 'Bandyugan', age: 10})

  expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
  let usersCount = 100

  let adminsCount = usersCount

  adminsCount = adminsCount + 1

  expect(adminsCount).toEqual(101)
})

test('reference type test', () => {
  const address = {
    title: 'Minsk'
  }

  let user: UserType = {
    name: 'Anton',
    age: 29,
    address: address
  }

  let addr = user.address

  let user2: UserType = {
    name: 'Dasha',
    age: 21,
    address: address
  }

  address.title = 'Minsk City'

  expect(user.address).toBe(user2.address)
  expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', () => {
  const address = {
    title: 'Minsk'
  }

  let user: UserType = {
    name: 'Anton',
    age: 29,
    address: address
  }

  let user2: UserType = {
    name: 'Dasha',
    age: 21,
    address: address
  }

  const users = [user, user2, {name: 'Natasha', age: 25, address: address}]

  const admins = [user, user2]

  admins[0].name = 'Dmitry'

  expect(users[0].name).toBe('Dmitry')
  expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {

  const letters = ['c', 'd', 'a', 'z', 'e']

  letters.sort()

  expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])

})