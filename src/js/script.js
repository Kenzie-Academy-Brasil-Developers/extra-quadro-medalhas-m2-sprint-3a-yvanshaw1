import { Table } from "./controller/control.js";
import { Data }  from "./data/data.js";

const body = document.querySelector('tbody');
const input = document.querySelector('.input-pesquisa');

Table.listCountries(Data);

const btnFindName = document.querySelector('.filtro-pesquisa');
btnFindName.addEventListener('click', () => {
    
    body.innerHTML = ``;

    const newData = Table.findName(Data);

    Table.listCountries(newData)

    input.value = '';
});

const btnPosition    = document.querySelector('.filtro-posicao');
btnPosition.addEventListener('click', () => {

    body.innerHTML = ``;

    const newData  = Table.reversePosition(Data);
    
    Table.listCountries(newData);

    if(btnPosition.innerText === "Position ^"){

        btnPosition.innerText = "Position v";

    } else if(btnPosition.innerText === "Position v") {

        btnPosition.innerText = "Position ^";
    }
});

const btnGold     = document.querySelector('.filtro-ouro');
btnGold.addEventListener('click', () => {
    
    let newData = 0;
    
    if(btnGold.innerText === "Gold ^"){

        body.innerHTML = ``;

        newData = Table.sortGold(Data);
        
        btnGold.innerText = "Gold v";

        Table.listCountries(newData);

    } else if(btnGold.innerText === "Gold v") {

        body.innerHTML = ``;

        newData = Table.sortGold(Data).reverse();
        
        btnGold.innerText = "Gold ^";

        Table.listCountries(newData);
    };
});

const btnSilver   = document.querySelector('.filtro-prata');
btnSilver.addEventListener('click', () => {

    let newData = 0;
    
    if(btnSilver.innerText === "Silver ^"){

        body.innerHTML = ``;

        newData = Table.sortSilver(Data);
        
        btnSilver.innerText = "Silver v"

        Table.listCountries(newData);

    } else if(btnSilver.innerText === "Silver v") {

        body.innerHTML = ``;

        newData = Table.sortSilver(Data).reverse();
        
        btnSilver.innerText = "Silver ^"

        Table.listCountries(newData);
    }
});

const btnBronze   = document.querySelector('.filtro-bronze');
btnBronze.addEventListener('click', () => {

    let newData = 0;
    
    if(btnBronze.innerText === "Bronze ^"){

        body.innerHTML = ``;

        newData = Table.sortBronze(Data);
        
        btnBronze.innerText = "Bronze v"

        Table.listCountries(newData);
    } else if(btnBronze.innerText === "Bronze v") {

        body.innerHTML = ``;

        newData = Table.sortBronze(Data).reverse();
        
        btnBronze.innerText = "Bronze ^"

        Table.listCountries(newData);
    }
});
