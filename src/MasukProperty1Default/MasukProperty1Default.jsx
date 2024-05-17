import "./MasukProperty1Default.css";

export const MasukProperty1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "masuk-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="masuk">Masuk </div>
    </div>
  );
};
