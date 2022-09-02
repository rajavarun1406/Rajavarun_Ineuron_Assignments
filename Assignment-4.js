let matchHouses = (num)=>{
    let b = 2;

    if(num === 0){
        return `0 matchsticks`;
    }
    else if(num<0 || typeof num!=  typeof b){
        return `only +ve numbers allowed`;
    }
    else{
        let matchstickscount = 5*num+1;
        return matchstickscount;
    }
}
let result = matchHouses(3);
console.log(result);
