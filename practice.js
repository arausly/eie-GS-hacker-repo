// Javascript --> solutions
// feel free to improve.
// Disclaimer: These are not the questions coming out. If they do, please try not to copy-paste, as that might end up really messed up. 
// wish you all success.

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
// i used es6 cheat aka boss version 😎😎

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

function detectThreat(tweets){
  if(arr.length === 0) console.log('n/a');
  for(let i=0; i<tweets.length; i++){
       let tweet = tweets[i];
       let tweetMsg = tweet.substring(0, tweet.length-3);
       let tweetSymbol = tweet.substring(tweet.length-3);
     
  } 

  // determines which is a valid palindrome.
const isPalindrome = (str) =>{
 return (str === str.split('').reverse().join('')) ? true : false;
}

// all the palindromes in the tweetMsg | random strings
const findPalindrome = () =>{
      let palindromes = [];
      let allPalindromes = [];
      
  }
}

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

// not all test cases pass 7/11😥😥 it's a good score tho
// this is what i have for now
// https://www.hackerrank.com/challenges/append-and-delete/problem
function appendAndDelete(s,t,k){
    if(s === "" || t === '' || s === '' && t === '') return '';
    let similarity = [];
    let disparity = [];
    let newAddition = [];
    let i = -1;
    do{
       i++;
       if((s[i] === t[i]) && disparity.length === 0){
         similarity.push(s[i]);
       }else{
          disparity.push(s[i]);
            if(t[i]){
                newAddition.push(t[i]);
            }
       }
    }while(i <= s.length);
    if((disparity.length + newAddition.length) <= k){
       return 'Yes';    
    }else{
       return 'No';
    }
}

// aelaeyi gidi gan
//BRB
// // 2D arrays
// // sample input
// let a = [
//     [ 1, 1, 1, 0, 0, 0 ],
//     [ 0, 1, 0, 0, 0, 0 ],
//     [ 1, 1, 1, 0, 0, 0 ],
//     [ 0, 0, 2, 4, 4, 0 ],
//     [ 0, 0, 0, 2, 0, 0 ],
//     [ 0, 0, 1, 2, 4, 0 ]
// ]
// // sample output 19
// //https://www.hackerrank.com/challenges/30-2d-arrays/problem

// function hourGlassSum(arr){
//      let newArr = []; 
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<(arr.length -2); j++){
//                newArr[i].push([arr[i][j],arr[i][j+1], arr[i][j+2]]);
//         }
//     }
//     console.log(newArr);
// }

// cracking the coding interview 
// #1
//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function arrayLeftRotation(a){
   for(let i=1; i<=k; i++)a.push(a.shift());
   return a.join('');
}
//smarter version pls 🛐🛐--- to much for-loop joor. 😓😓


// #2
// anagram refers to words consisting of the same length of char, just rearranged.
// solved ✔️✔️✔️
function makingAnagrams(a,b){
    let freq = {};
    a.split('').forEach(char=> freq[char] = (freq[char] || 0) + 1);
    b.split('').forEach(char=> freq[char] = (freq[char] || 0) -1);
    return Object.keys(freq).reduce((sum, key) => sum + Math.abs(freq[key]),0)
}

//https://www.hackerrank.com/challenges/ctci-lonely-integer/problem
//with the rationale of the one above this should be a walk in the park 🚶🚶🚶🚶

function lonelyInteger(arr){
    let freq = {};
    arr.forEach(a[i] in freq )? freq[a[i]] =  freq[a[i]] + 1 :freq[a[i]] = 1
    for(key in freq) if(freq[key] === 1) console.log(key);
}

// forgive me guys ... i'm just hooked ⚓️⚓️ on this thing
//https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function ransomNote(ransom, magazine){
   if((ransom === '' && magazine === '') || ransom === '' || magazine === '') return;
   let freq = {}, output=[]; 
   magazine.split(' ').forEach(word => freq[char] = (freq[char] || 0) + 1);
   ransom.split(' ').forEach(word => freq[char] = (freq[char] || 0 ) -1);
   for(key in freq) (freq[key] <= -1)? 'No' :  'Yes';
   // push to output then do the below
//    output.indexOf('No') > -1 ? console.log('No') : console.log('Yes');
}

// for the GS test, this should be absolutely irrelevant. but for knowledge sake why not.
//https://www.hackerrank.com/challenges/30-inheritance/problem
class Student extends Person {
    constructor(firstName, lastName, id, testScores){
       super(firstName, lastName, id, testScores);
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.testScores = testScores;
    }
    calculate(){
       let ave = this.testScores.reduce((sum,n)=>sum+n)/this.testScores.length;
      return (ave >= 90) ? 'O' : (ave < 90 && ave >=80) ? 'E' : (ave <80 && ave>=70) ? 'A' : (ave <70 && ave>=55)  ? 'P' : (ave <55 &&  ave>=40) ? 'D' : 'T'
    }
}