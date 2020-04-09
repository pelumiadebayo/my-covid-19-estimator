const factor = (days)=>{
    return Math.trunc(days/3);
};

const covid19ImpactEstimator = (data) =>{
const input = data;
    return{
        data: input,
        impact: {
            currentlyInfected: input.reportedCases * 10,
            infectionsByRequestedTime: this.currentlyInfected * (Math.pow(2,factor(28))) 
        }, 
        severeImpact: {
            currentlyInfected: input.reportedCases * 50,
            infectionsByRequestedTime: this.currentlyInfected * (Math.pow(2,factor(28)))
        } 
    }
};

export default covid19ImpactEstimator;
