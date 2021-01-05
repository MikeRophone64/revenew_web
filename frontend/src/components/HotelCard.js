import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default class HotelCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Grid lg={3}>
          <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140px"
              image={this.props.hotel.image}
              title={this.props.hotel.name}
            />
            {/* <img src={this.props.hotel.image} /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.hotel.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Keys: {this.props.hotel.stars}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}
