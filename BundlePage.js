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
           <div class="product-details-section">
           <div class="product-badges">
           <span class="badge bestseller">Bestseller</span>
           <span class="badge extended">Extended Sizes</span>
           </div>
           <h1 class="product-title">Juliette Gold Band Ring in White CZ</h1>
           <div class="persona-upsell-content">
           <div class="upsell-bundle-card">
           <div class="upsell-header">
           <div class="upsell-icon">✨</div>
           <div class="upsell-header-text">
           <h3>Perfect Pairing</h3>
           <p>This combination looks stunning together</p>
           </div>
           </div>
           <div class="bundle-products-display">
           <div class="bundle-product-item">
           <div class="bundle-product-image">
           <img alt="Juliette Gold Band Ring in White CZ" src="https://res.cloudinary.com/dbtapyfau/image/upload/v1765973945/Screenshot_2025-12-17_at_5.47.20_PM_pmoeb5.png"/>
           <div class="bundle-checkmark">✓</div>
           </div>
           <div class="bundle-product-info">
           <p class="bundle-product-name">Juliette Gold Band Ring in White CZ</p>
           <p class="bundle-product-price">$60.00</p>
           </div>
           </div>
           <div class="bundle-plus-icon">+</div>
           <div class="bundle-product-item">
           <div class="bundle-product-image">
           <img alt="Juliette Gold Pendant Necklace in White CZ" src="https://res.cloudinary.com/dbtapyfau/image/upload/v1766110105/Screenshot_2025-12-19_at_7.38.00_AM_y90jp4.png"/></div><div class="bundle-product-info"><p class="bundle-product-name">Juliette Gold Pendant Necklace in White CZ</p><p class="bundle-product-price">$75.00</p></div></div></div><div class="bundle-pricing"><div class="bundle-price-breakdown"><div class="price-row"><span class="price-label">Individual Total:</span><span class="price-value original">$135.00</span></div><div class="price-row"><span class="price-label">Bundle Discount (15%):</span><span class="price-value discount">-$20.25</span></div><div class="price-row total"><span class="price-label">Bundle Price:</span><span class="price-value bundle-total">$114.75</span></div></div><div class="bundle-savings-badge"><span class="savings-icon">💰</span><span class="savings-text">You Save $20.25</span></div></div><div class="bundle-cta"><button class="bundle-add-btn ">Add Bundle to Cart</button><button class="bundle-view-btn">View Juliette Gold Pendant Necklace in White CZ</button></div><div class="bundle-benefits"><div class="benefit-item"><span class="benefit-icon">🎁</span><span class="benefit-text">Complete your look with matching pieces</span></div><div class="benefit-item"><span class="benefit-icon">🚚</span><span class="benefit-text">Free shipping on bundle orders</span></div><div class="benefit-item"><span class="benefit-icon">↩️</span><span class="benefit-text">Easy returns on both items</span></div></div></div></div><div class="product-price-section"><span class="product-price">$60.00</span></div><div class="financing-options"><a href="#" class="financing-link">More Financing Options</a></div><div class="discount-note">Discount Automatically Applies in Cart.</div><div class="product-options"><div class="option-group"><label class="option-label">Metal</label><div class="option-buttons"><button class="option-btn active">Gold</button></div></div><div class="option-group"><label class="option-label">Size <a href="#" class="size-guide-link">Size Guide</a></label><div class="size-selector"><button class="size-btn ">4</button><button class="size-btn active">5</button><button class="size-btn ">6</button><button class="size-btn ">7</button><button class="size-btn ">8</button><button class="size-btn ">9</button><button class="size-btn ">10</button><button class="size-btn ">11</button><button class="size-btn ">12</button></div></div><div class="option-group"><label class="option-label">Store Availability</label><select class="store-select"><option>Select a Store</option><option>New York - 5th Avenue</option><option>Los Angeles - Beverly Hills</option><option>Chicago - Michigan Avenue</option></select></div></div><button class="add-to-bag-btn">Add to Bag</button><div class="product-info-icons"><div class="info-icon-item"><span class="info-icon">🚚</span><span>Free shipping on orders $85+.</span></div><div class="info-icon-item"><span class="info-icon">↩️</span><span>Free &amp; Easy Returns. <a href="#">Return Policy</a></span></div><div class="info-icon-item"><span class="info-icon">🎁</span><span>Gifting made easy. Add our complimentary gift box at checkout.</span></div></div></div>
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
