import { useEffect, useState } from "react";

export function LineBox({ title, text, children, customClass }) {
  const [titleEnabled, setTitleEnabled] = useState(false);
  //console.log(children);

  useEffect(() => {
    if (title !== undefined) {
      if (title.length > 0) {
        setTitleEnabled(true);
      }
    }
    //console.log(customClass);
  }, []);

  return (
    <div
      className={"line-box" + (titleEnabled ? " line-box-title" : "")}
      data-title={title}
    >
      {titleEnabled && (
        <div className="line-box-title-text">
          <p className={customClass}>{title}</p>
        </div>
      )}
      <div className="content" data-title={title}>
        {text}
        {children}
      </div>
    </div>
  );
}
