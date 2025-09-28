import { Grid } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";

export default function ProfilePage() {
  return (
    <Grid>
        <Grid size={2}>
            <ProfileHeader/>
            <ProfileContent/>
        </Grid>
    </Grid>
  )
}