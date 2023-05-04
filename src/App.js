import "./App.css";
import Config from "./Config";

const startConfig = {
  "name": "exampleConfig",
  "version": "0.1.8",
  "actions": [
    { "name": "makeOffer", "type": "MakeOffer" },
    {
      "name": "BuyerNeedsBathroom",
      "type": "SubmitBotInstruction",
      "instruction":
        "The Buyer needs to use the bathroom and should say so in the next message.",
    },
    { "name": "acceptOffer", "type": "AcceptOffer" },
    {
      "name": "tell a joke",
      "type": "SubmitBotInstruction",
      "instruction": "The Buyer should tell a joke.",
    },
  ],
};

function App() {
  return (
    <Config
      name={startConfig.name}
      version={startConfig.version}
      actions={startConfig.actions}
    ></Config>
  );
}

export default App;
