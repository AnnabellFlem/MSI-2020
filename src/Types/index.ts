export type JokesListType = {
  id: number
  name: string
  description: string
}[]

export type ModJokesListType = {
  id: number
  name: string
  description: string
  isFavourite: boolean
}[]

export type FavListType = Array<number>
