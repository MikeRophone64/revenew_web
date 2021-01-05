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
      <Grid item lg={4} md={6} xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100px"
              image={this.props.hotel.image}
              title={this.props.hotel.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
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
