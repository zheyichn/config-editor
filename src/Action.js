import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Action({
  index,
  name,
  type,
  instruction,
  updateActionName,
  updateActionInstruction,
  warning,
  edit,
}) {
  const [actionName, setActionName] = useState(name);
  const [actionInstruction, setActionInstruction] = useState(instruction);

  useEffect(() => {
    updateActionName(index, actionName);
  }, [actionName]);

  useEffect(() => {
    updateActionInstruction(index, actionInstruction);
  }, [actionInstruction]);

  return (
    <Grid
      container
      key={`${name}+${type}`}
      justifyContent="space-evenly"
      alignContent="center"
    >
      <Grid item xs={12}>
        <h3>Action</h3>
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          label="actionName"
          value={actionName}
          onChange={(e) => setActionName(e.target.value)}
          helperText={warning ? warning : null}
        />
      </Grid>
      <Grid item xs={6}>
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
        <Grid item xs={10}>
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
  );
}
