import React, { Component } from 'react';

import './style.css';

class Category extends Component {
  render() {
    return (
      <div className="splash">
        <div className="container">
          <h4>Select 3 Categories</h4>

          <form className="choosecategory">
            <div>
              <input type="checkbox" id="category1" />
              <label className="category" htmlFor="category1">
                Category 1
              </label>
            </div>
            <div>
              <input type="checkbox" id="category2" />
              <label className="category" htmlFor="category2">
                Category 2
              </label>
            </div>
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
