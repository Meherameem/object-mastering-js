class Person{ //class er naam capital letter diye start hy
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const OnePerson = new Person('stupid','people','5000'); //new is a key word here
const SecondPerson = new Person('smart','people','10000');
console.log(OnePerson,SecondPerson);
