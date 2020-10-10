import React, { Component } from "react";
import TimerForm from "./TimerForm";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

export default class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };
  handleFormOpen = () => {
    this.setState({
      isOpen: true,
    });
  };
  handleFormClose = () => {
    this.setState({ isOpen: false });
  };
  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({
      isOpen: false,
    });
  };
  render() {
    if (this.state.isOpen)
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    else {
      return (
        <div className="text-center mt-3">
          <IconButton
            className="btn btn-info btn-lg px-4"
            onClick={this.handleFormOpen}
          >
            <AddIcon variant="contained" color="secondary" />
          </IconButton>
        </div>
      );
    }
  }
}
