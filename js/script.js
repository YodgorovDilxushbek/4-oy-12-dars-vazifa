// 1-misol
// function yigindi(arg) {

//     let sum =0;
//     for (let i = 0; i < arg.length; i++) {
//       sum+=arg[i];
        
//     }
//     return sum;
// }
// let arr=[1,2,3,4,5,6];
// let res=yigindi(arr);
// console.log(res);
 

// 2-misol
// function yigindi(arg) {
// return Math.min(...arg)
  
   
// }
// let arr=[9,2,3,4,5,6];
// let res=yigindi(arr);
// console.log(res);

// 3-misol

// function uzunlik(arg) {

//     let sum =[];
//     for (let i = 0; i < arg.length; i++) {
//       if (typeof arg[i] === `string`) {
//         sum.push(arg[i].length);
//       }
        
//     }

//     return sum;
// }
// let arr=[`hello`, 12,`world`, 3,`1`];
// let res=uzunlik(arr);
// console.log(res);
 
// 4-misol
// function numbers(arg) {
//     return arg.sort(function (a,b) {
//         return b-a;
        
//     });
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// let res= numbers(arr)
// console.log(res);


// 5-misol
// function massiv(mas1,mas2) {
//    let sum=[];
//    sum=mas1.concat(mas2);
//     return sum

    
// }
// let mas1=[1,2,3];
// let mas2=[4,5,6];
// let res=massiv(mas1,mas2)
// console.log(res);


// 6-misol
// function teskarTartib(arg) {
//     return arg.reverse();
// }
// let arr =[1,2,3,4,5];
// let res =teskarTartib(arr)
// console.log(res);


// 7-misol
// function musbat(arg) {
//     return arg.filter(function (number) {
//         return number >0;
//     })
// }
// let arr=[0,1,2,-4,3,4,-9]
// let res = musbat(arr);
// console.log(res);


// 8-misol
// function massiv(arg, value) {
//     return arg.map(function(element) {
//         return element + value;
//     });
// }

// let array = [1, 2, 3, 4];
// let valueToAdd = 5;
// let res=massiv(array, valueToAdd);
// console.log(res); 

// 9-misol
// function ajratish(arg) {
//     let musbatSon=[];
//     let manfiySon=[];
//     for (let i = 0; i< arg.length; i++) {
//         if (arg[i] > 0) {
//             musbatSon.push(arg[i])
//         }else{
//             manfiySon.push(arg[i])

//         }
//     }
//     return{
//         positives:musbatSon,
//         negatives: manfiySon
//     }
// }

// let arr =[3, -1, 5, -7, 0, 8, -2]
// let res =ajratish(arr);
// console.log(`musbat` , res.positives);
// console.log(`manfiy` , res.negatives);


// 10-misol
// function massiv(arg) {
//     return arg.map(function(element) {
//         let number = Number(element);
//         return element === '' || String(number) !== element ? null : number; 
//     });
// }

// let array = ["1", "2", "3", "four", "5.5", "six", ""]; 
// let res= massiv(array);

// console.log(res);  


// 11-misol 
// function massiv(arg) {
//     let sum = 0;

//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i];
//     }

//     return arr.length ? sum / arg.length : undefined; 
// }

// let array = [1, 2, 3, 4, 5];
// let res = calculateAverage(numbersArray);
// console.log("O'rtacha qiymat-", res); 

// 12-misol
// function massiv(arg) {
//     let juftSon=[];
//     let toqSon=[];
//     for (let i = 0; i< arg.length; i++) {
//         if (arg[i] %2== 0) {
//             juftSon.push(arg[i])
//         }else{
//             toqSon.push(arg[i])

//         }
//     }
//     return{
//         positives:juftSon,
//         negatives: toqSon
//     }
// }

// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
// let res =massiv(arr);
// console.log(`juft` , res.positives);
// console.log(`toq` , res.negatives);

// 13-misol
// function filter(arr, num) {
//     return arr.filter(function(element) {
//         return element !== num; 
//     });
// }

// let array = [1, 2, 3, 4, 3, 5];
// let num = 3;
// let res= filter(array, num);

// console.log("yangi massiv:", res);  


// 14-misol
// function massiv(arg) {
//     return arg.map(function(element) {
//         return element * element; 
//     });
// }

// let array = [1, 2, 3, 4, 5];
// let res= massiv(array);

// console.log("Kvadratlar:", res);

// 15-misol
// function massiv(arg) {
//     return arg.map(function(element) {
//         return element * 2; 
//     });
// }

// let array = [1, 2, 3, 4, 5];
// let res= massiv(array);

// console.log("Kvadratlar:", res);
// 16-misol
// function massiv(arg) {
//     return arg.filter(function(element) {
//         return element !== null && element !== undefined; 
//     });
// }

// let array = [1, null, 2, undefined, 3, null, 4, undefined, 5];
// let res = massiv(array);

// console.log("Yangi massiv:", res);

// 17-misol
// function massiv(arg) {
//     return arg.map(function(element) {
//         return element[0].toUpperCase() + element.substring(1);    });
// }

// let array = ["hello", "world", "salom", "hammaga"];
// let res=massiv(array);

// console.log("Yangi massiv:", res);  
// 18-misol
// function massiv(arg, value) {
//     let count = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] === value) {
//             count++; 
//         }
//     }

//     return count; 
// }

// let array = [1, 2, 3, 4, 3, 5, 3];
// let element = 3;
// let res = massiv(array, element);

// console.log(`Qiymat ${element}    ${res} marta uchraydi.`); 

// 19-misol
// function massiv(arg, elements) {
//     const middleIndex = Math.floor(arg.length / 2);
//     arg.splice(middleIndex, 0, ...elements); 
//     return arg; 
// }
// let array = [1, 2, 3, 4, 5];
// let element = [99, 100];
// let res =massiv(array, element);

// console.log("Yangilangan massiv:", res);  
// 20-misol
// function massiv(arg) {
//     return arg.sort(function(a, b) {
//         return a.length - b.length; 
//     });
// }

// let array = ["apple", "banana", "kiwi", "cherry", "grape"];
// let res = massiv(array);

// console.log(" massiv:", res);  

// 21-misol
// function massiv(arg) {
//     return arg.reduce(function(str1, str2) {
//         return (str2.length > str1.length) ? str2 : str1; 
//     }, ""); 
// }

// let array = ["apple", "banana", "kiwi", "cherry", "grapefruit"];
// let String = massiv(array);

// console.log("Eng uzun string:", longestString);

// 22-misol


// function joinArray(arg) {
//     return arg.join(", "); 
// }

// let myArray = ["apple", "banana", "kiwi", "cherry"];
// let res = joinArray(myArray);

// console.log("Birlashtirilgan string:", res); 