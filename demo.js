fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(res=>{
    if(!res.ok){
        throw new Error('cant fetch api');

    }
return res.json();
})
.then(data =>console.log(data.name))
.catch(error =>console.log(error));



