import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";

export function LoginForm({ handleLoginSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "user1",
      password: "123123",
    },
  });
  const onSubmit = (value) => {
    handleLoginSubmit(value);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <InputField label="Username" name="username" control={control} />
        <InputField
          label="Password"
          name="password"
          control={control}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box textAlign="right">
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
