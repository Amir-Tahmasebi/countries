import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRegion } from "../../hook/countries";

type RegionProps = {
  classes?: string;
};

export default function Region({ classes }: RegionProps) {
  const [handleChange] = useRegion();

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} className={classes}>
      <InputLabel id="filter-by-region-label" className="custom-input-label">
        Filter By Region
      </InputLabel>
      <Select
        className="custom-input-select"
        labelId="filter-by-region-label"
        id="filter-by-region"
        label="filter-by-region"
        onChange={handleChange}
      >
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}
