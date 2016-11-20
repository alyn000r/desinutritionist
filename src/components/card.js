import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onHandleTouchTap() {
    return () => {
      this.handleTouchTap();
    };
  }

  handleTouchTap() {
    this.props.displayRecipe();
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 card-container">
          <Card>
            <CardHeader
              title="Item - 1"
            />
            <CardMedia
              overlay={<CardTitle title="Cook Time" subtitle="25 Mins" />}
            >
              <img src="images/kadai.jpg"/>
            </CardMedia>
            <CardTitle title="Chicken Kadai"/>
            <CardText>
              Chicken Karahi - Chicken karahi's are very popular in Pakistan and don't take long to make. If you have to
              fix a quick simple lunch in 30 minutes then make sure you treat yourself with this delicious chicken
              karahi
              recipe by Chef Zakir.
            </CardText>
            <CardActions>
              <FlatButton label="See Recipe" onTouchTap={this.onHandleTouchTap()}/>
            </CardActions>
          </Card>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 card-container">
          <Card>
            <CardHeader
              title="Item - 2"
            />
            <CardMedia
              overlay={<CardTitle title="Cook Time" subtitle="10 Mins" />}
            >
              <img src="images/strawberry_smoothie.jpg"/>
            </CardMedia>
            <CardTitle title="Strawberry Smoothie"/>
            <CardText>
              Simple strawberry smoothie reciper by Lisa and Brittany.
            </CardText>
            <CardActions>
              <FlatButton label="See Recipe" onTouchTap={this.onHandleTouchTap()}/>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}