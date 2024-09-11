
document.addEventListener("DOMContentLoaded", function() {
  // Create a datalist element
  const dataList = document.createElement('datalist');
  dataList.id = 'movie-options';

  // List of movie options
  const movies = [
      'P.K',
      'Bird Box',
      'YOU',
      'Ramaiya Vastavaiya',
      'Inception',
      'Haseen Dilruba',
      'Money Heist',
      'Stranger Things'
  ];

  // Create option elements for each movie and append them to the datalist
  movies.forEach(movie => {
      const option = document.createElement('option');
      option.value = movie;
      dataList.appendChild(option);
  });

  // Append the datalist to the body
  document.body.appendChild(dataList);

  // Reference the datalist from the search input
  const searchInput = document.querySelector('.search-input');
  searchInput.setAttribute('list', 'movie-options');
});

