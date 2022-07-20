import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import FormContainer from "./components/styles/FormContainer.styled";
import Container from "./components/styles/Container.styled";

function App() {
    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setNewFilter] = useState("");
    const [showAll, setShowAll] = useState(persons);

    useEffect(() => {
        console.log("effect");
        axios.get("http://localhost:3001/names").then((response) => {
            setPersons(response.data);
            setShowAll(persons);
        });
    }, []);

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
