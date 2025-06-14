// Spread operator and destructuring

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// Destructuring in JavaScript is a concise way to extract values from arrays or objects and assign them to distinct variables. It simplifies code by avoiding the need to access elements or properties individually.


arr = [1, 2, 4, 6, 32]

function avg(a, b, c) {
    return a + b + c / 3
}

// let a = avg(...arr)
// let a = [4,7, ...arr, 67]
// let a = [...arr]
// let a2 = [5,7,9]
// let a = [...arr, ...a2]
obj1 = {
    name1: "akash",
    class1: "sb",
    lang: "Javascript"

}

// let obj2 = {}
// obj2.name = obj1.name
// obj2.class = obj1.class
// obj2.lang = "Pyhton"

// let obj2 = {...obj1, lang: "Python" }
// console.log(obj2)

// let name1 = obj1.name1;
// let class1 = obj1.class1;
// let lang = obj1.lang;

let {name1, class1, lang} = obj1; // Destructuring

console.log(name1,class1,lang)