import "../css/global.css";

export function ErrorMessage() {
  return (
    <div className="error-message-container">
      <div className="error-message-green-line-box">
        <h3 className={"error-message"}>
          An error occurred. Please try again.
        </h3>
      </div>
    </div>
  );
}
