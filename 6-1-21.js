// Crash Override

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

function aliasGen(){
    // Code Heree
  let guide = {
    'A': 'Alpha', 
    'B': 'Beta',
    'C': 'Cache', 
    'D': "Data",
    'E': "Evil",
    'F': 'Function',
    'G': 'Git',
    'H': 'Half-life',
    'I': 'Indigo',
    'J': 'Jabber',
    'K': 'Killer',
    'L': 'Loser',
    'M': 'Malware',
    'N': 'Node',
    'O': 'Optimus',
    'P': 'Payload',
    'Q': 'Quantum',
    'R': 'Rodeo',
    'S': 'Spy',
    'T': 'T-Rex',
    'U': 'Upsilon',
    'V': 'Five',
    'W': 'Worm',
    'X': 'Xylophone',
    'Y': 'Y',
    'Z': 'Zero'
  }
  let first = guide[arguments[0][0].toUpperCase()];
  let last = guide[arguments[1][0].toUpperCase()];
  if (first == last) { last = arguments[0]}
  if (!first || !last) return 'Your name must start with a letter from A - Z.'
  else return `${first} ${last}`
}

// ^^Need to make changes to have a first name guide and a last name guide