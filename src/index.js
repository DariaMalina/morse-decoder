const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let word="";
    let str="";
    let string="";
    let a=1;
    let letters="";
    for (let i = 0; i <= expr.length; i=i+2) {
        string=" ";
        if (a===6) {
            a=1;
            letters=letters+(MORSE_TABLE[str]);
            str="";
            string="";
        }
        word=(expr[i]+expr[i+1]);
        switch(word){
            case '10':
                word="."
                break;
            case '11':
                word="-"
                break;

            case '00':
                word=""
                break;
        }
        if(word==='**'){
            i=i+8;
            letters=letters+" ";
            continue;
        }
        str=str+word;
        word="";
        a++;
    }
    return letters;
}

module.exports = {
    decode
}