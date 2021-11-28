import React from "react"

const IncompatibilityMessage = (props) => {
  
  return (
    <div class="IncompatibilityMessage">
      <p>We ecountered an error when building your product:</p>
      <ul>
        {props.messages.map((message, index) => {
          return <li key={"msg-" + index}>{message.body}</li>
        })}
      </ul>
      <p>All incompatible options have been unselected. Please reselect your options to complete your purchase.</p>
    </div>
  )
}

export default IncompatibilityMessage
