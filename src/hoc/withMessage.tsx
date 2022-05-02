import React from 'react'

const withMessage = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithMessage = (props: any) => {
    return (
      <WrappedComponent
        {...props}
        message='This text comes from the High Order Component'
      />
    )
  }
  return ComponentWithMessage
}

export default withMessage
