import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import getLocalStorageUser from '../User'
import NavigationLinks from '../components/navigation-links'
import GalleryCard3 from '../components/gallery-card3'
import './home.css'
import '../style.css'

const Home = (props) => {

  const [localUser, setLocalUser] = useState(null);

  useState(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const jsonUser = JSON.parse(storedUser);

      const sessionDuration = 30 * 60 * 1000;

      const lastLoginTime = new Date(jsonUser.lastLogin);
      const expirationTime = new Date(lastLoginTime.getTime() + sessionDuration);
      const currentTime = new Date();

      if (currentTime.getTime() < expirationTime.getTime())
        setLocalUser(jsonUser);
    }
  }, []);


  return (
    <div className="home-container">
      <Helmet>
        <title>Artisan Avenue</title>
        <meta property="og:title" content="Artisan Avenue" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <Link to="/" className="home-navlink">
          <img
            alt="image"
            src="/357project-removebg-preview-200h.png"
            className="home-image"
          />
        </Link>
        <div className="home-nav"></div>
        <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
        <div className="home-btn-group">
          <Link to="/login" className="home-login button">
            Login
          </Link>
          <Link to="/register" className="home-register button">
            Register
          </Link>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container02">
          <h1 className="home-text">Discover true craftsmanship</h1>
          <p>
                  {localUser && (
                    <span>
                      Welcome, {localUser.username}!
                    </span>)}
          </p>
          <div className="home-btn-group1">
            <Link to="/shop" className="home-navlink1 button">
              Start Shopping
            </Link>
            <a href="#Philosophy" className="home-link button">
              Learn More
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="https://www.novica.com/blog/wp-content/uploads/2021/04/Pande-.jpg"
          className="home-image2"
        />
      </div>
      <div id="Philosophy" className="home-banner">
        <h1 className="home-text08">Our Mission</h1>
        <span className="home-text09">
          <span>
            Artisan Avenue is dedicated to championing the artistry of
            handcrafted goods while empowering artisans worldwide. Through our
            platform, we connect discerning buyers with authentic, high-quality
            products, fostering a community that values craftsmanship,
            authenticity, and ethical practices.
          </span>
          <br></br>
        </span>
        <iframe
          src="https://www.youtube.com/embed/tVdw60eCnJI?si=Jc4n90qqaPJsLA6F"
          allowFullScreen="true"
          className="home-iframe"
        ></iframe>
      </div>
      <div className="home-steps">
        <h1 className="home-text12">The Artisan Avenue Process</h1>
        <span className="home-text13">
          <span>
            Experience the artisan process firsthand: from design to creation,
            each piece on our site embodies true craftsmanship.
          </span>
          <br></br>
        </span>
        <div className="home-container03">
          <div className="home-step">
            <div className="home-container04">
              <div className="home-line"></div>
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container06">
              <h1 className="home-text16">Design</h1>
              <span className="home-text17">
                Consider materials, techniques, and your desired outcome
              </span>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container07">
              <div className="home-line2"></div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container09">
              <h1 className="home-text18">Create</h1>
              <span className="home-text19">
                Bring the design to life by physically working with the chosen
                materials
              </span>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container10">
              <div className="home-line4"></div>
              <div className="home-container11">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container12">
              <h1 className="home-text20">Refine</h1>
              <span className="home-text21">
                Fine-tune the crafted piece through meticulous attention to
                detail
              </span>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container13">
              <div className="home-line6"></div>
              <div className="home-container14">
                <svg viewBox="0 0 1024 1024" className="home-icon17">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container15">
              <h1 className="home-text22">Deploy</h1>
              <span className="home-text23">
                <span>
                  Showcase your masterpiece to the world as it becomes available
                  for sale on our website
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <h1 className="home-text26">
          <span>Sales Portfolio</span>
          <br></br>
        </h1>
        <span className="home-text29">
          Browse through our diverse portfolio, curated directly from talented
          artisans and creators on our website.
        </span>
        <span className="home-text30">
          <span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-container16">
          <GalleryCard3
            title="Artisan Comfort"
            imageSrc="data:image/jpeg;base64,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"
            subtitle="Meticulously crafted to elevate your home décor with artisanal charm."
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            title="Cultural Treasures"
            imageSrc="https://i1.himalayas.life/c/u/f67894297b6134a6b759b3a9ec15b6cb/2018/01/06050847/wooden-Mask-for-nepal.jpg"
            subtitle="Explore the rich heritage of Indian artistry with our exquisite mask collection."
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            title="Eco Chic"
            imageSrc="https://static.wixstatic.com/media/24d36a_ffea97ced829482594f906df62d200d5~mv2.jpg/v1/fill/w_526,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24d36a_ffea97ced829482594f906df62d200d5~mv2.jpg"
            subtitle="Elevate your writing experience with our styled pencil collection."
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            title="Artisan Elegance"
            imageSrc="https://casswheatley.co.uk/wp-content/uploads/2023/05/4-scaled-e1685445574956.jpg"
            subtitle="Adorn yourself with timeless elegance with our handcrafted necklace collection."
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            title="Cozy Craft"
            imageSrc="https://cdn.shopify.com/s/files/1/2690/0106/files/Clay_Cup2.jpg?v=1632544385"
            subtitle="Wrap your hands around warmth and style with our handcrafted mug collection."
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            title="Natural Comfort"
            imageSrc="https://a.1stdibscdn.com/wooden-handmade-occassional-chair-holland-1920s-for-sale/f_66252/f_300549021660906070844/f_30054902_1660906071264_bg_processed.jpg?width=768"
            subtitle="Experience the epitome of comfort and craftsmanship with our handcrafted wooden chair collection."
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            title="Luxury Craft"
            imageSrc="https://theindiacrafthouse.com/cdn/shop/products/Handcrafted_20Jawaja_20Leather_20Sling_20Bag_20with_20Hand_20Stitch_20Detail_20-_20Yellow_20-_20LVC01A_201_500x500.jpg?v=1703324157"
            subtitle="Embrace sophistication and durability with our handcrafted leather bag collection."
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            title="Pure Artistry"
            imageSrc="https://cdn.create.vista.com/api/media/small/160385632/stock-photo-ars-of-homemade-soaps-dry-lavender-flowers"
            subtitle="Elevate your self-care routine with our handcrafted soap collection."
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            title="Seaside Serenity"
            imageSrc="https://www.theflorentine.net/wp-content/uploads/2023/05/Mathieson-Kirstie-1-768x1024.jpg"
            subtitle="Bring the tranquility of the coast into your home with our handcrafted beach theme vase collection."
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            title="Cozy Couture"
            imageSrc="https://ca.reigningchamp.com/cdn/shop/files/handknit-varsity-sweater-black-ecru-Front_Flat.jpg?v=1707352400&amp;width=1920"
            subtitle="Wrap yourself in warmth and style with our handknit sweater collection."
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            title="Functional Flair"
            imageSrc="https://i.shgcdn.com/bc7bfd3e-7cd0-4f95-a9c7-67f052849eaf/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            subtitle="Elevate your living space with our handcrafted end table collection."
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            title="Classic Charm"
            imageSrc="https://theluxereviewcom.files.wordpress.com/2021/01/urban-chic-sideboard-furniture.jpg?w=950"
            subtitle="Add timeless elegance to your living space with our handcrafted commode collection."
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container17">
          <img
            alt="image"
            src="/357project-removebg-preview-200h.png"
            className="home-image3"
          />
          <nav className="home-nav2">
            <span className="home-text37">Design</span>
            <span className="home-text38">Create</span>
            <span className="home-text39">Refine</span>
            <span className="home-text40">Deploy</span>
          </nav>
        </div>
        <div className="home-separator"></div>
        <div className="home-container18">
          <span className="home-text41">
            © 2024 Artisan Avenue, All Rights Reserved.
          </span>
          <div className="home-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon19">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon21">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon23">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
      <div className="home-testimonial"></div>
    </div>
  )
}

export default Home
