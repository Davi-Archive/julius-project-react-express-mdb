interface IProps {
  children: String;
  onClick: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return (
    <button onClick={onClick} className="button-3" role="button">
      {children}
    </button>
  );
};

export default Button;
