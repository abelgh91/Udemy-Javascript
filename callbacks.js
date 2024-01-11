const getUserPosts = (user, callback) => {
    console.log(`Obteniendo los posts de ${user}...`)

    setTimeout(()=>{
        let posts = ['post1', 'post2', 'post3'];
        callback(posts);
    },2000);
}

getUserPosts('Abel', (posts)=>{
    console.log(posts);
});