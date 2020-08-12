var name = 'meem';
function add(num1, num2){
    const result = num1 + num2;
    console.log('result inside : ',result,' ',name);//result local variable,name global variable
    return result;
    function double(num){
        return num * 2;
    }
}

var sum = add(11,12);
console.log('sum outside : ',sum,' ',name);