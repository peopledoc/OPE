/* eslint-disable */
document.addEventListener('DOMContentLoaded', (event) => {
  storage = window.localStorage
  lines = storage.getItem('lines')
  lines = JSON.parse(lines)
  display_gender_chart(lines, 'gender_distribution');
})
