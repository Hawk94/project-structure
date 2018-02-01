import React, { Component } from "react";
import { connect } from "react-redux";

class SiteListContainer extends Component {
  render() {
    const { isFetching, sites } = this.props;

    if (isFetching) {
      return <div>Site list is still fetching...</div>;
    }

    return <div className="o-site-list">{sites}</div>;
  }
}

SiteListContainer = connect(state => {
  return {
    sites: state.sites.list,
    isFetching: state.sites.isFetching
  };
})(SiteListContainer);

export default SiteListContainer;
