import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import FormContainer from "./components/styles/FormContainer.styled";
import Container from "./components/styles/Container.styled";
function App() {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);

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

    const handleNameInputChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    };

    const handleNumInputChange = (event) => {
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
            : setPersons(persons.concat(newPerson));
        setShowAll(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
    };
    return (
        <Container>
            <h2>Phonebook</h2>
            <FormContainer>
                <Filter onChange={handleFilterChange} value={filter} />

                <PersonForm
                    onSubmit={addPerson}
                    handleNameInputChange={handleNameInputChange}
                    handleNumInputChange={handleNumInputChange}
                    newName={newName}
                    newNumber={newNumber}
                />
            </FormContainer>

            <h2>Numbers</h2>
            <p>
                "Build 10 dynamic reusable components (form, input, button,
                table, checkbox, data table)"
            </p>
            <Persons personList={showAll} />
        </Container>
    );
}

export default App;
