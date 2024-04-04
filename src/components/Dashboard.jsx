import PropTypes from "prop-types";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Dashboard = ({ address }) => {
  return (
    <div className="flex h-screen w-full bg-black text-white">
      <Sidebar />
      <div className="flex-1">
        <Header walletAddress={address} />
        <MainContent />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Dashboard;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   background-color: #0a0b0d;
//   color: white;
// `;

// const MainContainer = styled.div`
//   flex: 1;
// `;
