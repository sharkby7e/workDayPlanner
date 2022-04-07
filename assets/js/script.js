var today = moment()
var current = $('#currentDay')
var container = $('.container')

current.text(today.format("[Today is ]dddd, MMMM Do"))


var times = [9,10,11,12,13,14,15,16,17]
var memory = {}
var currentHour = today.format('H')

times.forEach(function(elm) {
  // using jquery to create a new row
  var newRow = $('<div>').addClass('row')

  // new elements for each row, with bootstrap classes
  var newHour = $("<div>").addClass('hour col')
  var newText = $("<input>").addClass('col-10')
  var newBtn = $("<button>").addClass('saveBtn col')
  newText.addClass(updateTxtColors(elm))

  // adding content to time and savebtn  
  var timeDisp = ""
  if(elm<12){
    timeDisp+= elm + 'am'
  }else if(elm==12){
    timeDisp+= elm + 'pm'
  }else{
    timeDisp+= (elm-12) + 'pm'
  }
  newHour.text(timeDisp)
  newBtn.text("💾")

  newBtn.on("click", function(){
    console.log(newText.val())
    saveToMemory(elm,newText.val())
  })


  newRow.append(newHour)
  newRow.append(newText)
  newRow.append(newBtn)
  container.append(newRow)
  
})

function saveToMemory(k,v) {
  memory[k] = v
  console.log(memory)
}
function updateTxtColors(t) {
  var colorClass = ""
    if(today.format('H')>t){
      colorClass+= "past"
    } else if(today.format('H')<t){
      colorClass+= "future"
    } else{
      colorClass+= "present"
    }
  return colorClass
}

