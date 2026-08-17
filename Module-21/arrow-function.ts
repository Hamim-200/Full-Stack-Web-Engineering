// const getLargerName = (name1, name2) => {
//     if (name1.length > name2.length) {
//         return name1;
//     }
//     return name2;
// }

const getLargerName = (name1:string, name2:string) : string => {
    if (name1.length > name2.length) {
        return name1;
    }
    return name2;
}