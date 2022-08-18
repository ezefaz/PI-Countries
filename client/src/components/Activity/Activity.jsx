import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Activity({name, duration, season, difficulty, image, countries}) {
    
    return (
        <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Activity
        </Typography>
        <Typography variant="h5" component="div">
         {name}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {season}
        </Typography>
        <Typography variant="body2">
          Duration: {duration} mins.
        </Typography>
        <Typography variant="body2">
          Difficulty: {difficulty} / 5
        </Typography>
        </Typography>
        </CardContent>
        <CardMedia
        component="img"
        height="120"
        image={image}
        style={{ width: '90%', height: '15rem', margin: 'auto' }}
        alt="activity image"
      />
    </Card>
  );
}