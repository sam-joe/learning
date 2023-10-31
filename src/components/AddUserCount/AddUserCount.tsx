import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  padding: 2rem;
  p {
    height: 5rem;
    padding: 2rem;
  }
  .action-btns {
    padding: 2rem 0;
    button {
      margin-right: 2rem;
      padding: 1rem 2rem;
      color: var(--primary);
      font-size: 1.6rem;
    }
  }
`;
const messageComponent = {
  error: <p>Cant add more number</p>,
  no_error: <p> more number can be added</p>,
};

let errorInitialState = {
  remove: false,
  add: false,
};
const AddUserCount = () => {
  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState({ ...errorInitialState });
  const message = showError.add || showError.remove ? "error" : "no_error";
  // runs one time
  useEffect(() => {
    // console.log("runs one time");
  }, []);

  // runs everytime
  useEffect(() => {
    // console.log("runs everytime any change occurs");
  });

  // run on variable change
  useEffect(() => {
    let errors = { ...errorInitialState };
    console.log(errorInitialState);
    if (count >= 5) {
      errors = {
        remove: false,
        add: true,
      };
    }
    if (count <= 0) {
      errors = {
        add: false,
        remove: true,
      };
    }
    setShowError(errors);
    return () => {
      setShowError(errorInitialState);
      console.log("unmount completed");
    };
  }, [count]);

  const addCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const removeCount = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };
  return (
    <Wrapper>
      <h2>Total user count</h2>
      <p>{count}</p>
      <div className="action-btns">
        <button onClick={addCount} disabled={showError.add}>
          add
        </button>
        <button onClick={removeCount} disabled={showError.remove}>
          remove
        </button>
      </div>
      {messageComponent[message]}
    </Wrapper>
  );
};

export default AddUserCount;
