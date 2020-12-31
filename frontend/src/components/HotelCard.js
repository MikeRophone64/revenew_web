import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default class HotelCard extends Component {

  render() {

    return (
      <Grid xs={3}>
        {this.props.disneyHotels.map(hotel => (
          <Card>
          <CardActionArea>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Keys: {hotel.stars}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </Grid>
    );
  }
}
