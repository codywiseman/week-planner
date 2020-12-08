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
  event.preventDefault();
  if ($body.className === "row modal-open" && $modalForm.className === "row position") {
  $body.className = 'row';
  $modalForm.className = 'row position hidden';
  $entryButton.className = "";
  }
  var $dayOfWeek = document.getElementById('day-of-week')
  var $time = document.getElementById('time')
  var $entryDescription = document.getElementById('description')
  $form.reset();
})

var $weekDayBoxes = document.getElementById('week-day-boxes')


window.addEventListener("DOMContentLoaded", function(event) {
  if (previousEntriesJSON) {
    $weekDayBoxes.className = 'row align-center height100';
  }
})
