import moment from 'moment';

export default function convertTime(time) {
  return moment(time).format('dddd MMMM Do YYYY')
}