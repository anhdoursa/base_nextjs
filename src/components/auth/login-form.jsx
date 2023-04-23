import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { InputField } from "../form";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      username: "user1",
      password: "123123",
    },
  });
  const handleLoginSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <Stack gap={2}>
        <InputField label="Username" name="username" control={control} />
        <InputField label="Password" name="password" control={control} />
        <Box>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
