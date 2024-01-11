const promise = new Promise((resolve, reject) => {
    //acción que se va a ejecutar
    setTimeout(() => {
        const successful = false;

        if(successful){
            resolve('Successful operation');
        } else {
            reject('Error operation ')
        }
    }, 4000);
});

promise.then((message)=>{
    alert(message);
});

promise.catch((message)=>{
    alert(message)
})