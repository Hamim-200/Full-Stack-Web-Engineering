type VehicleType = "scooter" | "ebike" | "moped";

function calculateRentalFee(
    vehicle: VehicleType,
    minutes: number
): number {

    const pricing = {
        scooter: { unlockFee: 10, perMinute: 2 },
        ebike: { unlockFee: 15, perMinute: 3 },
        moped: { unlockFee: 25, perMinute: 5 }
    };

    return pricing[vehicle].unlockFee +
        minutes * pricing[vehicle].perMinute;
}

console.log(calculateRentalFee("scooter", 20));
// 50

console.log(calculateRentalFee("ebike", 20));
// 75

console.log(calculateRentalFee("moped", 20));
// 125

console.log(calculateRentalFee("scooter", 0));
// 10