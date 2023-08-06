import "./css/Button.css";

function Button({ children, onClick }) {
  return (
    <button className="btn-simple" onClick={onClick}>
      {" "}
      {children}
    </button>
  );
}

export default Button;
