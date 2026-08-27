export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Designed & Built by <span className="accent">Mo'men Bakr</span> ©{' '}
          {new Date().getFullYear()}
        </p>
        <p className="footer-sub">Flutter • Android (Kotlin) • iOS (SwiftUI)</p>
      </div>
    </footer>
  )
}
