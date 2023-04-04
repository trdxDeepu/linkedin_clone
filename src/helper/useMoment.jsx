import moment from "moment/moment"

export const getCurrentTimeStamp = (timeformat) => {
   return moment().format(timeformat)
}