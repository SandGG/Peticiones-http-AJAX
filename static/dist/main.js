(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$('#search').on('click', getUsers);

function getUsers() {
  $.ajax({
    url: '/static/users.json',
    success: function success(respuesta) {
      searchUser(respuesta);
    }
  });
}

function searchUser(datos) {
  $(document).ready(function () {
    $.each(datos, function (i, item) {
      if ($('#nameUser').val() == item.user && $('#passUser').val() == item.pass) {
        writeData(item);
        return false;
      } else {
        $('#res').html('<p> Data not found </p>');
      }
    });
  });
}

function writeData(datos) {
  cleanInputs();
  var text = "<table class=\"table\">\n                    <tr class=\"table__tr\">\n                        <td class=\"table__td\">ID</td>\n                        <td class=\"table__td\">User</td>\n                        <td class=\"table__td\">Password</td>\n                        <td class=\"table__td\">Name</td>\n                        <td class=\"table__td\">Description</td>\n                    </tr>\n                    <tr class=\"table__tr\">\n                        <td class=\"table__td\">".concat(datos.id, "</td>\n                        <td class=\"table__td\">").concat(datos.user, "</td>\n                        <td class=\"table__td\">").concat(datos.pass, "</td>\n                        <td class=\"table__td\">").concat(datos.name, "</td>\n                        <td class=\"table__td\">").concat(datos.descrip, "</td>\n                    </tr>\n                </table>");
  $('#res').html(text);
}

function cleanInputs() {
  var input = document.getElementsByClassName('form__input');

  for (var i = 0; i < input.length; i++) {
    input[i].value = '';
  }
}

},{}]},{},[1]);
