const http = new XMLHttpRequest();
const search = document.querySelector('#search');
const res = document.querySelector('#res');

search.addEventListener('click', () => {   
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(http.responseText);
            searchUser(datos);
        }
    }
    http.open('GET', '/static/users.json', true);
    http.send();
});

function searchUser (datos) {
    let nameUser = document.querySelector('#nameUser').value;
    let passUser = document.querySelector('#passUser').value;
    for (let item of datos) {
        if (nameUser == item.user && passUser == item.pass) {
            return writeData(item)
        } else {
            res.innerHTML = '<p> Data not found </p>';
        }
    } 
}

const writeData = (datos) => {
    cleanInputs();

    let text = `<table class="table">
                    <tr class="table__tr">
                        <td class="table__td">ID</td>
                        <td class="table__td">User</td>
                        <td class="table__td">Password</td>
                        <td class="table__td">Name</td>
                        <td class="table__td">Description</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="table__td">${datos.id}</td>
                        <td class="table__td">${datos.user}</td>
                        <td class="table__td">${datos.pass}</td>
                        <td class="table__td">${datos.name}</td>
                        <td class="table__td">${datos.descrip}</td>
                    </tr>
                </table>`;   
    return res.innerHTML = text;
}

function cleanInputs () {
    let input = document.getElementsByClassName('form__input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
