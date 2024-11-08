import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.scss';

const DraggableWord = ({ word, color, onDragStart }) => {
  return (
    <span
      draggable
      onDragStart={onDragStart}
      className={`paragraph-word ${color === 'red' ? 'red-color' : 'black-color'}`}
    >
      {word}
    </span>
  );
};

DraggableWord.propTypes = {
  word: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'black']),
  onDragStart: PropTypes.func.isRequired,
};



export default DraggableWord;
