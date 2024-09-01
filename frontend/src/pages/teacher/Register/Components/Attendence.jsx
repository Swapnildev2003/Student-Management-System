import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth({ drop, setTagName, name }) {
  const [age, setAge] = React.useState("");

  React.useEffect(() => {
    if (age !== "") {
      switch (name) {
        case "course":
          setTagName((prev) => ({ ...prev, course: drop[age] }));
          break;
        case "branch":
          setTagName((prev) => ({ ...prev, branch: drop[age] }));
          break;
        default:
          setTagName((prev) => ({ ...prev, year: drop[age] }));
      }
    }
  }, [age, name, drop, setTagName]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label={name}
        >
          {drop.map((item, index) => (
            <MenuItem key={index} value={index} sx={{ minWidth: 300 }}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
