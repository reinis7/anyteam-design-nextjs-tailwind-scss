const Button = (props) => {
  return (
    <button
      className={`"h-56 px-20 py-0 font-bold leading-tight text-wh min-w-120 h-48 text-14 rounded-2xl ${
        props.color === "primary" ? "bg-purple" : "bg-graydark"
      }`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
