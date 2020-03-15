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
    '**********': ' ',
};

function decode(expr) {
let k = 0;
    let array = expr.split('');
    let arrraDivide10 = [];
    let arrraDivide2 = [];
    let str = '';
    array.map(function(item, index) {
        if (index % 2 === 0 & index>1) {
          str = '';
          str=str.concat(item);
          k=k+1;
          arrraDivide2[k]=str;
        }
        else {
          str=str.concat(item);
          arrraDivide2[k]=str;
        }
      });
arrraDivide2.map(function(item, index) {
        if (item==10) {
          arrraDivide2[index]='.';
        }
        else if (item==11) {
          arrraDivide2[index]='-';
        }
        else if (item==00) {
          arrraDivide2[index]='';
        }
        else if (item=='**') {
          arrraDivide2[index]='**';
        }
      });

let morseArr = [];
str = '';
k=0;
for (let i = 0; i<arrraDivide2.length; i++) {
  if (i % 5 === 0 & i>4) {

    k=k+1;
        morseArr[k]=str;
    str='';
    str=str.concat(arrraDivide2[i]);

  }
  else {
  str=str.concat(arrraDivide2[i]);
  morseArr[k]=str;
  }
}

str = '';

morseArr.map(function(item, index) {

let elem = '';
elem = morseArr[index];
str = str.concat(MORSE_TABLE[elem]);
});
return(str);
}

module.exports = {
    decode
}
