import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid2 from "@mui/material/Grid2";

export function SkeletonChildrenDemo() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </div>
  );
}

export default function SkeletonChildren() {
  return (
    <Grid2 container spacing={8}>
      <Grid2>
        <SkeletonChildrenDemo loading />
      </Grid2>
      <Grid2>
        <SkeletonChildrenDemo />
      </Grid2>
    </Grid2>
  );
}
