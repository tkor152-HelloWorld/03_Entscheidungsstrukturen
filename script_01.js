"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 35;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true)
// if (isJohnOlder)
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter.")
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// if (false)
// if (isJohnOlder) 
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter.")
// }
// else 
// {
//     console.log("John ist jünger.")
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder) 
// {
//     console.log("John ist älter.")
// }
// // < --- 1. Alernative
// else if (isJohnEqual)
// {
//     console.log("John und Mark sind gleich alt.")
// }
// // < --- 2.Alternative

// else 
// {
//     console.log("John ist jünger.")
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

 

const firstName = "Jane";
let job;

// job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";      // .. taucht im Rhein! 
// job = "artist";     // .. malt ein Bild!
// job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!

// switch (job)
//  {
//     case "driver":
//         console.log("Jane fährt Taxi!");
//         break;
//     case "diver":
//         console.log("Jane taucht im Rhein!");
//         break;
//     case "artist":
//         console.log("Jane malt ein Bild!");
//         break;
//     case "teacher":
//     case "instructor":    
//        console.log("Jane unterrichtet!");
//        break;
    // case "teacher" || "instructor":    
    //     console.log("Jane unterrichtet!");
    //     break;   
//     default:
//         console.log("Jane macht etwas anderes");
//         break;
// }
/****** Fallunterscheidung / SWITCH|CASE 2 ******/

const cond = true;
const a = 10;

switch (cond)
{
    case (a == 1):
        console.log("a ist gleich 1");
        break;
    case (a == 2):
        console.log("a ist gleich 2");
        break;
    default:
        console.log("a hat einen anderen Wert");
        break;        
}
