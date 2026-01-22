import "./backToTopBtn.css"

export function BackToTopBtn() {
  return (
    <button
      className="back-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src="arrowUp.png" alt="" />
    </button>
  )
}
