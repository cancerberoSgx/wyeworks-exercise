export interface Data {
  name: string;
  year: number;
}

export type Grouped = {
  [decade: number]: Data[];
};

interface Config{trello: {key:string,token:string},spotify: {key:string,token:string}}

export interface Options {
  /** string containing raw discography information */
  input: string;
  /** time range to group albums. Default: 10 */
  lapse?: number;
}
