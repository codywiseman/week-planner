var $entryButton = document.getElementById('add-entry-button');

var $body = document.querySelector('body')

var $modalForm = document.querySelector('div[class="row position"]')
console.log($modalForm)

$entryButton.addEventListener('click', function (event) {
  if($body.className === 'row' && $modalForm.className === 'row position hidden') {
    $body.className = 'row modal-open';
    $modalForm.className = 'row position';
  }
})
