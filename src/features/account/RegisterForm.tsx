import { useForm } from "react-hook-form";
import { useAccount } from "../../lib/hooks/useAccount";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Paper, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import TextInput from "../../app/shared/components/TextInput";
import { Link,} from "react-router";
import { registerSchema, type RegisterShema } from '../../lib/schemas/registerSchema';

export default function RegisterForm() {
  const { registerUser } = useAccount();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<RegisterShema>({
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterShema) => {
    await registerUser.mutateAsync(data);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
        gap: 3,
        maxWidth: "md",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        color="secondary.main"
      >
        <LockOpen fontSize="large" />
        <Typography variant="h4">Register</Typography>
      </Box>
      <TextInput label="Email" control={control} name="email"></TextInput>
      <TextInput label="Display name" control={control} name="displayName"></TextInput>
      <TextInput label="Password" type="password" control={control} name="password"></TextInput>
      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        variant="contained"
        size="large"
      >
        Register
      </Button>
      <Typography sx={{ textAlign: "center" }}>
        Already have an account?
        <Typography
          sx={{ ml: 2 }}
          component={Link}
          to="/login"
          color="primary"
        >
          Sign in
        </Typography>
      </Typography>
    </Paper>
  );
}
