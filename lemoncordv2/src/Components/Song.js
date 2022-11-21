import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { border, style } from '@mui/system';
import { useState } from 'react';

export default function BasicCard() {
//=================== hover state setting =========================
const [isHover, setIsHover] = useState(false);

const handleMouseEnter = () => {
   setIsHover(true);
};
const handleMouseLeave = () => {
   setIsHover(false);
};
//======================== card styling ==================================
const cardStyle = {
    backgroundColor: 'rgb(27, 162, 177)',
    color: 'white',
    display: 'flex',
    fontSize: '30px',
    cursor: 'pointer',
    border: isHover ? ' 3px solid rgb(76, 146, 148) ' : 'rgb(0, 191, 255)'
 };



  return (
    <Card 
    sx={{ minWidth: 275 }}
    style={cardStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        <Divider/>
      <CardContent>
        <Typography color="white" gutterBottom>
          Song Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
          adjective
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <Divider/>
    </Card>
  );
}