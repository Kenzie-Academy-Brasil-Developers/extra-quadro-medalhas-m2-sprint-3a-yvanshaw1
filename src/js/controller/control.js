export class Table {

    static listCountries(obj) {
        console.log(obj)
        const table = document.querySelector('table');
        const body  = document.querySelector('tbody');

        obj.forEach((country, i) => {
           
            i++;
            
            const tagTemplate = this.tableTemplate(country, i);
        
            body.appendChild(tagTemplate);
        });

        table.appendChild(body);
    };

    static tableTemplate(country, i) {

        const row = document.createElement('tr');
        
            row.innerHTML = `
            <td class="celula-posicao"> ${i}&deg place </td>
            <td class="celula-pais"> <img class="flag" src="${country.flag_url}"> ${country.country} </td>
            <td class="celula-ouro"> (${country.medal_gold} medals)</td>
            <td class="celula-prata"> (${country.medal_silver} medals)</td>
            <td class="celula-bronze"> (${country.medal_bronze} medals)</td>
            <td class="celula-total"> (${country.medal_gold + country.medal_silver + country.medal_bronze} medals)</td>
        `;

        return row;
    };

    static findName(data) {

        const filterName = [];
        
        const input = document.querySelector('.input-pesquisa');

        filterName.push(data.find((obj) => obj.country.toLowerCase() == input.value.toLowerCase()));

        if(filterName[0] !== undefined) {
            data = filterName;
        };

        return data;
    };
    
    static reversePosition(data) {
        return data.reverse();
    };

    static sortGold(data) {

        return data.sort((a, b) => (a.medal_gold > b.medal_gold ? -1 : 0));
    };

    static sortSilver(data) {

        return data.sort((a, b) => (a.medal_silver - b.medal_silver)).reverse();
    };

    static sortBronze(data) {

        return data.sort((a, b) => (a.medal_bronze - b.medal_bronze)).reverse();
    };
};

