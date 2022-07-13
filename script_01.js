"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */
//let arr;          //variable für Array
  //arr = new Array(); // konstruktor
  //arr = [];  //Literal
   //arr = [2,7,11,4];     // 4 Elemente
//   arr = [false, true,false,true];
  //arr = ["Ich","bin","Maxine","Mützerich"];

// output(arr);
// output(arr.length);   //Anzahl der Element
// output(arr[0]);         // index 0 (1. position. in Array)
// output(arr[3]); 
// output(arr[arr.length -1]); //

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
 //output(getSentence("Ich","bin","Max","Mütze"));

//output(getSentence("Ich","bin","Maxine","Mützerich"));
//output(getSentence("Ich","bin","der","coole", "Max","Mütze"));
//more of the same!
function getSentence(word1,word2,word3,word4,word5,word6) {

    const gap   = " ";
    const punct = ".";
    let str   =     word1 + gap +
                    word2 + gap +
                    word3 + gap +
                    word4 + gap +
                    word5 + gap +
                    word6 +
                    punct;
    return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}


