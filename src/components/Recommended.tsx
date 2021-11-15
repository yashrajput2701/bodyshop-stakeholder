import {
  Box,
  makeStyles,
  Typography,
  Button,
  createStyles,
} from "@material-ui/core";
// import shampoo from "../Assets/product.png";
// import shampoo2 from "../Assets/gg3.png";
// import shampoo3 from "../Assets/gg1.png";
// import shampoo4 from "../Assets/gg2.png";
// import shampoo5 from "../Assets/gg3.png";
// import shampoo6 from "../Assets/gg1.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETRECOMMENDEDDATA } from "../actions/Actions";
import { ReducersModal } from "../Modal";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0 auto",
      height: "auto",
      marginBottom: "100px",
      boxSizing: "border-box"
    },
    mainhead: {
      display: "flex",
    },
    recommend: {
      color: "#044236",
      fontWeight: 700,
      fontSize: "24px",
      padding: "10px",
      marginLeft: "145px",
    },
    section: {
      display: "flex",
      justifyContent: "space-around",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    box2: {
      width: "170px",
      height: "200px",
      backgroundColor: "#F8F3E9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    anti: {
      width: "164px",
      fontWeight: 700,
      fontSize: "15px",
    },
    rate: {
      display: "flex",
      width: "200px",
      justifyContent: "flex-start",
    },
    rateline: {
      display: "flex",
    },
    jesse2: {
      fontSize: "14px",
      fontWeight: 500,
      color: "gray",
      marginTop: "5px",
    },
    greenhead: {
      color: "gray",
      fontSize: "12px",
      fontWeight: 600,
      marginTop: "5px",
    },
    rupee: {
      fontWeight: 700,
      fontSize: "15px",
      marginTop: "5px",
    },
    ggbtn: {
      backgroundColor: "#044236",
      width: "144px",
      height: "40px",
      textTransform: "inherit",
      color: "white",
      position: "relative",
      "&:hover": { backgroundColor: "#044236" },
      marginTop: "5px",
    },
    arrow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "150px",
    },
  })
);

export default function Recommended() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GETRECOMMENDEDDATA());
  }, []);
  const { apidata } = useSelector(
    (state: ReducersModal) => state.recommendedReducer
  );
  console.log("apidata",apidata.data);
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mainhead}>
        <Typography className={classes.recommend} variant="h2">
          Recommended
        </Typography>
       
      </Box>
      <Box className={classes.section}>
        <ChevronLeftIcon
          className={classes.arrow}
          style={{
            fontSize: "40px",
            backgroundColor: "#044236",
            borderRadius: "50%",
            color: "white",
          }}
        />
        {apidata.data.data.map((product: any, index: any) => {
          
          
          return (
            <Box>
              <Box className={classes.box2}>
              <img src="{product.image}"/>
              </Box>
              <Typography className={classes.anti}>{product.name}</Typography>
              
             
              <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={4.5}
                  precision={0.5}
                  style={{ color: "#3D857E" }}
                />
              </Stack>
              <Typography className={classes.jesse2}>(487)</Typography>
            </Box>
          </Box>
          <Typography className={classes.greenhead}>
            {product.type}
          </Typography>
          <Typography className={classes.rupee}>₹{product.price}</Typography>
          <Button className={classes.ggbtn}>Add to Bag</Button>
            </Box>
          );
        })}
        <ChevronRightIcon
          className={classes.arrow}
          style={{
            fontSize: "40px",
            backgroundColor: "#044236",
            borderRadius: "50%",
            color: "white",
          }}
        />
      </Box>
    </Box>
  );
}
