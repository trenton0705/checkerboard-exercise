// Your JS goes here

function checkboard(){

  for (i=0; i<81; i++) {
    if (i % 2) {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.paddingBottom = '11.1%'
      div.style.width = '11.1%'
      div.style.float = 'left'
      div.style.background = 'linear-gradient(red, yellow)'
      div.style.backgroundAttachment = 'fixed'
    } else {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.paddingBottom = '11.1%'
      div.style.width = '11.1%'
      div.style.float = 'left'
      div.style.background = 'linear-gradient(blue, green)'
      div.style.backgroundAttachment = 'fixed'
    }
  }
}

checkboard()
