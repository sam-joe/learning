import FunctionHoc from "../FunctionHoc/FunctionHoc";

const AdminEmployees = (props: any) => {
  return (
    <>
      <h2>Admin</h2>
      <ul>
        {props.data.map((el: any) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};
const HocAdminEmployee = FunctionHoc(AdminEmployees, "admin");
export default HocAdminEmployee;
