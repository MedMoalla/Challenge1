// Dolphins Score

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;

const ResultDolphinScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
const AvgResultDolphinsScore = ResultDolphinScore / 3;
console.log("The Average Score Of The Dolphins Team is : ", AvgResultDolphinsScore);

// Koalas Score
const koalasScore1 = 88;
const koalasScore2 = 91; // 95 draw
const KoalasScore3 = 110;

const ResultKoalasScore = koalasScore1 + koalasScore2 + KoalasScore3
const AvgResulKoalasScore = ResultKoalasScore / 3
console.log("The Average Score Of The Koalas Team is : ", AvgResulKoalasScore)

// Compare for tye winner of the competition

if(AvgResultDolphinsScore > AvgResulKoalasScore){
    console.log("The Dolphins are the winner of the competition 🏅")
} else if(AvgResulKoalasScore > AvgResultDolphinsScore){
    console.log("The Koalas are the winner of the competition 🏅")
}else{
    console.log("That's A Draw ")
}

// Bonus 1 Requirements 
// Dolphins
const dolphinBonusScore1 = 97;
const dolphinBonusScore2 = 112;
const dolphinBonusScore3 = 101;
const AvgDolphinsBonusScore = (dolphinBonusScore1 + dolphinBonusScore2 
    +dolphinBonusScore3) / 3

    console.log(AvgDolphinsBonusScore)

// Koalas
const koalasBonusScore1 = 109;
const koalasBonusScore2 = 95;
const koalasBonusScore3 = 123;
const AvgKoalasBonusScore = (koalasBonusScore1 + koalasBonusScore2 
    + koalasBonusScore3) / 3
    console.log(AvgKoalasBonusScore)

// compare 
const minScore = 100 
    if(AvgDolphinsBonusScore < minScore && AvgKoalasBonusScore < minScore){
        console.log("Score must Be higher than the min Score 100")
    }else if (AvgDolphinsBonusScore > AvgKoalasBonusScore && AvgDolphinsBonusScore >= minScore){
        console.log("The Dolphins are the winner of the competition 🏅")
    }
    else if (AvgKoalasBonusScore > AvgDolphinsBonusScore && AvgKoalasBonusScore >= minScore){
        console.log("The Koalas are the winner of the competition 🏅")
    }else {
        console.log("That's A Draw ")
    }

// Bonus 2 Requirements
// Dolphins 

const dolphinBonus2Score1 = 97;
const dolphinBonus2Score2 = 112;
const dolphinBonus2Score3 = 101;

const AvgDolphinsBonus2Score = (dolphinBonus2Score1 + dolphinBonus2Score2 
    +dolphinBonus2Score3) / 3

    console.log(AvgDolphinsBonus2Score)




const koalasBonus2Score1 = 109;
const koalasBonus2Score2 = 95;
const koalasBonus2Score3 = 106;

const AvgKoalasBonus2Score = (koalasBonus2Score1 + koalasBonus2Score2 
    +koalasBonus2Score3) / 3

    console.log(AvgKoalasBonus2Score)


if(AvgDolphinsBonus2Score == AvgKoalasBonus2Score &&
    AvgDolphinsBonus2Score >= minScore &&
    AvgKoalasBonus2Score >=minScore){
        
    console.log("That's A Draw ")
} 
else{
    console.log("No One Wins The Trophy ")
}