import './Button.module.css'

const Button = (props) => {
    return (
        <>
        <button 
        className="header__button"
        style={{backgroundColor:  `#${props.bgcolor}`,
        color:  `#${props.color}`} }
        >
        {props.text}
        </button>
        </>
    );
  };
  
  export default Button;
  