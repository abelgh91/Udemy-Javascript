const fetchPosts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const post = ['post1', 'post2', 'post3'];
            const error = true;

            if(error){
                reject('Hubo un error al obtener los posts')
            } else {
                resolve(post)
            }
        }, 2000)
    });
};

const showPosts = async () => {
    try{
        const posts = await fetchPosts();
        console.log(posts);
    }catch(error){
        console.log(error);
    }
   
};
showPosts();