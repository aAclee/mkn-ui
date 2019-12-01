import React, { useState, useContext } from 'react';

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

const FormClose: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <FormContext.Consumer>
      {formContext => {
        return (
          <button {...props} onClick={formContext.toggleShow}> {children} </button>
        )
      }}
    </FormContext.Consumer>
  )
}

const initialState = {
  show: true,
  toggleShow: () => {},
};

const FormContext = React.createContext(initialState);

function Form(props: any){
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  }
  if(show){
    return (
      <FormContext.Provider value={{
        show,
        toggleShow,
      }}>
        {props.children}
      </FormContext.Provider>
    )
  }

  return null;
}

Form.Header = FormHeader;
Form.Body = FormBody;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.Button = FormButton;
Form.Close = FormClose;

export default Form;