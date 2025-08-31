import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import Select, { type SelectProps } from "@mui/material/Select";

type Props<T extends FieldValues> = {
  items: { text: string; value: string }[];
} & UseControllerProps<T> &
  Partial<SelectProps>;

export default function SelectInput<T extends FieldValues>({
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
    <FormControl fullWidth error={!!fieldState.error}>
      <InputLabel>{textFieldProps.label}</InputLabel>
      <Select
        value={field.value || ""}
        label={textFieldProps.label}
        onChange={field.onChange}
      >
        {textFieldProps.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  );
}
