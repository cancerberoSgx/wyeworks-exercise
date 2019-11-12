export interface Base {
  name: string
  description?: string
}

export interface Board extends Base {

}

export interface List extends Base {
  idBoard: string
}

export interface Card extends Base {
  idList: string
}

export interface Data {
  name: string
  year: number
}

export type Grouped = {
  [decade: number]: Data[]
}

export interface Config { 
  trello: { key: string, token: string }, 
  spotify: { id: string, secret: string } 
}

export interface ParseAndGroupOptions {
  /** string containing raw discography information */
  input: string
  /** time range to group albums in years. Default: 10 */
  lapse?: number
}

export interface MainOptions extends Config, ParseAndGroupOptions {
  artistName: string
}