module.exports = function toReadable (number) {
    const strNumber = String(number);

    if (strNumber.length === 1) {
        return values.nums[number];
    };

    if (strNumber.length === 2) {
        return getDozens(number)
    }

    if (strNumber.length === 3) {
        if (number % 100 === 0) {
            return values.nums[number / 100] + ' ' + values.hundreds;
        } else if (Number(strNumber[1] + strNumber[2]) < 10) {
            return values.nums[Math.floor(number / 100)] + ' ' + values.hundreds + ' ' + values.nums[Number(strNumber[1] + strNumber[2])];
        }
        else {
            const doz = Number(strNumber[1] + strNumber[2]);
            return values.nums[Math.floor(number / 100)] + ' ' + values.hundreds + ' ' + getDozens(doz);
        }
    }
    
}

function getDozens(number) {
    const strNumber = String(number);

    if (number < 20) {
        return values.numsTen[number - 10];
    };

    if (number >= 20) {
        if (number % 10 === 0) {
            return values.dozens[number / 10 - 2];
        } else {
            return values.dozens[strNumber[0]-2] + ' ' + values.nums[strNumber[1]];
        }
    };
}

const values = {
    nums : ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    numsTen : ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    dozens : ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundreds : 'hundred',
};
