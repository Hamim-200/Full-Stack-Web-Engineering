type Gender = "male" | "female" | "other";

type Student = {
    name: string;
    roll: number;
    major: string;
    gpa?: number;
    gender?: Gender;
}

const robin: Student = {
    name: "Robin",
    roll: 2,
    major: "Computer Science",
    gpa: 3.5,
}

const mobin: Student = {
    name: "Mobin",
    roll: 3,
    major: "Computer Science",
    gpa: 3.8,
}

const jobin: Student = {
    name: "Jobin",
    roll: 4,
    major: "Computer Science",
    gpa: 3.9,
}