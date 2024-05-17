import "./LogoPlaceholder.css";

export const LogoPlaceholder = ({ className, ...props }) => {
  return (
    <div className={"logo-placeholder " + className}>
      <div className="frame-8">
        <img className="group-7" src="group-70.svg" />
        <div className="eliji-trash-care">
          <span>
            <span className="eliji-trash-care-span">eliji </span>
            <span className="eliji-trash-care-span2">Trash Care</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
