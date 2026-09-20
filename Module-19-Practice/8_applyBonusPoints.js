function applyBonusPoints(users, bonus) {
    return users.map(user => ({ ...user, point: user.points + bonus }));
}

console.log(applyBonusPoints(users = [{ name: "Rafi", points: 20 }], bonus = 5))