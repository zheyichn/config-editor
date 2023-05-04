import { Typography, List, Button, Grid, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Action from "./Action";
import ActionView from "./ActionView";
import AddActionForm from "./AddActionForm";

export default function Config({ name, version, actions }) {
  const [currentActions, setCurrentActions] = useState(actions);
  const [duplicateIndex, setDuplidateIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("actions", JSON.stringify(currentActions));
  }, [currentActions]);

  const updateActionName = (index, actionNewName) => {
    let updatedActions = currentActions;
    updatedActions[index].name = actionNewName;
    setCurrentActions(updatedActions);
    if (containsDuplicate()) {
      setDuplidateIndex(index);
    } else {
      if (duplicateIndex !== -1) {
        setDuplidateIndex(-1);
      }
    }
  };

  const updateActionInstruction = (index, actionNewInstruction) => {
    let updatedActions = currentActions;
    updatedActions[index].instruction = actionNewInstruction;
    setCurrentActions(updatedActions);
  };

  const containsDuplicate = () => {
    let nameArr = currentActions.map((item) => {
      return item.name;
    });
    let containDuplicate = nameArr.some((item, idx) => {
      return nameArr.indexOf(item) !== idx;
    });
    return containDuplicate;
  };

  const cancelHandler = () => {
    const originalActions = JSON.parse(localStorage.getItem("actions"));
    setCurrentActions(originalActions);
    setEditMode(false);
  };

  const confirmHandler = () => {
    //localStorage stored the only source of truth
    // actions in currentActions are un-confirmed changes until user hit confirm
    // upon confirming, we should update the localStorage.actions
    localStorage.setItem("actions", JSON.stringify(currentActions));
    setEditMode(false);
  };

  const deleteAction = (index) => {
    setCurrentActions((prevActions) =>
      prevActions.filter((item, idx) => idx !== index)
    );
  };

  const isValidateNewAction = (newActionName) => {
    const res = currentActions.filter((item) => item.name === newActionName);
    if (res.length <= 0) {
      return true;
    }
    return false;
  };

  const submitNewActionHandler = (newActionObj) => {
    console.log(newActionObj);
    console.log(currentActions[-1]);
    setCurrentActions((prevActions) => [...prevActions, newActionObj]);
  };

  if (!editMode) {
    return (
      <>
        <div>
          <h2>Config Name</h2>
          <Typography> {name}</Typography>
          <h2> Config Version</h2>
          <Typography> {version}</Typography>
          <h2> Config Action List </h2>
          <Button onClick={() => setEditMode(true)} variant="contained">
            Edit Actions
          </Button>

          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              padding: 0,
              borderRadius: 2,
            }}
          >
            {currentActions.map((action) => (
              <ActionView
                key={`${action.name}+${action.type}`}
                name={action.name}
                type={action.type}
                instruction={action.instruction ? action.instruction : null}
              ></ActionView>
            ))}
          </List>
        </div>
        <div>
          <AddActionForm
            isValidateNewAction={isValidateNewAction}
            submitHandler={submitNewActionHandler}
          ></AddActionForm>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Grid>
          <h2>Config Name</h2>
          <Typography> {name}</Typography>
          <h2> Config Version</h2>
          <Typography> {version}</Typography>
          <h2> Config Action List </h2>
          <Grid container>
            <Grid item>
              <Button size="small" variant="outlined" onClick={cancelHandler}>
                Cancel
              </Button>
            </Grid>
            <Grid ml={3}>
              <Button
                onClick={confirmHandler}
                size="small"
                variant="contained"
                disabled={duplicateIndex !== -1}
              >
                Confirm Changes
              </Button>
            </Grid>
          </Grid>

          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              p: 0,
              borderRadius: 2,
              mt: 2,
            }}
          >
            {currentActions.map((action, index) => (
              <Action
                key={`${action.name}+${action.type}`}
                index={index}
                name={action.name}
                type={action.type}
                instruction={action.instruction ? action.instruction : null}
                updateActionName={updateActionName}
                updateActionInstruction={updateActionInstruction}
                deleteAction={deleteAction}
                warning={
                  index === duplicateIndex
                    ? "two actions cannot have the same name"
                    : ""
                }
              ></Action>
            ))}
          </List>
        </Grid>

        <Grid mt={5}>
          <AddActionForm
            isValidateNewAction={isValidateNewAction}
            submitHandler={submitNewActionHandler}
          ></AddActionForm>
        </Grid>
      </>
    );
  }
}
