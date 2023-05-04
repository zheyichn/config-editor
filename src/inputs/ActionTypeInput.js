import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ActionTypeInput({ handleChange, type }) {
  return (
    <FormControl required sx={{ minWidth: 200, mb: 1 }}>
      <InputLabel id="demo-simple-select-required-label">actionType</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={type}
        label="actionType"
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="AcceptOffer">{"AcceptOffer"}</MenuItem>
        <MenuItem value="RejectOffer">{"RejectOffer"}</MenuItem>
        <MenuItem value="SubmitBotInstruction">
          {"SubmitBotInstruction"}
        </MenuItem>
      </Select>
    </FormControl>
  );
}
