import "./Button2Property1Default.css";

export const Button2Property1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "button-2-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="button">Button </div>
    </div>
  );
};
