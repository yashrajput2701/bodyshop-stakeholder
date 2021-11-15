import React from "react";
import { makeStyles, Box, Typography,createStyles } from "@material-ui/core";
import pen from "../Assets/pen.png";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            border: "1px #D2D2D2 solid",
            width: "575px",
            height: "auto",
            borderRadius: "4px",
            marginTop: "15px",
            marginBottom: "40px",
          },
          offers: {
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "10px",
          },
          green: {
            color: "#3D857E",
            display: "flex",
            padding: "15px",
          },
          gap: {
            paddingLeft: "5px",
          },
          black: {
            fontWeight: 600,
            fontSize: "14px",
            paddingLeft: "15px",
          },
          grey: {
            color: "gray",
            fontSize: "12px",
            paddingLeft: "15px",
            paddingTop: "5px",
          },
    })
);

export default function Offers() {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.offers}>Available Offers</Typography>
      <Box className={classes.container}>
        <Box className={classes.green}>
          <img src={pen} alt="" />
          <Typography className={classes.gap}>
            10% Off | HDFC Debit/Credit Card
          </Typography>
        </Box>
        <Typography className={classes.black}>
          10% off on HDFC credit card and debit card
        </Typography>
        <Typography className={classes.grey}>
          Valid till 20th June, 2021
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.green}>
          <img src={pen} alt="" />
          <Typography className={classes.gap}>
            20% Off | ICICI Debit/Credit Card
          </Typography>
        </Box>
        <Typography className={classes.black}>
          10% off on HDFC credit card and debit card
        </Typography>
        <Typography className={classes.grey}>
          Valid till 20th June, 2021
        </Typography>
      </Box>
    </Box>
  );
}
