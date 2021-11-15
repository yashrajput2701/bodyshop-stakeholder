import React from "react";
import { makeStyles, Box, Typography, Button,createStyles } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Ratingpercent from "./Ratingpercent";
import StarRateIcon from "@mui/icons-material/StarRate";
import Singlerating from "./Singlerating";
import shampoo from "../Assets/yellow.png";
import shampoo2 from "../Assets/pink.png";
import shampoo3 from "../Assets/product 4 2.png";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "space-between",
          },
          offers: {
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "10px",
          },
          green: {
            display: "flex",
          },
          greenhead: {
            color: "#3D857E",
            fontSize: "14px",
            fontWeight: 600,
            margin: "5px",
          },
          align: {
            display: "flex",
          },
          starts: {
            alignItems: "center",
            width: "250px",
            height: "250px",
            marginTop: "50px",
          },
          big: {
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          },
          vbig: {
            fontWeight: 700,
            fontSize: "25px",
            justifyContent: "center",
          },
          vsmall: {
            color: "gray",
            fontSize: "12px",
            textAlign: "center",
          },
          stack: {
            display: "flex",
            justifyContent: "center",
          },
          verticalLine: {
            width: "1px",
            height: "150px",
            backgroundColor: "	#F2F2F2",
            marginTop: "25px",
            marginBottom: "25px",
          },
          horizontalLine: {
            width: "100%",
            height: "1px",
            backgroundColor: "#F2F2F2",
            marginBottom: "25px",
            marginTop: "25px",
          },
          transparent: {
            backgroundColor: "transparent",
            border: "2px #3D857E solid",
            textTransform: "inherit",
            width: "110px",
          },
          box: {
            display: "flex",
          },
          jesse: {
            fontSize: "14px",
            fontWeight: 500,
            color: "gray",
            margin: "5px",
          },
          jesse2: {
            fontSize: "14px",
            fontWeight: 500,
            color: "gray",
            margin: "5px",
          },
          lorem: {
            width: "575px",
            fontSize: "14px",
            fontWeight: 400,
            marginTop: "15px",
            color: "gray",
          },
          description: {
            display: "flex",
            justifyContent: "space-between",
            width: "450px",
          },
          lorem2: {
            fontSize: "16px",
            fontWeight: 400,
            color: "gray",
          },
          lorem22: {
            fontSize: "16px",
            fontWeight: 400,
            color: "gray",
            width: "140px",
          },
          rate: {
            display: "flex",
            width: "auto",
            // justifyContent: "flex-start",
          },
          rateline: {
            display: "flex",
          },
          content: {
            display: "flex",
          },
          transparent2: {
            border: "1px gray solid",
            width: "62px",
            margin: "20px",
          },
          ggbtn: {
            backgroundColor: "#044236",
            width: "144px",
            textTransform: "inherit",
            color: "white",
            position: "relative",
            "&:hover": { backgroundColor: "#044236" },
          },
          products: {
            display: "flex",
            flexgrow: "40%",
            justifyContent: "space-between",
            [theme.breakpoints.down("sm")]:{
              flexDirection: "column"
            }
          },
          box2: {
            width: "150px",
            height: "150px",
            backgroundColor: "#F8F3E9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          anti: {
            width: "104px",
            fontWeight: 700,
            fontSize: "13px",
          },
          products2: {
            // width: "150px",
            height: "150px",
            display: "flex",
            alignItems: "center",
          },
          containers: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "100px",
          },
    })
);

export default function Ratingpage() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.offers}>Rating & Reviews</Typography>
        <Box className={classes.green}>
          <EditIcon
            style={{ color: "#044236", fontSize: "17px", margin: "5px" }}
          />
          <Typography className={classes.greenhead}>Review Product</Typography>
        </Box>
      </Box>
      <Box className={classes.align}>
        <Box className={classes.starts}>
          <Box className={classes.big}>
            <Typography className={classes.vbig}>4.5</Typography>
            <Typography className={classes.vbig}>/5</Typography>
          </Box>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={4.5}
              precision={0.5}
              className={classes.stack}
              style={{ color: "#3D857E" }}
            />
          </Stack>
          <Typography className={classes.vsmall}>487 verified users</Typography>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Ratingpercent />
      </Box>
      <Box component="div" className={classes.horizontalLine} />
      <Box className={classes.container}>
        <Typography className={classes.offers}>Customer Reviews</Typography>
        <Box className={classes.green}>
          <Typography className={classes.greenhead}>View more</Typography>
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box>
          <Typography>Fab for sensitive skin</Typography>
          <Box className={classes.box}>
            <Typography className={classes.jesse}>Angelene Jessy</Typography>
            <StarRateIcon
              style={{ fontSize: "20px", color: "#3D857E", margin: "5px" }}
            />
            <Typography className={classes.jesse2}>4.5</Typography>
          </Box>
        </Box>
        <Box>
          <Button className={classes.transparent}>Report this</Button>
        </Box>
      </Box>
      <Typography className={classes.lorem}>
        We take a lot of pride in making sure we source the highest quality
        ingredients, while making sure they’re having a positive impact on
        people and the planet.
      </Typography>
      <Box component="div" className={classes.horizontalLine} />
      <Box className={classes.description}>
        <Typography className={classes.lorem22}>Skin Concern</Typography>
        <Typography className={classes.lorem2}>:</Typography>
        <Typography className={classes.lorem22}>Sensitive</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography className={classes.lorem22}>Age</Typography>
        <Typography className={classes.lorem2}>:</Typography>
        <Typography className={classes.lorem22}>Below 16</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography className={classes.lorem22}>Time using product</Typography>
        <Typography className={classes.lorem2}>:</Typography>
        <Typography className={classes.lorem22}>1+ month(s)</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography className={classes.lorem22}>Post date</Typography>
        <Typography className={classes.lorem2}>:</Typography>
        <Typography className={classes.lorem22}>April 2021</Typography>
      </Box>
      <Box component="div" className={classes.horizontalLine} />

      <Box className={classes.rateline}>
        <Box className={classes.rate}>
          <StarRateIcon
            style={{ fontSize: "20px", color: "#3D857E", margin: "5px" }}
          />
          <Typography className={classes.jesse2}>4.5</Typography>
        </Box>
      </Box>
      <Singlerating />
      <Typography className={classes.jesse2}>Performance</Typography>
      <Box component="div" className={classes.horizontalLine} />
      <Box className={classes.container}>
        <Box>
          <Typography>Was this helpful ?</Typography>
          <Box className={classes.box}>
            <Typography className={classes.jesse}>
              4 found this helpful
            </Typography>
          </Box>
        </Box>
        <Box className={classes.content}>
          <Button className={classes.transparent2}>NO</Button>
          <Button className={classes.transparent2}>YES</Button>
        </Box>
      </Box>
      <Box component="div" className={classes.horizontalLine} />
      <Typography className={classes.offers}>Complete your Routiene</Typography>
      <Box className={classes.products}>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Anti-Dandruff Shampoo
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <StarRateIcon
                style={{ fontSize: "20px", color: "#3D857E", margin: "5px" }}
              />
              <Typography className={classes.jesse2}>4.5</Typography>
            </Box>
          </Box>
          <Box className={classes.green}>
            <Typography className={classes.greenhead}>View more</Typography>
          </Box>
          <Typography>₹450</Typography>
        </Box>
        <Box className={classes.products2}>
          <ControlPointIcon
            style={{
              fontSize: "40px",
              color: "#3D857E",
              borderRadius: "50%",
              backgroundColor: "#E7EEEE",
            }}
          />
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo2} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Pink GrapeFruit Shower Gel
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <StarRateIcon
                style={{ fontSize: "20px", color: "#3D857E", margin: "5px" }}
              />
              <Typography className={classes.jesse2}>4.5</Typography>
            </Box>
          </Box>
          <Box className={classes.green}>
            <Typography className={classes.greenhead}>View more</Typography>
          </Box>
          <Typography>₹450</Typography>
        </Box>
        <Box className={classes.products2}>
          <ControlPointIcon
            style={{
              fontSize: "40px",
              color: "#3D857E",
              borderRadius: "50%",
              backgroundColor: "#E7EEEE",
            }}
          />
        </Box>
        <Box>
          <Box className={classes.box2}>
            <img src={shampoo3} alt="" />
          </Box>
          <Typography className={classes.anti}>
            Festive Berry Body Lotion
          </Typography>
          <Box className={classes.rateline}>
            <Box className={classes.rate}>
              <StarRateIcon
                style={{ fontSize: "20px", color: "#3D857E", margin: "5px" }}
              />
              <Typography className={classes.jesse2}>4.5</Typography>
            </Box>
          </Box>
          <Box className={classes.green}>
            <Typography className={classes.greenhead}>View more</Typography>
          </Box>
          <Typography>₹450</Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.horizontalLine} />
      <Box className={classes.containers}>
        <Box>
          <Typography>₹ 1,499</Typography>
          <Box className={classes.box}>
            <Typography className={classes.jesse}>Price for all 3</Typography>
          </Box>
        </Box>
        <Box className={classes.content}>
          <Button className={classes.ggbtn}>Add to Bag</Button>
        </Box>
      </Box>
      <Box component="div" className={classes.horizontalLine} />
    </>
  );
}
