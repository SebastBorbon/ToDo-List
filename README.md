# ToDo List

Hola! este es el repositorio de mi proyecto todo list, es como su nombre lo indica una página hecha para hacer listas de tareas.

# Inicializar

para inicializar el proyecto, solo necesitas instalar las dependencias de la api y el front, el Api y la base de datos están ambas
en un contenedor de docker, expuesto en el puerto 3000, si quieres lanzar el contenedor solo es necesario hacerle el build y
subirlo(docker-compose build) (docker-compose up) y el frontend solo necesita ser lanzado con Npm start

Además está alojada en esta instancia de amazon CS2 y a mi dominoio

# [http://todo.sebasdev.com/](http://todo.sebasdev.com/)

# Test

Cuenta con test unitarios Http, hechos con mocha, para probar los test es necesario cambiar la ruta de la base de datos(pues usa la del contenedor de docker para conectarse con la api) y lanzarlos en la Api con npm test la ruta de los test está definida también en el archivo database.js

# Proyecto

el proyecto tiene todos los requerimientos tanto necesarios como puntos extra de la prueba de torrens. si tienen alguna duda de cómo están implementados tiene tags en todos los puntos

# Código

El código está hecho enteramente por Sebastián Vélez utilizando flujo de ramas en develop para cada servidor.
las validaciones están hechas con JOI los test con mochaHttp la DB con mongo, el token con JWT.

en el front está todo el apartado visual con styled components, Element Ui, redux devTools,toastify, y react mobile para el manejo de pantalla

# Roles

Tiene roles usuario y administrador, solo el administrador puede asignar tareas a otros usuarios y ver la lista de usuarios y tareas. todas las tareas deben ser aceptadas!

si tienen cualquier duda no duden contactarme!
