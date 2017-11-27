import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';

import './style.css';

class Category extends Component {
  componentDidMount() {
    this.props.handleGetCategories();
  }

  handleCheck = e => {
    if (e.target.checked === true) this.props.handleIncCategory();
    else this.props.handleDecCategory();
  };

  handleSubmit = e => {
    e.preventDefault();
    const categories = [];

    e.target.category.forEach(
      node => (node.checked ? categories.push(node.value) : '')
    );
    if (this.props.noOfCategories === 3) {
      this.props.handleResetCount();
      this.props.newGame({
        name: this.props.name,
        qty: parseInt(this.props.qty),
        categories
      });
    }
  };

  render() {
    const { categories, isLoading, hasError } = this.props;

    return (
      <div className="splash">
        <div className="container">
          <h4>Select 3 Categories</h4>

          <form
            className="choosecategory"
            id="choosecategory"
            onSubmit={this.handleSubmit}
          >
            {isLoading ? (
              <Spinning size="medium" />
            ) : hasError ? (
              'An error occured'
            ) : (
              categories.map((category, i) => (
                <div key={i}>
                  <input
                    type="checkbox"
                    id={category.category}
                    name="category"
                    value={category.category}
                    onChange={this.handleCheck}
                  />
                  <label className="category" htmlFor={category.category}>
                    {category.category}
                  </label>
                </div>
              ))
            )}
          </form>

          <div className="proceed">
            <button className="secondary" form="choosecategory" type="submit">
              {this.props.noOfCategories === 3
                ? 'Proceed'
                : 3 - this.props.noOfCategories < 0
                  ? '3 only'
                  : 3 - this.props.noOfCategories + ' to go'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
