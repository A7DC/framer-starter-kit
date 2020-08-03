import * as React from 'react'

export interface IProps {
  id: number;
}

export function TestComponent({id}: IProps) {
  return (
    <div>
      Test and {id}
    </div>
  )
}
