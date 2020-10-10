import React, { Component } from "react";
import uuid from "uuid";

import ToggleableTimerForm from "./ToggleableTimerForm";
import EditableTimerList from "./EditableTimerList";

import helpers from "./helpers";

export default class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: "Practice Sqaut",
        project: "Gym Chores",
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },

      {
        title: "Android App",
        project: "Mobile App",
        id: uuid.v4(),
        elapsed: 5005690,
        runningSince: Date.now(),
      },
    ],
  };
  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };
  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };
  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };
  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };
  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter((t) => t.id !== timerId),
    });
  };
  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };
  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };
  startTimer = (timerId) => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };
  stopTimer = (timerId) => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Time Tracker</h2>

          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}
