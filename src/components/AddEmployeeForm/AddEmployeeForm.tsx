import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { emailRegex, onlyAlphaRegex } from "../../configs/config";

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

const AddEmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const onHandleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = "" + e.target.value;
    if (onlyAlphaRegex.test(value)) setName(value);
  };

  const onHandleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = "" + e.target.value;
    setEmail(value);
  };
  const onHandleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };
  const addEmployee = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = {
      name,
      email,
      dob,
    };
    console.log(response);
  };
  return (
    <Wrapper>
      <form onSubmit={addEmployee}>
        <div>
          <label>Name</label>
          <input value={name} onChange={onHandleNameChange} type="text" />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={onHandleEmailChange} type="email" />
        </div>
        <div>
          <label>Date of Birth</label>
          <input value={dob} onChange={onHandleDateChange} type="date" />
        </div>
        <div>
          <button type="submit">Add Employee</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddEmployeeForm;
