interface Player2 {
    name: string;
    scores: number[];
}

function getPlayerStats(player: Player2): { name: string; average: number; rank: string } {
    const total = player.scores.reduce((sum, score) => sum + score, 0);

    const average = player.scores.length === 0
        ? 0
        : total / player.scores.length;

    const rank = average >= 80 ? "MVP" : "Rookie";

    return {
        name: player.name,
        average: average,
        rank: rank
    };
}

console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
// { name: "Nova", average: 87.5, rank: "MVP" }

console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
// { name: "Zex", average: 58.75, rank: "Rookie" }

console.log(getPlayerStats({
    name: "Zero",
    scores: []
}));
// { name: "Zero", average: 0, rank: "Rookie" }