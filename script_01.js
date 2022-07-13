"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */



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


