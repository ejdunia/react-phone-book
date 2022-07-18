// import ReactTable from "react-table";
// import { useTable } from 'react-table';
import Person from "./Person";

const Persons = ({ personList }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Number</td>
                </tr>
                {personList.map((person) => (
                    <Person key={person.id} person={person} />
                ))}
            </tbody>
        </table>
    );
};

export default Persons;
