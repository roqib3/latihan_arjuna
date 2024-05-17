import "./SubJudulFix.css";

export const SubJudulFix = ({ className, ...props }) => {
  return (
    <div className={"sub-judul-fix " + className}>
      <div className="frame-4476">
        <div className="rectangle-308"></div>
      </div>
      <div className="sub-sub-judul">
        <div className="sub-judul">Sub-judul </div>
        <div className="line-18"></div>
      </div>
    </div>
  );
};
