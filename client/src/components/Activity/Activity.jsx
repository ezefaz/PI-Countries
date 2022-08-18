import React from 'react'
// import '../ActivitiesList/ActivitiesList'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Activity({name, duration, season, difficulty, idCountry}) {
    
    return (
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Activity
        </Typography>
        <Typography variant="h5" component="div">
         {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {season}
        </Typography>
        <Typography variant="body2">
          Duration: {duration} mins.
        </Typography>
        <Typography variant="body2">
          Difficulty: {difficulty} / 5
        </Typography>
      </CardContent>
    </Card>
  );
}