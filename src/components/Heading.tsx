interface HeadingProp {
  title: string;
  className?: string;
}

const Heading = ({ title, className = "" }: HeadingProp) => {
  return (
    <h1 className={`text-xl text-gray-300 font-medium ${className}`}>{title}</h1>
  );
};

export default Heading;
