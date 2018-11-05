
// Character to shoot
let spiderman = {
  name: "Spiderman",
  health: 100,
  hits: 0,
  items: []
}

// items that spiderman is can carry. Limit of 2, one for each hand
let items = {
  // gum: {
  //   name: "gum",
  //   modifier: 1,
  //   description: "just blowing bubbles..."
  // },
  cal22: {
    name: "22 cal",
    modifier: 1,
    description: "22cal Really a plinker??"
  },
  cal44mag: {
    name: "44 cal",
    modifier: 2,
    description: "44cal Thats better!!"
  },
  cal454cas: {
    name: "454 casaul",
    modifier: 3,
    description: "454cal Now we're talking"
  }
}

// actions slap punch kick with multipier
let actions = {
  slap: { multiplier: 1 },
  punch: { multiplier: 2 },
  kick: { multiplier: 3 }
}


// function to getGuns Limit of 2, one for each hand
function getGuns(item) {
  if (!(spiderman.items.indexOf(item) >= 0)) {    //only add if not already in the array
    if (spiderman.items.length > 2)    //if we are exceeding limit of 2, drop first weapon before adding
      spiderman.items.shift()
    spiderman.items.push(item)
  }
}

// refresh and update page after
function update() {
  document.getElementById("health").innerText = spiderman.health.toString()
  document.getElementById("hits").innerText = spiderman.hits.toString()
  document.getElementById("progress").style.width = spiderman.health.toString() + "%"

}

// reset page after ko or when ever. 
function reset() {
  spiderman.health = 100
  spiderman.hits = 0
  spiderman.items.length = 0
  document.getElementById('ko').innerText = ("")

  update()
}


// add and multiplies total damage 
function totalDamage(action) {
  let totalmodifier = 0

  spiderman.items.forEach(item => {
    totalmodifier += item.modifier
  });

  if (spiderman.items.length == 0)  // if no weapon is selected always decrement by the action multiplier
    totalmodifier = 1

  return action.multiplier * totalmodifier
}


// Checks spidermans health and K0 if 0
function act(action) {
  spiderman.health -= totalDamage(action)

  if (spiderman.health > 100)
    spiderman.health = 100
  if (spiderman.health <= 0) {
    document.getElementById('ko').innerText = ("KNOCK OUT!")
    spiderman.health = 0
  }
  ++spiderman.hits

  update()
}



