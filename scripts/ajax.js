$('#search').on('click', getUsers);

function getUsers() {
  $.ajax({
    url: '/static/users.json',
    success: function(respuesta) {
        searchUser(respuesta)
    }
  });
}

function searchUser (datos) {
    $(document).ready(function(){
		$.each(datos, function(i,item){
		if ($('#nameUser').val() == item.user && $('#passUser').val() == item.pass) {
            writeData(item);
            return false;
        } else {
            $('#res').html('<p> Data not found </p>');
        }
		})
	})
}

function writeData (datos) {
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
    $('#res').html(text);
}

function cleanInputs () {
    let input = document.getElementsByClassName('form__input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
