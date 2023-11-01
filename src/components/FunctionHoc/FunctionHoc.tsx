import React, { useEffect, useState } from "react";

const employeeDetails = [
  {
    name: "sam",
    id: 1,
    category: "user",
  },
  {
    name: "Rashmi",
    id: 2,
    category: "admin",
  },
  {
    name: "Chandran",
    id: 3,
    category: "user",
  },
  {
    name: "Joe",
    id: 4,
    category: "user",
  },
  {
    name: "sam 1",
    id: 5,
    category: "user",
  },
  {
    name: "sam 2",
    id: 6,
    category: "admin",
  },
];

const FunctionHoc = (Component: any, filter_entity: string) => {
  return () => {
    const [data, setData] = useState([...employeeDetails]);
    useEffect(() => {
      if (filter_entity) {
        const newData = data.filter((el) => {
          if (el.category === filter_entity) return true;
          return false;
        });
        setData(newData);
      }
    }, [filter_entity]);

    return (
      <div>
        <header>asdasda</header>
        <Component data={data} />
        <footer>footer</footer>
      </div>
    );
  };
};

export default FunctionHoc;
