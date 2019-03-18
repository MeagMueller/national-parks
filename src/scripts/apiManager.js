// const parksCall = (name) => {
//     fetch("https://localhost:9099/parks")
//     .then(response => response.json())
//     .then (results => {
//         console.log(results.park.name)
//     })

// }

// console.log(parksCall())

const parksCall = () => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
        .then(parsed => console.log(parsed))

    parsed.forEach(parkName => {
        
    })
}


console.log(parksCall())

// .then(results => 
//         {console.log(results.name, results.state)
//         results.name.forEach(park => {
//         displayInfo(parks.name, parks.state)
//         })
//     })