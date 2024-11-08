import PropTypes from 'prop-types';
import './Button.scss'
const Button = ({ className = '', type = 'button', onClick, children,...rest }) => {
    return (
        <button 
            className={`btn ${className}`} 
            type={type} 
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,         
    type: PropTypes.oneOf(['button', 'submit', 'reset']), 
    onClick: PropTypes.func,              
    children: PropTypes.node.isRequired,  
};



export default Button;
