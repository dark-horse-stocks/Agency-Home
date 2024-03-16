import React from "react";
import "./style.scss";
import { useTheme, useMediaQuery, Grid } from "@mui/material";
export default function Footer() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      display="flex"
      spacing={2}
      className="footer-list"
      flexDirection={isMdDown ? "column" : "row"}
      alignItems={isMdDown && "center"}
      paddingRight={4}
      mt={isMdDown ? 2 : undefined}
    >
      <Grid item zIndex={5}>
        <a
          href="https://old.darkhorsestocks.in/Main.php"
          target="_blank"
          rel="noopener noreferrer"
          className="line-animation-3"
          style={{ color: "#838282" }}
        >
          DARKHORSESTOCKS 2023
        </a>
      </Grid>
      <Grid item zIndex={5}>
        <a
          href="https://old.darkhorsestocks.in/privacy-policy.php"
          target="_blank"
          rel="noopener noreferrer"
          className="line-animation-3"
          style={{ color: "#838282" }}
        >
          PRIVACY POLICY
        </a>
      </Grid>
      <Grid item zIndex={5}>
        <a
          href="https://old.darkhorsestocks.in/terms-conditions.php"
          target="_blank"
          rel="noopener noreferrer"
          className="line-animation-3"
          style={{ color: "#838282" }}
        >
          T&C
        </a>
      </Grid>
      <Grid item zIndex={5}>
        <a
          href="https://old.darkhorsestocks.in/refund-policy.php"
          target="_blank"
          rel="noopener noreferrer"
          className="line-animation-3"
          style={{ color: "#838282" }}
        >
          REFUND POLICY
        </a>
      </Grid>
      <Grid item zIndex={5}>
        <a
          href="https://old.darkhorsestocks.in/disclaimer.php"
          target="_blank"
          rel="noopener noreferrer"
          className="line-animation-3"
          style={{ color: "#838282" }}
        >
          DISCLAIMER
        </a>
      </Grid>
      <Grid item zIndex={5}>
        <a
          href="https://www.darkhorsestocks.in/mutual-fund/about-us"
          target="_blank"
          rel="noopener noreferrer"
          className="line-animation-3"
          style={{ color: "#838282" }}
        >
          ABOUT US
        </a>
      </Grid>
    </Grid>
  );
}
