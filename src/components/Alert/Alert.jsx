import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const Alert = ({ children, isSuccess, ...rest }) => {
  return (
    <div className={`message ${isSuccess ? 'success' : 'error'}`} {...rest}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default Alert;
