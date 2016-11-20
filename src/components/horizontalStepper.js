import React, { PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MySelectField from './selectField';
import TextField from 'material-ui/TextField';
import MealList from '../containers/mealList';
import Recipe from '../containers/recipe';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
export default class HorizontalLinearStepper extends React.Component {

  constructor(props) {
    super(props);

    this.initializeForm();
  }

  initializeForm() {
    this.setup = {};
    this.setup.age = this.props.setup.age ? this.props.setup.age : '';
    this.setup.height = this.props.setup.height ? this.props.setup.height : '';
    this.setup.weight = this.props.setup.weight ? this.props.setup.weight : '';
    this.setup.gender = this.props.setup.gender;
    this.setup.activityLevel = this.props.setup.activityLevel;
    this.setup.goal = this.props.setup.goal;
    this.setup.mealsPerDay = this.props.setup.mealsPerDay;
    this.setup.vegetarian = this.props.setup.vegetarian;
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
    if (this.props.stepIndex > 0) {
      this.props.handlePrev();
    }
    return;
  }

  createActivityMenu(items) {
    const menu = [];
    for (let i = 0, len = items.length; i < len; i++) {
      let menuItem = {};
      menuItem.value = i + 1;
      menuItem.primaryText = items[i];
      menu.push(menuItem);
    }
    return menu;
  }


  stepOneContent() {
    const styles = {
      selectField: {
        textAlign: 'left',
        margin: '20px 0px'
      }
    };
    const mealsArray = [1, 2, 3, 4, 5];
    return (
      <div>
        <h1>How many meals do you eat per day ?</h1>
        <div style={styles.selectField}>
          <MySelectField floatingLabel="Meals Per Day" menu={this.createActivityMenu(mealsArray)} fullWidth={true}/>
        </div>
      </div>
    )
  }

  stepThreeContent() {
    const styles = {
      selectField: {
        textAlign: 'left',
        margin: '20px 0px'
      }
    };
    const preference = ['Yes', 'No'];
    return (
      <div>
        <h1>Are you a vegetarian ?</h1>
        <div style={styles.selectField}>
          <MySelectField floatingLabel="Vegetarian" menu={this.createActivityMenu(preference)} fullWidth={true}/>
        </div>
      </div>
    )
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
          <TextField
            hintText='Age'
            errorText={null}
            fullWidth={true}
          />
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
          <TextField
            hintText='Weight in lb'
            errorText={null}
            fullWidth={true}
          />
        </div>
        <div style={styles.textFieldContainer}>
          <TextField
            hintText='Height in cm'
            errorText={null}
            fullWidth={true}
          />
        </div>
        <div style={styles.textFieldContainer}>
          <MySelectField floatingLabel="Activity Level" menu={this.createActivityMenu(activityMenuArray)}
                         fullWidth={true}/>
        </div>
        <div style={styles.textFieldContainer}>
          <MySelectField floatingLabel="Goal" menu={this.createActivityMenu(goalsActivityArray)} fullWidth={true}/>
        </div>
        <div style={styles.explanationHeader}>
          <h2>Lose Maintain or Gain</h2>
          <p>This calculator gives you the ability to adjust your TDEE and macros at 3 different goal settings.</p>
          <ul style={styles.li}>
            <li style={styles.li}><strong>Lose</strong> puts you in a 20% calorie deficit which promotes safe, steady
              weight loss.
            </li>
            <li style={styles.li}><strong>Maintain</strong> allows you to eat at macro levels that will keep you at your
              current weight.
            </li>
            <li style={styles.li}><strong>Gain</strong> puts you in a 20% calorie surplus and is designed for people who
              are wanting to build muscle fast in conjunction with a comprehensive weight training program. It can also
              be used by people who are underweight.
            </li>
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
        return this.stepOneContent();
      case 2:
        return this.stepThreeContent();
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {displayRecipe, finished, stepIndex} = this.props;

    if (displayRecipe) {
      return (this.displayRecipe());
    }

    else if (finished) {
      return this.displayMealList();
    }
    else {
      return this.displayHorizontalStepper(stepIndex);
    }
  }

  displayMealList() {
    return (<MealList />)
  }

  displayRecipe() {
    return (<Recipe />)
  }

  displayHorizontalStepper(stepIndex) {
    const contentStyle = { margin: '0 16px' };
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
                label={stepIndex === 2 ? 'Tell me what to eat' : 'Next'}
                primary={true}
                onTouchTap={this.onHandleNext()}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HorizontalLinearStepper.propTypes = {
  finished: PropTypes.bool.isRequired,
  stepIndex: PropTypes.number.isRequired,
  setup: PropTypes.object.isRequired
};