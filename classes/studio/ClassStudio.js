//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        for (let i=0; i<this.scores.length; i++) {
            sum += this.scores[i];
        }
        let averave = sum/this.scores.length;
        return Math.round(10 * averave) / 10;
    }

    status(){
        let average = this.average();
        let status = "";
        if(average >= 90){
            status = "Accepted";
        }else if (average <=89 && average >=80){
            status ="Reserve";
        }else if(average <=79 && average >=70){
            status = "Probationary";
        }else if(average <70){
            status = "Rejected";
        }
        return status;
       // console.log(`${this.name} earned an average test score of ${average}% and has a status of ${status}.`);
    }
}   


let candidate1 = new CrewCandidate("Bubba Bear", 135 , [88,85,90]);
let candidate2 = new CrewCandidate("Merry Maltese", 1.5 , [93,88,97]);
let candidate3 = new CrewCandidate("Glad Gator", 225 , [75,78,62]);
console.log(candidate1);
console.log(candidate2);
console.log(candidate3);
candidate1.addScore(83);
console.log(candidate1);
console.log(candidate2.average());

console.log(`${candidate1.name} earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status()}.`);
console.log(`${candidate2.name} earned an average test score of ${candidate2.average()}% and has a status of ${candidate2.status()}.`);
console.log(`${candidate3.name} earned an average test score of ${candidate3.average()}% and has a status of ${candidate3.status()}.`);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let countTest = 0;
while(candidate3.status()=== "Probationary"){
    candidate3.addScore(100);
    countTest++;
}
console.log(`It will take ${countTest} test for Glad to reach "Reserve" status`)

while(candidate3.status()=== "Reserve"){
    candidate3.addScore(100);
    countTest++;
}

console.log(`It will take ${countTest} test for Glad to reach "Accepted" status`)