type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const Button = ({ title, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`p-2 rounded-lg border-none ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
