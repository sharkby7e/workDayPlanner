var today = moment()
var current = $('#currentDay')
var container = $('.container')

current.text(today.format("[Today is ]dddd, MMMM Do"))


var times = [9,10,11,12,13,14,15,16,17]
var memory = {}

times.forEach(function(elm) {
  // using jquery to create a new row
  var newRow = $('<div>').addClass('row')

  // new elements for each row, with bootstrap classes
  var newHour = $("<div>").addClass('hour col')
  var newText = $("<input>").addClass('col-10')
  var newBtn = $("<button>").addClass('saveBtn col')
  newText.addClass(updateTxtColors(elm))

  // adding content to columns 
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
  newText.val(writeFromMemory(elm))

//save button functionality
  newBtn.on("click", function(){
    console.log("click")
    saveToMemory(elm,newText.val())
  })

// adding all new elements to page
  newRow.append(newHour)
  newRow.append(newText)
  newRow.append(newBtn)
  container.append(newRow)
  
})

// saves content of calendar to localStorage
function saveToMemory(k,v) {
  memory[k] = v
  localStorage.setItem("mem",JSON.stringify(memory))
}

//updates colors of columns based on moment
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

// fills in content from localStorage
function writeFromMemory(t){
  var obj = JSON.parse(localStorage.getItem("mem"))
  if(obj ===null){
    return
  }
  var content= ''
  if(!obj[t]){
    content += "free"
  } else{
    content+= obj[t]
  }
  return content
}

