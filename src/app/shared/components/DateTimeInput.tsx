import {
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import { DateTimePicker, type DateTimePickerProps } from "@mui/x-date-pickers";

type Props<T extends FieldValues> = {} & UseControllerProps<T> & DateTimePickerProps;

export default function DateTimeInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  ...fieldProps
}: Props<T>) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  });
  return (
    <DateTimePicker
      {...fieldProps}
      value={field.value ? new Date(field.value) : null}
      onChange={(value) => {
        field.onChange(new Date(value!));
      }}
      sx={{ width: "100%ƒ" }}
      slotProps={{
        textField: {
          onBlur: field.onBlur,
          error: !!fieldState.error,
          helperText: fieldState.error?.message,
        },
      }}
    />
  );
}
