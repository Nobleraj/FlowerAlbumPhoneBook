import { Box, Stack } from "@mui/material";
export default ({ children, stack }) => {
  return (
    <Box
      sx={{
        boxShadow: 5,
        borderRadius: 2,
        p: 0,
        width: 400
      }}
    >
      {stack ? (
        <Stack sx={{ height: 200 }} spacing={1} direction="row">
          {children}
        </Stack>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
};
