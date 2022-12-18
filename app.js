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
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["author"] = 1] = "author";
    Role[Role["read_only"] = 2] = "read_only";
})(Role || (Role = {}));
var person = {
    name: "Faidhi",
    age: 30,
    hobbies: ["Sport", "Cooking"],
    role: Role.admin
};
if (person.role == Role.admin) {
    console.log("is admin");
}
