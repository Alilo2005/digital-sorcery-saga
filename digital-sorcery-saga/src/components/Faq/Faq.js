import './Faq.css';

export default function Faq() {
  return (
    <>
      {/* Title Section */}
      {/*<h1 className="title">FAQ</h1>*/}

      {/* FAQ Container */}
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="faq-item">
            <h4 className="faq-question">
              <span className="faq-icon">-</span>
              How long until we deliver your first blog post?
            </h4>
            <p className="faq-answer">
              Really boy law county she unable her sister. Feet you off its like like six.
              Among sex are leave law built now. In built table in an rapid blush.
              Merits behind on afraid or warmly.
            </p>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">
              <span className="faq-icon">+</span>
              What is the estimated time for delivery?
            </h4>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="faq-item">
            <h4 className="faq-question">
              <span className="faq-icon">+</span>
              Can I request revisions for my posts?
            </h4>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">
              <span className="faq-icon">+</span>
              Do you offer custom packages?
            </h4>
          </div>

          <div className="faq-item">
            <h4 className="faq-question">
              <span className="faq-icon">+</span>
              How can I contact customer support?
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
