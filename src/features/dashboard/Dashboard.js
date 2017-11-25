import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import AddIcon from 'grommet/components/icons/base/Add';
import './dash.css';
class Dashboard extends Component {
  asd = () => {
    console.log('asd');
  };
  render() {
    return (
      <div className="center">
        <Header size={'small'}>
          <Select
            placeHolder="Choose Category"
            options={['Movies', 'Memes', 'TV Series', 'Anime']}
            onSearch={false}
            value={undefined}
          />
          <Button icon={<AddIcon />} secondary={true} onClick={this.asd} />
        </Header>
        <br />

        <Table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Somethingsienasdasd</td>
              <td>A</td>
            </TableRow>
            <TableRow>
              <td>asdasdsd</td>
              <td>C</td>
            </TableRow>
            <TableRow>
              <td>ADWESDASD</td>
              <td>D</td>
            </TableRow>
            <TableRow>
              <td>qweascasd</td>
              <td>D</td>
            </TableRow>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Dashboard;
