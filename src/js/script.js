import { Table } from "./controller/control.js";
import { Data }  from "./data/data.js";

const body = document.querySelector('tbody')

Table.listCountries(Data);

const btnFindName = document.querySelector('.filtro-pesquisa');
btnFindName.addEventListener('click', () => {
    
    body.innerHTML = ``;

    const newData = Table.findName(Data);

    Table.listCountries(newData)
});

const btnPosition    = document.querySelector('.filtro-posicao');
btnPosition.addEventListener('click', () => {

    body.innerHTML = ``;

    const newData  = Table.reversePosition(Data);
    
    Table.listCountries(newData);
});

const btnGold     = document.querySelector('.filtro-ouro');
btnGold.addEventListener('click', () => {

    body.innerHTML = ``;

    const newData = Table.sortGold(Data);
    
    Table.listCountries(newData);

    
});

// const btnSilver   = document.querySelector('.filtro-prata');
// btnSilver.addEventListener('click', Table.sortSilver());

// const btnBronze   = document.querySelector('.filtro-bronze');
// btnBronze.addEventListener('click', Table.sortBronze());
