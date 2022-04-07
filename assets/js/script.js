var today = moment()
var current = $('#currentDay')
var container = $('.container')

current.text(today.format("[Today is ]dddd, MMMM Do"))


var times = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']

times.forEach(function(elm) {
  var newRow = $('<div>').addClass('row')
  var newHour = $("<div>").addClass('hour col')
  var newText = $("<input>").addClass('present col-10')
  var newBtn = $("<button>").addClass('saveBtn col')
  container.append(newRow)
  newHour.text(elm)
  newBtn.text("💾")
  newBtn.on("click", function() {
    console.log("click")
    console.log(newText.val())
  })
  newRow.append(newHour)
  newRow.append(newText)
  newRow.append(newBtn)
})
// var newHour = $("<div>").addClass('hour col')
// var newText = $("<input>").addClass('present col-10')
// var newBtn = $("<button>").addClass('saveBtn col')
// container.append(newRow)
// newHour.text("9am")
// newBtn.text("💾")
// newBtn.on("click", function() {
//   console.log("click")
// })
// newRow.append(newHour)
// newRow.append(newText)
// newRow.append(newBtn)
//
