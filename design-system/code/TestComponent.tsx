import * as React from "react"
import * as System from ".."
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTestComponent = props => {
    return <System.TestComponent {...props}></System.TestComponent>
}

export const TestComponent = withHOC(InnerTestComponent)

TestComponent.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TestComponent, {})
