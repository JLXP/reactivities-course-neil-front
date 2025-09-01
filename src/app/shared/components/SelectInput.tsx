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
  ...selectFieldProps
}: Props<T>) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <FormControl fullWidth error={!!fieldState.error}>
      <InputLabel>{selectFieldProps.label}</InputLabel>
      <Select
        value={field.value || ""}
        label={selectFieldProps.label}
        onChange={field.onChange}
      >
        {selectFieldProps.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  );
}
