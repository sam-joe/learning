import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import RenderingComponent from "./RenderingComponent";

const employeeDetails = [
  {
    name: "sam",
    id: 1,
  },
  {
    name: "Rashmi",
    id: 2,
  },
  {
    name: "Chandran",
    id: 3,
  },
  {
    name: "Joe",
    id: 4,
  },
  {
    name: "sam 1",
    id: 5,
  },
  {
    name: "sam 2",
    id: 6,
  },
];

const EmployeeNames = () => {
  const [employee, setEmployee] = useState([...employeeDetails]);
  const [number, setNumber] = useState(""); //useMemo
  const [text, settext] = useState(""); //useCallBack

  const dummyData = useMemo(() => {
    console.log("change occured");
    const data: string[] = [];
    for (let i = 0; i < 100; i++) {
      data.push(number);
    }
    return data;
  }, [number]);
  const updator = useCallback(() => {
    console.log("updated");
  }, [text]);
  //   const dummyData = () => {
  //     console.log("change occured without memo");
  //     const data: string[] = [];
  //     for (let i = 0; i < 100; i++) {
  //       data.push(number);
  //     }
  //     return data;
  //   };
  const deleteEmployee = (index: number) => {
    let dummy = [...employee];
    dummy.splice(index, 1);
    setEmployee(dummy);
  };
  return (
    <>
      <input value={text} onChange={(e) => settext(e.target.value)} />

      <ul>
        {employee.map((el, index) => {
          return (
            <li key={el.id}>
              <div></div>
              <input defaultValue={`sam ${el.id}`} /> {index} {el.id}
              <button onClick={() => deleteEmployee(index)}>delete</button>
            </li>
          );
        })}
      </ul>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <RenderingComponent clickMe={updator} dummyData={dummyData} />
    </>
  );
};

export default EmployeeNames;
