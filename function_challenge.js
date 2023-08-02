/*const scoreDolphins = 44 + 23 + 71;
const scoreKoalas = 65 + 54 + 49;
//console.log(`dolphins ${dolphinsScore}, koalas ${koalasScore}`);


const calcAverage = (dolphinsScore, koalasScore) => {
    const dolphins_ave_Score = (dolphinsScore) / 3;
    const koalas_ave_Score = (koalasScore) / 3;
    //console.log(`dolphin ${dolphins_ave_Score}, koaloa ${koalas_ave_Score}`);
    return dolphins_ave_Score, koalas_ave_Score;
}

function checkWinner(avgDolphins, avgKoalas) {
    const average = calcAverage(avgDolphins, avgKoalas);
    const winner = (avgDolphins > avgKoalas || avgKoalas > avgDolphins);
    console.log(winner);
    return winner;
}


calcAverage(dolphinsScore, koalasScore);
*/


//const scoreDolphins = 44 + 23 + 71;
//const scoreKoalas = 65 + 54 + 49;
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);


//my solution
const calcAverage = (score1, score2, score3) => {
    const average_Score = (score1 + score2 + score3) / 3;
    console.log(average_Score);
    return average_Score;
}
    //const scoreDolphins = calcAverage(44, 23, 71);
    //const scoreKoalas = calcAverage(65, 54, 49);




//console.log(`dolphin ${scoreDolphins}, koaloa ${scoreKoalas}`);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);



/*let winner;
function checkWinner(avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas);
    if (avgDolphins > avgKoalas) {
        console.log(winner = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(winner = `Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');

    }
    return winner;
}
console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

/*

function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * (15 / 100);
        console.log(`tip ${tip}`);
    } else {
        tip = bill * (20 / 100);
        console.log(`tip of 20% ${tip}`);

    }

    return tip;
}

const bills = [125, 555, 44];
console.log(bills[0]);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), (bills[2] + calcTip(bills[2]))];
console.log(total);
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI_value = this.mass / this.height ** 2;
        return this.BMI_value;
    }

}
console.log(mark.calcBMI());


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI_value = this.mass / this.height ** 2;
        return this.BMI_value;
    }


}
console.log(john.calcBMI());


console.log((mark.calcBMI() > john.calcBMI()));
//? `${mark.fullName}'s ` + 'BMI ' + ` ${mark.calcBMI()}` + ' is higher than ' + `${john.fullName}'s  ${john.calcBMI()} ` : `${john.fullName}'s ` + 'BMI ' + ` ${john.calcBMI()}` + 'is higher than ' + `${mark.fullName}'s ${mark.calcBMI()}`);