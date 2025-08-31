import { TextField, type TextFieldProps } from "@mui/material";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;

export default function TextInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  ...textFieldProps
}: Props<T>) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <TextField
      {...field}
      {...textFieldProps}
      fullWidth
      value={field.value || ""}
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
}
