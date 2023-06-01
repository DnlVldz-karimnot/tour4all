import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { FC, useState, useEffect } from "react";

interface Props {
  selected: string[];
  onChange: any;
  isdisable: boolean;
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const BoxCheckBoxs: FC<Props> = ({ selected, onChange, isdisable }) => {
  const [checked, setChecked] = useState<string[]>(selected);
  useEffect(() => {
    //console.log("Cambio selected", selected)
    setChecked(selected);
  }, [selected]);

  const opciones: string[] = ["CREATE", "READ", "UPDATE", "DELETE"];

  useEffect(() => {
    if (selected.includes("*")) {
      setChecked(opciones);
    }
  }, []);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isfind = checked.find((c) => {
      if (c === event.target.name) return c;
    });

    let updatedItems = [];
    if (isfind === undefined) {
      updatedItems = [...checked];
      updatedItems.push(event.target.name);
    } else {
      updatedItems = checked.filter((item) => item !== event.target.name);
    }
    setChecked(updatedItems);
    onChange(updatedItems);
  };
  return (
    <Box className={"row"} display={"flex"} gap={2}>
      {opciones.map((opcion, i) => (
        <div key={i} className="col-3">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.includes(opcion)}
                disabled={isdisable}
                name={opcion}
                onChange={handleChangeCheckbox}
              />
            }
            label={capitalizeFirstLetter(opcion)}
          />
        </div>
      ))}
    </Box>
  );
};
