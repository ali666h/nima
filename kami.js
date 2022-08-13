// // 
// const x = 9;
// const color = x<10 ? 'red' : 'blue'
// console.log(color)
// const iscompleted = true
// const nima = iscompleted === false ? 'css' : 'html'
// console.log(nima);
// const colors = 'blue'
// switch (colors){
//     case 'red' :
//         console.log('it is red')
//         break;
//         case 'brown' : 
//         console.log('it is brown')
//         break;
//         default:
//             console.log("color is not red or brown")
// }







// const adnum = (num1=20 , num2=10) => num1 + num2
// console
// adnum()






class Nima{
    constructor(firstname, lastname, birthdata){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdata = birthdata;
    }
    getfullname(){
        return `hello ${this.firstname} ${this.lastname}`
    }
}


const hosein = new Nima('nima', 'habibpour', 1388-1-19) 
console.log(hosein)
console.log(hosein.getfullname()) 