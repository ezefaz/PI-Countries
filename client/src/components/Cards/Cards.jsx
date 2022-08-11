import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Container } from './Card.js'

export default function Cards ({ name, continent, flag, capital, population }) {

    return (
      <Container>
    <Card sx={{ maxWidth: 320 }} style={{ margin: '2rem', flexDirection: 'row', justifyContent: 'space-between' }}>
      <CardHeader
        title={name}
        subheader={capital.replace(/[{}]/g,'')}
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
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
    </Container>
  );
}