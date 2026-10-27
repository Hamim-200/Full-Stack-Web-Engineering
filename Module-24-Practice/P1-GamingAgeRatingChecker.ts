function getAgeRatingAccess(age: number): string {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age <= 16) {
        return "T (Teen)";
    }
    else {
        return "M (Mature)"
    }


}
console.log(getAgeRatingAccess(5));
// E (Everyone)

console.log(getAgeRatingAccess(10));
// E10+ (Everyone 10+)

console.log(getAgeRatingAccess(15));
// T (Teen)

console.log(getAgeRatingAccess(20));
// M (Mature)