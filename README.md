# ToDo List

Hola! este es el repositorio de mi proyecto todo list, es como su nombre lo indica una página hecha para hacer listas de tareas.

# Inicializar

para inicializar el proyecto, solo necesitas instalar las dependencias de la api y el front, el Api y la base de datos están ambas
en un contenedor de docker, expuesto en el puerto 3000, si quieres lanzar el contenedor solo es necesario hacerle el build y 
subirlo(docker-compose build) (docker-compose up) y el frontend solo necesita ser lanzado con Npm start

Además está alojada en esta instancia de amazon CS2 y a mi dominoio

# [http://todo.sebasdev.com/](http://todo.sebasdev.com/)

#Test

para probar los test es necesario cambiar la ruta de la base de datos(pues usa la del contenedor de docker para conectarse con la api)
la ruta de los test está definida también en el archivo database.js

# Proyecto

el proyecto tiene todos los requerimientos tanto necesarios como puntos extra de la prueba de torrens.

# Código

El código está hecho enteramente por Sebastián Vélez utilizando flujo de ramas en develop para cada servidor.

#Roles

Tiene roles usuario y administrador, solo el administrador puede asignar tareas a otros usuarios. todas las tareas deben ser aceptadas!


