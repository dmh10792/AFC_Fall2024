import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material'

export default function DogImageCard({imgPath}) {
  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imgPath}
          alt="Random Dog Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Random Dog
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A random dog image retrieved from the DogImageAPI
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
