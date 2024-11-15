// words generated from getrandomthings.com, put into ChatGPT to convert into array
let verbs = []; let adverbs = []; let adjectives = []; let nouns = [];

// resets words
function wordReset(){
    verbs = ["compete", "replace", "punish", "book", "queue", "wash", "bare", "ignore", "plug", "tempt", "perform", "concern", "reject", "nest", "whisper", "box", "sneeze", "contain", "test", "stamp", "fancy", "harass", "prevent", "shade", "plug", "steer", "deserve", "decorate", "hope", "challenge", "preserve", "concentrate", "glow", "ruin", "promise", "tap", "tire", "queue", "battle"];
    nouns = ["shoes", "wind", "quiver", "cave", "impulse", "woman", "plastic", "act", "burst", "insect", "cow", "bee", "judge", "jewel", "change", "ship", "battle", "blood", "nerve", "cover", "stocking", "purpose", "coat", "basketball", "pigs", "form", "guide", "chance", "mother", "cloth"];
    adjectives = ["lopsided", "filthy", "supreme", "icy", "parched", "breezy", "discreet", "conscious", "excited", "boundless", "yellow", "hissing", "jumpy", "fearless", "calculating", "romantic", "magical", "ashamed", "old", "cheap", "debonair", "agreeable", "empty", "frightening", "cynical", "cooperative", "hard", "political", "thundering", "modern"];
    adverbs = ["generally", "questioningly", "upliftingly", "forth", "smoothly", "anyway", "seemingly", "terribly", "devotedly", "generally", "broadly", "crossly", "knowledgeably", "faithfully", "strongly", "perfectly", "tomorrow", "rarely", "enormously", "essentially", "shrilly", "vacantly", "longingly", "irritably", "sleepily", "worriedly", "commonly", "rudely", "blindly", "vainly"];

    document.getElementById("nouns").value = nouns.join("\n")
    document.getElementById("verbs").value = verbs.join("\n")
    document.getElementById("adjectives").value = adjectives.join("\n")
    document.getElementById("adverbs").value = adverbs.join("\n")
}

// adds new words
function updateWords(){
    verbs = document.getElementById("verbs").value.split("\n")
    if(document.getElementById("verbs").value == ""){
        verbs = []
    }

    nouns = document.getElementById("nouns").value.split("\n")
    if(document.getElementById("nouns").value == ""){
        nouns = []
    }

    adjectives = document.getElementById("adjectives").value.split("\n")
    if(document.getElementById("adjectives").value == ""){
        adjectives = []
    }

    adverbs = document.getElementById("adverbs").value.split("\n")
    if(document.getElementById("adverbs").value == ""){
        adverbs = []
    }
}


// generater function
function generateSentence(){
    if(verbs.length == 0 || nouns.length == 0 || adjectives.length == 0 || adverbs.length == 0){
        alert("There must be at least one verb, noun, adjective and adverb specified. Could not create sentence.")
        return;
    }

    let chosen = {
        verb: verbs[generateRandomNum(verbs.length)],
        noun: nouns[generateRandomNum(nouns.length)],
        adjective: adjectives[generateRandomNum(adjectives.length)],
        adverb: adverbs[generateRandomNum(adverbs.length)]
    }
    
    // sentence
    let sentence = `The ${chosen.adjective} ${chosen.noun} ${chosen.verb} ${chosen.adverb}`;

    // places it into document
    let randomSentence = document.getElementById("randSent");
    randomSentence.style.display = "block";
    randomSentence.innerHTML = sentence;
}

// random func
function generateRandomNum(maxExclusive){
    let n = Math.floor(Math.random() * maxExclusive)
    return n;
}

// adds listener to sentence generator button
document.getElementById("sentenceGenButton").addEventListener("click",generateSentence)

// on load, resets words
wordReset();

// haiku gen, random words
function haikuGen(){
    let wordbank = {
        "1":["cat", "dog", "hat", "run", "sun", "bat", "man", "frog", "tree", "fish", "brick", "flame", "jump", "sky", "bird", "rock", "plane", "ship", "star", "grape"],
        "2":["apple", "candle", "purple", "happy", "river", "baby", "magic", "dancer", "summer", "parrot"],
        "3":["chocolate", "elephant", "beautiful", "family", "umbrella", "dangerous", "wonderful", "happiness", "tomorrow", "festival"],
        "4":["celebration", "determination", "imagination", "explanation", "destination", "organization", "transportation", "revolutionary", "appreciation", "education"]
    }

    let poem = `${generateWordsRow(5,wordbank)}<br>${generateWordsRow(7,wordbank)}<br>${generateWordsRow(5,wordbank)}`;

    let generatedHaiku = document.getElementById("generatedHaiku");
    generatedHaiku.style.display = "block";
    generatedHaiku.innerHTML = poem;
    
}

// generates a row of words
function generateWordsRow(lineSyllables,wordsXSyllables){
    let line = ""
    let syllablesRemain = lineSyllables
    while(syllablesRemain >=1){
        let maxGen = syllablesRemain; if(maxGen>4){maxGen=4};
        let nextWordSyllables = generateRandomNum(maxGen)+1
        let subset = wordsXSyllables[nextWordSyllables.toString()]
        line += `${subset[generateRandomNum(subset.length)]} `
        syllablesRemain -= nextWordSyllables;
    }
    return line;
}