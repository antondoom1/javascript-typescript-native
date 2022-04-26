import {GovernmentBuildingsType, HouseType} from '../02/02_02'

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map(el => el.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
  return houses.map(el => el.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
  return houses.map(el => `Hello guys from ${el.address.street.title}`)
}