import { useNavigate } from 'react-router-dom'
import './Sales.css'

const plans = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for side projects and small teams getting started.',
    features: [
      '3 projects',
      '5 GB storage',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'For growing teams that need more power and collaboration.',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description:
      'For large organisations with advanced security and scale needs.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'SSO / SAML',
      'SLA guarantee',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const testimonials = [
  {
    quote:
      'Switched from a competitor and cut our deploy time in half. Genuinely impressed.',
    author: 'Sarah K.',
    role: 'CTO at Launchpad',
    avatar: 'SK',
  },
  {
    quote:
      "The best DX I've had in years. The team loves it and we ship faster than ever.",
    author: 'Marcus T.',
    role: 'Lead Engineer at Flowbase',
    avatar: 'MT',
  },
  {
    quote: 'Scaling to 1M users was seamless. The platform just handled it.',
    author: 'Priya N.',
    role: 'Co-founder at Gridly',
    avatar: 'PN',
  },
]

function Sales() {
  const navigate = useNavigate()

  return (
    <div className='sales-page'>
      {/* Nav */}
      <nav className='sales-nav'>
        <button className='back-btn' onClick={() => navigate('/')}>
          ← Back
        </button>
        <div className='sales-logo'>YourBrand</div>
        <div />
      </nav>

      {/* Hero */}
      <section className='sales-hero'>
        <div className='sales-badge'>💳 Simple Pricing</div>
        <h1>
          Pay for what you need.
          <br />
          Cancel any time.
        </h1>
        <p>All plans include a 14-day free trial. No credit card required.</p>
        <div className='billing-toggle'>
          <span className='billing-active'>Monthly</span>
          <span className='billing-note'>Annual — save 20%</span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className='pricing-section'>
        <div className='pricing-grid'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.highlighted && (
                <div className='popular-badge'>Most Popular</div>
              )}
              <h2 className='plan-name'>{plan.name}</h2>
              <div className='plan-price'>
                <span className='price-currency'>$</span>
                <span className='price-amount'>{plan.price}</span>
                <span className='price-period'>/mo</span>
              </div>
              <p className='plan-description'>{plan.description}</p>
              <ul className='plan-features'>
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className='check'>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${plan.highlighted ? 'btn-plan-primary' : 'btn-plan-secondary'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className='testimonials-section'>
        <h2 className='section-title-dark'>Loved by teams worldwide</h2>
        <div className='testimonials-grid'>
          {testimonials.map((t) => (
            <div className='testimonial-card' key={t.author}>
              <p className='testimonial-quote'>"{t.quote}"</p>
              <div className='testimonial-author'>
                <div className='testimonial-avatar'>{t.avatar}</div>
                <div>
                  <div className='testimonial-name'>{t.author}</div>
                  <div className='testimonial-role'>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ snippet */}
      <section className='faq-section'>
        <h2 className='section-title-dark'>Common questions</h2>
        <div className='faq-grid'>
          <div className='faq-item'>
            <h3>Can I change plans later?</h3>
            <p>
              Yes, you can upgrade or downgrade at any time from your account
              settings.
            </p>
          </div>
          <div className='faq-item'>
            <h3>What happens after the trial?</h3>
            <p>
              You'll be asked to choose a plan. If you don't, your account moves
              to the free Starter tier.
            </p>
          </div>
          <div className='faq-item'>
            <h3>Do you offer refunds?</h3>
            <p>
              We offer a 30-day money-back guarantee on all paid plans, no
              questions asked.
            </p>
          </div>
          <div className='faq-item'>
            <h3>Is there a student discount?</h3>
            <p>
              Yes — students and educators get 50% off Pro. Email us with your
              institution address.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className='sales-cta'>
        <h2>Start building today</h2>
        <p>Join 50,000+ teams. No credit card required.</p>
        <button className='btn btn-sales-cta'>Get Started for Free</button>
      </section>

      <footer className='footer sales-footer'>
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

export default Sales
