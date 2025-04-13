# Documentación del Proyecto

## Índice
1. [Introducción](#introducción)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Modelos](#modelos)
4. [Rutas](#rutas)
5. [Middlewares](#middlewares)
6. [Utilidades](#utilidades)

---

## Introducción
Este proyecto es una API desarrollada con Node.js y Express, utilizando TypeScript para tipado estático. Incluye modelos, rutas, middlewares y utilidades para manejar diferentes funcionalidades.

---

## Estructura del Proyecto
```
src/
├── index.ts
├── middlewares/
│   ├── codes.middlewares.ts
│   ├── userRoles.middlewares.ts
├── models/
│   ├── product.model.ts
│   ├── productCategories.model.ts
│   ├── task.model.ts
│   ├── user.model.ts
├── routers/
│   ├── math.routes.ts
│   ├── users.routes.ts
│   ├── views.routes.ts
├── utils/
│   ├── env.ts
│   ├── mongodb.ts
```

---

## Modelos

### `TaskModel`
Archivo: `src/models/task.model.ts`
```ts
class Task {
    @prop()
    public title!: string;

    @prop()
    public description!: string;

    @prop()
    public isChecked!: boolean;
}
```
Modelo para manejar tareas con propiedades como título, descripción y estado.

---

### `UserModel`
Archivo: `src/models/user.model.ts`
```ts
class User {
    @prop({required: true})
    public name!: string;

    @prop({required: true})
    public email!: string;

    @prop({required: true})
    public password!: string;

    @prop()
    public creditCardToken?: string;

    @prop({required: true})
    public phoneNumber!: string;

    @prop({required: true})
    public document!: string;

    @prop({required: true})
    public birthDay!: Date;

    @prop({required: true})
    public address!: string;

    @prop({required: true})
    public gender!: string;

    @prop({required: true})
    public createdAt!: Date;

    @prop({required: true})
    public updatedAt!: Date;
}
```
Modelo para manejar usuarios con múltiples propiedades requeridas.

---

## Rutas

### `users.routes.ts`
Archivo: `src/routers/users.routes.ts`
- **GET `/`**: Verifica si el usuario es administrador y retorna un mensaje.
- **POST `/`**: Crea un usuario con un código de validación.
- **POST `/task`**: Crea una tarea en la base de datos.

### `math.routes.ts`
Archivo: `src/routers/math.routes.ts`
- **POST `/math/sum`**: Suma dos valores, verificando que sean números y no pares.

### `views.routes.ts`
Archivo: `src/routers/views.routes.ts`
- **GET `/views`**: Retorna la cantidad de vistas y la hora actual.

---

## Middlewares

### `codes.middlewares.ts`
Archivo: `src/middlewares/codes.middlewares.ts`
- **checkForNuclearBombCode**: Verifica un código específico antes de proceder.

### `userRoles.middlewares.ts`
Archivo: `src/middlewares/userRoles.middlewares.ts`
- **checkIfIsAdmin**: Verifica si el usuario tiene rol de administrador.

---

## Utilidades

### `env.ts`
Archivo: `src/utils/env.ts`
- Maneja variables de entorno como `MONGODB_URI`, `OTRAS_LLAVES`, y `LLAVE_DE_API_EXTERNA`.

### `mongodb.ts`
Archivo: `src/utils/mongodb.ts`
- Configura la conexión a la base de datos MongoDB.

---

## Notas
- Asegúrate de configurar correctamente las variables de entorno en el archivo `.env`.
- Sigue las buenas prácticas de desarrollo para mantener el código limpio y modular.
