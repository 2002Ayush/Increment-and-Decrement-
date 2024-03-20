const countValue = document.querySelector('#counter');


const increment = () => {
    //get value from ui ,here we use parsInt beacuse we get value in string for 
    let value= parseInt(countValue.innerText);
    //update the value
    value=value+1;
    //set the value onto ui
    countValue.innerText=value;
};

const decrement = () => {
    //get value from ui ,here we use parsInt beacuse we get value in string for 
    let value= parseInt(countValue.innerText);
    //update the value
    value = value-1;
    //set the value onto ui
    countValue.innerText=value;
};

