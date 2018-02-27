// Javascript --> solutions
// feel free to improve.

// /hacker rank series/#1
// [[daniel,80],[femi,78],[joy,79],[ojo,98]]
// [[daniel,80],[femi,78],[joy,79],[ojo,98], [daniel,100]]
// --> for example (78.75).


 let arr; 

 function calculateAverage(arr){
    let properFormat = {}, average=0;
    for(let i=0; i<arr.length; i++){
     if( arr[i][0] in properFormat){
        properFormat[arr[i][0]] = ((Number(properFormat[arr[i][0]]) + Number(arr[i][1]))/2).toString();
     }else{
        properFormat[arr[i][0]] = arr[i][1];
     }
    }
    Object.values(properFormat).forEach(val=>{
        average+= Number(val);
    });
    return (average / Object.keys(properFormat).length);
 }

// /hacker rank series/#2
// determine the number of words in a sequence of camelCased words.
// i.e arausiDanielOghenekaro --> 3 words

function camelcase(string){
  return (string.trim().match(/[A-Z]/g).length + 1);
}

// sort alphabetically #3
// charCodeAt  for small letters ranges from 97-122
// charCodeAt  for big letters ranges from 65-90

function sortLetters(str){
   return str.toLowerCase().split('').sort((a,b)=>{
       return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : a.charCodeAt(0) < b.charCodeAt(0) ? -1 : 0;
   }).join('');
}


// arrays that are unique #4
// i used es6 cheat 

function uniqueArr(arr){
     return [...new Set(arr)];
}


// es5 | normal js
function  uniqueArr(arr){
     let arrObj = {};
     for(let i; i<arr.length; i++){
         //es6 --> `${arr[i]}`
         if(!""+arr[i]+"" in arrObj ){
            arrObj[arr[i]] = arr[i];
         }
     }
     return Object.values(arrObj);
}
 

 // compare triplets #5
 // two peope are tested based on three diff factors
 // compare them based on these factors and determine the best.
function solve(a0,a1,a2,b0,b1,b2){
    let alice = 0;
    let bob = 0;

    a0 > b0 ? alice++ : a1 > b1 ? alice++ : a2 > b2 ? alice++ : alice;
    b0 > a0 ? bob++ : b1 > a1 ? bob++ : b2 > a2 ? bob++ : bob;
    return [alice, bob];
}

// staircase, n is the number of steps #6
// es6
// n = 4,
//    #
//   ##
//  ###
// ####
function staircase(n){
    for(let i=1, s=n-1; i<=n, i++, s--;){
        console.log(`${' '.repeat(s)}${'#'.repeat(i)}\n`);
    }
}


// [[1,2,3,],[1,4,6],[5,7,8]] #6
// try out 2.0
// GS EVENTS lagos second practice question
function printAverage(arr){
   let scoreSheet = {};
   for(let m=0; m< arr.length; m++){
        for(let n=0; n<arr[m].length; n++){
             let score= 0;
             score+= arr[m][n];
             ['a','b','c','d'].forEach(l=>{
                scoreSheet[l] = score;
            });
        }
   }

// Object.values(scoreSheet).sort((a,b)=>a-b)
   return Object.values(scoreSheet).sort((a,b)=>{
       return a > b ? -1 : a < b ? 1 :0
   })
}

// try out 1.0 #7
// GS EVENTS lagos second practice question
// a palindrome 


// time conversion #8
// convert a 12 hour clock to a 24 hour clock

function timeConversion(s) {
    // if pm and time is greater than 12 then increment in 24 format
    // i.e +12
         let str = s.trim();
         if(str.length === 0 ) return '';
         if(str.match(/[0-9]+/)[0] ==='12' &&/PM$/.test(str)) return str.substring(0,str.length-2);
         if(str.match(/[0-9]+/)[0] ==='12' &&/AM$/.test(str)) return   `00:${str.substring(2)}`;
        if(/PM$/.test(str) && str.match(/[0-9]+/)[0] !== '12'){
             let fullTimeArr = str.split(':');
             fullTimeArr.unshift((Number(fullTimeArr.shift()) + 12).toString());
             return fullTimeArr.join(':').substring(0,str.length-2);
        }else{
            return str.substring(0,str.length-2);
        }
}

// very big sum #9
// [100012, 1392023, 93902]

function veryBigSum(arr){
  return arr.reduce((acc,val)=> acc+=val);
}

// diagonal difference #10
// sample input = [[1,2,4],[1,2,6],[1,2,5]]
// first diagonal = 1+2+5
// second diagonal = 4+2+1
// sample output absolute value(second diagonal- first diagonal)

function diagonalDiff(a){
    let firstDia=0, secondDia=0;
    for(let i=0,j; i<a.length; i++, j++){
        firstDia+= a[i][j];
        secondDia+= a[i][a[i].length-(j+1)];
    }
    return Math.abs((secondDia - firstDia));
}

// plusMinus #11.
// you probably don't want to use this method, was a bit lazy, here.
// typically loop the array any n>0, n<0 n===0 take the fraction and output it on separate lines.
// [-4 3 -9 0 4 1 ]
// --> 0.500000
//     0.333333
//     0.166667
function plusMinus(arr){
    let m = arr.length;
    let output = [((((arr.filter(n=> n>0)).length))/m)].concat([((arr.filter(n=> n<0)).length)/m]).concat(([((arr.filter(n=> n===0)).length)/m])).map(n=>n.toFixed(6));
    console.log(output.join('\n'));
}