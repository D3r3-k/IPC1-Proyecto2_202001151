# Reporte Proyecto 2
|             Nombre              |  Carnet   |            Axuliar             |
| :-----------------------------: | :-------: | :----------------------------: |
| Derek Francisco Orellana Ibáñez | 202001151 | Javier Oswaldo Mirón Cifuentes |
# Frontend
> ## Tecnologia
> Se realizo el proyecto con **React.js** como tecnologia principal, creando estilos propios en CSS.
> ## Servicios
> Los servicios utilizados en el frontend fueron las API del servidor: 
> + Usuarios
> + Pokemons

> ## Manual de Uso
> Al iniciar el proyecto este lo redireccionara al **[Localhost:3000](http://localhost:3000)** donde se mostrara el login donde puede iniciar con 3 usuarios diferentes.
> 
> | usuario | contraseña | genero | nivel |
> | :-----: | :--------: | :----: | :---: |
> |  admin  |   admin    | hombre |  999  |
> |  user   |    user    | mujer  |  35   |
> | mast3r  |  pass1607  | hombre |  75   |
> 
> ![LoginImage](https://i.imgur.com/J3TTetH.png, "Imagen del login")
>
> Una vez iniciada sesion entrara al **[Dashboard](http://localhost:3000/dashboard)** donde se mostraran todos los pokemones y la información del usuario que se logeo, asi como un entrenador segun su genero.
> ![Dashboard](https://i.imgur.com/o8Z1lXG.png, "Imagen Dashboard")
> 
> Al darle click a una tarjeta de pokemon, se mostrara la informacion de dicho pokemon en un cuadro flotante en la pagina.
> ![Info Pokemon](https://i.imgur.com/4njXaTC.png, "Imagen Info Pokemon")
> 
> Puede buscar pokemons por el filtro de tipos, buscar por nombre o id y reiniciar las preferencias de la busqueda. Al seleccionar un tipo este mostrara a todos los pokemones del tipo seleccionado.
> 
> ![Filtro tipo](https://i.imgur.com/kDCxCt8.png, "Imagen Busqueda por filtro")
> 
> Al escribir el nombre del pokemon seleccionando la opcion de nombre, este buscara el pokemon segun su nombre.
> ![Filtro por nombre](https://i.imgur.com/Rlgf9S9.png, "Imagen Busqueda por nombre")
> Al escribir el id del pokemon seleccionando la opcion de id, este buscara el pokemon segun su id.
> ![Filtro por id](https://i.imgur.com/2TyiD1i.png, "Imagen Busqueda por id")
> 
> En caso que el nombre del pokemon o su id esten mal escritas o no existan, este mostrara a un pokemon de error.
> ![Error 404](https://i.imgur.com/eQzUL8t.png, "Imagen Busqueda resultado error")

## Backend
> ## Modulos Utilizados
> Los modulos utilizados fueron los siguientes: 
> ### Cliente:  
> - [x] axios
> - [x] react-router-dom
> - [x] universal-cookie
> ### Servidor:
> - [x] cors
> - [x] express
> - [x] morgan
> - [x] nodemon


> ## Requerimientos del sistema
> - [x] Procesador: Intel Celeron o equivalente
> - [x] Sistema Operativo: Windows 7 o superior
> - [x] RAM: 1GB 
> - [x] Conexion a internet: Si

> ## Puertos utilizados
> ### Cliente
> - [ ] port 3000
> ### Servidor
> - [ ] port 5000

> ## EndPoints
> ```
> > /
> Mostrara un mensaje para demostrar que el servidor esta activo
> ```
> ```
> > /api/usuarios
> Mostrara un arreglo en formato Json de todos los usuarios
> ```
> ```
> > /api/pokemons
> Mostrara un arreglo en formato Json de todos los pokemones
> ```
> ```
> > /api/pokemons/name/:name
> Mostrara un arreglo en formato Json del pokemon segun su nombre
> ```
> ```
> > /api/pokemons/id/:id
> Mostrara un arreglo en formato Json del pokemon segun su id
> ```
> ```
> > /api/pokemons/type/:type
> Mostrara un arreglo en formato Json de los pokemones segun el tipo
> ```
> 