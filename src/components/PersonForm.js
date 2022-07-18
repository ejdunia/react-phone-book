// import Input from "./Input";
import StyledForm from "./styles/StyledForm.styled";
import Button from "./Button";
import CancelButton from "./CancelButton";
const PersonForm = ({
    onSubmit,
    handleNameInputChange,
    newName,
    handleNumInputChange,
    newNumber,
}) => {
    return (
        <div>
            <StyledForm onSubmit={onSubmit}>
                <div>
                    Name:{" "}
                    <input onChange={handleNameInputChange} value={newName} />
                </div>
                <div>
                    Phone:
                    <input
                        type={"number"}
                        onChange={handleNumInputChange}
                        value={newNumber}
                    />
                </div>
                <div>
                    <Button Primary type={"submit"} text={"Add"} />
                    <CancelButton
                        type={"reset"}
                        value={"reset"}
                        text={"Clear"}
                    />
                </div>
            </StyledForm>
        </div>
    );
};

export default PersonForm;
