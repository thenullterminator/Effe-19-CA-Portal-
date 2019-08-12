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
class viewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      isLoading: true,
      value: 0,
      Task: {}
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("Signed in");
        console.log("Signed in! ", user.toJSON());
        this.setState({
          currentUser: user
        });
      } else {
        // User is signed out.
        // ...
        console.log("Signed out!");
        this.props.history.push("/login"); //Redirecting to home page.
      }
    });
    this.fetchTask = this.fetchTask.bind(this);
    const values = queryString.parse(this.props.location.search);
    //console.log(values.task);
    this.fetchTask(values.task);
    //console.log(this.state);
  }

  fetchTask(s) {
    firebase
      .database()
      .ref("TASKS")
      .child(s)
      .on("value", snapshot => {
        this.setState({ Task: snapshot.val() });
        //console.log(snapshot.val());
      });
  }

  render() {
    const { classes } = this.props;

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
                <Button type="submit" color="primary" simple size="lg" block>
                  Submit
                </Button>
                Your Submissions:
                {/* <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Base points", "Date"]}
                  tableData={}
                /> */}
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

viewTask.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(viewTask);
