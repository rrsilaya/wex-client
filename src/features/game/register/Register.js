import React, { Component } from 'react';

class Register extends Component {
  handleChangeForm = e => {
    this.props.changeForm(e.target.name, e.target.value);
  };

  handleChangePage = e => {
    this.props.changePage(e.target.dataset.page);
  };

  render() {
    return (
      <div className="splash">
        <div className="register">
          <input
            type="text"
            placeholder="Name"
            className="primary"
            name="name"
            value={this.props.name}
            onChange={this.handleChangeForm}
          />
          <br />
          <input
            type="number"
            placeholder="Questions"
            className="primary"
            min="3"
            name="qty"
            value={this.props.qty}
            onChange={this.handleChangeForm}
          />
          <br />
          <button
            className="secondary"
            disabled={false}
            data-page="choose-category"
            onClick={this.handleChangePage}
          >
            Proceed
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
