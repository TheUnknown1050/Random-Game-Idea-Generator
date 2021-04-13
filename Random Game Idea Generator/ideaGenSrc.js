let locations = [
    "a forest",
    "a creepy forest",
    "a jungle",
    "a creepy jungle",
    "a school",
    "your school",
    "a broken down school",
    "an abandoned school",
    "your basement",
    "your old abandoned houses basement",
    "a hacked computer",
    "outer space"
]

let goals = [
    "get to a beacon",
    "protect it",
    "help everyone there",
    "save your friend",
    "save someone",
    "get to the castle and defeat the king",
    "make contact with aliens",
    "progress through the world"
]

let genres = [
    "adventure",
    "first person shooter",
    "third person shooter",
    "sandbox",
    "simulation",
    "puzzle",
    "action",
    "sports",
    "RPG (Role Playing Game)",
    "couch Co-op",
    "couch PVP",
    "platformer",
    "horror",
    "survival",
    "parkour"
]

let extraPowers = [
    "a jetpack",
    "teleportation",
    "flying",
    "2 times speed",
    "invisiblity",
    "mind reading",
    "talking to animals",
    "being able to walk through walls",
    "making portals to teleport wherever you want"
]


let pickedLocation;
let pickedGoal;
let pickedGenre;
let pickedExtraPower;

let final = null;

function generate(){
    pickedLocation = locations[Math.floor(Math.random() * locations.length)];
    pickedGoal = goals[Math.floor(Math.random() * goals.length)];
    pickedGenre = genres[Math.floor(Math.random() * genres.length)];
    pickedExtraPower = extraPowers[Math.floor(Math.random() * extraPowers.length)];

    final = `A game that takes place in ${pickedLocation} and the goal is to ${pickedGoal}, with a genre of ${pickedGenre} and ${pickedExtraPower} is the players extra power.`;
    document.getElementById("answerSlot").innerHTML = final;
}
