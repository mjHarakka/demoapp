import './App.css'

function App() {
  return (
    <div className='landing-page'>
      <header className='hero'>
        <nav className='nav'>
          <div className='logo'>YourBrand</div>
          <button className='menu-btn' aria-label='Menu'>
            ☰
          </button>
        </nav>

        <div className='hero-content'>
          <h1 className='hero-title'>Welcome to Your Landing Page</h1>
          <p className='hero-subtitle'>
            Build something amazing with modern web technologies
          </p>
          <div className='cta-buttons'>
            <button className='btn btn-primary'>Get Started</button>
            <button className='btn btn-secondary'>Learn More</button>
          </div>
        </div>
      </header>

      <section className='features'>
        <h2 className='section-title'>Why Choose Us</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>⚡</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast load times and smooth interactions</p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>📱</div>
            <h3>Mobile First</h3>
            <p>Fully responsive design that works on any device</p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>🔒</div>
            <h3>Secure</h3>
            <p>Built with security best practices in mind</p>
          </div>
        </div>
      </section>

      <section className='cta-section'>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied users today</p>
        <button className='btn btn-primary'>Sign Up Now</button>
      </section>

      <footer className='footer'>
        <p>&copy; 2026 YourBrand. All rights reserved.</p>
        <div className='footer-links'>
          <a href='#privacy'>Privacy</a>
          <a href='#terms'>Terms</a>
          <a href='#contact'>Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
