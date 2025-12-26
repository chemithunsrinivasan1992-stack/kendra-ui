import React, { useState } from "react";
import "./master.css";

const ProductDetailPage = ({ persona }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  

  

  return (

    <div className="pdp">

      <header class="ks-header">
        <div class="ks-top-banner">
          <p>Order Non Custom Gifts by 12pm PT 12/17 for Holiday Delivery</p></div>
        <div class="ks-header-main">
          <div class="ks-header-container">
            <nav class="ks-nav-left">
              <button class="ks-menu-toggle">☰</button>
              <a class="ks-logo" href="/" data-discover="true">Kendra Scott</a></nav>
            <nav class="ks-nav-right">
              <a href="#" class="ks-nav-link">Store Locator</a>
              <a href="#" class="ks-nav-link">My Account</a>
              <a href="#" class="ks-nav-link">Wishlist</a>
              <button class="ks-search-toggle">🔍</button></nav>
          </div><nav class="ks-main-nav">
            <div class="ks-nav-container">
              <a href="#" class="menu-item">⟡ Holiday Shop ⟡</a>
              <a href="#" class="menu-item">Jewelry</a>
              <a href="#" class="menu-item">New</a>
              <a href="#" class="menu-item">Bestsellers</a>
              <a href="#" class="menu-item">Fine Jewelry</a>
              <a href="#" class="menu-item">Accessories</a>
              <a href="#" class="menu-item">Sale</a>
              <a href="#" class="menu-item">About Us</a>
            </div>
          </nav>
        </div>
      </header>


      <div class="product-breadcrumbs">
        <div class="breadcrumbs-container">
          <a href="#" class="breadcrumb-link">Jewelry</a><span class="breadcrumb-separator">/</span>
          <a href="#" class="breadcrumb-link">Rings</a>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div class="product-images-section">
              <div class="product-main-image">
                <div class="product-video-container">
                  <video class="product-video" controls="" autoplay="" loop="" playsinline="">
                    <source src="https://res.cloudinary.com/dbtapyfau/video/upload/v1765973962/Screen_Recording_2025-12-17_at_5.48.02_PM_xh9nvb.mov" type="video/quicktime" />
                  </video>
                  <div class="image-controls">
                    <button class="image-control-btn">360 view</button><button class="image-control-btn">Try It On</button></div><div class="tiktok-trending-overlay"><div class="trending-badge-overlay"><span class="trending-icon-overlay">🔥</span><span class="trending-text-overlay">Trending</span>
                    </div>
                    <div class="views-count-overlay">
                      <span class="views-icon-overlay">👁️</span>
                      <span class="views-text-overlay">2.3M views</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-thumbnails">
                <div class="thumbnail active">
                  <div class="thumbnail-video-indicator">▶</div>
                  <img alt="Video thumbnail" class="thumbnail-img" src="https://res.cloudinary.com/dbtapyfau/image/upload/v1765973945/Screenshot_2025-12-17_at_5.47.20_PM_pmoeb5.png" />
                </div>
                <div class="thumbnail ">
                  <img alt="Juliette Gold Band Ring in White CZ view 2" class="thumbnail-img" src="https://res.cloudinary.com/dbtapyfau/image/upload/v1765973959/Screenshot_2025-12-17_at_5.47.25_PM_c0jfva.png" />
                </div>
                <div class="thumbnail ">
                  <img alt="Juliette Gold Band Ring in White CZ view 3" class="thumbnail-img" src="https://res.cloudinary.com/dbtapyfau/image/upload/v1765973959/Screenshot_2025-12-17_at_5.47.41_PM_uanjvo.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ paddingLeft: "35px" }}>
            <div class="persona-meta-content"><div class="welcome-back-card"><div class="welcome-icon">👋</div><div class="welcome-text"><h3>Welcome back, Sarah!</h3><p>Based on your style, we think you'll love this piece</p></div></div><div class="loyalty-card"><div class="loyalty-header"><span class="loyalty-icon">👑</span><h4>Your Loyalty Status</h4></div><div class="loyalty-details"><div class="points-display-card"><span class="points-number">150</span><span class="points-label">Points Available</span></div><div class="shipping-progress-card"><span class="progress-icon">📦</span><span class="progress-text">Add $25 more for <strong>free shipping</strong></span></div></div></div><div class="recommendation-card"><div class="recommendation-icon">💎</div><div class="recommendation-text"><p class="recommendation-title">Perfect Pairing</p><p>You bought the <strong>Elisa Pendant</strong> last month</p><p>This ring pairs perfectly with it</p></div></div><div class="size-recommendation-card"><div class="size-icon">📏</div><div class="size-recommendation-text"><span class="size-label">Recommended Size</span><span class="size-value">Size 6-7</span><span class="size-note">Based on your previous purchases</span></div></div><div class="urgency-card"><div class="urgency-icon">⚠️</div><div class="urgency-text"><span class="urgency-label">Limited Stock</span><span class="urgency-value">2 left in your size</span></div></div></div>
          </div>
        </div>

      </div>
      <div class="product-description-section"><div class="product-container">
        <h2 class="section-title">Juliette Gold Band Ring in White CZ</h2>
        <div class="product-description-content">
          <p class="product-price-large">$60.00</p>
          <p class="product-description-text">A timeless band ring featuring a row of brilliant white cubic zirconia stones set in gold-plated brass.</p>
        </div>
      </div>
      </div>
      <footer class="ks-footer">
        <div class="ks-footer-main">
          <div class="ks-footer-container">
            <div class="ks-footer-section">
              <h4>About Us</h4>
              <ul>
                <li><a href="#">Kendra's Story</a></li>
                <li><a href="#">The Kendra Scott Foundation</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Refer a Friend</a></li>
              </ul></div><div class="ks-footer-section">
              <h4>Need help?</h4><ul>
                <li>Monday – Friday 8am – 5pm CT</li>
                <li>Saturday – Sunday 12pm – 5pm CT</li>
                <li><a href="tel:8666777023">(866) 677-7023</a></li>
                <li><a href="mailto:service@kendrascott.com">service@kendrascott.com</a></li>
                <li><a href="#">Find a Kendra Scott Store</a></li>
                <li><a href="#">Book a Virtual Appointment</a></li>
              </ul>
            </div>
            <div class="ks-footer-section">
              <h4>Your Order</h4>
              <ul>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Buy Online, Pick Up in Store</a></li>
                <li><a href="#">Shipping &amp; Returns</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">International Orders</a></li>
              </ul></div><div class="ks-footer-section">
              <h4>Other Resources</h4><ul><li><a href="#">Promotions &amp; Offers</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
                <li><a href="#">Jewelry Care &amp; Repair</a></li>
                <li><a href="#">Style Now, Pay Later</a></li>
                <li><a href="#">Encyclopedia</a></li>
              </ul>
            </div>
          </div>
          <div class="ks-newsletter">
            <div class="ks-newsletter-content">
              <h3>Get 15% off your next purchase.</h3>
              <form class="ks-newsletter-form">
                <input placeholder="Email" class="ks-email-input" type="email"></input>
                <input placeholder="Zip Code" class="ks-zip-input" type="text"></input>
                <button type="submit" class="ks-signup-button">Sign Up</button>
              </form>
              <p class="ks-newsletter-terms">By clicking Sign Up, you agree to Kendra Scott's Terms &amp; Conditions and Privacy Policy.</p></div></div><div class="ks-benefits-bar">
            <div class="ks-benefit"><strong>Free Shipping</strong><p>on orders $85+</p></div>
            <div class="ks-benefit"><strong>Free Returns</strong><p>Extended through 1/31/26</p></div>
            <div class="ks-benefit"><strong>Buy Online, Pick Up in Store</strong><p>within 4 hours</p></div>
            <div class="ks-benefit"><strong>Free Gift Boxing</strong><p>Apply at Checkout</p></div></div></div>
        <div class="ks-footer-bottom">
          <div class="ks-footer-bottom-container">
            <div class="ks-footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Accessibility Statement</a>
              <a href="#">Sitemap</a>
              <a href="#">Manage cookie preferences</a>
              <a href="#">Do Not Sell or Share My Information</a>
            </div>
            <div class="ks-copyright"><p>© Kendra Scott, LLC</p></div>
            <div class="ks-footer-tagline">
              <p>Shine Bright, Do Good</p>
              <p>Every Kendra Scott purchase supports women and youth causes. <a href="#">Learn More</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
