import PropTypes from 'prop-types';
const Button = ({ text, clickFn }) => {
  return (
    <button
      type="submit"
      className="bg-green-500 text-white px-4 py-2 rounded-md"
      onClick={clickFn}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickFn: PropTypes.string.isRequired
    };

export default Button;
