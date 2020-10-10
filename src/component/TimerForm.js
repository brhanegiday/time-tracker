import { Input, Button, FormControl, InputLabel } from "@material-ui/core";
import React, { Component } from "react";

export default class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || "",
  };
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleProjetChange = (event) => {
    this.setState({
      project: event.target.value,
    });
  };
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.props.title,
      project: this.props.project,
    });
  };
  render() {
    const submitText = this.props.id ? "Update" : "Create";
    return (
      <div>
        <FormControl>
          <div className="form-group">
            <InputLabel htmlFor="Title">Title</InputLabel>
            <Input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <InputLabel htmlFor="">Project</InputLabel>
            <Input
              type="text"
              value={this.state.project}
              onChange={this.handleProjetChange}
            />
          </div>
          <div className="btn">
            <span>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleSubmit}
                className="btn-update"
              >
                {submitText}
              </Button>
            </span>
            <span>
              <Button
                variant="outlined"
                color="secondary"
                onClick={this.props.onFormClose}
              >
                Cancel
              </Button>
            </span>
          </div>
        </FormControl>
      </div>
    );
  }
}
