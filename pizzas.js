let wrapper = document.getElementsByClassName("wrapper")[0];
let button = document.getElementsByClassName("button")[0];
let preview = document.getElementsByClassName("preview")[0];

bouton.addEventListener('click', function(){
    fetch('pizzas.json')
    .then((wrapper)=> wrapper.json())
    .then((data) => {
        console.log(data);
        createPizzas(data);
        

    });
});

function createPizzas(_data){
    wrapper.innerHTML=_data.Name + "\n" + _data.Slogan;
}