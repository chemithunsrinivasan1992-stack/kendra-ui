import React, { useState } from "react";
import "./AiPage.css";

const ProductDetailPageAI = ({ persona }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const product = {
    title: "Cross Gold Pendant Necklace in White Lab Grown Opal",
    price: 98,
    rating: 4.7,
    reviewCount: 2847,
    images: [
      "https://res.cloudinary.com/kendra-scott/image/upload/ar_469:587,c_fill,g_auto,w_225/f_auto/q_auto/v1/Catalogs/kendrascott/11-3-Launches/kendra-scott-cross-pendant-necklace-gold-white-kyocera-opal-00"
    ],
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["XS-S", "M-L"],
  };

  const aiContext = {
    source: "ChatGPT",
    query: "best quality at your doorsteps",
    reasons: [
      "Genuine make with utmost care (top recommendation criteria)",
      "Price-to-quality ratio ranked #1 in category",
      "Highest customer satisfaction",
      "Timeless design with proven longivity",
    ],
  };
  const faqs = [
    {
      h3: "Return Policy",
      q: "Holiday Return Policy",
      a: "Purchases made in-store or online between 11/1/25 and 1/1/26 can be returned until 1/31/26. In-store returns are eligible for store credit or exchange, and online purchases can be mailed back in their original packaging with tags for a full refund,Engraved pieces, customized hats, Birthday Discount purchases, gift cards, Kendra Scott Branded merchandise, custom pieces created at the Color Bar® and permanently discounted or marked down merchandise are considered Final Sale and are not eligible for return or exchange.",
    },
    {
      q: "Non-Holiday Return Policy",
      a: "Kendra Scott, LLC provides FREE RETURN SHIPPING for eligible items. A pre-paid, pre-addressed return shipping label will be provided with every qualifying order purchased on the website. Engraved pieces, Birthday Discount purchases, gift cards, Kendra Scott Branded merchandise, custom pieces created at the Color Bar™ and permanently discounted or marked down merchandise are considered Final Sale and are not eligible for return or exchange. All other unworn, unused items you would like to return for a full refund must be sent back to the Kendra Scott distribution center within 30 days of receipt of product in original packaging with tags on."
    },

    {
      q: "Jewelry Care",
      a: "Our fashion jewelry is 14K gold or rhodium plated over brass. Protect the plating of your jewelry (and avoid tarnish) by removing it when washing your hands, swimming, exercising, cleaning and before applying any kind of personal body product. Maintain your jewelry’s shine by avoiding contact with agents such as soaps, perfume, lotion, makeup, hair and cleaning products, etc. Always wear your rubber or metal safety backs with your earrings to prevent loss. For more information on how to care for your jewelry, visit here.",
    },
    {
      q: "Shipping",
      a: "We ask for 2-4 business days for processing on all orders placed with standard shipping. Order placed on Saturday and Sunday, or after 12pm CST will begin processing the following business day. Orders placed before 12pm CST with expedited shipping will ship same day. Orders placed after 12pm or on the weekend will ship the following business day.",
    },
    {
      q: "Gift Wrap",
      a: "To ensure your item arrives in our signature yellow box, please make sure to select gift wrapping at checkout by checking the Add a gift box option under Delivery Method.",
    },
  ];

  return (

    <div className="ai-pdp">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <a href="#"><img src="logo.png" alt="logo-image" className="logo" /></a>
              <span><a href="#"><img src="y-r.png" className="sec-logo"></img></a></span>
            </div>
            <div className="col-md-7">
              <nav>
                <ul>
                  <li><a href="#">Holiday Shop</a></li>
                  <li><a href="#">Jewelry</a></li>
                  <li><a href="#">New</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Fine Jewelry</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Sale</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-3">
              <ul className="profile-links">
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                  </a>
                </li>
                <li><a href="#">Find a Store <span> | </span></a></li>
                <li><a href="#">Enable Accesibility</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      

      {/* Breadcrumb */}
      <nav className="ai-nav">
        <span>Jewelry</span>
        <span className="sep">/</span>
        <span>Necklaces</span>
      </nav>

      <main className="ai-main">
        {/* Gallery */}
        <section className="ai-gallery">
          <div className="gallery-main">
            <img src={product.images[currentImageIndex]} alt={product.title} />
          </div>
          <div className="gallery-thumbs">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`thumb ${currentImageIndex === idx ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(idx)}
              >
                <img src={img} alt={`View ${idx + 1}`} />
              </button>
            ))}
          </div>
        </section>

        {/* Product Info */}
        <section className="ai-info">
          

          <h1 className="product-title">{product.title}</h1>

          <div className="price-value">
            <span className="price">${product.price}</span>
            <div className="value-calc">
              <span className="per-wear">Buy One, Get One 50% Off</span>
            </div>
          </div>
          <p>or 4 interest-free payments of $24.50 with</p>
          <div className="btn btn-link" style={{ color: "#666666", margintop: "-5px", padding: "0px" }}>More Financial Options</div>
          <div className="value-calc">
            <span className="discount">Discount Automatically Applies in Cart.</span>
          </div>
          <p><strong>Color</strong> White Lab Grown Opal</p>
          <p><strong>Store Availability</strong></p>
          <div className="btn btn-link"   >Select a Store</div>



          {/* CTA */}
          <div className="cta-area">
            <button className="btn-primary bag-btn">
              Add to Bag
            </button>
          </div>

          {/* Trust Signals */}
          <div className="trust-signals">
            <div className="signal">
              <span>🚚</span>
              <span>Free shipping on orders $85+.</span>
            </div>
            <div className="signal">
              <span>Gifting made easy. Add our complimentary gift box at checkout.</span>
            </div>
            <div className="signal">
              <span>🔄</span>
              <span>Free returns until 1/31/26</span>
            </div>
          </div>
          <br />
          <div className="trust-signals">
            <div className="signal">
              <span>or 4 interest-free payments of $24.50 with  </span>
            </div>
            <div className="signal">
              <span>Zero interest4 payments of $25 with Affirm. See if you qualify</span>
            </div>
            <div className="signal">
              <span>Make 3 payments of dollor 32.67/mo with <strong>PayPal</strong></span>
            </div>
          </div>
          <br />
          <h4>Designer's Note</h4>
          <hr />
          <p>
            A personal reminder to add to your everyday collection.
            Keep a symbol of what's most meaningful to you close with the Cross Gold Pendant Necklace in White Lab
          </p>
          <button className="btn btn-link" style={{ color: "#666666", margintop: "5px", padding: "0px" }}>Read More</button>
          <hr />
          <h4>Details</h4>
          <hr />
          <p><strong>Metal</strong> 14k Yellow Gold Over Brass</p>
          <p><strong>Material</strong> White Lab Grown Opal</p>
          <p><strong>Size</strong> 19" chain, 0.66"L x 0.38"W pendant</p>
          <p><strong>Closure</strong> Lobster clasp</p>
          <button className="btn btn-link" style={{ color: "#666666", margintop: "5px", padding: "0px" }}>Read More</button>
          <hr />
          <h4>Our Impact</h4>
          <p>
            1% of total sales from Kendra Scott support women and youth causes.
          </p>
          <button className="btn btn-link" style={{ color: "#666666", margintop: "5px", padding: "0px" }}>Learn More</button>
          <hr />
        </section>
      </main>








      {/* FAQ */}
      <section className="faq-section">
        <h2>
          <span className="section-icon">❓</span>
          Frequently Asked Questions
        </h2>
        <h4 style={{ fontSize: "17px" }}>Return Policy</h4>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${expandedFaq === idx ? "expanded" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle">
                  {expandedFaq === idx ? "−" : "+"}
                </span>
              </button>
              {expandedFaq === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Decision Support */}
      <section className="decision-section">
        <div className="decision-content">
          <h3>Still deciding?</h3>
          <p>Our AI stylist can help you make the right choice</p>
          <button className="chat-btn">
            <span>💬</span>
            Chat with AI Stylist
          </button>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h6>About Us</h6>
              <hr />
              <ul className="footer-links">
                <li><a href="#">Kendra's Story</a></li>
                <li><a href="#">The Kendra Scott Foundation</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Refer a Friend</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>Need Help?</h6>
              <hr />
              <p className="time">
                Monday – Friday 8am -5pm CT <br /> and Saturday – Sunday 12pm -<br /> 5pm CT
              </p>
              <br />
              <ul className="footer-links">
                <li><a href="#">(866) 677-7023</a></li>
                <li><a href="#">service@kendrascott.com</a></li>
                <li><a href="#">Find a Kendra Scott Store</a></li>
                <li><a href="#">Find Other Retailers</a></li>
                <li><a href="#">Book a Virtual Appointment</a></li>
                <li><a href="#">Buy a Gift Card</a></li>

              </ul>
            </div>
            <div className="col-md-2">
              <h6>Your Order</h6>
              <hr />
              <ul className="footer-links">
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Buy Online, Pick Up in Store</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">International Orders</a></li>
                <li><a href="#">Wholesale Inquiries</a></li>
                <li><a href="#">Corporate Orders</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>Order Resources</h6>
              <hr />
              <ul className="footer-links">
                <li><a href="#">Promotions & Offers</a></li>
                <li><a href="#">Community Holiday Hub</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
                <li><a href="#">Jewelry Care & Repair</a></li>
                <li><a href="#">Style Now,Pay Later</a></li>
                <li><a href="#">Bolt</a></li>
                <li><a href="#">Cash App</a></li>
                <li><a href="#">ID.me</a></li>
                <li><a href="#">Encyclopedia</a></li>
                <li><a href="#">Shop More Jewelry</a></li>
                <li><a href="#">Supply Chain Transparency</a></li>
                <li><a href="#">Disclosure</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Get 15% off your next purchase</h6>
              <hr />
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Email"></input>
                </div>
                <br />
                <div class="form-group">
                  <label for="pwd">Zip Code</label>
                  <input type="password" class="form-control" id="pwd" placeholder="Zip Code"></input>
                </div>
                <br />
                <div className="time">
                  By clicking Sign Up, you agree to Kendra Scott's Terms & Conditions and Privacy Policy.
                </div>
                <br />
                <button type="submit" class="btn btn-default signup-btn">Signup</button>
                <hr />
                <h6>Shine Bright, Do Good</h6>
                <p className="time">Every Kendra Scott purchase supports women and youth causes.
                  <button className="btn btn-link" style={{ color: "#0a0a0a", fontSize: "13px" }}>Learn More</button>
                </p>
              </form>
            </div>
          </div>
          <div className="row text-center">
            <ul className="marketing-links">
              <li><a href="#">Privacy Policy</a>  | </li>
              <li><a href="#">Accessibility Statement</a> | </li>
              <li><a href="#">Site Map</a> | </li>
              <li><a href="#">Cookie Preferences</a> | </li>
              <li><a href="#">Do Not Sell or Share My Information</a> | </li>
              <li><a href="#">© Kendra Scott, LLC</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPageAI;
