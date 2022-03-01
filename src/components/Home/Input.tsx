import React, { useState } from "react";
import { IoMdSearch as Icon } from "react-icons/io";
import { debounce } from "lodash";
import { getCountry } from "../../api/countries";
import useAppState from "../../state/useAppState";
import { setCountries, setLoading } from "../../state/actionHandler";
import { toast } from "react-toastify";
type InputProps = {
  classes?: string;
};

export default function Input({ classes }: InputProps) {
  const [showIcon, setShowIcon] = useState<boolean>(true);
  const { dispatch } = useAppState();

  const handleChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      fetchData(event.target.value.trim());
    },
    1000
  );

  const fetchData = (name: string) => {
    dispatch(setLoading(true));
    if (name !== "") {
      getCountry(name)
        .then((countries) => {
          if (countries.length > 0) {
            dispatch(setCountries(countries));
            dispatch(setLoading(false));
          } else {
            toast.error("not found");
          }
        })
        .catch(() => toast.error("not found"));
    }
  };

  return (
    <div className="custom-input-wrapper">
      {showIcon && <Icon className="custom-input-icon" />}
      <input
        placeholder="Search For a country..."
        onFocus={() => setShowIcon(false)}
        onBlur={() => setShowIcon(true)}
        type="text"
        className={classes}
        onChange={handleChange}
      />
    </div>
  );
}
