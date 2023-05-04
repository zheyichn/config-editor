import React from "react";
import { Grid, TextField } from "@mui/material";

export default function ActionView({ name, type, instruction }) {
  return (
    <Grid
      container
      key={`${name}+${type}`}
      justifyContent="space-evenly"
      alignContent="center"
      className="config-action"
    >
      <Grid item xs={12}>
        <h3>Action</h3>
      </Grid>
      <Grid item xs={6}>
        <div className="action-property">actionName</div>
        <div className="action-value">{name}</div>
      </Grid>
      <Grid item xs={6}>
        <div className="action-property">actionType</div>
        <div className="action-value">{type}</div>
      </Grid>
      {instruction && (
        <Grid item xs={12} className="action-instruction" mt={2}>
          <div className="action-property">actionInstruction</div>
          <div className="action-value">{instruction}</div>
        </Grid>
      )}
    </Grid>
  );
}
