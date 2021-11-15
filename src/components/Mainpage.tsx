import React from "react";
import { makeStyles,createStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import ProductImg from "./ProductImg";
import Fixedbar from "./Fixedbar";
import Productdesc from "./Productdesc";
import Footer from "./Footer";
import Contactpage from "./Contactpage";
import Recommended from "./Recommended";
// import Sidebar from "./Sidebar";
const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            height: "100%",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]:{
              flexDirection: "column"
            }
        }
    })
);
export default function Product() {
  const classes = useStyles();

  return (
    <div style={{width:"100%"}}>
      <Navbar />
      <div className={classes.wrapper}>
        <ProductImg />
        <Productdesc />
      </div>
      <Recommended />
      <Contactpage />
      <Footer />
      <Fixedbar />
      {/* <Sidebar /> */}
    </div>
  );
}
