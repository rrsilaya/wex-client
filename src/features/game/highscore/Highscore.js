import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Label from 'grommet/components/Label';
import logo from '../../../assets/logo/white.svg';
import './style.css';

const SampleData = [
  { rank: 1, name: 'Username', score: 100 },
  { rank: 2, name: 'Username', score: 90 },
  { rank: 3, name: 'Username', score: 80 },
  { rank: 4, name: 'Username', score: 70 },
  { rank: 5, name: 'Username', score: 60 }
];

class Highscore extends Component {
  render() {
    return (
      <div className="highscore">
        <img src={logo} alt="wex" className="logo" />
        <Label className="label"> Cream of the Crop </Label>
        <Table scrollable={false} className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {SampleData.map(data => {
              return (
                <TableRow>
                  <td>{data.rank}</td>
                  <td>{data.name}</td>
                  <td>{data.score}</td>
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
