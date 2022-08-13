const nima = [
    {
        id : 1,
        name : 'html',
        time : 10,
        iscompleted : false
    },
    {
        id : 2,
        name : 'css',
        time : 15,
        iscompleted : true
    }
]
console.log(nima[1].name)
const ali = JSON.stringify(nima)
console.log(ali)


for(let c of nima){
console.log(c)
}


nima.forEach(function(c){
    console.log(c)
})

const newNima = nima.map(function(cc){
    return {name : cc.name , Id : cc.id}
})
console.log(newNima)



const newNima2 = nima.filter(function(c){
    return c.iscompleted === true
}).map(function(cc){
    return cc.name
})
console.log(newNima2)




const newNima3 = nima.map(function(gg){
    return {name : gg.name , id : gg.id}
})
console.log(newNima3)





const newNima4 = nima.filter(function(gg){
    return gg.iscompleted === true
}).map(function(nn){
  return nn.name
})
console.log(newNima4)

let x = 11
if(x === 10){
    console.log('x is 10')
}
else{console.log('x is not 10')}

const h = 10
const color = x<10 ? 'red' : 'blue';
console.log(color)



const kami = 'brown'
switch (kami){
    case 'red':
    console.log('it is red')
    break;
    case 'blue':
        console.log('it is blue')
        break;
        default:
            console.log('color is not blue or red')
}

const addnum = (num1=11 , num2=5) => console.log(num1 + num2)

    

addnum()







class Person{
    constructor(firstname , lastname , birthdate){
        this.firstname = firstname
        this.lastname = lastname
        this.birthdate = birthdate
    }
}








const student1 = new Person('nima' , 'habibpour' , '1388-1-19')
console.log(student1)