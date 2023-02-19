import {  Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { NavBar, SmallSideBar, BigSideBar } from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
