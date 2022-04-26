type UsersType = {
  [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
  users = {
    '101': {id: 101, name: 'Anton'},
    '3232312': {id: 3232312, name: 'Dasha'},
    '1212': {id: 1212, name: 'Dima'},
    '1': {id: 1, name: 'Natasha'}
  }
})

test('should select corresponding user from obj', () => {
  users['1'].name = 'Ekaterina'

  expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
  expect(users['1'].name).toBe('Ekaterina')
})

test('should delete corresponding user from obj', () => {
  delete users['1']

  expect(users['1']).toBeUndefined()
})