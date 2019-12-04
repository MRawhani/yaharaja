import React, { Component } from "react";

export default class Editable extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      value: undefined,
      originalValue: undefined
    };
  }
  componentDidMount() {
    
   this.setOriginalValues()
  }
  componentDidUpdate() {
    const { errors, entity, entityValue, resetErrors } = this.props;
    if (errors && errors.length > 0 && errors[0].title === entityValue) {
      debugger
      this.setOriginalValues()
      resetErrors()
    }
  }
  setOriginalValues=()=>{
    const { entity, entityValue } = this.props;
    this.setState({
      value: entity[entityValue],
      originalValue: entity[entityValue],
      isActive: false
    });
  }
  enableEdit = () => {
    this.setState({
      isActive: true
    });
  };
  disableEdit = () => {
    this.setState({
      isActive: false
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  update = () => {
    const { value, originalValue } = this.state;
    const { updateEntity, entityValue,entity } = this.props;
debugger
    if (value !== originalValue) {
      updateEntity(entity._id,{ [entityValue]: value });
      this.setState({
        isActive: false,
        originalValue: value
      });
    }
  };
}
