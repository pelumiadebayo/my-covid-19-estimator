const factor = (days) => Math.trunc(days / 3);


const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: this.currentlyInfected * (2 ** factor(28))
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: this.currentlyInfected * (2 ** factor(28))
  }
});

export default covid19ImpactEstimator;
