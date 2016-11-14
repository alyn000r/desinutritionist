import React, { PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MyTextField from './textField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MySelectField from './selectField';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
export default class HorizontalLinearStepper extends React.Component {

  constructor(props) {
    super(props);
  }

  onHandleNext() {
    return () => {
      this.handleNext();
    };
  }

  handleNext() {
    if (this.props.stepIndex == 2) {
      this.props.handleFinish();
    }
    this.props.handleNext();
  }


  onHandlePrev() {
    return () => {
      this.handlePrev();
    };
  }

  handlePrev() {
    if(this.props.stepIndex > 0) {
      this.props.handlePrev();
    }
    return;
  }

  createActivityMenu(items) {
    const menu = [];
    for(let i= 0, len = items.length; i < len ; i++) {
      let menuItem = {};
      menuItem.value = i+1;
      menuItem.primaryText = items[i];
      menu.push(menuItem);
    }
    return menu;
  }

  stepZeroContent() {

    const styles = {
      radioButton: {
        marginBottom: 16,
        textAlign: 'left'
      },
      gender: {
        textAlign: 'left',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '20px 0px'
      },
      textFieldContainer: {
        margin: '20px 0px',
        textAlign: 'left'
      },
      explanationHeader: {
        margin: '30px 0px',
        textAlign: 'left',
        fontSize: '20px',
        color: '#34495e'
      },
      li: {
        margin: '20px 0px',
        lineHeight: '30px',
        color: '#34495e'
      }
    };

    const activityMenuArray = ['Sedentary', 'Lightly Active', 'Active', 'Very Active'];

    const goalsActivityArray = ['Lose', 'Maintain', 'Gain'];


    return (
      <div>
        <div style={styles.textFieldContainer}>
          <MyTextField fullWidth={true} hintText = 'Age'/>
        </div>
        <div>
          <div style={styles.gender}>
            <span>Gender: </span>
          </div>
          <RadioButtonGroup name="Gender" defaultSelected="male">
            <RadioButton
              value="male"
              label="Male"
              style={styles.radioButton}
            />
            <RadioButton
              value="female"
              label="Female"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
        </div>
        <div style={styles.textFieldContainer}>
          <MyTextField fullWidth={true} hintText = 'Weight in lb'/>
        </div>
        <div style={styles.textFieldContainer}>
          <MyTextField fullWidth={true} hintText = 'Height in cm'/>
        </div>
        <div style={styles.textFieldContainer}>
          <MySelectField floatingLabel="Activity Level" menu={this.createActivityMenu(activityMenuArray)} fullWidth={true} />
        </div>
        <div style={styles.textFieldContainer}>
          <MySelectField floatingLabel="Goal" menu={this.createActivityMenu(goalsActivityArray)} fullWidth={true} />
        </div>
        <div style={styles.explanationHeader}>
          <h2>Lose Maintain or Gain</h2>
          <p>This calculator gives you the ability to adjust your TDEE and macros at 3 different goal settings.</p>
          <ul style={styles.li}>
            <li style={styles.li}><strong>Lose</strong> puts you in a 20% calorie deficit which promotes safe, steady weight loss.</li>
            <li style={styles.li}><strong>Maintain</strong> allows you to eat at macro levels that will keep you at your current weight.</li>
            <li style={styles.li}><strong>Gain</strong> puts you in a 20% calorie surplus and is designed for people who are wanting to build muscle fast in conjunction with a comprehensive weight training program. It can also be used by people who are underweight.</li>
          </ul>
        </div>
      </div>
    );
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.stepZeroContent();
      case 1:
        return 'How many meals per day ?';
      case 2:
        return 'Are you a vegetarian ?';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.props;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Set Your Targets</StepLabel>
          </Step>
          <Step>
            <StepLabel>Meals Per Day</StepLabel>
          </Step>
          <Step>
            <StepLabel>Food Group</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  //TODO: Add method to go to the food screen
                }}
              >
                Plan My Meals
              </a>
            </p>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.onHandlePrev()}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.onHandleNext()}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  finished: PropTypes.bool.isRequired,
  stepIndex: PropTypes.number.isRequired
};