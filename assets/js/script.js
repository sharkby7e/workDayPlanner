var today = moment()
var current = $('#currentDay')
var container = $('.container')

current.text(today.format("[Today is ]dddd, MMMM Do"))


var newRow = $('<div>').addClass('row')


var newHour = $("<div>").addClass('hour col')
var newText = $("<div>").addClass('present col-10 ')
var newBtn = $("<div>").addClass('saveBtn col ')
container.append(newRow)
newHour.text("9am")
newRow.append(newHour)
newRow.append(newText)
newRow.append(newBtn)

