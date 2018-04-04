import React, { Component } from 'react';
import { Grid } from 'react-virtualized';

class OrderGrid extends Component {
  constructor(props) {
    super(props);
    this.cellRenderer = this.cellRenderer.bind(this);
  }
  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    style = { ...style, border: '1px solid black' };
    const orders = this.props.orders;
    const text = orders && orders[rowIndex] ? orders[rowIndex][columnIndex] : '';
    return (
      <div
        key={key}
        style={style}
      >
        {text}
      </div>
    );
  }
  render() {
    return (
      <div style={{ margin: '20px 0 0 20px' }}>
        <Grid
          cellRenderer={this.cellRenderer}
          columnCount={30}
          columnWidth={100}
          height={300}
          rowCount={20}
          rowHeight={30}
          width={1000}
        />
      </div>
    );
  }
}

export default OrderGrid;
