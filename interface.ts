export interface IJson {
  name : string
  contType : string
  lv : string | number
  src : string
  position : string | string[]
  time : string | string[]
  endTime : string,
  endPosition? : string
  waiting? : number
}