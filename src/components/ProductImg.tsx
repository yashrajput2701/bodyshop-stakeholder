import React from "react";
import { makeStyles, Box, Button, Typography } from "@material-ui/core";
import background from "../Assets/shampoo.png";
import shampoo2 from "../Assets/shampoo2.png";
import heart from "../Assets/Vector (2).png";
const useStyles = makeStyles({
  wrapper: {
    flexBasis: "40%",
    // maxWidth: "60%",
    // minWidth: "40%",
    position: "sticky",
    zindex: "999!important",
    height: "600px",
    top: "250px",
  },
  images: {
    display: "flex",
  },
  container: {
    width: "476px",
    height: "476px",
    background: "#F8F3E9",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },

  container2: {
    width: "99px",
    height: "99px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  },
  container3: {
    width: "99px",
    height: "99px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  },
  container4: {
    width: "99px",
    height: "99px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  },
  container5: {
    width: "99px",
    height: "99px",
    // padding: "15px",
    background: "#F8F3E9",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  },

  heart: {
    height: "30px",
    width: "30px",
    margin: "10px",
  },
  primarybtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 32px",
    width: "131px",
    height: "48px",
    background: "#044236",
    borderRadius: "4px",
    color: "white",
    textTransform: "inherit",
    "&:hover": { backgroundColor: "#044236" },
  },
  align: {
    display: "flex",
    justifyContent: "space-between",
    height: "50px",
    width: "480px",
    marginTop: "20px",
  },
  text: {
    color: "gray",
  },
  straight: {
    display: "flex",
  },
});

export default function ProductImg() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Box className={classes.straight}>
          <Typography className={classes.text}>
            Home / Order history / Night care /
          </Typography>
          <Typography>Satsuma Shower Gel</Typography>
        </Box>
        <div className={classes.images}>
          <Box className={classes.container}>
            <img src={background} alt="" />
          </Box>
          <Box>
            <Box className={classes.container2}>
              <img src={shampoo2} alt="" />
            </Box>
            <Box className={classes.container3}>
              <img src={shampoo2} alt="" />
            </Box>
            <Box className={classes.container4}>
              <img src={shampoo2} alt="" />
            </Box>
            <Box className={classes.container5}>
              <img src={shampoo2} alt="" />
            </Box>
          </Box>
        </div>
        <Box className={classes.align}>
          <img className={classes.heart} src={heart} alt="" />
          <Button variant="contained" className={classes.primarybtn}>
            Notify me
          </Button>
        </Box>
      </div>
    </>
  );
}
