import {
  addNewBooksToUser,
  makeHairstyle,
  moveUser,
  moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
  upgradeUserLaptop,
  UserType,
  UserWithBooksType,
  UserWithLaptopType, WithCompaniesType
} from './10_01'

test('reference type test', () => {
  let user: UserType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk'
    }
  }

  const awesomeUser = makeHairstyle(user, 2)

  user = awesomeUser

  expect(user.hair).toBe(15)
  expect(awesomeUser.hair).toBe(15)
  expect(awesomeUser.address).toBe(user.address)
})
test('change address', () => {
  let user: UserWithLaptopType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    }
  }

  const movedUser = moveUser(user, 'Kiev')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.city).toBe('Kiev')
})
test('upgrade laptop to macbook', () => {
  let user: UserWithLaptopType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    }
  }

  const userCopy = upgradeUserLaptop(user, 'Macbook')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).not.toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(userCopy.laptop.title).toBe('Macbook')
  expect(user.laptop.title).toBe('ZenBook')
})
test('upgrade laptop to macbook', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = moveUserToOtherHouse(user, 99)

  expect(user).not.toBe(userCopy)
  expect(user.books).toBe(userCopy.books)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).not.toBe(userCopy.address)
  expect(userCopy.address.house).toBe(99)
})
test('add new books to user', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = addNewBooksToUser(user, 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[4]).toBe('ts')
  expect(user.books.length).toBe(4)
})
test('update js to ts', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = updateBook(user, 'js', 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('ts')
})
test('remove js book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = removeBook(user, 'js')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('react')
})
test('update company', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Anton',
    hair: 30,
    address: {
      city: 'Minsk',
      house: 9
    },
    laptop: {
      title: 'ZenBook'
    },
    companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
  }

  const userCopy = updateCompanyTitle(user, 1, 'EPAM')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.companies).not.toBe(userCopy.companies)
  expect(userCopy.companies[0].title).toBe('EPAM')
})
test('update company', () => {
  let companies = {
    'Anton': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
    'Dima': [{id: 2, title: 'IT-INCUBATOR'}]
  }

  const copy = updateCompanyTitle2(companies, 'Anton', 1, 'EPAM')

  expect(copy['Anton']).not.toBe(companies['Anton'])
  expect(copy['Dima']).toBe(companies['Dima'])
  expect(copy['Anton'][0].title).toBe('EPAM')
})