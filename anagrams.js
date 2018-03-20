
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function() {
    // object with key/value pairs 
    //  anagramSets = {
    // "ailr": ["lair", "liar", "rail"],
    // "aelst": ["least", "steal", ... ],
    //  ...
    // };
    var anagramSets = {};

    //Clear any previous results
    var outputDiv = document.getElementById("results");
    outputDiv.innerHTML = "";

    //Loop through the words dictionary and add to anagrams object
    for (var i = 0; i < words.length; i++){
        var word = words[i];   
        var sortedWord = alphabetize(word);
        if (sortedWord in anagramSets){
            anagramSets[sortedWord].push(word);
        } else {
            anagramSets[sortedWord] = [word];
        }
    }

    //Output the anagrams by looping through each key/value pair
    //Display keys where there are at least 5 values
    for(var sortedWord in anagramSets) {
        var set = anagramSets[sortedWord];
        if (set.length >= 5){
            var separator = ",";
            var output = "";
            for (var i=0; i<set.length; i++){
                if (i === set.length-1){
                    output += set[i];
                } else {
                    output += set[i] + separator;
                }
                
            }
        outputDiv.innerHTML += sortedWord + ": " + output + "<br>";
        } else {
            continue;
        }
        
     }
    
 }