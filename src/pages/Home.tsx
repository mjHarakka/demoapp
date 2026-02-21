import { useNavigate } from 'react-router-dom'
import '../App.css'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className='landing-page'>
      {/* Hero */}
      <header className='hero'>
        <nav className='nav'>
          <div className='logo'>YourBrand</div>
          <div className='nav-links'>
            <a href='#features'>Features</a>
            <a href='#about'>About</a>
            <button className='btn btn-nav' onClick={() => navigate('/sales')}>
              Pricing
            </button>
          </div>
        </nav>

        <div className='hero-content'>
          <div className='hero-badge'>🚀 Now in Public Beta</div>

          <h1 className='hero-title'>
            Build faster.
            <br />
            Ship smarter.
            <br />
            <span className='hero-title-highlight'>Grow bigger.</span>
          </h1>

          <p className='hero-subtitle'>
            The all-in-one platform that helps modern teams go from idea to
            production — beautifully, reliably, and at scale.
          </p>

          <div className='hero-cta'>
            <button
              className='btn btn-hero-primary'
              onClick={() => navigate('/sales')}
            >
              Get Started for Free
              <span className='btn-arrow'>→</span>
            </button>
            <button className='btn btn-hero-secondary'>
              Watch Demo
              <span className='btn-play'>▶</span>
            </button>
          </div>

          <p className='hero-disclaimer'>
            No credit card required · Free 14-day trial
          </p>
        </div>

        <div className='hero-blob hero-blob-1' />
        <div className='hero-blob hero-blob-2' />
        <div className='hero-blob hero-blob-3' />
      </header>

      {/* Features */}
      <section className='features' id='features'>
        <h2 className='section-title'>Why teams choose us</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>⚡</div>
            <h3>Blazing Fast</h3>
            <p>
              Optimised for performance at every layer — from edge deployments
              to database queries.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>📱</div>
            <h3>Mobile First</h3>
            <p>
              Fully responsive and touch-optimised so your users get a great
              experience on any device.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>🔒</div>
            <h3>Enterprise Secure</h3>
            <p>
              SOC 2 compliant with end-to-end encryption and role-based access
              control built in.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className='cta-section'>
        <h2>Ready to level up?</h2>
        <p>Join 50,000+ teams already shipping with YourBrand</p>
        <button className='btn btn-primary' onClick={() => navigate('/sales')}>
          See Pricing Plans
        </button>
      </section>

      {/* Footer */}
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

export default Home
