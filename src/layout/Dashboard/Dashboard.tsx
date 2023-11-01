import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";
import AddEmployeeFormUseReducer from "../../components/AddEmployeeForm/AddEmployeeFormUseReducer";

const MainWrapper = styled.main`
  min-height: calc(100% - 10rem);
`;

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        {/* <AddUserCount /> */}
        {/* <EmployeeNames /> */}
        {/* <AddEmployeeForm /> */}
        <AddEmployeeFormUseReducer />
        {/* <HocAdminEmployee /> */}
        {/* <HocUserEmployee /> */}
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
