import {CityType, GovernmentBuildingsType} from '../02/02_02'

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(el => el.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
  return buildings.filter(el => el.staffCount > number)
}