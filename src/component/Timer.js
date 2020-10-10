import React, { Component } from "react";
import helpers from "./helpers";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, FormControl, IconButton } from "@material-ui/core";

export default class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }
  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };
  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
    const elapsedString = helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
    return (
      <div className="timer">
        <div className="">
          <h2>{this.props.title}</h2>
        </div>
        <div className="description">
          <p className="lead">{this.props.project}</p>
        </div>
        <div>
          <p className="lead">{elapsedString}</p>
        </div>
        <div className="ml-4">
          <span>
            <IconButton
              className="btn btn-primary btn-lg m-2"
              onClick={this.props.onEditClick}
            >
              <EditIcon color="default" size="small" />
            </IconButton>
          </span>
          <span>
            <IconButton
              className="btn btn-primary btn-lg m-2"
              onClick={this.handleTrashClick}
              size="large"
            >
              <DeleteIcon color="default" />
            </IconButton>
          </span>
        </div>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}
class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <div className="ctrl-button" onClick={this.props.onStopClick}>
          <FormControl>
            <Button variant="contained" color="secondary">
              Stop
            </Button>
          </FormControl>
        </div>
      );
    } else {
      return (
        <div className="ctrl-button" onClick={this.props.onStartClick}>
          <FormControl>
            <Button variant="contained" color="primary">
              Start
            </Button>
          </FormControl>
        </div>
      );
    }
  }
}
