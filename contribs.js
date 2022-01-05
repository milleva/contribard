import contributionsMilleva from "./contributions_milleva.json"

const contributionDays = contributionsMilleva.contributions

// FUNCTIONS
const findDaysWithContributions = (n) => {
    return contributionDays.filter(cd => n | n === 0 ? cd.count === n : cd.count)
}

const findDaysWithMoreContributionsThan = (n) => {
    return contributionDays.filter(cd => cd.count > n)
}

const findDayWithMostContributions = () => {
    return contributionDays.sort((a, b) =>  b.count - a.count)[0]
}

// PRESENTATION
console.log("# of days with contributions ", findDaysWithContributions().length)
console.log("# of days with more than 5 contribs", findDaysWithMoreContributionsThan(5).length)
console.log("# of days with more than 20 contribs", findDaysWithMoreContributionsThan(20).length)
console.log("Most contributions in one day ", findDayWithMostContributions().count)
console.log("# of days with exactly 1 contribution ", findDaysWithContributions(1).length)
console.log("# of days with exactly 10 contributions ", findDaysWithContributions(10).length)