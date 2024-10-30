const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

const peopleNames = people.map(({ name }) => name);

console.log(peopleNames.join(", "));

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
