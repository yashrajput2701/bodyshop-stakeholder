import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography} from "@material-ui/core";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import background from "../Assets/Vector (2)new.png";
import shampoo2 from "../Assets/Vectornew.png";
import heart from "../Assets/Vector (1)new.png";
import Scroll from "./Scroll";
import axios from "axios";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const useStyles = makeStyles({
  
  container: {
    flexBasis: "50%",
    position: "sticky",
    top: "280px",
    height: "auto",
    width: "auto",
    background: "white",
    overflowY: 'auto',
    // flexBasis: "40%",
    // maxWidth: "60%",
    // minWidth: "20%",
    "& ::-webkit-scrollbar-thumb": {
      background: 'rgba(90, 90, 90)',
    },
    "&::-webkit-scrollbar": {
      width: '0px',
      height: '0px',
    },
  },
  price: {
    display: "flex",
    // justifyContent: "space-between",
  },
  size: {
    fontSize: "38px",
    fontWeight: 700,
    marginLeft: "200px",
  },
  sizeb: {
    fontSize: "38px",
    fontWeight: 700,
  },
  size2: {
    fontSize: "14px",
    color: "gray",
  },
  star: {
    display: "flex",
    marginTop: "5px",
  },
  star1: {
    margin: "3px",
    fontSize: "15px",
    fontWeight: 700,
  },
  star2: {
    margin: "3px",
    color: "gray",
    fontSize: "16px",
  },
  headdesc: {
    fontSize: "14px",
    fontWeight: 700,
  },
  head: {
    marginTop: "10px",
  },
  para: {
    display: "flex",
    width: "600px",
    fontSize: "14px",
    color: "gray",
  },
  blue: {
    color: " #3D857E",
    fontWeight: 700,
    fontSize: "14px",
  },
  para2: {
    fontSize: "14px",
    color: "gray",
  },
  verticalLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "	#F2F2F2",
    marginTop: "25px",
    marginBottom: "25px",
  },
  black: {
    fontSize: "16px",
    fontWeight: 700,
  },
  sizes: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  sizes2: {
    display: "flex",
    marginLeft: "30px",
    marginRight: "30px",
  },
  sizebtn: {
    border: "1px gray solid",
    width: "87px",
    margin: "5px",
  },
  sizesimg: {
    display: "flex",
  },
  images: {
    alignItems: "center",
    textAlign: "center",
    marginLeft: "60px",
    marginRight: "60px",
    marginBottom: "20px",
  },
  small: {
    fontSize: "14px",
  },
});

export default function Productdesc() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("400");

  const handleChange = (event:any, newAlignment:any) => {
    setAlignment(newAlignment);
  };
  // const getdata = async () => {
  //   try {
  //     const response = await axios.get("http://52.140.80.7:3002/api/v1/category/list?limit=1&page=10&all=1");
  //     console.log(response);
  //     setData(response.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getdata();
  // }, []);
  // const [data, setData] = useState([]);
  // const Card = ({ cardapi }) => {
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.price}>
          <Typography className={classes.sizeb}>Satsuma Shower Gel</Typography>
          <Typography className={classes.size}>₹ 499</Typography>
        </Box>
        <Box className={classes.price}>
          <Typography className={classes.size2}>
            For all skin type • Vagen
          </Typography>
          {/* <Typography className={classes.size2}>
            Inclusive of all tax
          </Typography> */}
        </Box>
        <Box className={classes.star}>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} style={{ color: "#3D857E" }}/>
          </Stack>
          <Typography className={classes.star1}>4.5/5</Typography>
          <Typography className={classes.star2}>(487)</Typography>
        </Box>
        <Box className={classes.head}>
          <Typography className={classes.headdesc}>
            Fab for sensitive skin
          </Typography>
        </Box>

        <Typography className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Typography>
        <Box className={classes.para}>
          <Typography className={classes.para2}>
            incididunt ut labore et dolore magna aliqua ipsum dolor sit amet...
          </Typography>

          <Typography className={classes.blue}>Read More</Typography>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.black}>Select Size</Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            className={classes.sizebtn}
            style={{ margin: "5px", border: "1px solid", borderRadius: "4px" }}
            value="100"
          >
            100 ml
          </ToggleButton>
          <ToggleButton
            className={classes.sizebtn}
            style={{ margin: "5px", border: "1px solid", borderRadius: "4px" }}
            value="200"
          >
            200 ml
          </ToggleButton>
          <ToggleButton
            className={classes.sizebtn}
            style={{ margin: "5px", border: "1px solid", borderRadius: "4px" }}
            value="400"
          >
            400 ml
          </ToggleButton>
          <ToggleButton
            className={classes.sizebtn}
            style={{ margin: "5px", border: "1px solid", borderRadius: "4px" }}
            value="600"
          >
            600 ml
          </ToggleButton>
          <ToggleButton
            className={classes.sizebtn}
            style={{ margin: "5px", border: "1px solid", borderRadius: "4px" }}
            value="800"
          >
            800 ml
          </ToggleButton>
        </ToggleButtonGroup>
        <Box className={classes.sizes}>
          <Typography className={classes.sizes2}>₹299</Typography>

          <Typography className={classes.sizes2}>₹399</Typography>

          <Typography className={classes.sizes2}>₹499</Typography>

          <Typography className={classes.sizes2}>₹599</Typography>

          <Typography className={classes.sizes2}>₹699</Typography>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Box className={classes.sizesimg}>
          <Box className={classes.images}>
            <img src={shampoo2} alt="" />
            <Typography className={classes.small}>100 % Vegan</Typography>
          </Box>
          <Box className={classes.images}>
            <img src={heart} alt="" />
            <Typography className={classes.small}>Cruelty Free</Typography>
          </Box>
          <Box className={classes.images}>
            <img src={background} alt="" />
            <Typography className={classes.small}>Easy Return</Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Scroll />
      </Box>
      
    </>
  );
}
// return(<Box>

// </Box>)
// }
