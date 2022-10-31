# PokeAPI Challenge - Kruger :tw-1f432:
#### *Dicho reto se desarrolló con las siguientes tecnologías *
#### *- HTML*
#### *- CSS => para normalizar estilos en todos los navegadores se usó 'normalize.css'*y para los prefijos propietarios se usó la página 'autoprefixer.github.io'
#### *- Java Script Vainilla y Node JS => consumo de API por Fetch*
:tw-1f449: Link de la Aplicacion : 

[========]
## 1. FRONTEND :tw-2600:
##### Se tomo como base el Wiraframe enviado al correo para el diseño de la misma. En el Css se usó display grid para mostrar los pokemons en 3 columnas y para el header se usó flexbox para que los elementos esten uno a lado de otro.
## 2. BACKEND :tw-2734:
###### *LINK DE LA API :  https://my-json-server.typicode.com/Bryan-ITSQMET/API-poke-kruger*
nota : previamente a la construcción de la api se necesita tener instalado node js.
#####<BR>· Se utilizo un módulo llamado JSON SERVER *(https://github.com/typicode/json-server)*
##### · Para subir la API se usó la página MY JSON SERVER *(https://my-json-server.typicode.com/)*
###  <BR> 2.1 Instalación y Ejecución de JSON SERVER 
##### · Abrimos la terminal y nos ubicamos en el directorio del proyecto
##### · Ejecutamos la linea `npm install -g json-server`
##### · En nuestro proyecto creamos un archivo con la extension .json , el cual vendría a ser nuestra base de datos, va a contener nuestros endpoints con los datos que deseamos `db.json`
##### · Ejecutamos la linea `json-server -watch db.json` 
###  <BR> 2.2 Deploy de la API con MY JSON SERVER 
nota : previamente debemos haber subido nuestro archivo `db.json` a GitHub
##### · Visitamos el siguiente enlace https://my-json-server.typicode.com/'nombreUsuarioDeGit'/'nombreDelRepositorio' y lo reemplazamos con nuestros datos. En mi caso quedaría así https://my-json-server.typicode.com/Bryan-ITSQMET/API-poke-kruger

