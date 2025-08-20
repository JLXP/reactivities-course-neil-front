import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function ActivityForm() {
  return (
    <Paper sx={{ borderaRadius: 3, padding: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
            Create Activity
        </Typography>
        <Box component="form" display="flex" flexDirection="column" gap={3} >
            <TextField label="Title"/>
            <TextField label="Description" multiline rows={3}/>
            <TextField label="Category"/>
            <TextField label="Date" type="date"/>
            <TextField label="Cityt"/>
            <TextField label="Title"/>
            <Box display='flex' justifyContent='end' gap={3}>
                <Button color='inherit'>Cancel</Button>
                <Button color='success' variant='contained'>Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}