// Your JS goes here


function checkboard(){
  for (i=0; i<81; i++) {
    var div = document.createElement('div')
    document.body.appendChild(div)
    div.style.paddingBottom = '11.1%'
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.backgroundColor = randColor()
  }
}

function randColor() {
  var color1 = Math.floor(Math.random()*256)
  var color2 = Math.floor(Math.random()*256)
  var color3 = Math.floor(Math.random()*256)
  return 'rgb' + '(' + color1 + ', ' + color2 + ', ' + color3 + ')'
}

function shuffle() {
  var div = document.getElementsByTagName('div')
  for (i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = randColor()
  }
}

checkboard()

setInterval(function() {
  shuffle()
}, 2000);
