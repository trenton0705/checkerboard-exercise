// Your JS goes here

function checkboard(){
  for (i=0; i<81; i++) {
    var color1 = Math.floor(Math.random()*256)
    var color2 = Math.floor(Math.random()*256)
    var color3 = Math.floor(Math.random()*256)
    var div = document.createElement('div')
    document.body.appendChild(div)
    div.style.paddingBottom = '11.1%'
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.backgroundColor = 'rgb' + '(' + color1 + ', ' + color2 + ', ' + color3 + ')'
  }
}

checkboard()
