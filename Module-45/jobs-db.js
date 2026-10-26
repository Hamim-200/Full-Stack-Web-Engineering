// Find all data 
db.jobs.find().toArray();
db.company.find().toArray();

// Total Count
db.jobs.countDocuments();
db.company.countDocuments();

// Find First Document
db.jobs.findOne();
db.company.findOne();

// শুধু Dhaka-র চাকরি দেখাও
db.jobs.find({ location: { $eq: "Dhaka" } })

// Dhaka ছাড়া অন্য সব জায়গার চাকরি দেখাও
db.jobs.find({ location: { $ne: "Dhaka" } })

// ৭০ হাজারের বেশি বেতনের চাকরি দেখাও
db.jobs.find({ salary: { $gt: 70000 } })

// ঠিক ৭০ হাজার বা তার বেশি বেতনের চাকরি
db.jobs.find({ salary: { $gte: 70000 } })

//  ৫০ হাজারের কম বেতনের এন্ট্রি-লেভেল চাকরি
db.jobs.find({ salary: { $lt: 50000 } })

// ৫০ হাজার থেকে ৯০ হাজারের মধ্যে বেতনের চাকরি
db.jobs.find({
    salary: { $gte: 50000, $lte: 90000 }
})

// ৩ বছরের বেশি অভিজ্ঞতা এবং বেতন ৬০ হাজারের বেশি
db.jobs.find({
    experience: { $gt: 3 },
    salary: { $gt: 60000 }
})

//=============Logical Operator ==============
// Dhaka-তে এবং বেতন ৭০ হাজারের বেশি
db.jobs.find({
    $and: [
        { location: "Dhaka" },
        { salary: { $gt: 70000 } }
    ]
})

// Dhaka অথবা Chittagong-এর চাকরি দেখাও
db.jobs.find({
    $or: [
        { location: "Dhaka" },
        { location: "Chittagong" }
    ]
})

// বেতন ১ লাখের বেশি অথবা Remote চাকরি
db.jobs.find({
    $or: [
        { salary: { $gt: 100000 } },
        { isRemote: true }
    ]
})

// ৫০ হাজারের বেশি বেতনের চাকরি নয় — মানে ৫০ হাজার বা কম
db.jobs.find({
    salary: { $not: { $gt: 50000 } }
})

// Dhaka-তেও না, Remote-ও না — মানে অন্য শহরে অফিসে যেতে হবে
db.jobs.find({
    $nor: [
        { location: "Dhaka" },
        { isRemote: true }
    ]
})
//=============Element & Type Operators==============

// $exists — ফিল্ড আছে কিনা চেক করুন
// যেসব জব-এ salary ফিল্ড আছে
db.jobs.find({ salary: { $exists: true } })


// যেসব জব-এ salary ফিল্ড নেই:
db.jobs.find({ salary: { $exists: false } })


//salary ফিল্ড যেগুলোতে number আছে 
db.jobs.find({ salary: { $type: "number" } })

// skills ফিল্ড যেগুলোতে array আছে
db.jobs.find({ skills: { $type: "array" } })

//=============Array Query Operators==============
// Python অথবা JavaScript জানা দরকার এমন চাকরি

db.jobs.find({
    skills: { $in: ["Python", "JavaScript"] }
})

// Dhaka, Chittagong, বা Sylhet-এর চাকরি
db.jobs.find({
    location: { $in: ["Dhaka", "Chittagong", "Sylhet"] }
})

// Python বা JavaScript ছাড়া অন্য স্কিলের চাকরি
db.jobs.find({
    skills: { $nin: ["Python", "JavaScript"] }
})

// Python এবং SQL দুটোই জানা দরকার এমন চাকরি
db.jobs.find({
    skills: { $all: ["Python", "SQL"] }
})

// যেসব চাকরিতে ঠিক ৩টা স্কিল লাগবে
db.jobs.find({ skills: { $size: 3 } })

db.jobs.insertOne({
    title: "Senior Developer",
    company: "BigTech",
    interviews: [
        { round: 1, score: 85, passed: true },
        { round: 2, score: 70, passed: false }
    ]
})

db.jobs.find({
    interviews: {
        $elemMatch: {
            score: { $gt: 80 },
            passed: true
        }
    }
})


//=============Update Operators==============
// TechCorp Bangladesh-এর Software Engineer-এর বেতন ৮০ হাজার করো
db.jobs.updateOne(
    { title: "Software Engineer", company: "TechCorp Bangladesh" },
    { $set: { salary: 80000 } }
)

db.jobs.updateOne(
    { title: "Software Engineer" },
    { $set: { salary: 80000, status: "hiring", updatedAt: new Date() } }
)

// Data Analyst-এ নতুন ১০ জন আবেদন করেছে
db.jobs.updateOne(
    { title: "Data Analyst" },
    { $inc: { applicants: 10 } }
)

// Frontend Developer-এর স্কিল লিস্টে TypeScript যোগ করো
db.jobs.updateOne(
    { title: "Frontend Developer" },
    { $push: { skills: "TypeScript" } }
)

// UI/UX Designer-এর স্কিল থেকে Sketch বাদ দাও
db.jobs.updateOne(
    { title: "UI/UX Designer" },
    { $pull: { skills: "Sketch" } }
)

// ========Projection & Sorting============
// শুধু title, company, salary দেখাও
db.jobs.find(
    {},
    { title: 1, company: 1, salary: 1, _id: 0 }
)

// সব ফিল্ড দেখাও কিন্তু _id এবং applicants বাদ দাও
db.jobs.find(
    {},
    { _id: 0, applicants: 0 }
)

// বেতন বেশি থেকে কম অর্ডারে দেখাও:
db.jobs.find({}, { title: 1, salary: 1, _id: 0 }).sort({ salary: -1 })

// প্রথমে location A-Z, তারপর salary বেশি থেকে কম:
db.jobs.find().sort({ location: 1, salary: -1 })

// প্রথম ৫টা চাকরি দেখাও:
db.jobs.find().limit(5)


