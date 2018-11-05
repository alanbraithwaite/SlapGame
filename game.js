let spiderman = {
  name: "Spiderman",
  health: 100,
  hits: 0,
  items: 1
}

let items = {
  cal22: {
    name: "22 cal",
    modifier: -2,
    description: "22cal Really a plinker??"
  },
  cal44mag: {
    name: "357 cal",
    modifier: 2,
    description: "357cal Thats better!!"
  },
  cal454cas: {
    name: "454 cas",
    modifier: 3,
    description: "454cal Now we're talking"
  }

}

function getGuns(gun) {
  if (gun == 1) {
    spiderman.items = items.cal22.modifier
  }
  else if (gun == 2) {
    spiderman.items = items.cal44mag.modifier
  }
  else {
    spiderman.items = items.cal454cas.modifier
  }
  update()
}

function update() {
  document.getElementById("health").innerText = spiderman.health.toString()
  document.getElementById("hits").innerText = spiderman.hits.toString()

}

function slap() {

  spiderman.health -= 1 * spiderman.items
  ++spiderman.hits
  update()
}

function punch() {
  spiderman.health -= 2 * spiderman.items
  ++spiderman.hits
  update()
}

function kick() {
  spiderman.health -= 3 * spiderman.items
  ++spiderman.hits
  update()
}


