let button = document.getElementById("squeeze");

// words generated from getrandomthings.com, put into ChatGPT to convert into array
let verbs = ["compete", "replace", "punish", "book", "queue", "wash", "bare", "ignore", "plug", "tempt", "perform", "concern", "reject", "nest", "whisper", "box", "sneeze", "contain", "test", "stamp", "fancy", "harass", "prevent", "shade", "plug", "steer", "deserve", "decorate", "hope", "challenge", "preserve", "concentrate", "glow", "ruin", "promise", "tap", "tire", "queue", "battle"];
let nouns = ["shoes", "wind", "quiver", "cave", "impulse", "woman", "plastic", "act", "burst", "insect", "cow", "bee", "judge", "jewel", "change", "ship", "battle", "blood", "nerve", "cover", "stocking", "purpose", "coat", "basketball", "pigs", "form", "guide", "chance", "mother", "cloth"];
let adjectives = ["lopsided", "filthy", "supreme", "icy", "parched", "breezy", "discreet", "conscious", "excited", "boundless", "yellow", "hissing", "jumpy", "fearless", "calculating", "romantic", "magical", "ashamed", "old", "cheap", "debonair", "agreeable", "empty", "frightening", "cynical", "cooperative", "hard", "political", "thundering", "modern"];
let adverbs = ["generally", "questioningly", "upliftingly", "forth", "smoothly", "anyway", "seemingly", "terribly", "devotedly", "generally", "broadly", "crossly", "knowledgeably", "faithfully", "strongly", "perfectly", "tomorrow", "rarely", "enormously", "essentially", "shrilly", "vacantly", "longingly", "irritably", "sleepily", "worriedly", "commonly", "rudely", "blindly", "vainly"];

// generater function
function generateSentence(){
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

function shout(){
    alert("... and I squeak");
}
button.addEventListener("click", shout);

// adds listener to sentence generator button
document.getElementById("sentenceGenButton").addEventListener("click",generateSentence)