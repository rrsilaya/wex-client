import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Label from 'grommet/components/Label';
import logo from '../../../assets/logo/white.svg';
import './style.css';

const convertToString = array => {
  var string = '';
  for (let i = 0; i < array.length; ++i) {
    string += array[i];
    if (i !== array.length - 1) string += ', ';
  }
  return string;
};

class Highscore extends Component {
  componentDidMount() {
    this.props.getHighscores();
  }

  render() {
    return (
      <div className="highscore">
        <button
          className="secondary"
          onClick={() => this.props.handlePageChange('splash')}
        >
          Proceed
        </button>
        <img src={logo} alt="wex" className="logo" />
        <Label className="label"> Cream of the Crop </Label>
        <Table scrollable={false} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Categories Selected</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(data => {
              return (
                <TableRow>
                  <td>{data.name}</td>
                  <td>{data.score}</td>
                  <td>{convertToString(data.categories)}</td>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Highscore;
