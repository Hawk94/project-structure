import React, { Component } from "react";
import Modal from "./../components/Modal";
import SiteListContainer from "./SiteList/SiteListContainer";

class Home extends Component {
  state = {
    showModal: false
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="home">
        <h1>Home</h1>
        <button
          data-balloon="Whats up!"
          data-balloon-pos="up"
          onClick={() => this.setState({ showModal: true })}
        >
          Do a modal
        </button>

        {showModal && (
          <Modal handleClose={() => this.setState({ showModal: false })}>
            <div>Hello I am a modal</div>
          </Modal>
        )}

        <h2>Example list</h2>
        <SiteListContainer filters={[]} />
      </div>
    );
  }
}

export default Home;
