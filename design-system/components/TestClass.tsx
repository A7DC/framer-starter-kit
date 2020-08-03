
import * as React from 'react'

export interface IProps {
  id: number;
}

export class TestClass extends React.Component<IProps, {}> {

  render() {
    return (
      <div>
        Test and {this.props.id}
      </div>
    )
  }
}
