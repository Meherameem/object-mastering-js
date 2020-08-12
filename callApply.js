const person = {
    firstName:"Rahim",
    lastName:"Uddin",
    salary:5000,
    getFullName:function(){ //anonymous function
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
};
// person.chargeBill(100);
// person.chargeBill(300);
// console.log(person.salary);

const newPerson = {
    firstName:'hero',
    lastName:'alam',
    salary:7000
};
// const newChargeBill = person.chargeBill.bind(newPerson);
// newChargeBill(1500);

const newChargeBill = person.chargeBill.call(newPerson, 500);
//const newChargeBill = person.chargeBill.apply(newPerson,[1000]);

console.log(newPerson.salary);
