var p = document.getElementsByTagName('p')

p[0].innerHTML = `Manipulado via JS!`

for(var i = 0; i < 11; i++) {
    p[0].innerHTML = p[0].innerHTML + '  suri  '
}