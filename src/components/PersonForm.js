// import Input from "./Input";
// import Button from "./Button";
const PersonForm = ({
    onSubmit,
    handleNameInputChange,
    newName,
    handleNumInputChange,
    newNumber,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input onChange={handleNameInputChange} value={newName} />
            </div>
            <div>
                Phone:
                <input onChange={handleNumInputChange} value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;
