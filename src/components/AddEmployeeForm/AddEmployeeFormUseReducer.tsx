import { ChangeEvent, FormEvent, useReducer } from "react";
import styled from "styled-components";
import { onlyAlphaRegex } from "../../configs/config";

const Wrapper = styled.section`
  width: 100%;
  min-height: 70rem;

  display: grid;
  place-items: center;

  form {
    min-width: 42rem;
    border: 0.1rem solid var(--primary);
    border-radius: 1rem;
    padding: 2rem;
    div {
      padding: 1rem;
      label {
        display: block;
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }
      input {
        width: 100%;
        padding: 1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.6rem;
        color: var(--secondary);
      }
    }
  }
`;
type FormValue = {
  name: string;
  email: string;
  dob: string;
};

const initialStateOfForm: FormValue = {
  name: "",
  email: "",
  dob: "",
};

const reducerFunction = (
  state: FormValue,
  action: { type: string; payload: string }
) => {
  const { type = "", payload = "" } = action;
  let value = payload;
  switch (type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: onlyAlphaRegex.test(value) ? payload : state.name,
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "UPDATE_DOB":
      return {
        ...state,
        dob: payload,
      };

    default:
      return state;
  }
};

const AddEmployeeFormUseReducer = () => {
  const [formValue, dispatchForm] = useReducer(
    reducerFunction,
    initialStateOfForm
  );

  const onHandleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = "" + e.target.value;
    dispatchForm({ type: "UPDATE_NAME", payload: value });
  };

  const onHandleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = "" + e.target.value;
    dispatchForm({ type: "UPDATE_EMAIL", payload: value });
  };
  const onHandleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = "" + e.target.value;

    dispatchForm({ type: "UPDATE_DOB", payload: value });
  };
  const addEmployee = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <Wrapper>
      <form onSubmit={addEmployee}>
        <div>
          <label>Name</label>
          <input
            value={formValue.name}
            onChange={onHandleNameChange}
            type="text"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            value={formValue.email}
            onChange={onHandleEmailChange}
            type="email"
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            value={formValue.dob}
            onChange={onHandleDateChange}
            type="date"
          />
        </div>
        <div>
          <button type="submit">Add Employee</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddEmployeeFormUseReducer;
