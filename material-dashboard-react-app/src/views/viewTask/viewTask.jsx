import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import moment from "moment";
import { bugs, website, server } from "variables/general.jsx";
import Button from "components/CustomButtons/Button.jsx";
import queryString from "query-string";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import firebase from "../../firebase/firebase";
import SelectInput from "@material-ui/core/Select/SelectInput";

// For notification

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
// import GridItem from "components/Grid/GridItem.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
// import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class viewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      isLoading: true,
      value: 0,
      Task: {},
      tc: false
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Signed in! ", user.toJSON());
        this.setState({
          currentUser: user
        });
      } else {
        // User is signed out.
        // ...
        console.log("Signed out!");
        this.props.history.push("/"); //Redirecting to home page.
      }
    });

    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }

    this.fetchTask = this.fetchTask.bind(this);
    const values = queryString.parse(this.props.location.search);
    this.fetchTask(values.task);
  }

  fetchTask(s) {
    firebase
      .database()
      .ref("TASKS")
      .child(s)
      .on("value", snapshot => {
        this.setState({ Task: snapshot.val(), isLoading: false });
        //console.log(snapshot.val());
      });
  }

  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    // Donot use this, depericated function, instead use Constructor.
  }

  inputElement = "";

  uploadImage = e => {
    const files = e.target.files;
    var blob = new Blob(files, { type: "image/jpeg" });
    var storageRef = firebase.storage().ref("images/ShareUploads2.0");
    storageRef.put(blob).then(snapshot => {
      console.log("Uploaded a blob or file!");
      // For user Notification
      const place = "tc";
      var x = [];
      x[place] = true;
      this.setState(x);
      this.alertTimeout = setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    });
  };

  render() {
    const { classes } = this.props;

    if (this.state.isLoading) return <h1>Loading</h1>;
    else {
      return (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={14}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                    {this.state.Task.task}
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    Points for this Task:<b> {this.state.Task.points}</b>
                  </p>
                </CardHeader>
                {/* // <button>Submit</button> */}
                <CardBody>
                  {/* For uploading */}
                  <input
                    type="file"
                    id="upload"
                    name="fileupload"
                    multiple
                    onChange={e => this.uploadImage(e)}
                    ref={input => {
                      this.inputElement = input;
                    }}
                    style={{ display: "none" }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    simple
                    size="lg"
                    block
                    onClick={() => this.inputElement.click()}
                  >
                    UPLOAD
                  </Button>
                  {/* For notification */}
                  <Snackbar
                    place="tc"
                    color="info"
                    icon={AddAlert}
                    message="Image Uploaded Successfully  ✌🏻"
                    open={this.state.tc}
                    closeNotification={() => this.setState({ tc: false })}
                    close
                  />
                  Your Submissions:
                  {/* <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Base points", "Date"]}
                  // tableData={}
                /> */}
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      );
    }
  }
}

viewTask.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(viewTask);
