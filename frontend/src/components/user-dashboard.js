import React from "react";
import "../styles/components/user-dashboard.scss";
const UserDashboard = () => {
  return (
    <div id="user-dashboard" className="fixed-nav sticky-footer bg-dark">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <a className="navbar-brand" href="#">
          Effervescence
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li
              className="nav-item dashboard"
              data-toggle="tooltip"
              data-placement="right"
              title="Dashboard"
            >
              <a className="nav-link" href="#">
                <i className="fa fa-fw fa-dashboard" />
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li
              className="nav-item events"
              data-toggle="tooltip"
              data-placement="right"
              title="Events"
            >
              <a className="nav-link" href="#">
                <i className="fa fa-calendar" />
                <span className="nav-link-text">Events</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav sidenav-toggler">
            <li className="nav-item">
              <a className="nav-link text-center" id="#">
                <i className="fa fa-fw fa-angle-left" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-unlock-alt" aria-hidden="true" />
                Change Password
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                Edit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fa fa-fw fa-sign-out" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="container-fluid welcome">
          <div className="row">
            <div className="col-12">
              <h1>
                Hello <span className="greetings" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <footer className="sticky-footer copyright">
        <div className="container">
          <div className="text-center">
            <small>Copyright © Effervescence 2018</small>
          </div>
        </div>
      </footer>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fa fa-angle-up" />
      </a>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="{% url 'user_logout' %}">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
