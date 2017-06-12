// Your JS goes here

function checkboard(){
  for (i=0; i<81; i++) {
    if (i % 2) {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.paddingBottom = '11.1%'
      div.style.width = '11.1%'
      div.style.float = 'left'
      div.style.backgroundColor = 'black'
    } else {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.paddingBottom = '11.1%'
      div.style.width = '11.1%'
      div.style.float = 'left'
      div.style.backgroundColor = 'red'
    }
  }
}

checkboard()
