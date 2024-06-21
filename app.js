// Arrays containing different parts of sentences
let array1 = ["The turkey", "Mum", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let array2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let array3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let array4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let array5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

var arrayofarrays = [array1, array2, array3, array4, array5];

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Query the button element
var speakButton = document.querySelector('button');

let string1, string2, string3, string4, string5;
let storystring = "";

/* Functions
-------------------------------------------------- */
// Function to speak a given string
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

// Function to speak the story string
function speakstory(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

// Helper function to trigger animation
function triggerAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; 
    element.style.animation = null;
    element.style.animation = "fadeIn 2s ease-in-out";
}

// Event listener for the subject button
document.getElementById("1").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array1.length);
    string1 = array1[randomindex];
    document.getElementById("area1").value = string1;
    triggerAnimation(area1);
    console.log(string1);
});

// Event listener for the verbs button
document.getElementById("2").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array2.length);
    string2 = array2[randomindex];
    document.getElementById("area2").value = string2;
    triggerAnimation(area2);
    console.log(string2);
});

// Event listener for the adjectives button
document.getElementById("3").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array3.length);
    string3 = array3[randomindex];
    document.getElementById("area3").value = string3;
    triggerAnimation(area3);
    console.log(string3);
});

// Event listener for the nouns button
document.getElementById("4").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array4.length);
    string4 = array4[randomindex];
    document.getElementById("area4").value = string4;
    triggerAnimation(area4);
    console.log(string4);
});

// Event listener for the object button
document.getElementById("5").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array5.length);
    string5 = array5[randomindex];
    document.getElementById("area5").value = string5;
    triggerAnimation(area5);
    console.log(string5);
});

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above variables
document.getElementById("speak").addEventListener("click", function() {
    addedstring = combine(string1, string2, string3, string4, string5);
    console.log(addedstring);
    const area = document.getElementById("area");
    area.value = addedstring;
    triggerAnimation(area);
    speakNow(addedstring);
});

// Function to combine each of the 5 different strings into a single sentence
function combine(string1, string2, string3, string4, string5) {
    console.log("combine " + string1);
    let newstring = string1 + " " + string2 + " " + string3 + " " + string4 + " " + string5;
    console.log(newstring);
    return newstring;
}

// Event listener for generating the full story
document.getElementById("story").addEventListener("click", function() {
    storystring = "";
    for (let j = 1; j <= 20; j++) {
        for (let i = 0; i < arrayofarrays.length; i++) {
            let randomindex = Math.floor(Math.random() * arrayofarrays[i].length);
            storystring += arrayofarrays[i][randomindex] + " ";
        }
        if (storystring.endsWith(" ")) {
            storystring = storystring.trim() + ". ";
        }
    }
    document.getElementById("storyarea").value = storystring;
    triggerAnimation(storyarea);
    console.log(storystring);
});

// Event listener to read the story aloud
document.getElementById("speakstory").addEventListener("click", function() {
    speakstory(storystring);
});

// Event listener to stop reading the story
document.getElementById("stopspeaking").addEventListener("click", function() {
    synth.cancel();
});

