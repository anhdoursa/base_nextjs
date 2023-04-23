import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField({
  name,
  control,
  value: externalValue,
  inputRef: externalRef,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ...props
}) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <TextField
      fullWidth
      variant="outlined"
      name={name}
      value={value}
      inputRef={ref}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
}
