import Person from "./components/Person";

const Persons = ({ personList }) => {
    // console.log(personList);
    return (
        <ul>
            {personList.map((person) => (
                <Person key={person.id} person={person} />
            ))}
        </ul>
    );
};

export default Persons;
