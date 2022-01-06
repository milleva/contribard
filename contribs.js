import contributionsMilleva from "./contributions_milleva.json"

const contributionDays = contributionsMilleva.contributions

// SORTING
const sortToDescendingContribOrder = () => contributionDays.sort((a, b) => b.count - a.count)
const sortToChronologicalOrder = () => contributionDays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

// FUNCTIONS
const findDaysWithContributions = (n) => contributionDays.filter(cd => n | n === 0 ? cd.count === n : cd.count)
const findDaysWithMoreContributionsThan = (n) => contributionDays.filter(cd => cd.count > n)

const findDayWithMostContributions = () => sortToDescendingContribOrder()[0]

const findLongestContributionDayStreak = () => {
    const cds = sortToChronologicalOrder()
    let longestStreak = 0
    let streak = 0
    for (let i = 0; i < cds.length; i++) {
        if (cds[i].count) {
            streak++
            longestStreak = Math.max(longestStreak, streak)
        } else {
            streak = 0
        }
    }
    return longestStreak
}

const findLongestLazyDayStreak = () => {
    const cds = sortToChronologicalOrder()
    let started = false
    let longestStreak = 0
    let streak = 0
    for (let i = 0; i < cds.length; i++) {
        if (!cds[i].count && started) {
            streak++
            longestStreak = Math.max(longestStreak, streak)
        } else {
            streak = 0
            started = true
        }
    }
    return longestStreak
}

// PRESENTATION
console.log("# of days ", contributionDays.length)
console.log("# of days with contributions ", findDaysWithContributions().length)
console.log("Most contributions in one day ", findDayWithMostContributions().count)
console.log("# of days with more than 5 contribs", findDaysWithMoreContributionsThan(5).length)
console.log("# of days with more than 20 contribs", findDaysWithMoreContributionsThan(20).length)
console.log("# of days with exactly 1 contribution ", findDaysWithContributions(1).length)
console.log("# of days with exactly 10 contributions ", findDaysWithContributions(10).length)
console.log("Longest streak of days with contributions", findLongestContributionDayStreak())
console.log("Longest break from contributions", findLongestLazyDayStreak())