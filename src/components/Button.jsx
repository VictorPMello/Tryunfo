import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { myFunc, text } = this.props;
    return (
      <button
        className="bg-white ml-4 p-2 rounded
          uppercase hover:bg-neutral-300 ease-in-out duration-300
        "
        type="button"
        onClick={ myFunc }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  myFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
