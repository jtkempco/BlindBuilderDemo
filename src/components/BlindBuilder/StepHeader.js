import React, { Component } from "react"
import Checkmark from './Checkmark'
import $ from 'jquery'
import { toFraction } from '../../myPackages/commonFunctions.js'


class StepHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {"selections": ""};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let fields = this.props.fields.filter(field => { if ( field.selectedValue != null || field.defaultValue != null ) return field} );
    this.setState({ selections: this.getSelections(this.props.name, fields) })
  }

  componentWillReceiveProps(nextProps) {
    let fields = nextProps.fields.filter(field => { if ( field.selectedValue != null || field.defaultValue != null ) return field} );
    this.setState({ selections: this.getSelections(nextProps.name, fields) })
  }

  handleClick() {
    if( !this.props.disabled ) {
      if( !this.props.open ) $("html, body").animate({scrollTop: $('.BlindBuilder__accordion__step').eq(this.props.stepNumber).offset().top}, 550);
      this.props.triggerStepToggled(this.props.stepNumber, this.props.open);
    }
  }

  parseSize(fields, i) {
    let ii = i + 1;
    let x  = fields[i].selectedValue == null ? fields[i].defaultValue : fields[i].selectedValue;
    let xf = fields[ii].selectedValue == null ? fields[ii].defaultValue : fields[ii].selectedValue;
    return (( xf == 0 ) ? x : x + " " + toFraction(xf)) + '"';
  }

  parseSizes(fields) {
    return this.parseSize(fields, 0) + " x " + this.parseSize(fields, 2)
  }

  getSelections(stepName, fields) {
    let selections = "", selection, key, choice;
    switch (stepName) {
      case 'measureAndMounting':
        selections += this.parseSizes(fields);
    	  for (let i = 4; i <= fields.length - 1; i++) {
    	    key = fields[i].selectedValue;
    	    choice = fields[i].choices.filter(choice => { if ( choice.value === key ) return choice } )[0];
    	    selections += fields[i].name === "Mounting" ? ", " + choice.displayName : ", " + fields[i].displayName;
    	  }
        break;
      case 'roomLabel':
        selections += fields.length > 0 ? fields[0].selectedValue : "";
        break;
      default:
    	  for (let i = 0; i <= fields.length - 1; i++) {
          key = fields[i].selectedValue;
    	    choice = fields[i].choices.filter(choice => { if ( choice.value === key ) return choice } )[0];
          if( choice != undefined ) {
            selections += (i === 0) ? choice.displayName :  ", " + choice.displayName;
          }else{
            console.log("ERROR: choice is undefined!! " + JSON.stringify(choice));
          }
        }
      }

      return selections.replace(/(<([^>]+)>)/ig," ")
  }

  truncate(str) {
    let length = 39 + 3;
    if (str.length > length) {
      return str.substring(0, length - 3) + '...';
    } else {
      return str;
    }
  }

  render() {
    return (
      <h4 class="BlindBuilder__accordion__step__header" onClick={this.handleClick}>
        <em>{this.props.id}.</em>
        <Checkmark />
        <span class="BlindBuilder__accordion__step__step-name">{this.props.displayName}</span>
        <span class="BlindBuilder__accordion__step__choices">{this.truncate(this.state.selections)}</span>
        <span class="MoreArrowIcon"><svg viewBox="0 0 7.2 12.9"><path fill="#4c4c4c" d="M-.2 12.9v-7h1v4.7L5.7 6 .4.7l.7-.7 6 6.1z"></path></svg></span>
      </h4>
    )
  }
}

export default StepHeader;
