import "./DaftarProperty1Default.css";

export const DaftarProperty1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "daftar-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="daftar">Daftar </div>
    </div>
  );
};
