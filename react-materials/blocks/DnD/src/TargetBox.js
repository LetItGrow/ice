import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const style = {
  border: '1px solid gray',
  minHeight: '15rem',
  background: '#fff',
};

const boxTarget = {
  drop() {
    //
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class TargetBox extends Component {
  render() {
    const { connectDropTarget, children } = this.props;
    return (
      connectDropTarget &&
      connectDropTarget(<div style={style}>{children}</div>)
    );
  }
}

export default DropTarget('box', boxTarget, collect)(TargetBox);
