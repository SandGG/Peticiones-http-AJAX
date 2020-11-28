const http = new XMLHttpRequest();
const get = document.querySelector('#get');
const res = document.querySelector('#res');

get.addEventListener('click', () => {   
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(http.responseText);
      writeData(datos);
    }
  }
  http.open('GET', '/static/inventario.json', true);
  http.send();
});

function writeData (datos) {
    res.innerHTML = 
    `<tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Categoria</th>
    </tr>`;
    for (let item of datos) {
        res.innerHTML += 
        `<tr>
            <th>${item.id}</th>
            <th>${item.nombre}</th>
            <th>${item.precio}</th>
            <th>${item.categoria}</th>
        </tr>`;
    }
}