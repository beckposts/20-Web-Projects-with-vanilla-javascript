const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

let ticketPrice = +movieselect.value; // convert to num

// console.log(typeof ticketPrice);

// Save slected movie & ticket price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}
// Update total & count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  //console.log(selectedSeats); this will give nodes

  // Save Selected Seats to localstorage
  //  1. Copy selected seats into array
  //  2. Map through array
  //  3. Return a new array indexes

  // Copy everything of selectedSeats seatIndex array
  const seatIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
  });

  // Save to local storage
  // Stringify because seatIndex is an array
  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

  // console.log(seatIndex);

  // Now count the selected seats by calculating nodes
  const selectedSeatsCount = selectedSeats.length;
  //   console.log(selectedSeatsCount);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie Select Event
movieselect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  // console.log(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat Click Event
container.addEventListener('click', (e) => {
  //   console.log(e.target);
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
