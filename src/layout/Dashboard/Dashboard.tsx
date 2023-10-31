import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddUserCount from "../../components/AddUserCount/AddUserCount";

const MainWrapper = styled.main`
  min-height: calc(100% - 10rem);
`;

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <AddUserCount />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
