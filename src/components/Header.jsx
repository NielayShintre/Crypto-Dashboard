// import styled from "styled-components";
import PropTypes from "prop-types";

const Header = ({ walletAddress}) => {
  return (
    <div className="w-full p-4 border-b border-gray-800 flex items-center">
      <h1 className="text-2xl font-semibold flex-grow">Assets</h1>
      <div className="flex">
        <div className="text-sm border border-gray-700 rounded-full flex flex-col items-start justify-center mr-4 px-6 py-1">
          <div className="text-md mb-0.5 text-green-700 font-semibold">
            Wallet Connected
          </div>
          <div className="text-sm">
            {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
          </div>
        </div>
        <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 transition duration-300 ease-in-out hover:bg-blue-700">
          Buy / Sell
        </button>
        <button className="border border-gray-800 text-white px-2 py-3 rounded mr-2 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-black">
          Send / Receive
        </button>
      </div>
    </div>
  );
};

// PropTypes validation
Header.propTypes = {
  walletAddress: PropTypes.string.isRequired,
};

export default Header;

// const Wrapper = styled.div`
//   width: calc(100%);
//   padding: 1rem 1.5rem;
//   border-bottom: 1px solid #282b2f;
//   display: flex;
//   align-items: center;
// `;
// const Title = styled.div`
//   font-size: 2rem;
//   font-weight: 600;
//   flex: 1;
// `;

// const ButtonsContainer = styled.div`
//   display: flex;
// `;

// const WalletLink = styled.div`
//   font-size: 0.8rem;
//   border: 1px solid #282b2f;
//   border-radius: 50rem;
//   font-size: 1.2rem;
//   margin-right: 1rem;
//   padding: 0 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
// `;

// const WalletLinkTitle = styled.div`
//   font-size: 1.1rem;
//   margin-bottom: 0.3rem;
//   color: #27ad75;
//   font-weight: 600;
// `;
// const WalletAddress = styled.div`
//   font-size: 0.8rem;
//   /* color: #8a919e; */
// `;

// const Button = styled.div`
//   border: 1px solid #282b2f;
//   padding: 0.8rem;
//   font-size: 1.3rem;
//   font-weight: 500;
//   border-radius: 0.4rem;
//   margin-right: 1rem;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// const Separator = styled.div``;

// const ProfileIcon = styled.div``;
