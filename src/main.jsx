import ReactDOM from "react-dom/client";
import "./index.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import App from "./App"; // Adjust the import path as necessary

const supportedChainIds = [11155111];
const connectors = {
  injected: {},
};

function Root() {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <App />
    </ThirdwebWeb3Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
