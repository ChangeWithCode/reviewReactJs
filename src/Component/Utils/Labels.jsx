import PropTypes from "prop-types";

const Labels = ({ text }) => {
  return (
    <label className="block text-gray-600">
      {text}
    </label>
  );
};

Labels.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Labels;
