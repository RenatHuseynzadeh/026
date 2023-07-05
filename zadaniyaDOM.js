// 3
function firstt(num){
    let pomos = 0
    
    let podsot = 0
    let inde = 0
    
    for(let i = 0; i < num.length; i++){
        podsot = num[i]
        inde = num.indexOf(podsot)
        pomos += (podsot*inde)
        
    }

    console.log(pomos);

    


}

firstt([1, 2, 3, 4, 5])

// 5
function twoo(num2){
    if(typeof num2 === "object"){
        console.log("это обьект");
    } else{
        console.log("это не обьект");
        console.log(`это ${typeof num2}`);
    }
}

twoo(function add(x,y) {return x + y})

