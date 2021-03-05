// document.querySelector('.clear').addEventListener('click', clear)
let names = Array.from(document.querySelectorAll('.names'))
let pokemons = Array.from(document.querySelectorAll('input'))
let spriteEl = Array.from(document.querySelectorAll('.sprites'))
let typeEl = Array.from(document.querySelectorAll('.typing'))
let firstPokeDmg = Array.from(document.querySelectorAll('.firstPokeDmgTaken'))
let secondPokeDmg = Array.from(document.querySelectorAll('.secondPokeDmgTaken'))
let thirdPokeDmg = Array.from(document.querySelectorAll('.thirdPokeDmgTaken'))
let fourthPokeDmg = Array.from(document.querySelectorAll('.fourthPokeDmgTaken'))
let fifthPokeDmg = Array.from(document.querySelectorAll('.fifthPokeDmgTaken'))
let sixthPokeDmg = Array.from(document.querySelectorAll('.sixthPokeDmgTaken'))
let weaknesses = Array.from(document.querySelectorAll('.weaknesses'))
let resists = Array.from(document.querySelectorAll('.resists'))


pokemons.forEach(el => el.addEventListener('keyup', update))
pokemons.forEach(el => el.addEventListener('keyup', update))

// function clear(){
//   pokemons.innerHTML = ""
// }
class Type{
  constructor(name, doubleTo, doubleFrom, halfTo, halfFrom, zeroTo, zeroFrom){
    this.name = name
    this.doubleTo = doubleTo
    this.doubleFrom = doubleFrom
    this.halfTo = halfTo
    this.halfFrom = halfFrom
    this.zeroTo = zeroTo
    this.zeroFrom = zeroFrom
  }
}

let types = []
//0 normal, 1 fight, 2 fly, 3 poison, 4 ground, 5 rock, 6 bug, 7 ghost, 8 steel, 9 fire, 10 water, 11 grass, 12 electric, 13 psychic, 14 ice, 15 dragon, 16 dark


  // fetch('https://pokeapi.co/api/v2/pokemon/rattata')
  // .then(res => res.json()) // parse response as JSON
  // .then(data => {
  //   console.log(data)
    
  // })
  // .catch(err => {
  //     console.log(`error ${err}`)
  // })
  
  fetch('https://pokeapi.co/api/v2/type')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    for(let type of data.results){
      fetch(type.url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        types.push(new Type(data.name, data.damage_relations.double_damage_to, data.damage_relations.double_damage_from, data.damage_relations.half_damage_to, data.damage_relations.half_damage_from, data.damage_relations.no_damage_to, data.damage_relations.no_damage_from))
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
    }
  })
  .catch(err => {
      console.log(`error ${err}`)
  })

 

  function update(){
     team = pokemons.map(el => el.value.toLowerCase())
     team.forEach((poke, i) => {
         if(poke != ''){
            fetch('https://pokeapi.co/api/v2/pokemon/'+poke)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              console.log(data)
              if(i == 0){
                spriteEl[i].innerHTML = `<img src="${data.sprites.front_default}">`
                document.querySelector('#firstName').innerText = data.name
                if(data.types.length > 1){
                  typeEl[i].innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      firstPokeDmg.forEach(el => el.innerHTML = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                  types.forEach(el => {
                    if(el.name == data.types[1].type.name){
                      console.log(el.name)
                      firstPokeDmg.forEach(el => el.innerHTML *= 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText *= 2)
                      el.halfFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText *= 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText *= 0)
                    }
                  
                  })
                }else{
                  typeEl[i].innerText = data.types[0].type.name
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      firstPokeDmg.forEach(el => el.innerText = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.firstPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                }
              }else if(i == 1){
                spriteEl[i].innerHTML = `<img src="${data.sprites.front_default}">`
                document.querySelector('#secondName').innerText = data.name
                if(data.types.length > 1){
                  typeEl[i].innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      secondPokeDmg.forEach(el => el.innerHTML = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerHTML = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerHTML = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerHTML = 0)
                    }
                  })
                  types.forEach(el => {
                    if(el.name == data.types[1].type.name){
                      console.log(el.name)
                      secondPokeDmg.forEach(el => el.innerHTML *= 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerHTML *= 2)
                      el.halfFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerHTML *= 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerHTML *= 0)
                    }
                  
                  })
                }else{
                  typeEl[i].innerText = data.types[0].type.name
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      secondPokeDmg.forEach(el => el.innerText = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.secondPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                }
              }else if(i == 2){
                spriteEl[i].innerHTML = `<img src="${data.sprites.front_default}">`
                document.querySelector('#thirdName').innerText = data.name
                if(data.types.length > 1){
                  typeEl[i].innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      thirdPokeDmg.forEach(el => el.innerHTML = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerHTML = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerHTML = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerHTML = 0)
                    }
                  })
                  types.forEach(el => {
                    if(el.name == data.types[1].type.name){
                      console.log(el.name)
                      thirdPokeDmg.forEach(el => el.innerHTML *= 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerHTML *= 2)
                      el.halfFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerHTML *= 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerHTML *= 0)
                    }
                  
                  })
                }else{
                  typeEl[i].innerText = data.types[0].type.name
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      thirdPokeDmg.forEach(el => el.innerText = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.thirdPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                }
              }else if(i == 3){
                spriteEl[i].innerHTML = `<img src="${data.sprites.front_default}">`
                document.querySelector('#fourthName').innerText = data.name
                if(data.types.length > 1){
                  typeEl[i].innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      fourthPokeDmg.forEach(el => el.innerHTML = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerHTML = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerHTML = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerHTML = 0)
                    }
                  })
                  types.forEach(el => {
                    if(el.name == data.types[1].type.name){
                      console.log(el.name)
                      fourthPokeDmg.forEach(el => el.innerHTML *= 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerHTML *= 2)
                      el.halfFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerHTML *= 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerHTML *= 0)
                    }
                  
                  })
                }else{
                  typeEl[i].innerText = data.types[0].type.name
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      fourthPokeDmg.forEach(el => el.innerText = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.fourthPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                }
              }else if(i == 4){
                spriteEl[i].innerHTML = `<img src="${data.sprites.front_default}">`
                document.querySelector('#fifthName').innerText = data.name
                if(data.types.length > 1){
                  typeEl[i].innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      fifthPokeDmg.forEach(el => el.innerHTML = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerHTML = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerHTML = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerHTML = 0)
                    }
                  })
                  types.forEach(el => {
                    if(el.name == data.types[1].type.name){
                      console.log(el.name)
                      fifthPokeDmg.forEach(el => el.innerHTML *= 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerHTML *= 2)
                      el.halfFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerHTML *= 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerHTML *= 0)
                    }
                  
                  })
                }else{
                  typeEl[i].innerText = data.types[0].type.name
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      fifthPokeDmg.forEach(el => el.innerText = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.fifthPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                }
              }else if(i == 5){
                spriteEl[i].innerHTML = `<img src="${data.sprites.front_default}">`
                document.querySelector('#sixthName').innerText = data.name
                if(data.types.length > 1){
                  typeEl[i].innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      sixthPokeDmg.forEach(el => el.innerHTML = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerHTML = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerHTML = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerHTML = 0)
                    }
                  })
                  types.forEach(el => {
                    if(el.name == data.types[1].type.name){
                      console.log(el.name)
                      sixthPokeDmg.forEach(el => el.innerHTML *= 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerHTML *= 2)
                      el.halfFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerHTML *= 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerHTML *= 0)
                    }
                  
                  })
                }else{
                  typeEl[i].innerText = data.types[0].type.name
                  types.forEach(el => {
                    if(el.name == data.types[0].type.name){
                      console.log(el.name)
                      sixthPokeDmg.forEach(el => el.innerText = 1)
                      el.doubleFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerText = 2)
                      el.halfFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerText = 0.5)
                      el.zeroFrom.forEach(el => document.querySelector(`.sixthPokeDmgTaken.${el.name}`).innerText = 0)
                    }
                  })
                }
              }
              let normalEl = Array.from(document.querySelectorAll('.pokimons.normal'))
              let normal = normalEl.map(el => Number(el.innerText))
              let fightingEl = Array.from(document.querySelectorAll('.pokimons.fighting'))
              let fighting = fightingEl.map(el => Number(el.innerText))
              let flyingEl = Array.from(document.querySelectorAll('.pokimons.flying'))
              let flying = flyingEl.map(el => Number(el.innerText))
              let poisonEl = Array.from(document.querySelectorAll('.pokimons.poison'))
              let poison = poisonEl.map(el => Number(el.innerText))
              let groundEl = Array.from(document.querySelectorAll('.pokimons.ground'))
              let ground = groundEl.map(el => Number(el.innerText))
              let rockEl = Array.from(document.querySelectorAll('.pokimons.rock'))
              let rock = rockEl.map(el => Number(el.innerText))
              let bugEl = Array.from(document.querySelectorAll('.pokimons.bug'))
              let bug = bugEl.map(el => Number(el.innerText))
              let ghostEl = Array.from(document.querySelectorAll('.pokimons.ghost'))
              let ghost = ghostEl.map(el => Number(el.innerText))
              let steelEl = Array.from(document.querySelectorAll('.pokimons.steel'))
              let steel = steelEl.map(el => Number(el.innerText))
              let fireEl = Array.from(document.querySelectorAll('.pokimons.fire'))
              let fire = fireEl.map(el => Number(el.innerText))
              let waterEl = Array.from(document.querySelectorAll('.pokimons.water'))
              let water = waterEl.map(el => Number(el.innerText))
              let grassEl = Array.from(document.querySelectorAll('.pokimons.grass'))
              let grass = grassEl.map(el => Number(el.innerText))
              let electricEl = Array.from(document.querySelectorAll('.pokimons.electric'))
              let electric = electricEl.map(el => Number(el.innerText))
              let psychicEl = Array.from(document.querySelectorAll('.pokimons.psychic'))
              let psychic = psychicEl.map(el => Number(el.innerText))
              let iceEl = Array.from(document.querySelectorAll('.pokimons.ice'))
              let ice = iceEl.map(el => Number(el.innerText))
              let dragonEl = Array.from(document.querySelectorAll('.pokimons.dragon'))
              let dragon = dragonEl.map(el => Number(el.innerText))
              let darkEl = Array.from(document.querySelectorAll('.pokimons.dark'))
              let dark = darkEl.map(el => Number(el.innerText))
              let fairyEl = Array.from(document.querySelectorAll('.pokimons.fairy'))
              let fairy = fairyEl.map(el =>Number(el.innerText))
          
              document.querySelector('.normal.resists').innerText = normal.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.normal.weaknesses').innerText = normal.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.fighting.resists').innerText = fighting.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.fighting.weaknesses').innerText = fighting.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.flying.resists').innerText = flying.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.flying.weaknesses').innerText = flying.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.poison.resists').innerText = poison.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.poison.weaknesses').innerText = poison.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.ground.resists').innerText = ground.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.ground.weaknesses').innerText = ground.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.rock.resists').innerText = rock.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.rock.weaknesses').innerText = rock.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.bug.resists').innerText = bug.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.bug.weaknesses').innerText = bug.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.ghost.resists').innerText = ghost.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.ghost.weaknesses').innerText = ghost.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.steel.resists').innerText = steel.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.steel.weaknesses').innerText = steel.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.fire.resists').innerText = fire.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.fire.weaknesses').innerText = fire.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.water.resists').innerText = water.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.water.weaknesses').innerText = water.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.grass.resists').innerText = grass.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.grass.weaknesses').innerText = grass.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.electric.resists').innerText = electric.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.electric.weaknesses').innerText = electric.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.psychic.resists').innerText = psychic.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.psychic.weaknesses').innerText = psychic.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.ice.resists').innerText = ice.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.ice.weaknesses').innerText = ice.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.dragon.resists').innerText = dragon.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.dragon.weaknesses').innerText = dragon.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.dark.resists').innerText = dark.reduce((acc, val) => val < 1 && val != '' ? acc + 1 : acc = acc , 0)
              document.querySelector('.dark.weaknesses').innerText = dark.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.fairy.resists').innerText = fairy.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)
              document.querySelector('.fairy.weaknesses').innerText = fairy.reduce((acc, val) => val >= 2 ? acc + 1 : acc = acc , 0)

                  

              weaknesses.forEach(el => {
                if(el.innerText > 2){
                  el.classList.add('danger')
                  el.classList.remove('caution')
                  el.classList.remove('neutral')
                }else if(el.innerText > 0){
                  el.classList.add('caution')
                  el.classList.remove('danger')
                  el.classList.remove('neutral')
                }else if(el.innerText == 0){
                  el.classList.add('neutral')
                  el.classList.remove('caution')
                  el.classList.remove('danger')
                }
              })
              
              resists.forEach(el => {
                if(el.innerText > 2){
                  el.classList.add('lotResists')
                  el.classList.remove('coupleResists')
                  el.classList.remove('neutral')
                }else if(el.innerText > 0){
                  el.classList.add('coupleResists')
                  el.classList.remove('danger')
                  el.classList.remove('lotResists')
                }else if(el.innerText == 0){
                  el.classList.add('neutral')
                  el.classList.remove('coupleResists')
                  el.classList.remove('lotResists')
                }
              })
              
              let tableTypes = [normalEl, fightingEl, flyingEl, poisonEl, groundEl, bugEl, rockEl, ghostEl, steelEl, fireEl, waterEl, grassEl, electricEl, psychicEl, iceEl, dragonEl, darkEl, fairyEl]
              
              
              for(let i = 0; i < tableTypes.length; i++){
                tableTypes[i].forEach(element => {
                  if(element.innerText > 2){
                    element.classList.add('danger')
                    element.classList.remove('ez')
                    element.classList.remove('neutral')
                    element.classList.remove('caution')
                    element.classList.remove('immune')
                  }else if(element.innerText > 1){
                    element.classList.add('caution')
                    element.classList.remove('ez')
                    element.classList.remove('immune')
                    element.classList.remove('nautral')
                    element.classList.remove('danger')
                  }else if(element.innerText == 1){
                    element.classList.add('neutral')
                    element.classList.remove('ez')
                    element.classList.remove('danger')
                    element.classList.remove('caution')
                    element.classList.remove('immune')
                  }else{
                    element.classList.add('ez')
                    element.classList.remove('immune')
                    element.classList.remove('neutral')
                    element.classList.remove('caution')
                    element.classList.remove('danger')
                  }
                })
              }

            
            })
            .catch(err => {
                console.log(`error ${err}`)
            })
            
            
         }
         
     })
     
     
  }