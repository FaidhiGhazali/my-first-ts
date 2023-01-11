// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Faidhi",
//     age: 30,
//     hobbies: ["Sport", "Cooking"],
//     role: [1,"author"]
// }

// person.role.push(3)

enum Role {admin,author,read_only}

const person = {
    name: "Faidhi",
    age: 30,
    hobbies: ["Sport", "Cooking"],
    role: Role.author
}


if (person.role == Role.admin) {
    console.log("is admin")
} else {
    console.log("not admin")
}