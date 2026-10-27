type Tier = "free" | "pro" | "premium";

function canAccessOfflineMode(tier: Tier): boolean {
    return tier === "pro" || tier === "premium";
}

console.log(canAccessOfflineMode("free"));
// false

console.log(canAccessOfflineMode("pro"));
// true

console.log(canAccessOfflineMode("premium"));
// true