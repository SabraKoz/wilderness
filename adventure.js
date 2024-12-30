const { database } = require("./data.js")

const { 
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
    allRiverDetails } = require("./functions.js")

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\\     (              ______            #####o###
      /     /  \\     )            /     /\\          #o#\#|#/###
     /_____/----\\_    (          /     /  \\          ###\|/#o#
    '     '          ).         /_____/----\\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')

const trailTotal = totalTrailMiles(database.trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortest = shortTrail(database.trails)
console.log(`The shortest trail is ${shortest} kilometers`)

const longest = longTrail(database.trails)
console.log(`The longest trail is ${longest} kilometers`)

const cheapTrails = leastExpensiveTrails(database.trails)
console.log(`\n The lease expensive trails are ${cheapTrails.join(" ")} \n`)
 
const expensiveTrails = mostExpensiveTrails(database.trails)
console.log(`\n The most expensive trails are ${expensiveTrails.join(" ")} \n`)


const trailDetails = allTrailDetails(database.trails)
console.log(`TRAIL DETAILS:
---------------------------------
    ${trailDetails.join(" ")}`)


console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')

const riverTotal = totalRiverKm(database.rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortestRiver = shortRiver(database.rivers)
console.log(`The shortest river tour is ${shortestRiver} kilometers`)

const longestRiver = longRiver(database.rivers)
console.log(`The longest river tour is ${longestRiver} kilometers`)

const cheapRivers = leastExpensiveRivers(database.rivers)
console.log(`\n The least expensive river tours are ${cheapRivers.join(" ")} \n`)

const expensiveRivers = mostExpensiveRivers(database.rivers)
console.log(`\n The most expensive river tours are ${expensiveRivers.join(" ")} \n`)

const riverDetails = allRiverDetails(database.rivers)
console.log(`RIVER DETAILS:
---------------------------------
    ${riverDetails.join(" ")}`)
