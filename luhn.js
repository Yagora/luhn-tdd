const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Can you write a 4 numbers? ', (answer) => {
    const numberArray = answer.split("").reverse();
    console.log(numberArray);
    const totalNumber = numberArray.reduce((a, c, index) => {
        let e = parseInt(c);
        console.log(e,c);
        if(index % 2 !== 0) {
            e = e * 2;
        }
        if (e > 9) {
            e = e - 9;
        }
        console.log(e,c);
        return  e + a;
    }, 0);
    console.log('total number ' + totalNumber);
    if (totalNumber % 10 === 0) {
        console.log('The number ' + answer + ' is a luhn number !! Congrats !!')
    } else {
        console.log('The number ' + answer + ' is not a luhn number !! Too bad !!');
    }
    
    rl.close();
});
