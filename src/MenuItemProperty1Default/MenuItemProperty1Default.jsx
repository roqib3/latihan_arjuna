import "./MenuItemProperty1Default.css";

export const MenuItemProperty1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "menu-item-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="menu-item">Menu item </div>
    </div>
  );
};
