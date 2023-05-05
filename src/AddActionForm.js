import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import ActionTypeInput from "./inputs/ActionTypeInput";
import "./styles/App.css";

export default function AddActionForm({ isValidateNewAction, submitHandler }) {
  const [actionName, setActionName] = useState("");
  const [actionType, setActionType] = useState("");
  const [actionInstruction, setActionInstruction] = useState("");
  const [validInput, setValidInput] = useState(true);

  const typeChangeHandler = (e) => {
    setActionType(e.target.value);
    const isVaild = isValidateNewAction(actionName);
    setValidInput(isVaild);
  };

  const nameChangeHandler = (e) => {
    setActionName(e.target.value);
    const isVaild = isValidateNewAction(actionName);
    setValidInput(isVaild);
  };

  // when a user submits a new action, first check its vailidity in terms of
  // name&tupe uniqueness, if it is valid, then submit, otherwise, display helper text
  const addNewAction = () => {
    const isVaild = isValidateNewAction(actionName);
    setValidInput(isVaild);
    if (isVaild) {
      const newActionObj = { "name": actionName, "type": actionType };
      if (actionType === "SubmitBotInstruction") {
        newActionObj["instruction"] = actionInstruction;
      }
      setActionName("");
      setActionType("");
      setActionInstruction("");
      submitHandler(newActionObj);
    }
  };

  return (
    <div className="form-container">
      <Grid container justifyContent="center" alignContent="center">
        <Grid item xs={12}>
          <h3>Add New Action</h3>
        </Grid>
        <Grid item xs={12} md={6} mb={2}>
          <TextField
            required
            label="actionName"
            value={actionName}
            onChange={nameChangeHandler}
            helperText={
              !validInput ? "Already exists an action with this name!" : null
            }
          />
        </Grid>
        <Grid item xs={12} md={6} p={0}>
          <ActionTypeInput
            handleChange={typeChangeHandler}
            type={actionType}
          ></ActionTypeInput>
        </Grid>
        <Grid item xs={12} mt={1}>
          <TextField
            fullWidth
            label="actionInstruction"
            value={actionInstruction}
            multiline
            onChange={(e) => {
              setActionInstruction(e.target.value);
            }}
            // enable instruction (optinal) field when actionType is "SubmitBotInstruction"
            disabled={actionType === "SubmitBotInstruction" ? false : true}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button
            variant="contained"
            className="button"
            onClick={addNewAction}
            // do not enbale the "Add New Action" button until both inputs are non-empty
            disabled={actionName === "" || actionType === ""}
          >
            Add New Action
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
