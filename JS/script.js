// lets create js Object

function getfullName(){
    lname='Deepak Prajapati',
    fname="Prajapati"
}


let deepak={
    name:'Deepak',
    surname:"Prajapati",
    age:19,
    school:"NIC",
    address:"Sawaiya Pattidari",

    getAddress(){
        return this.address;
    }
}

console.log(deepak);
console.log(deepak.getAddress());
console.log();


var rajan={
    name:'Rajan',
    lname:'Vishwakrma',
    age:19,
    address:"Bhatija",
    school:"NIC",

    getfullName(){
        console.log("hhi "+this.name)
    }
}


//how to access object members

console.log(rajan.getfullName());

console.log(deepak);
//console.log(mehtod.value);
console.log(deepak.name);

