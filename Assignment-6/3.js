
let computeDash = (num)=>{
    const str = num.toString();
    const result = [0,'-',str[0]];
    for(let i=1;i<str.length;i++){
        if(str[i-1]%2===0 && str[i]%2===0){
            result.push('-',str[i]);
        }
        else
            result.push(str[i]);
    }
    console.log(result.join(''));
}
computeDash(025468);