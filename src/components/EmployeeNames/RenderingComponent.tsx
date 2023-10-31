import React, { MouseEventHandler } from "react";
const RenderingComponent = ({
  dummyData = [],
  clickMe = () => {},
}: {
  dummyData: string[];
  clickMe?: MouseEventHandler<HTMLButtonElement>;
}) => {
  console.log("rendereed");
  return (
    <>
      {dummyData.map((el, index) => (
        <>
          <p key={index}>{el}</p>
          <button onClick={clickMe}>Click me</button>
        </>
      ))}
    </>
  );
};

export default React.memo(RenderingComponent);
