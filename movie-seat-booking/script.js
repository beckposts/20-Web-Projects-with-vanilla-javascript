const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

let ticketPrice = +movieselect.value; // convert to num

// console.log(typeof ticketPrice);

// Update total & count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  //console.log(selectedSeats); this will give nodes

  // Now count the selected seats by calculating nodes
  const selectedSeatsCount = selectedSeats.length;
  //   console.log(selectedSeatsCount);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie Select Event
movieselect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
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
