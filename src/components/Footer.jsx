export default function Footer() {
    return (
    <>
        <div className="footer">
            <div className="emailInput">
                <p className="emailText">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</p>
                <div className="valueEmail">
                    <div className="wrapperEmail">
                        <input className="placeEmail" type="email" placeholder="Enter your email address" name="d" id="1" />
                        <img className="emailIcon" src="img/email.svg" alt="email" />
                    </div>
                    <div className="emailBtn">Subscribe to Newsletter</div>
                </div>
            </div>
        </div>
        <div className="downFooter d-flex">
            <div className="column n1">
                <img style={{width: 167}} src="img/logo/logo.svg" alt="logo" />
                <p className="footerText">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <ul>
                    <li>
                        <img src="img/logo/twitter.svg" alt="twitter" />
                    </li>
                    <li>
                        <img src="img/logo/facebook.svg" alt="facebook" />
                    </li>
                    <li>
                        <img src="img/logo/insta.svg" alt="instagram" />
                    </li>
                    <li>
                        <img src="img/logo/GitHub.svg" alt="GitHub" />
                    </li>
                </ul>
            </div>
            <div className="column">
                <h3>COMPANY</h3>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
            </div>
            <div className="column">
                <h3>HELP</h3>
                <a href="#">Customer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="column">
                <h3>FAQ</h3>
                <a href="#">Account</a>
                <a href="#">Manage Deliveries</a>
                <a href="#">Orders</a>
                <a href="#">Payments</a>
            </div>
            <div className="column">
                <h3>RESOURCES</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">YouTube Playlist</a>
            </div>
            
        </div>
        <div>
            <span className="section"></span>
            <div style={{ backgroundColor: '#F0F0F0', paddingTop: 25, alignItems: 'center'}} className="d-flex">
                <p style={{margin: 0, color: 'black', textAlign: 'left', paddingLeft: 8}}>Shop.co © 2000-2023, All Rights Reserved</p>
                <div style={{alignItems: 'center'}} className="d-flex">
                    <img src="img/visa.svg" alt="visa" />
                    <img src="img/mc.svg" alt="mc" />
                    <img src="img/pp.svg" alt="pp" />
                    <img src="img/apay.svg" alt="apay" />
                    <img src="img/gpay.svg" alt="gpay" />
                </div>
            </div>
        </div>
    </>
    )
}