import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export function LoginForm({ handleLoginSubmit }) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(4, "Username must be at least 4 characters"),
    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password must be at least 6 characters"),
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (value) => {
    await handleLoginSubmit(value);
    return;
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
          <Button
            disabled={isSubmitting}
            endIcon={isSubmitting ? <CircularProgress size="1em" /> : null}
            type="submit"
            variant="outlined"
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
