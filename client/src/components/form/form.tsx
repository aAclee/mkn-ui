import React from 'react';

const FormHeader: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <h2 {...props} >{children}</h2>
  )
}

const FormLabel: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
  return (
    <span {...props} >{children}</span>
  )
}

const FormInput: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <input {...props} />
  )
}

const FormBody: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => {
  return (
    <form {...props} >{children}</form>
  )
}

const FormButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
  <button {...props} >{children}</button>
  )
}

export default class Form extends React.Component {
  static Header = FormHeader;
  static Body = FormBody;
  static Label = FormLabel;
  static Input = FormInput;
  static Button = FormButton;

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