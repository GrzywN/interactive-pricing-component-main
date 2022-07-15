function Button({ children }) {
  return (
    <button
      type="button"
      className="h-10 w-full max-w-[10.625rem] rounded-full bg-DarkDesaturatedBlue text-PaleBlue transition-colors duration-200 hover:text-White"
    >
      {children}
    </button>
  );
}

export default Button;
