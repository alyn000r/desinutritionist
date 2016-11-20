import React, { PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MyCard from '../containers/card';
import PieChart from 'react-simple-pie-chart';

export default class MealList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="meal-list-tabs col-lg-7 col-md-7 col-sm-11 col-xs-11">
          <Tabs>
            <Tab style={{backgroundColor: '#34495e'}} label="Breakfast">
            </Tab>
            <Tab style={{backgroundColor: '#34495e'}} label="Lunch">
              <MyCard />
            </Tab>
            <Tab style={{backgroundColor: '#34495e'}} label="Dinner">
            </Tab>
          </Tabs>
        </div>
        <div className="meal-list-tabs col-lg-3 col-md-3 col-sm-11 col-xs-11">
          <Tabs>
            <Tab style={{backgroundColor: '#2980b9'}} label="Chart">
              <div className="pie-chart-container">
                <PieChart
                  slices={[
                {
                  color: '#27ae60',
                  value: 30
                },
                {
                  color: '#e74c3c',
                  value: 30
                },
                {
                  color: '#8e44ad',
                  value: 40
                }
              ]}
                />
                <div className="nutrition-summary-container">
                  <h3>Protein: 183gm</h3>
                  <h3>Fat: 200gm</h3>
                  <h3>Carbs: 373gm</h3>
                </div>
              </div>
            </Tab>
            <Tab style={{backgroundColor: '#2980b9'}} label="Nutrition Info">
              <div className="pie-chart-container">
                <h3>Detailed Nutrition Info</h3>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}