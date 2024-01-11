class User {
    constructor(user, password){
        this.user = user;
        this.password = password;
    }

    getPost(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderator extends User {
    constructor(user, password, permission){
        super(user, password)
        this.permission = permission;
    }

    deletePost(id) {
        if(this.permission.includes('delete')){
            console.log(`El post con el ${id} ha sido borrado`)
        } else {
            console.log('No tienes los permisos para borrar posts')
        }
    }
}

const user = new User('Abel', '123');
console.log(user.getPost());

const user2 = new Moderator('Maria', '456', ['delete', 'edit']);
console.log(user2.getPost())
console.log(user2.permission)
user2.deletePost(4);