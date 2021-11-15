import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function LinearProgressWithLabel(props:any) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired, color: PropTypes.string
};


export default function Ratingpercent() {
  const [progress, setProgress] = React.useState(10);
  const theme = createTheme({
    palette: {
       secondary: {
           main: '#3D857E'
       }
    }
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '50%',padding: "40px" }} >
        <Typography>Performance</Typography>
        <ThemeProvider theme={theme}>
      <LinearProgressWithLabel value={82} color="secondary"/>
      </ThemeProvider>

      <Typography>Quality</Typography>
      <ThemeProvider theme={theme}>
      <LinearProgressWithLabel value={90} color="secondary"/>
      </ThemeProvider>
      <Typography>Value</Typography>
      <ThemeProvider theme={theme}>
      <LinearProgressWithLabel value={79} color="secondary"/>
      </ThemeProvider>
    </Box>
  );
}
