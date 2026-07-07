import business from '../data/business.json';

const address = '12 E 41st St Ste 1100, New York, NY 10017';
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const websiteUrl = business.website;

const visitNotes = [
  'Located on East 41st Street in Midtown Manhattan',
  'Call the office directly to schedule or ask about appointment availability',
  'A clear next step for routine dental care near Bryant Park and Grand Central',
];

const patientPriorities = [
  {
    title: 'Easy to reach',
    text: 'A Midtown location designed for people fitting dental care into a Manhattan workday.',
  },
  {
    title: 'Direct scheduling',
    text: 'Use the phone number or practice website to confirm timing, paperwork, and visit details.',
  },
  {
    title: 'Public patient feedback',
    text: 'The supplied listing notes a 4.9 Google rating from 574 reviews.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header" aria-label="Site header">
          <a className="brand" href="#top" aria-label="Midtown Dental Care Associates home">
            <span className="brand-mark">MD</span>
            <span>
              <strong>{business.name}</strong>
              <small>Midtown Manhattan</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#location">Location</a>
            <a href="#visit">Visit</a>
            <a href={phoneHref}>Call</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Dentist in Midtown Manhattan</p>
            <h1 id="hero-title">Dental care near Bryant Park and Grand Central.</h1>
            <p className="lede">
              Midtown Dental Care Associates serves Manhattan patients from East 41st Street.
              Call the office to schedule a visit or use the practice website for more details.
            </p>
            <div className="cta-row" aria-label="Contact options">
              <a className="button primary" href={phoneHref}>
                Call {business.phone}
              </a>
              <a className="button secondary" href={websiteUrl}>
                Visit practice website
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Practice snapshot">
            <div className="rating-block">
              <span className="rating-number">4.9</span>
              <span>
                <strong>Google rating</strong>
                <small>574 reviews noted in the supplied business listing</small>
              </span>
            </div>
            <dl className="facts">
              <div>
                <dt>Office</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt>Service area</dt>
                <dd>Manhattan</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href={phoneHref}>{business.phone}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section intro" aria-labelledby="intro-title">
        <div>
          <p className="section-kicker">A practical Midtown dental visit</p>
          <h2 id="intro-title">Built around location, clarity, and a simple next step.</h2>
        </div>
        <p>
          For many Manhattan patients, choosing a dentist starts with access. This page keeps the
          key details close at hand: who to call, where to go, and how to continue to the practice
          site without sorting through inflated claims.
        </p>
      </section>

      <section className="section priority-grid" aria-label="Patient priorities">
        {patientPriorities.map((item) => (
          <article className="priority-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section visit-band" id="visit" aria-labelledby="visit-title">
        <div className="visit-copy">
          <p className="section-kicker">Before you book</p>
          <h2 id="visit-title">Have the office confirm what you need for your appointment.</h2>
          <p>
            Services, availability, insurance details, and appointment requirements can change.
            Calling the office is the most direct way to confirm the right visit type and next
            opening.
          </p>
        </div>
        <ul className="check-list">
          {visitNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="section location-section" id="location" aria-labelledby="location-title">
        <div className="location-card">
          <p className="section-kicker">Office location</p>
          <h2 id="location-title">East 41st Street, Suite 1100.</h2>
          <address>{address}</address>
          <div className="location-actions">
            <a className="button primary" href={phoneHref}>
              Call the office
            </a>
            <a
              className="button ghost"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            >
              Open map
            </a>
          </div>
        </div>
        <div className="route-note" aria-label="Nearby context">
          <span>Manhattan</span>
          <strong>Near Bryant Park, Fifth Avenue, and Grand Central access.</strong>
          <p>
            Use the map link to confirm the route from your current location before heading to the
            appointment.
          </p>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <p className="section-kicker">Ready to contact the practice?</p>
        <h2 id="final-title">Call Midtown Dental Care Associates.</h2>
        <a className="button primary" href={phoneHref}>
          {business.phone}
        </a>
      </section>
    </main>
  );
}
