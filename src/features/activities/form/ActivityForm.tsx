import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
  activity?: Activity;
  closeForm: () => void;
};

export default function ActivityForm({ activity, closeForm }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });
  };

  return (
    <Paper sx={{ borderaRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField name="title" label="Title" value={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          value={activity?.description}
        />
        <TextField
          name="category"
          label="Category"
          value={activity?.category}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          value={activity?.date}
        />
        <TextField name="city" label="City" value={activity?.city} />
        <TextField name="venue" label="Venue" value={activity?.venue} />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
