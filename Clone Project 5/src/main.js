const weaponList = [
   {
      weapon: 'Stick',
      power: 3.5
   }, {
      weapon: 'dagger',
      power: 5
   }, {
      weapon: 'claw',
      power: 10
   }, {
      weapon: 'hammer',
      power: 20
   }, {
      weapon: 'sword',
      power: 30
   }, {
      weapon: 'double hammer',
      power: 40
   }, {
      weapon: 'legendary sword',
      power: 50
   }
] 

const monsterList = [
   {
      monster: 'Slime',
      health: 15,
      level: 5,
      power: 15
   }, {
      monster: 'Beast',
      health: 45,
      level: 10,
      power: 60
   }, {
      monster: 'Dragon',
      health: 100,
      level: 50,
      power: 80
   }
]

// NOTE: Collect ID and Class from document
// The El is stand for Element its just the simple way to make different with the XP element in the document or the XP variable
const xpEl = document.getElementById('xp') 
const healthEl = document.getElementById('health')
const goldEl = document.getElementById('gold')
const placeSpan = document.querySelector('.place-info-holder span')
const btnHolderEl = document.querySelector('.button-holder')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const messageInfoEl = document.querySelector('.message-info p')
const messageWhatHappens = document.querySelector('.message-what-happens p')
// This is the parent variable of the new elemnt monster stats use to append 
const gameHolderEl = document.querySelector('.game-holder')
// Creating new element for the monster stats when we decide to attack
const monsterStatsHolder = document.createElement('div')
const monsterStats1 = document.createElement('div')
const monsterStats2 = document.createElement('div')
const monsterStats3 = document.createElement('div')
const monsterStats4 = document.createElement('div')
const monsterStats1p = document.createElement('p')
const monsterStats2p = document.createElement('p')
const monsterStats3p = document.createElement('p')
const monsterStats4p = document.createElement('p')
monsterStatsHolder.setAttribute('id', 'monster-stats-holder')
monsterStats1.setAttribute('id', 'monster-stats-1')
monsterStats2.setAttribute('id', 'monster-stats-2')
monsterStats3.setAttribute('id', 'monster-stats-3')
monsterStats4.setAttribute('id', 'monster-stats-4')



// Stats variable
let health = 100
let gold = 100
let xp = 0

// Price Variable
// This varible make the increment of the weapon price possible
let healthPrice = 15
let weaponPrice = 70

// Weapon Array Variable
// This variable just to collect the right array insisde of weaponList array
let myWeaponArray = 0

// NOTE: Function for the locations variable //The Api will work

// This specific variable and function dedicated to make the DOM possible by calling the function so it become dinamic and right now i dont know what i'm talking about good luck!

// Beast
// This function display what monster we dealing right now, and what power, health, level they have
let monsterArrVar = 0 //To collect monsterList object
let monsterName
let monsterHealth
let monsterLevel
let monsterPower
function monsterFunc(){
   monsterName = monsterList[monsterArrVar].monster
   monsterHealth = monsterList[monsterArrVar].health
   monsterLevel = monsterList[monsterArrVar].level
   monsterPower = monsterList[monsterArrVar].power
}
// Weapon
// This function display what weapon we use right now, and what power that our weapon have
let myWeaponName
let myWeaponPower
function myWeaponFunc(){
   myWeaponName = weaponList[myWeaponArray].weapon
   myWeaponPower = weaponList[myWeaponArray].power
}
// 10% of Gold
let gold10Percent
function gold10PercentFunc(){
   gold10Percent = gold * 0.1
   return gold10Percent
}

// This the function that responsible to make the function inside "locations" work
// place: cave
function messageInfoWhatCave(){
   gold10PercentFunc()
   myWeaponFunc()
   monsterFunc()

   return messageInfoEl.innerHTML = `You are in the <span>cave</span>. This cave is full of monster, kill one of the monster, win their gold and get some exp to make you more powerfull to kill the mighty dragon, and you can come back home safely.
   <br><br>
   You have the <span>${myWeaponName}</span> with <span>${myWeaponPower}</span> power
   <br><br>
   You will get gold by killing monster. The amount of gold that you get is depend with your health left after killing monster, your exp, and some luck. The bigger your health after killing monster and your exp make you get more gold!
   <br><br>
   But if you attacking the monster then you want to run you have to drop your 10% gold which is <span>${Math.floor(gold10Percent)}.`
}
// place:inside Cave
function messageInfoWhatInsideCave(){
   gold10PercentFunc()
   myWeaponFunc()
   monsterFunc()

   return messageInfoEl.innerHTML = `You're decide to fight with <span>${monsterName}</span>, this enemy have <span>${monsterPower}</span> power, and <span>${monsterHealth}</span> health
   <br>
   You can attack, Dodge or Run
   <br><br>
   -Attack : 
   <br>
   You will deal <span>${myWeaponPower}</span> damage with your <span>${myWeaponName}</span>. The monster have 70% chance to deal Damage to you by their power, 20% to get Critical Damage, and you have 10% chance to Dodge the damage
   <br><br>
   -Dodge :
   <br>
   You have 75% change to dodge enemy damage, and the monster have 15% chance to damage you by their 50% power. If you succed in dodging enemy attack your weapon power will incrase by 10%, this damage incrase don't have any limitations, however if you fail to dodge your power increase will reset.
   <br><br>
   -Run :
   If you Run you will lose 10% of your gold then you will get back to <span>cave</span>, your gold will drop by <span>${Math.floor(gold10Percent)}</span> the remaining of your gold will be <span>${Math.floor(gold - gold10Percent)}</span>.`
}
// place: kill monster
function messageInfoKillMonsterFunc(){
   return messageInfoEl.innerHTML =  `Congrats since you kill the <span>${monsterName}</span> you get some Gold and some XP. You can use your gold in the Store and use it to buy new weapon better than <span>${myWeaponArray}</span> so your power will increase or use your gold to restore your health. You can go back to <span>store</span>, <span>cave</span>, or <span>town</span> by using the button above.`
}
// place: die
function messageInfoDieFunc(){
   return messageInfoEl.innerHTML = `You die! Unfortunately you just killed by <span>${monsterName}</span>. You're journey must stop here but you can always respawn if you want to kill the Dragon and save civilization`
}

// NOTE: The API
const locations = [
   {
      place: "town square",
      'button text': ["go to store", "go to cave", "fight dragon"],
      'button function': [goToStore, goToCave, fightDragon],
      'message info': `
      Welcome to Dragon Repeller Hero. You must defeat the Dragon that is preventing people from leaving the town. You are in the <span id="place-name">town square</span> where do you want to go? Use the button above.
      <br><br>
      - Store : 
      <br>
      You can buy new Weapon, and restore your health by paying amount of gold
      <br><br>
      - Cave :
      <br>
      You can find monster and slaugther it for exp and gold, but you need to be carefull because they can also attack you and if you enter cave then attacking the monster but you want to back home your gold will drop behind by 10%, unless you kill the monster, you will get their gold that they hiding
      <br><br>
      - Fight Dragon :
      <br>
      The final boss if you want to fight the dragon make sure that you prepare well! Good luck Hero.`,
      'message what happens': ""
   }, {
      place: "store",
      'button text': ["buy 20 health", "buy weapon", "go to town square"],
      'button function': [buyHealth, buyWeapon, goToTown],
      'message info': `Hello Hero. You are in <span>store</span> now you can buy Weapon, Health. Use your strategy to defeat the Dragon.`,
      'message what happens': ""
   }, {
      place: "cave",
      'button text': ["fight slime", "fight beast", "back to town"],
      'button function': [fightSlime, fightBeast, goToTown],
      'message info': messageInfoWhatCave(),
      'message what happens': ""
   }, {
      place: "inside cave",
      'button text': ['attack', 'dodge', 'run'],
      'button function': [attack, 'dodge', run],
      'message info': messageInfoWhatInsideCave(),
      'message what happens': ""
   }, {
      place: "kill monster",
      'button text': ['go to store', 'go to cave', 'go to town'],
      'button function': [goToStore, goToCave, goToTown],
      'message info': messageInfoKillMonsterFunc(),
      'message what happens': ""
   }, {
      place: "die",
      'button text': ['respawn', 'none', 'none'],
      'button function': [respawn, 'none', 'none'],
      'message info': messageInfoDieFunc(),
      'message what happens': ""
   },  {
      place: "kill dragon",
      'button text': ['new game', 'none', 'none'],
      'button function': [newGame, 'none', 'none'],
      'message info': `Congrats Hero! you killed the migthy Dragon and save people from town. Now since the poeple is free you're duty is done. Thank You Hero!`,
      'message what happens': `You beat the <span>dragon</span> you can always start a new game`
   }
]

// NOTE: Append element function
// So the stats can show up
let monsterStatsIsOn = false
function appendMonsterStats(){
   monsterFunc()
   gameHolderEl.insertBefore(monsterStatsHolder, btnHolderEl.nextSibling)
   monsterStatsHolder.appendChild(monsterStats1)
   monsterStatsHolder.appendChild(monsterStats2)
   monsterStatsHolder.appendChild(monsterStats3)
   monsterStatsHolder.appendChild(monsterStats4)

   // Initate Content P New Element
   monsterStats1.innerHTML =  `Name:<span>${monsterName}</span>`
   monsterStats2.innerHTML =  `Health:<span>${monsterHealth}</span>`
   monsterStats3.innerHTML =  `Power:<span>${monsterPower}</span>`
   monsterStats4.innerHTML =  `Level:<span>${monsterLevel}</span>`
   // Turn ON monsterStatsIsOn
   monsterStatsIsOn = true
}

function removeMonsterStats(){
   monsterStatsHolder.removeChild(monsterStats1)
   monsterStatsHolder.removeChild(monsterStats2)
   monsterStatsHolder.removeChild(monsterStats3)
   monsterStatsHolder.removeChild(monsterStats4)
   monsterStatsHolder.remove()
   monsterStatsIsOn = false
}

// NOTE: Give display : none/block to 2 of 3 button

// Button display None
function buttonNoneFunc(){
   button2.style.display = 'none'
   button3.style.display = 'none'
}
// Button display None
function buttonShowFunc(){
   button2.style.display = 'block'
   button3.style.display = 'block'
}
// NOTE:Initiate the main code

// Initiate HTML Info text
healthEl.textContent = health.toString()
goldEl.textContent = gold.toString()
xpEl.textContent = xp.toString()
placeSpan.textContent = locations[0].place
// Initate Button Text HTML
button1.textContent = locations[0]['button text'][0]
button2.textContent = locations[0]['button text'][1]
button3.textContent = locations[0]['button text'][2]
// Initate Button Function
button1.onclick = locations[0]['button function'][0]
button2.onclick = locations[0]['button function'][1]
button3.onclick = locations[0]['button function'][2]
// Initiate message text
messageInfoEl.innerHTML = locations[0]["message info"]
messageWhatHappens.innerHTML = locations[0]["message what happens"]

// NOTE: The main function that make the code possible
// Don't change the code wont work
function update(e){
   placeSpan.textContent = locations[e].place
   button1.textContent = locations[e]['button text'][0]
   button2.textContent = locations[e]['button text'][1]
   button3.textContent = locations[e]['button text'][2]
   button1.onclick = locations[e]['button function'][0]
   button2.onclick = locations[e]['button function'][1]
   button3.onclick = locations[e]['button function'][2]    
   messageInfoEl.innerHTML = locations[e]["message info"]
   messageWhatHappens.innerHTML = locations[e]["message what happens"]
}

// Calling the update
// When we want to get back
function goToTown(){
   if (appendMonsterStats)
   if (monsterStatsIsOn === true){
      removeMonsterStats()
      monsterList[0].health = 15 
      monsterList[1].health = 45
      monsterList[2].health = 100
      monsterFunc()
   }
   update(0)
   buttonShowFunc()
   messageWhatHappens.style.color = "black"
   messageWhatHappens.innerHTML = `You go back to <span>town square</span>`
}

// When we want to go store
function goToStore(){
   if (monsterStatsIsOn === true){
      removeMonsterStats()
      monsterList[0].health = 15 
      monsterList[1].health = 45
      monsterList[2].health = 100
      monsterFunc()
   }
   update(1)
   buttonShowFunc()
   if (myWeaponArray < 6){
      button2.textContent += `(${weaponPrice.toString()})`
   } else {
      button2.textContent = `weapon is max`
   }
   button1.textContent += `(${healthPrice.toString()})`
}

// When we want to go cave
function goToCave(){
   if (monsterStatsIsOn === true){
      removeMonsterStats()
      monsterList[0].health = 15 
      monsterList[1].health = 45
      monsterList[2].health = 100
      monsterFunc()
   }
   update(2)
   buttonShowFunc()
   messageInfoWhatCave()
}


// Function in the store
function buyHealth(){
   if (gold >= healthPrice){
      health += 20
      healthEl.textContent = health.toString()
      gold -= healthPrice
      goldEl.textContent = Math.floor(gold)
      messageWhatHappens.innerHTML = `You buy health! Your health increase by <span>${health.toString()}</span>, you still have <span>${Math.floor(gold)}</span> gold left. Your health incrase by <span>10</span>`

   } else if (gold < healthPrice) {
      messageWhatHappens.innerHTML = `Sorry you don't have enough money to buy health`
      messageWhatHappens.style.color = "red"
   }
}
function buyWeapon(){
   if (myWeaponArray < 6 && gold > weaponPrice){
      myWeaponArray++
      myWeaponFunc()

      if (gold >= weaponPrice && myWeaponArray < 6){
         messageWhatHappens.innerHTML = `You buy new weapon! You pay <span>${weaponPrice}</span> gold. Congrats now you have <span>${myWeaponName}</span>. You have <span>${myWeaponPower}</span> attack damage, if you want buy another weapon you will have <span>${weaponList[myWeaponArray + 1].weapon}</span>`
         gold -= weaponPrice
         weaponPrice += 10
         button2.textContent = `buy weapon(${weaponPrice.toString()})`
      } else if (myWeaponArray === 6){
         messageWhatHappens.innerHTML = `You buy new weapon! You pay <span>${weaponPrice}</span> gold. Congrats now you have <span>${myWeaponName}</span>. You have <span>${myWeaponPower}</span> attack damage, congrats! Now you have the most powerfull weapon!</span>`
         button2.textContent = `weapon is max`
      } else if (gold < weaponPrice){
         messageWhatHappens.innerHTML = `Sorry you don't have enough gold to buy new weapon`
         messageWhatHappens.style.color = "red"
      }
   } else {
      messageWhatHappens.style.color = "red"
      messageWhatHappens.innerHTML = `You can't buy another weapon your weapon right now is the most powerfull weapon in this world`
   }
   goldEl.textContent = Math.floor(gold)
}

// Fight Function
function fightSlime(){
   monsterArrVar = 0
   update(3)
   appendMonsterStats()
   messageInfoWhatInsideCave()
}
function fightBeast(){
   monsterArrVar = 1
   update(3)
   appendMonsterStats()
   messageInfoWhatInsideCave()
}
function fightDragon(){
   monsterArrVar = 2
   update(3)
   messageInfoWhatInsideCave()
   appendMonsterStats()
}

// Figh Function

// NOTE: I leave the code here because it takes a lot of my time and i think i need to learn how data structure algorithm in javascript work it's just make me sore doing all this shit
// TODO: I have to add, dodge function and make if you win or lose or defeat the dragon
// Attack Function
function attack(){
   const probability = Math.floor(Math.random() * 10)
   const critMonDmgProb = Math.floor(Math.random() * monsterLevel) + monsterPower
   const monsterHealthAtt = monsterHealth - myWeaponPower
   let healthAtt = health
   if (probability <= 7){
      healthAtt -= monsterPower
   } else if (probability <= 9){
      healthAtt -= critMonDmgProb
   }
   
   if (monsterHealthAtt > 0 && healthAtt > 0){
      monsterList[monsterArrVar].health -= myWeaponPower
      monsterStats2.innerHTML =  `Health:<span>${monsterList[monsterArrVar].health}</span>`
      messageWhatHappens.innerHTML = `You decide to attack <span>${monsterName}</span>. You attack <span>${monsterName}</span> with your <span>${myWeaponName}</span>. You deal <span>${myWeaponPower}</span> to <span>${monsterName}</span>. `
      if (probability <= 7){
         health -= monsterPower
         healthEl.textContent = health.toString()
         messageWhatHappens.innerHTML += `You get <span>${monsterPower}</span> damage by <span>${monsterName}</span>`
      } else if (probability <= 9){
         health -= critMonDmgProb
         health.textContent = health.toString()
         messageWhatHappens.innerHTML += `You get <span>${critMonDmgProb}</span> critical damage by <span>${monsterName}</span>`
      } else {
         messageWhatHappens.innerHTML += `You dodge <span>${monsterName}</span> Attck. You get <span>0</span> damage because <span>${monsterName}</span> fail to attack you back`
      }
      console.log('console 1')
   } else if (monsterHealthAtt <= 0 && monsterArrVar !== 2){
      monsterList[monsterArrVar].health = 0
      monsterStats2.innerHTML =  `Health:<span>${monsterList[monsterArrVar].health}</span>`
      let randomGold = Math.floor(Math.random() * (monsterLevel + monsterPower) + (Math.floor(Math.random() * (health * 0.3)))) + xp
      let randomXp = Math.floor(Math.random() * monsterLevel) + 1
      gold += randomGold 
      xp += randomXp
      goldEl.textContent = gold.toString()
      xpEl.textContent = xp.toString()
      update(4)
      messageInfoKillMonsterFunc()
      if (probability <= 7){
         health -= monsterPower
         healthEl.textContent = health.toString()
         messageWhatHappens.innerHTML += `You get <span>${monsterPower}</span> damage by <span>${monsterName}</span>`
      } else if (probability <= 9){
         health -= critMonDmgProb
         health.textContent = health.toString()
         messageWhatHappens.innerHTML += `You get <span>${critMonDmgProb}</span> critical damage by <span>${monsterName}</span>`
      } else {
         messageWhatHappens.innerHTML += `You dodge <span>${monsterName}</span> Attck. You get <span>0</span> damage because <span>${monsterName}</span> fail to attack you back`
      }

      console.log('console 2')
   } else if (monsterHealthAtt <= 0 && monsterArrVar === 2){
      buttonNoneFunc()
      monsterList[monsterArrVar].health = 0
      monsterStats2.innerHTML =  `Health:<span>${monsterList[monsterArrVar].health}</span>`
      let randomGold = Math.floor(Math.random() * (monsterLevel + monsterPower) + (Math.floor(Math.random() * (health * 0.3)))) + xp
      let randomXp = Math.floor(Math.random() * monsterLevel) + 1
      gold += randomGold 
      xp += randomXp
      goldEl.textContent = gold.toString()
      xpEl.textContent = xp.toString()
      update(6)
      messageWhatHappens.innerHTML = `You can restart your game again by pressing <span>new game<span>`
      if (probability <= 7){
         health -= monsterPower
         healthEl.textContent = health.toString()
         messageWhatHappens.innerHTML += `You get <span>${monsterPower}</span> damage by <span>${monsterName}</span>`
      } else if (probability <= 9){
         health -= critMonDmgProb
         health.textContent = health.toString()
         messageWhatHappens.innerHTML += `You get <span>${critMonDmgProb}</span> critical damage by <span>${monsterName}</span>`
      } else {
         messageWhatHappens.innerHTML += `You dodge <span>${monsterName}</span> Attck. You get <span>0</span> damage because <span>${monsterName}</span> fail to attack you back`
      }

      console.log('console 2')
   } else if (healthAtt <= 0){
      health = 0
      healthEl.textContent = Math.floor(health.toString())
      buttonNoneFunc()
      update(5)
      messageInfoDieFunc()
      messageWhatHappens.innerHTML = `<span>${monsterName}</span> killed you, You're health is <span>${health}</span> press <span>respawn</span> to restart the game`
   }
   
   console.log(monsterList[monsterArrVar].health)
   console.log(monsterHealth)
   monsterFunc()
   console.log(monsterHealth)
}
// Run function
function run(){
   goToCave()
   gold = gold - gold10Percent
   goldRun = gold10Percent
   goldEl.textContent = Math.floor(gold.toString())
   gold10PercentFunc()
   messageInfoWhatCave()
   messageWhatHappens.innerHTML = `You just run from your fight, you drop your <span>${Math.floor(goldRun.toString())}</span> gold`
   console.log(monsterName, 'The monster')
   console.log(monsterArrVar, 'Monster Arr')
   monsterList[0].health = 15
   monsterList[1].health = 45
   monsterList[2].health = 100
   monsterFunc()
}

// Respawn After Die
function respawn(){
   monsterList[0].health = 15
   monsterList[1].health = 45
   monsterList[2].health = 100
   gold = 100
   health = 100
   xp = 0
   goldEl.textContent = gold.toString()
   healthEl.textContent = health.toString()
   xpEl.textContent = xp.toString()
   monsterArrVar = 0
   monsterStatsIsOn = false
   buttonShowFunc()
   removeMonsterStats()
   update(0)
}

//New game
function newGame(){
   monsterList[0].health = 15
   monsterList[1].health = 45
   monsterList[2].health = 100
   gold = 100
   health = 100
   xp = 0
   goldEl.textContent = gold.toString()
   healthEl.textContent = health.toString()
   xpEl.textContent = xp.toString()
   monsterArrVar = 0
   monsterStatsIsOn = false
   buttonShowFunc()
   removeMonsterStats()
   update(0)
}