

var entries = []

var previousEntriesJSON = localStorage.getItem('entries-local-storage')

if(previousEntriesJSON !== null) {
  entries = (JSON.parse(previousEntriesJSON))
}

window.addEventListener('beforeunload', function(event){
  var entriesJSON = JSON.stringify(entries);
  localStorage.setItem('entries-local-storage', entriesJSON)
})
