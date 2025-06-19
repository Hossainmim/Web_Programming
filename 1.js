//Exercise 1
function isBlank(input){
    return input.trim()===""
}
console.log(isBlank(""));

 console.log(isBlank("Hossain Mim"));

 //Exercise 2

 function stringToArray(input){
    return input.split(" ");
}
console.log(stringToArray("Hossain Mim"));


 //Exercise 3

function abbreviateName(name) {
   
    const nameParts = name.split(' ');

    if (nameParts.length === 1) {
        return nameParts[0];
    }

    const firstName = nameParts[0];
    const lastName = nameParts[1].charAt(0).toUpperCase() + '.'; // 
    return firstName + ' ' + lastName;
}

console.log(abbreviateName("Hossain Mim"));



 //Exercise 4

 function titleCase(input) {
    return input
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
 }
 
 // Test case
 console.log(titleCase("javaScript exercises. python exercises."));

 //Exercise 5

 function firstN(array, n = 1) {

    if (n < 0) return [];
    
    
    if (n > array.length) return array;
    
 
    return array.slice(0, n);
}

// Test cases
console.log(firstN([7, 9, 0, -2]));    
console.log(firstN([], 3));             
console.log(firstN([7, 9, 0, -2], 3)); 
console.log(firstN([7, 9, 0, -2], 6)); 
console.log(firstN([7, 9, 0, -2], -3));


 //Exercise 6
 function lastN(array, n) {
    
    if (n === undefined) {
        return array[array.length - 1];
    }

 
    if (n < 0) {
        return [];
    }


    if (n > array.length) {
        return array;
    }

    return array.slice(-n);
}

// Test cases
console.log(lastN([7, 9, 0, -2]));         
console.log(lastN([7, 9, 0, -2], 3));      
console.log(lastN([7, 9, 0, -2], 6));      


 //Exercise 7


 function sumPair(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + numbers[i + 1] === target) {
            return [i, i + 1]; 
        }
    }
    return [-1, -1]; 
}


const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;
console.log(sumPair(numbers, target));


 //Exercise 8

 function move(array, from, to) {
    if (from < 0) from += array.length;
    if (to < 0) to += array.length;

    if (from < 0 || from >= array.length || to < 0 || to >= array.length) {
        return array; 
    }

   const element = array.splice(from, 1)[0];

    array.splice(to, 0, element);

    return array;
}

// Test cases
console.log(move([10, 20, 30, 40, 50], 0, 2)); 
console.log(move([10, 20, 30, 40, 50], -1, -2)); 










