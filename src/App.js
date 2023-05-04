import "./styles/App.css";
import Config from "./Config";
import { Button, Grid } from "@mui/material";

export const startConfig = {
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
  // initially store a copy of the input in localStorage
  localStorage.setItem("config_name", startConfig.name);
  localStorage.setItem("config_version", startConfig.version);
  localStorage.setItem("actions", JSON.stringify(startConfig.actions));

  /**
   * Export the edited actions to the console
   */
  const exportHandler = () => {
    const result = {
      "name": localStorage.getItem("config_name"),
      "version": localStorage.getItem("config_version"),
      actions: JSON.parse(localStorage.getItem("actions")),
    };
    console.log("See exported config below:");
    console.log(result);
  };

  return (
    <>
      <Grid container width="70%" margin={(10, 10)} className="body">
        <Grid item>
          <Button
            style={{
              position: "absolute",
              right: "30%",
              top: 100,
            }}
            color="success"
            variant="contained"
            onClick={exportHandler}
          >
            Export Config
          </Button>
        </Grid>
        <Grid item>
          <Config
            name={startConfig.name}
            version={startConfig.version}
            actions={startConfig.actions}
          ></Config>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
