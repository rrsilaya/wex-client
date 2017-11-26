import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';

import './style.css';

class Category extends Component {
  componentDidMount() {
    this.props.handleGetCategories();
  }

  render() {
    const { categories, isLoading, hasError } = this.props;

    return (
      <div className="splash">
        <div className="container">
          <h4>Select 3 Categories</h4>

          <form className="choosecategory">
            {isLoading ? (
              <Spinning size="medium" />
            ) : hasError ? (
              'An error occured'
            ) : (
              categories.map((category, i) => (
                <div>
                  <input type="checkbox" id={category.category} />
                  <label className="category" htmlFor={category.category}>
                    {category.category}
                  </label>
                </div>
              ))
            )}
          </form>

          <div className="proceed">
            <button className="secondary">Proceed</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
