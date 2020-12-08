var $entryButton = document.getElementById('add-entry-button');

var $body = document.querySelector('body');

var $modalForm = document.querySelector('div[class="row position hidden"]');

$entryButton.addEventListener('click', function (event) {
  if($body.className === 'row' && $modalForm.className === 'row position hidden') {
    $body.className = 'row modal-open';
    $modalForm.className = 'row position';
    $entryButton.className = "hidden";
  }
})

var $form = document.getElementById("form");

$form.addEventListener("submit", function(event) {
  // event.preventDefault();
  if ($body.className === "row modal-open" && $modalForm.className === "row position") {
  $body.className = 'row';
  $modalForm.className = 'row position hidden';
  $entryButton.className = "";
  }

  var $dayOfWeek = document.getElementById('day-of-week').value;
  var $time = document.getElementById('time').value;
  var $entryDescription = document.getElementById('description').value;

  var entry = {
    dayOfWeek: $dayOfWeek,
    time: $time,
    entryDescription: $entryDescription
  }
  entries.push(entry);

  var entriesJSON = JSON.stringify(entries);
  localStorage.setItem('entries-local-storage', entriesJSON)

  $weekDayBoxes.className = 'row align-center height100';

  $form.reset();
})

var $weekDayBoxes = document.getElementById('week-day-boxes')

window.addEventListener("DOMContentLoaded", function(event) {
  if (entries.length !== 0) {
    $weekDayBoxes.className = 'row align-center height100';
  } else {
    $weekDayBoxes.className = 'row align-center height100 hidden';
  }
})


var dummyEntry = [
  {
    dayOfWeek: "Monday",
    time: "8:30am",
    entryDescription: "Breakfest"
  },
  {
    dayOfWeek: "Monday",
    time: "4:00pm",
    entryDescription: "Lunch"
  },
  {
    dayOfWeek: "Tuesday",
    time: "1:00pm",
    entryDescription: "Work"
  },
]

function renderEntries(day) {
  var h3 = document.createElement('h3');
    h3.textContent = 'Scheduled Events for ' + day;
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var thTime = document.createElement('th');
  var thDescritpion = document.createElement('th');
  thDescritpion.className = 'col-two'

  thTime.textContent = 'Time';
  thDescritpion.textContent = 'Descritpion';

  thead.appendChild(thTime);
  thead.appendChild(thDescritpion);
  table.appendChild(thead);
  table.appendChild(tbody);



    var tRow = document.createElement('tr');
    var tColOne = document.createElement('td');
    tColOne.className = 'col-one';
    tColOne.textContent = '8:30'
    var tColTwo = document.createElement('td');
    tColTwo.className = 'col-two';
    tColTwo.textContent = 'Eat dinner'

    tbody.appendChild(tRow);
    tRow.appendChild(tColOne);
    tRow.appendChild(tColTwo);

  return table

}
