import React from 'react';

const FormHeader = ({ children }) => {
  return (
    <h2>{children}</h2>
  )
}

const FormLabel = ({ children }) => {
  return (
    <span>{children}</span>
  )
}

const FormInput = ({ children }) => {
  return (
    <input {...children} />
  )
}

const FormBody = ({ children }) => {
  return (
<form>{children}</form>
  )
}

export default class Form extends React.Component {
  static Header = FormHeader;
  static Label = FormLabel;
  static Input = FormInput;
  static Body = FormBody;

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

// function renderForm(props) {
//   const {label, ...otherProps}
//   return (
//     <Form.Header rightIcon={true}>
//       Login Form
//       <Form.RightIcon></Form.RightIcon>
//     </Form.Header>
//     <Form.Body>
//       <Form.Input {...otherProps}></Form.Input>
//       <Form.Submit onClick={() => {console.log('form')}}>Submit</Form.Submit>
//     </Form.Body>
//   );
// }