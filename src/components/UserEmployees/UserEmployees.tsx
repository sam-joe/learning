import React from "react";
import FunctionHoc from "../FunctionHoc/FunctionHoc";

const UserEmployees = (props: any) => {
  return (
    <>
      <h2>user</h2>
      <ul>
        {props.data.map((el: any) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};
const HocUserEmployee = FunctionHoc(UserEmployees, "user");
export default HocUserEmployee;
