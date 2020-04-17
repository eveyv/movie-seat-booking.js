const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
//could also use parseInt() above

//save movie index + price to local storage
setMovieData(movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const seatsIndex = [...selectedSeats].map(seat => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice
}

//pull data from local localStorage
populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
}

movieSelect.addEventListener('change', event => {
  ticketPrice = +event.target.value;
  setMovieData(event.target.selectedIndex, event.target.value);
  updateSelectedCount();
});


container.addEventListener('click', event => {
  if(
    event.target.classList.contains('seat') && !event.target.classList.contains('occupied')
  ) {
    event.target.classList.toggle('selected');


    updateSelectedCount();
  }
});
