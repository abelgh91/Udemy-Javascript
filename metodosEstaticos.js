class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    static deleteUser(id_user) {
        console.log(`El user con el id ${id_user} ha sido borrado`)
    }

    static registered = 100;
}

// const user = new User('Abel', 'abelgh91@gmail.com');
// console.log(user)
User.deleteUser(1)
console.log(User.registered)

//permite definir propiedades y métodos para acceder a ellos sin tener que definir nuevos objetos