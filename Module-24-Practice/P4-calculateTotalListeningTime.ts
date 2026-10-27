type Track = {
    title:string;
    minutes:number;
}

function calculateTotalListeningTime(tracks: Track[]): number { 
  return tracks.reduce((total,track) => total+track.minutes,0);
} 


const tracks: Track[] = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];

console.log(calculateTotalListeningTime(tracks));
// 10

console.log(calculateTotalListeningTime([]));
// 0