import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ginger1 from "../Assets/ginger1.png";
import ginger2 from "../Assets/ginger2.png";
import ginger3 from "../Assets/ginger3.png";
import Ratingpage from "./Ratingpage";
import Offers from "./Offers";
// import Fixedbar from "./Fixedbar";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "870px",
    fontWeight: 500,
    fontSize: "14px",
    width: "100%",
  },
  bgcolor: {
    backgroundColor: "#F8F3E9",
    width: "100%",
  },
  scrolldetails: {
    width: "auto",
  },

  offers: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  lorem: {
    width: "575px",
    fontSize: "14px",
    fontWeight: 400,
    marginTop: "15px",
    color: "gray",
  },
  verticalLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "	#F2F2F2",
    marginTop: "25px",
    marginBottom: "25px",
  },
  video: {
    display: "flex",
  },
  uses: {
    width: "250px",
    height: "125px",
  },
  features: {
    width: "320px",
    fontWeight: 400,
    fontSize: "14px",
    color: "grey",
    paddingLeft: "25px",
  },
  arrow: {
    paddingLeft: "25px",
  },
  offers2: {
    paddingTop: "15px",
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  img4: {
    display: "flex",
  },
  image4: {
    margin: "10px",
    borderRadius: "5px",
  },
  big: {
    backgroundColor: "#044236",
    width: "251px",
    textTransform: "inherit",
    color: "white",
    height: "48px",
    marginTop: "15px",
    "&:hover": { backgroundColor: "#044236" },
  },
});

export default function Scroll() {
  const classes = useStyles();

  return (
    <div>
      {/* <Fixedbar /> */}
      <Box className={classes.scrolldetails}>
        <Offers />
        <Box>
          <Typography className={classes.offers}>Delivery Option</Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 575,
              backgroundColor: "aliceblue",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter pin-code"
              inputProps={{ "aria-label": "Enter pin-code" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <GpsFixedIcon style={{ color: "#3D857E" }} />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>
          <Typography className={classes.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.offers}>
          What does it do for you ?
        </Typography>
        <Typography className={classes.lorem}>
          Our Tea Tree Night Lotion helps you snooze your way to dreamy looking
          skin. Blemishes? Time for this little guy to get to work.
        </Typography>
        <Typography className={classes.lorem}>
          While you sleep your skin is in recovery mode and so it’s the perfect
          time to slather on some hard-working skincare. This lightweight night
          lotion helps your skin feel moisturised while absorbing excess oil and
          sebum, so you can wake up to refreshed skin that looks and more
          balanced. Sounds like a dream, right?
        </Typography>
        <Typography className={classes.lorem}>
          Sourced from thousands of tea tree leaves in Kenya, The Body Shop’s
          Tea Tree Night Lotion is enriched with Community Fair Trade tea tree
          oil. This not only helps the local farmers, but also funds community
          projects in the local area. It’s a real winner, and your skin will
          thank you too.
        </Typography>
        <Typography className={classes.lorem}>
          And if you’re on the hunt for more than just a night lotion, The Body
          Shop’s Tea Tree range is full of more blemish-battling goodies.
        </Typography>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.offers}>How to Use</Typography>
        <Box className={classes.video}>
          <Box className={classes.uses}>
            <iframe
              width="214"
              height="125"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </Box>
          <Box>
            <Typography className={classes.arrow}>-</Typography>
            <Typography className={classes.arrow}>-</Typography>
            <Typography className={classes.arrow}>-</Typography>
          </Box>
          <Box>
            <Typography className={classes.features}>
              First, prep the skin with our Tea Tree Skin Clearing Facial Wash
            </Typography>
            <Typography className={classes.features}>
              Follow up by swiping our Tea Tree Skin Clearing Mattifying Toner
              across skin.
            </Typography>
            <Typography className={classes.features}>
              Every night, smooth our Tea Tree Night Lotion all over your face
              and neck in upward motions. Now off to bed.
            </Typography>
          </Box>
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.offers}>Ingredients</Typography>
        <Typography className={classes.offers2}>
          Avocado oil from brazil
        </Typography>
        <Typography className={classes.lorem}>
          Avocado oil are kind of like cacao nuts, and give us their own
          moisturising, skin-loving oil to nourish bods.
        </Typography>
        <Typography className={classes.offers2}>Argan Oil</Typography>
        <Typography className={classes.lorem}>
          This stuff is like liquid gold, rich in vitamin E and polyunsaturated
          fatty acids that are super nourishing for skin
        </Typography>
        <Typography className={classes.offers2}>Argan Oil</Typography>
        <Typography className={classes.lorem}>
          This stuff is like liquid gold, rich in vitamin E and polyunsaturated
          fatty acids that are super nourishing for skin
        </Typography>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.offers}>
          Additional Information
        </Typography>
        <Typography className={classes.lorem}>
          Apply to lips straight from the bullet or with a Lipstick & Concealer
          Brush. Four steps to the perfect pout:
        </Typography>
        <Typography className={classes.lorem}>
          - Prepare for colour by gently exfoliation with lipscuff
        </Typography>
        <Typography className={classes.lorem}>
          - Moisturise with hydrating and conditioning Translucent Lip Care.
        </Typography>
        <Typography className={classes.lorem}>
          - Add definition with soft-textured Lip Liner.
        </Typography>
        <Typography className={classes.lorem}>
          - You are ready to go!
        </Typography>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.offers}>Want to Know More</Typography>
        <Box className={classes.img4}>
          <img src={ginger1} alt="" className={classes.image4} />
          <img src={ginger2} alt="" className={classes.image4} />
          <img src={ginger3} alt="" className={classes.image4} />
          <img src={ginger3} alt="" className={classes.image4} />
        </Box>
        <Box component="div" className={classes.verticalLine} />
        <Typography className={classes.offers}>Small But Mighty</Typography>
        <Typography className={classes.lorem}>
          Known for its naturally purifying prowess, tea tree oil has always
          been a winner for oily and blemished skin. That’s why we love it in
          our Tea Tree skincare range.
        </Typography>
        <Typography className={classes.lorem}>
          Our Community Fair Trade tea tree oil is sustainably sourced in Kenya.
          We partner with a number of independent farmers who steam-distil the
          leaves within 12 hours of harvest, to make sure we’re bottling our
          purest and most potent oil. The oil from around 15,000 tea tree leaves
          goes into every 20ml bottle of Tea Tree Oil.
        </Typography>
        <Typography className={classes.lorem}>
          We take a lot of pride in making sure we source the highest quality
          ingredients, while making sure they’re having a positive impact on
          people and the planet.
        </Typography>
        <Button className={classes.big} variant="contained">
          Discover the tea tree range
        </Button>
        <Box component="div" className={classes.verticalLine} />
        <Ratingpage />
      </Box>
    </div>
  );
}
