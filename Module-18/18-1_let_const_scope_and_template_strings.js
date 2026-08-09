function countHashtags(caption) {
    // Write your code here...
    if (typeof caption !== "string") {
        return "Invalid"
    }


    let words = caption.split(" ");

    let hashtag = 0;
    let longestTag = 0;

    for (let word of words) {
        if (word.startsWith("#")) {
            hashtag = hashtag + 1;

            let fullWord = word.slice(1);

            if (fullWord.length > longestTag.length) {
                longestTag = fullWord;
            }
            return {hashtagCount: hashtag, longestTag: longestTag};

        }

    }
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
