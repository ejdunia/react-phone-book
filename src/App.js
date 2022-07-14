import { useState } from "react";
import Person from "./components/Person";

function App() {
    const persons = [
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ];

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setNewFilter] = useState("");
    const [showAll, setShowAll] = useState(persons);

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value);
        setShowAll(
            persons.filter((person) =>
                person.name
                    .toLowerCase()
                    .includes(`${event.target.value.toLowerCase()}`)
            )
        );
    };

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleNumChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();
        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        };

        persons.map((person) => person.name).includes(newPerson.name)
            ? alert(`${newPerson.name} is already added`)
            : setShowAll(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
    };
    return (
        <div>
            <section>
                Filter names:{" "}
                <input onChange={handleFilterChange} value={filter} />
            </section>
            <h2>Phonebook</h2>
            <ul>
                {showAll.map((person) => (
                    <Person key={person.id} person={person} />
                ))}
            </ul>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleInputChange} />
                </div>
                <div>
                    Phone:
                    <input value={newNumber} onChange={handleNumChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            ...
        </div>
    );
}

export default App;
