const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return Math.round(total)
}


const shortTrail = (allTrails) => {
    let shortest = 20  
    for (const trail of allTrails) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}


const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

const totalRiverKm = (allRivers) => {
    let total = 0
    for (const river of allRivers) {
        total = river.length
    }
    return total
}

const shortRiver = (allRivers) => {
    let shortestRiver = 20
    for (const river of allRivers) {
        if(river.length < shortestRiver) {
            shortestRiver = river.length
        }
    }
    return shortestRiver
}

const longRiver = (allRivers) => {
    let longestRiver = 0
    for (const river of allRivers) {
        if(river.length > longestRiver) {
            longestRiver = river.length
        }
    }
    return longestRiver
}

const leastExpensiveTrails = (allTrails) => {
    let cheapTrails = []
    for (const trail of allTrails) {
        if(trail.price === "$") {
            cheapTrails.push(`\n \t ${trail.trailName}`)
        }
    }
    return cheapTrails
}


const mostExpensiveTrails = (allTrails) => {
    let expensiveTrails = []
    for (const trail of allTrails) {
        if(trail.price.length >= 4) {
            expensiveTrails.push(`\n \t ${trail.trailName}`)
        }
    }    
    return expensiveTrails
}

const leastExpensiveRivers = (allRivers) => {
    let cheapRivers = []
    for (const river of allRivers) {
        if(river.price === "$") {
            cheapRivers.push(`\n \t ${river.river}`)
        }
    }
    return cheapRivers
}

const mostExpensiveRivers = (allRivers) => {
    let expensiveRivers = []
    for (const river of allRivers) {
        if(river.price.length >= 4) {
            expensiveRivers.push(`\n \t ${river.river}`)
        }
    }
    return expensiveRivers
}

const allTrailDetails = (allTrails) => {
    let trailDetails = []
    for (const trail of allTrails) {
        trailDetails.push(`\n ${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long. \n The highlighted plant for the trip is ${trail.plantHighlight}. \n`)
    }
    return trailDetails
}

const allRiverDetails = (allRivers) => {
    let riverDetails = []
    for (const river of allRivers) {
        riverDetails.push(`\n ${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long. \n The unique fish for the trip is ${river.uniqueFish}. \n`)
    }
    return riverDetails
}

module.exports = { 
    totalTrailMiles, 
    shortTrail, 
    longTrail, 
    totalRiverKm, 
    shortRiver, 
    longRiver, 
    leastExpensiveTrails, 
    mostExpensiveTrails, 
    leastExpensiveRivers, 
    mostExpensiveRivers, 
    allTrailDetails, 
    allRiverDetails }
