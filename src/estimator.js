const dayFactor = (input) => Math.trunc(input / 3);
const weekFactor = (input) => Math.trunc((input * 7) / 3);
const MonthFactor = (input) => Math.trunc((input * 30) / 3);

const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: {
      days: this.currentlyInfected * (2 ** dayFactor(28)),
      weeks: this.currentlyInfected * (2 ** weekFactor(28)),
      months: this.currentlyInfected * (2 ** MonthFactor(28))
    }
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: {
      days: this.currentlyInfected * (2 ** dayFactor(28)),
      weeks: this.currentlyInfected * (2 ** weekFactor(28)),
      months: this.currentlyInfected * (2 ** MonthFactor(28))
    }
  }
});

export default covid19ImpactEstimator;
