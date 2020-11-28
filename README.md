# Peticiones-http-AJAX

## Preparar para trabajar con peticiones http
1. Crear archivo package.json
```scriptshell
npm init -y
```
2. Instalar Express
```scriptshell
npm install express --save
```
3. Crear archivo index.js  
4. Copiar en el archivo index.js
```javascript
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.listen(3000);
```
5. Crear carpeta static y cargar con todo lo que quieras relacionado con el servidor
> Nota: Se debe hacer referencia a los archivos cargados al servidor desde la ruta '/static/archivo'

## Ejecución de la petición http
1. Iniciar index.js
```scriptshell
node index.js
```
2. Copiar en el navegador para ver el servidor
```
http://localhost:3000/static/otro.html
```
3. Para index colocar
```
http://localhost:3000/static/
```
