document.addEventListener('DOMContentLoaded', (event) => {
  storage = window.localStorage
  lines = storage.getItem('lines')
  lines = JSON.parse(lines)
  display_gender_chart(lines, 'gender_distribution');
  display_type_of_contract(lines, 'type_of_contracts');
  display_type_of_categories(lines, 'type_of_categories');
})
