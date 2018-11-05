let spiderman = {
  name: "Spiderman",
  health: 100,
  hits: 0,
  items: []
}



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

let actions = {
  slap: { multiplier: 1 },
  punch: { multiplier: 2 },
  kick: { multiplier: 3 }
}




function getGuns(item) {
  if (!(spiderman.items.indexOf(item) >= 0)) {    //only add if not already in the array
    if (spiderman.items.length > 2)    //if we are exceeding limit of 2, drop first weapon before adding
      spiderman.items.shift()
    spiderman.items.push(item)
  }

  // if (gun == 1) {
  //   spiderman.item = items.cal22
  // }
  // else if (gun == 2) {
  //   spiderman.item = items.cal44mag
  // }
  // else {
  //   spiderman.item = items.cal454cas
  // }
  // update()
}

function update() {
  document.getElementById("health").innerText = spiderman.health.toString()
  document.getElementById("hits").innerText = spiderman.hits.toString()
  document.getElementById("progress").style.width = spiderman.health.toString() + "%"

}

function reset() {
  spiderman.health = 100
  spiderman.hits = 0
  spiderman.items.length = 0
  document.getElementById('ko').innerText = ("")

  update()
}

function totalDamage(action) {
  let totalmodifier = 0

  spiderman.items.forEach(item => {
    totalmodifier += item.modifier
  });

  if (spiderman.items.length == 0)  // if no weapon is selected always decrement by the action multiplier
    totalmodifier = 1

  return action.multiplier * totalmodifier
}

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
// function slap() {

//   spiderman.health -= 1 * spiderman.items
//   ++spiderman.hits
//   update()
// }

// function punch() {
//   spiderman.health -= 2 * spiderman.items
//   ++spiderman.hits
//   update()
// }

// function kick() {
//   spiderman.health -= 3 * spiderman.items
//   ++spiderman.hits
//   update()
// }


