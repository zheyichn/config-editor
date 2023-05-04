import { Typography, List, Button } from "@mui/material";
import React, { useState } from "react";
import Action from "./Action";
import ActionView from "./ActionView";

export default function Config({ name, version, actions }) {
  const [currentActions, setCurrentActions] = useState(actions);
  const [duplicateIndex, setDuplidateIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);

  const updateActionName = (index, actionNewName) => {
    let updatedActions = currentActions;
    updatedActions[index].name = actionNewName;
    setCurrentActions(updatedActions);
    if (containsDuplicate()) {
      console.log("conatined dup");
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
    let nameAndTypeArr = currentActions.map((item) => {
      return JSON.stringify({ "name": item.name, "type": item.type });
    });
    console.log(nameAndTypeArr);
    let containDuplicate = nameAndTypeArr.some((item, idx) => {
      return nameAndTypeArr.indexOf(item) !== idx;
    });
    return containDuplicate;
  };

  if (!editMode) {
    return (
      <div>
        <h2>Config Name</h2>
        <Typography> {name}</Typography>
        <h2> Config Version</h2>
        <Typography> {version}</Typography>
        <h2> Config Action List </h2>
        <Button onClick={() => setEditMode(true)}>Edit Actions</Button>

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {currentActions.map((action) => (
            <ActionView
              name={action.name}
              type={action.type}
              instruction={action.instruction ? action.instruction : null}
            ></ActionView>
          ))}
        </List>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Config Name</h2>
        <Typography> {name}</Typography>
        <h2> Config Version</h2>
        <Typography> {version}</Typography>
        <h2> Config Action List </h2>
        <Button size="small" variant="contained">
          Cancel
        </Button>
        <Button
          onClick={() => setEditMode(false)}
          size="small"
          variant="contained"
        >
          Confirm
        </Button>

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {currentActions.map((action, index) => (
            <Action
              index={index}
              name={action.name}
              type={action.type}
              instruction={action.instruction ? action.instruction : null}
              updateActionName={updateActionName}
              updateActionInstruction={updateActionInstruction}
              warning={
                index === duplicateIndex
                  ? "actions of the same type cannot have the same name"
                  : ""
              }
            ></Action>
          ))}
        </List>
      </div>
    );
  }
}
