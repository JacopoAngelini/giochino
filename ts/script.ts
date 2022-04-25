const container = <HTMLElement>document.querySelector('.container-fluid');


for (var i = 0; i < 14; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'row');
  div.setAttribute('id', 'row' + i);
  container.append(div);
  let row = <HTMLElement>document.querySelector('#row' + i);
  for (var b = 0; b < 14; b++) {
    row.innerHTML += '<div class="col p-3 fs-3 "><i class="bi bi-plus-lg"></i></div>'
  }
}




document.addEventListener('DOMContentLoaded', () => {
  let nodiI = document.querySelectorAll('i');

  nodiI.forEach(nodo => {
    nodo.addEventListener('click', () => {
      nodo.setAttribute('class', 'bi bi-plus-lg blue');
      console.log('sss');
    })
    nodo.addEventListener('dblclick', () => {
      nodo.setAttribute('class', 'bi bi-plus-lg red');
      console.log('sss');
    })
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'r') {
      location.reload();
    }
  });






})
