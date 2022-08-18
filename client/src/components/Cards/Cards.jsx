import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { Container } from './Card.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function Cards ({ name, continent, flag, capital, subregion, area, population, activities }) {
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



    return (
      <Container>
    <Card sx={{ maxWidth: 320 }} style={{ margin: '2rem', flexDirection: 'row', justifyContent: 'space-between' }}>
      <CardHeader
        title={name}
        subheader={capital.replace(/[{}, "", -]/g,' ')}
      />
      <CardMedia 
        style={{ width: '90%', margin: 'auto' }}
        component="img"
        height="170"
        image={flag}
        alt="Country Flag"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {continent}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}> */}
        <Button size="small" onClick={handleOpen}>More Details</Button>
        <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='chield-modal-title'
        aria-describedby='chield-modal-description'
        >
          <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">More info on {name}</h2>
          <p id="child-modal-description"
          style={{ textAlign: 'start', display: 'flex', flexDirection: 'column' }}
          >
            Area: {area + ' ' + 'm2' + ' '}
          </p>
          <p id="child-modal-description"
          style={{ textAlign: 'start', display: 'flex', flexDirection: 'column' }}
          >
            Population: {population + ' ' + 'millions'}
          </p>
          <p id="child-modal-description"
          style={{ textAlign: 'start', display: 'flex', flexDirection: 'column' }}
          >
              Subregion: {subregion} 
          </p>
          <Link to='/activities' style={{ textDecoration: 'none' }}>
          <Button> Check Activities</Button>
          </Link>
          <Button onClick={handleClose}>Close</Button>
        </Box>
        </Modal>
        {/* </Link> */}
      </CardActions>
    </Card>
    </Container>
  );
}