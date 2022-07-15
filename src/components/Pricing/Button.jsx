import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-10 w-full max-w-[10.625rem] rounded-full bg-DarkDesaturatedBlue text-PaleBlue transition-colors duration-200 hover:text-White"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
