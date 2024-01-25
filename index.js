const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];
function main() {
  const cumsock = document.getElementById("root");
  const sukmadik = document.createElement("h1");
  sukmadik.textContent = "FREELANCERS";
  cumsock.appendChild(sukmadik);
  const ligmabllz = document.createElement("ul");
  users.forEach((person) => {
    const list = document.createElement("li");
    list.textContent = `${person.name}, ${person.age}, ${person.occupation}`;
    ligmabllz.appendChild(list);
  });
  cumsock.appendChild(ligmabllz);
}

//call the main function
main();
