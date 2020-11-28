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
    `<tr class="table__tr">
        <td class="table__td">ID</td>
        <td class="table__td">Nombre</td>
        <td class="table__td">Precio</td>
        <td class="table__td">Categoria</td>
    </tr>`;
    for (let item of datos) {
        res.innerHTML += 
        `<tr class="table__tr">
            <td class="table__td">${item.id}</td>
            <td class="table__td">${item.nombre}</td>
            <td class="table__td">${item.precio}</td>
            <td class="table__td">${item.categoria}</td>
        </tr>`;
    }
}