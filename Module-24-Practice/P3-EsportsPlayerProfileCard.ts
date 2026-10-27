type Player = {
    username: string;
    level: number;
    region: string;
};

function formatPlayerCard(player: Player): string { 

    return `${player.username} is Level ${player.level} and plays from ${player.region}`;
}

console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
