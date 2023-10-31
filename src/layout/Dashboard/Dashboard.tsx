import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddUserCount from "../../components/AddUserCount/AddUserCount";
import EmployeeNames from "../../components/EmployeeNames/EmployeeNames";

const MainWrapper = styled.main`
  min-height: calc(100% - 10rem);
`;

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <AddUserCount />
        <EmployeeNames />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
