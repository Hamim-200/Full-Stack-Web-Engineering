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


// =========Aggregation Pipeline — $match, $group, $project========

//  শুধু active চাকরিগুলো নিন
db.jobs.aggregate([
    { $match: { status: "active" } }
])

// $group — ডেটা গ্রুপ করুন
// প্রতিটা শহরে কতটা চাকরি আছে?
db.jobs.aggregate([
    {
        $group: {
            _id: "$location",
            totalJobs: { $sum: 1 }
        }
    }
])

// প্রতিটা শহরে গড় বেতন কত?
db.jobs.aggregate([
    {
        $group: {
            _id: "$location",
            avgSalary: { $avg: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            totalJobs: { $sum: 1 }
        }
    }
])

// $project — আউটপুট ফিল্ড কাস্টমাইজ করুন
// শুধু title এবং company দেখাও, _id বাদ দাও
db.jobs.aggregate([
    {
        $project: {
            title: 1,
            company: 1,
            _id: 0
        }
    }
])

// নতুন calculated ফিল্ড তৈরি করুন:
db.jobs.aggregate([
    {
        $project: {
            title: 1,
            salary: 1,
            monthlySalary: "$salary",
            annualSalary: { $multiply: ["$salary", 12] }
        }
    }
])

// শুধু active চাকরি নিয়ে, department অনুযায়ী গড় বেতন হিসাব করো, এবং সর্টেড আউটপুট দাও
db.jobs.aggregate([
    { $match: { status: "active" } },
    {
        $group: {
            _id: "$department",
            avgSalary: { $avg: "$salary" },
            jobCount: { $sum: 1 }
        }
    },
    {
        $project: {
            department: "$_id",
            avgSalary: { $round: ["$avgSalary", 0] },
            jobCount: 1,
            _id: 0
        }
    },
    { $sort: { avgSalary: -1 } }
])

db.companies.insertMany([
    { name: "TechCorp Bangladesh", founded: 2015, employees: 500, industry: "Software" },
    { name: "Digital Solutions", founded: 2018, employees: 120, industry: "Web" },
    { name: "AIVentures", founded: 2020, employees: 80, industry: "AI/ML" },
    { name: "CloudBase Ltd", founded: 2017, employees: 200, industry: "Cloud" },
    { name: "CreativeMinds", founded: 2019, employees: 50, industry: "Design" }
]);

// 📌 $lookup — দুটো Collection Join করুন
// মানে: 'এই collection-এর ডেটার সাথে অন্য collection-এর ডেটা যুক্ত করো

db.jobs.aggregate([
    {
        $lookup: {
            from: "companies",
            localField: "company",
            foreignField: "name",
            as: "companyDetails"
        }
    },
    {
        $project: {
            title: 1,
            salary: 1,
            companyDetails: 1,
            _id: 0
        }
    },
    { $limit: 5 }
])

// 📌 $unwind — অ্যারে Flat করুন
// মানে: 'অ্যারের প্রতিটা এলিমেন্টের জন্য আলাদা ডকুমেন্ট তৈরি করো
db.jobs.aggregate([
    {
        $lookup: {
            from: "companies",
            localField: "company",
            foreignField: "name",
            as: "companyDetails"
        }
    },
    { $unwind: "$companyDetails" },
    {
        $project: {
            title: 1,
            salary: 1,
            "companyDetails.industry": 1,
            "companyDetails.employees": 1,
            _id: 0
        }
    }
])

// $facet — একাধিক Pipeline একসাথে চালান
// মানে: 'একই ডেটার উপর একসাথে একাধিক ভিন্ন analysis করো'
// উদাহরণ: একটাই কুয়েরিতে — বেতন রেঞ্জ ব্রেকডাউন, লোকেশন ব্রেকডাউন, এবং Department ব্রেকডাউন

db.jobs.aggregate([
    { $match: { status: "active" } },
    {
        $facet: {
            salaryBuckets: [
                {
                    $bucket: {
                        groupBy: "$salary",
                        boundaries: [0, 30000, 60000, 90000, 150000],
                        default: "Other",
                        output: { count: { $sum: 1 }, avgSalary: { $avg: "$salary" } }
                    }
                }
            ],
            byLocation: [
                { $group: { _id: "$location", total: { $sum: 1 } } },
                { $sort: { total: -1 } }
            ],
            byDepartment: [
                { $group: { _id: "$department", avgSalary: { $avg: "$salary" } } },
                { $sort: { avgSalary: -1 } },
                { $limit: 5 }
            ]
        }
    }
])



