//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    // Write your code here

    if(typeof student !== "object" ||!("name" in student) || !("age" in student) || !("course" in student) || student === null ){
        return "Invalid";
    }



    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

//Problem-02: Active User Filter
function filterActiveUsers(users) {
    // Write your code here

    if(!Array.isArray(users) || users.length === 0){
        return "Invalid";
    }

    for (let user of users ){
        if(!("isActive" in user)){
            return "Invalid";
        }
    }
    return users.filter(user => user.isActive === true);
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    // Write your code here...
    if (typeof caption !== "string") {
        return "Invalid"
    }


    let words = caption.split(" ");

    let hashtag = 0;
    let longestTag = "";

    for (let word of words) {
        if (word.startsWith("#")) {
            hashtag = hashtag + 1;

            let fullWord = word.slice(1);

            if (fullWord.length > longestTag.length) {
                longestTag = fullWord;
            }
        }
    }

    return {hashtagCount: hashtag, longestTag: longestTag};
}


//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    // Write your code here


    if (!Array.isArray (scores)) {
        return "Invalid";
    }

    if (scores.length === 0) {
        return "Invalid";
    }

    for (let scoress of scores) {
        if (typeof scoress !== "number") {
            return "Invalid";
        }
    }

    const updateMarks = scores.map(score => score+ 10);
    const tMarks = updateMarks.reduce((sum,scores) =>{
        return sum + scores;
    },0);

    return tMarks;
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray (students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (!("name" in student) || !("score" in student)) {
            return "Invalid";
        }

        if (typeof student.score !== "number") {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

