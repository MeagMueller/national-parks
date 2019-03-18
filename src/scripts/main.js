console.log("You're doing great, son!")

// Process: get results from API

const displayInfo = document.querySelector("#info")

const parkContainer = document.createElement("article")
displayInfo.appendChild(parkContainer)

const parkNameHeader = document.createElement("h3")
parkContainer.appendChild(parkNameHeader)

const parkStateP = document.createElement("p")
parkContainer.appendChild(parkStateP)

