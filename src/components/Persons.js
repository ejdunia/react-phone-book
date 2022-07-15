import Person from "./Person";
const Persons = ({ personList }) => (
    <ul>
        {personList.map((person) => (
            <Person person={person} />
        ))}
        ;
    </ul>
);
