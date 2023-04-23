import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField({ label, name, control }) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <TextField
      label={label}
      variant="outlined"
      name={name}
      value={value}
      inputRef={ref}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
