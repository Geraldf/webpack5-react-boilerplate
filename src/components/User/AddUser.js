import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export class AddUser extends Component {
  constructor(props) {
    super(props);
    /* this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this); */

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
    };
  }
  getDataTypes() {}
  componentDidMount() {
    this.getDataTypes();
  }

  render() {
    return (
      <div>
        <Typography variant="h5">Create Table</Typography>
      </div>
    );
  }
}

export default AddUser;
