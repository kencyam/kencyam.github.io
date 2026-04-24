import "./ReturnToTopButton.css";

export default function ReturnToTopButton() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="return-to-top-button">
      <button onClick={() => scrollToTop()}>Back to Top</button>
    </div>
  );
}
