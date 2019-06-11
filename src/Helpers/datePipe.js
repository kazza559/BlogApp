import moment from 'moment';

export default function convertTime(time) {
  console.log(moment(time))
  return moment(time).format('dddd MMMM Do YYYY')
}