const ROUTE    = 'https://kenzie-olympics.herokuapp.com/paises';
const response = await fetch(`${ROUTE}`);
let   rootData = await response.json();

class DataBase {
    
    static async orderData(data) {
        
        data.forEach((obj) => {
                
            obj.medal_total = obj.medal_gold + obj.medal_silver + obj.medal_bronze;
        });
        
        data.sort((a, b) => (a.medal_total - b.medal_total) + (a.medal_gold - b.medal_gold)).reverse();
        
        return data
    }
};

export let Data = await DataBase.orderData(rootData);
