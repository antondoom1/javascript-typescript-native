export const usersObj = {
  '0': 'Anton',
  '1': 'Dasha',
  '2': 'Dima',
  '3': 'Natasha'
}

let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
  {id: 101, name: 'Anton'},
  {id: 3232312, name: 'Dasha'},
  {id: 1212, name: 'Dima'},
  {id: 1, name: 'Natasha'}
]
// usersArray.find(u => u.id === 1)
// var usersCopy = [...usersArray.filter(), user]
// var usersArray = usersArray.filter(u => u.id !== user.id)