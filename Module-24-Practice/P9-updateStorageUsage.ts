type UploadAction = {
    type: "upload";
    sizeMB: number;
};

type DeleteAction = {
    type: "delete";
    sizeMB: number;
};

function updateStorageUsage(
    currentUsageMB: number,
    action: UploadAction | DeleteAction
): number {

    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    } else {
        return Math.max(0, currentUsageMB - action.sizeMB);
    }
}

console.log(updateStorageUsage(2000, {
    type: "upload",
    sizeMB: 500
}));
// 2500

console.log(updateStorageUsage(2000, {
    type: "delete",
    sizeMB: 800
}));
// 1200

console.log(updateStorageUsage(300, {
    type: "delete",
    sizeMB: 1000
}));
// 0