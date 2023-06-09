import { Divider, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Action({
  index,
  name,
  type,
  instruction,
  updateActionName,
  updateActionInstruction,
  deleteAction,
  warning,
}) {
  const [actionName, setActionName] = useState(name);
  const [actionInstruction, setActionInstruction] = useState(instruction);

  useEffect(() => {
    updateActionName(index, actionName);
    // eslint-disable-next-line
  }, [actionName]);

  useEffect(() => {
    updateActionInstruction(index, actionInstruction);
    // eslint-disable-next-line
  }, [actionInstruction]);

  return (
    <>
      <Grid container justifyContent="start" ml={2} p={2}>
        <Grid item xs={12}>
          <h3>Action</h3>
        </Grid>
        <Grid item xs={12} mb={3}>
          <button className="button" onClick={() => deleteAction(index)}>
            Delete
          </button>
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            label="actionName"
            value={actionName}
            onChange={(e) => setActionName(e.target.value)}
            helperText={warning ? warning : null}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="actionType"
            value={type}
            InputProps={{
              readOnly: true,
            }}
            disabled
          />
        </Grid>
        {actionInstruction && (
          <Grid item mt={2} xs={10}>
            <TextField
              fullWidth
              label="actionInstruction"
              value={actionInstruction}
              multiline
              onChange={(e) => {
                setActionInstruction(e.target.value);
              }}
            />
          </Grid>
        )}
      </Grid>
      <Divider></Divider>
    </>
  );
}
