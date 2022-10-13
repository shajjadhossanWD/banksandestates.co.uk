import React from 'react';
import "./howitwork.css";

const HowITWork = () => {
    return (
        <div>
            <div className="processSection01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="subTitle">
                                <span className="bleft"></span>
                                Process
                                <span className="bright"></span>
                            </div>

                            <h2 className="secTitle">
                                How We <span>Works</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="icon_box_03">
                                <div className="ib_box">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://img.icons8.com/bubbles/500/improvement.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-30px",
                                            }}
                                        />
                                    </i>
                                    <span>01</span>
                                </div>
                                <h3>Improvement</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="icon_box_03">
                                <div className="ib_box">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://www.kindpng.com/picc/m/211-2112492_an-enter-icon-is-a-rectangle-shape-and.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-30px",
                                            }}
                                        />
                                    </i>
                                    <span>02</span>
                                </div>
                                <h3>Idea Create</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="icon_box_03">
                                <div className="ib_box">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/5234/5234091.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-30px",
                                            }}
                                        />
                                    </i>
                                    <span>03</span>
                                </div>
                                <h3>Consultancy</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="icon_box_03">
                                <div className="ib_box">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/4406/4406358.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-30px",
                                            }}
                                        />
                                    </i>
                                    <span>04</span>
                                </div>
                                <h3>Success</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="appoinmentSection01">
                <div className="funfactArea">
                    <div className="fact_01">
                        <h2>
                            2.5<i style={{ fontStyle: "normal" }}>k</i>
                        </h2>
                        <p>
                            Power of choices when nothing what
                            <br /> we like best principle
                        </p>
                    </div>
                    <div className="fact_01">
                        <h2>
                            138<i style={{ fontStyle: "normal" }}>+</i>
                        </h2>
                        <p>
                            Power of choices when nothing what
                            <br /> we like best principle
                        </p>
                    </div>
                    <div className="fact_01">
                        <h2>
                            9.8<i style={{ fontStyle: "normal" }}>%</i>
                        </h2>
                        <p>
                            Power of choices when nothing what
                            <br /> we like best principle
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="appointment_form">
                                <p>Do it right now!</p>
                                <h3>Make an Appointment</h3>
                                <form action="#" className="row" id="contact_form">
                                    <div class="input-field col-md-6">
                                        <i class="twi-user2"></i>
                                        <input
                                            class="required"
                                            type="text"
                                            name="con_name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div class="input-field col-md-6">
                                        <i class="twi-envelope2"></i>
                                        <input
                                            class="required"
                                            type="email"
                                            name="con_email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div class="input-field col-md-6">
                                        <i class="twi-map-marker-alt2"></i>
                                        <input
                                            className="required"
                                            type="text"
                                            name="con_location"
                                            placeholder="Your Location"
                                        />
                                    </div>
                                    <div class="input-field col-md-6">
                                        <select class="required" name="con_subject">
                                            <option selected="selected">Subjects</option>
                                            <option>Finance Consultant</option>
                                            <option>Business Consultant</option>
                                            <option>Financial Advices</option>
                                            <option>Business Growth</option>
                                        </select>
                                    </div>
                                    <div class="input-field col-md-12">
                                        <i class="twi-comment-lines2"></i>
                                        <textarea
                                            class="required textarea"
                                            name="con_message"
                                            placeholder="Describe Your Plan"
                                        ></textarea>
                                    </div>
                                    <div class="input-field col-md-12">
                                        <button type="submit" class="qu_btn">
                                            Get A Quote
                                        </button>
                                        <div class="con_message"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-xl-6 pdAcc">
                            <div class="subTitle">
                                <span class="bleft"></span>Why Choose Us
                            </div>
                            <h2 class="secTitle">
                                Get Every <span>Answer</span>
                            </h2>
                            <div class="accordion quAccordion" id="quAccordion01">
                                <div class="card">
                                    <div class="card-header" id="ma_ac_01">
                                        <h2 class="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#ma_collapes_01"
                                                data-aria-expanded="true"
                                                data-aria-controls="ma_collapes_01"
                                            >
                                                <span></span>
                                                Best Sources of Help and Advice for Your Business
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="ma_collapes_01"
                                        class="collapse show"
                                        aria-labelledby="ma_ac_01"
                                        data-parent="#quAccordion01"
                                    >
                                        <div class="card-body">
                                            You’re not on your own when setting up or running a
                                            business in the UK offier a wealth of information and
                                            expertise if you need help from filling in your tax forms
                                            to recruiting people or setting up your business
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="ma_ac_02">
                                        <h2 class="mb-0">
                                            <button
                                                class="collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#ma_collapes_02"
                                                data-aria-expanded="false"
                                                data-aria-controls="ma_collapes_02"
                                            >
                                                <span></span>
                                                Small business service with offices in most big towns
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="ma_collapes_02"
                                        class="collapse"
                                        aria-labelledby="ma_ac_02"
                                        data-parent="#quAccordion01"
                                    >
                                        <div class="card-body">
                                            You’re not on your own when setting up or running a
                                            business in the UK offier a wealth of information and
                                            expertise if you need help from filling in your tax forms
                                            to recruiting people or setting up your business
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="ma_ac_03">
                                        <h2 class="mb-0">
                                            <button
                                                class="collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#ma_collapes_03"
                                                data-aria-expanded="false"
                                                data-aria-controls="ma_collapes_03"
                                            >
                                                <span></span>
                                                Offices are helpful on recruitment and employing people
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="ma_collapes_03"
                                        class="collapse"
                                        aria-labelledby="ma_ac_03"
                                        data-parent="#quAccordion01"
                                    >
                                        <div class="card-body">
                                            You’re not on your own when setting up or running a
                                            business in the UK offier a wealth of information and
                                            expertise if you need help from filling in your tax forms
                                            to recruiting people or setting up your business
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="ma_ac_04">
                                        <h2 class="mb-0">
                                            <button
                                                class="collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#ma_collapes_04"
                                                data-aria-expanded="false"
                                                data-aria-controls="ma_collapes_04"
                                            >
                                                <span></span>
                                                Services including a legal helpline with disabilities
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="ma_collapes_04"
                                        class="collapse"
                                        aria-labelledby="ma_ac_04"
                                        data-parent="#quAccordion01"
                                    >
                                        <div class="card-body">
                                            You’re not on your own when setting up or running a
                                            business in the UK offier a wealth of information and
                                            expertise if you need help from filling in your tax forms
                                            to recruiting people or setting up your business
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="ma_ac_05">
                                        <h2 class="mb-0">
                                            <button
                                                class="collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#ma_collapes_05"
                                                data-aria-expanded="false"
                                                data-aria-controls="ma_collapes_05"
                                            >
                                                <span></span>
                                                How do I Booked an Appointment?
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="ma_collapes_05"
                                        class="collapse"
                                        aria-labelledby="ma_ac_05"
                                        data-parent="#quAccordion01"
                                    >
                                        <div class="card-body">
                                            You’re not on your own when setting up or running a
                                            business in the UK offier a wealth of information and
                                            expertise if you need help from filling in your tax forms
                                            to recruiting people or setting up your business
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolioSection01">
                <div class="folioSlider01 owl-carousel">
                    <div class="folioItem01">
                        <img src="https://i.ibb.co/BCXZY2C/img01.jpg" alt="" />
                        <div class="folioContent">
                            <a class="cat" href="folio1.html">
                                Consultancy
                            </a>
                            <h3>
                                <a href="single-folio.html">Business Managment</a>
                            </h3>
                        </div>
                        {/* <a class="fm" href="single-folio.html">
              <i class="twi-eye2"></i>View Details
            </a> */}
                    </div>
                    <div class="folioItem01">
                        <img src="https://i.ibb.co/xqM8w1n/img02.jpg" alt="" />
                        <div class="folioContent">
                            <a class="cat" href="folio1.html">
                                Consultancy
                            </a>
                            <h3>
                                <a href="single-folio.html">Finance Managment</a>
                            </h3>
                        </div>
                        {/* <a class="fm" href="single-folio.html">
              <i class="twi-eye2"></i>View Details
            </a> */}
                    </div>
                    <div class="folioItem01">
                        <img src="https://i.ibb.co/Qp004bP/img03.jpg" alt="" />
                        <div class="folioContent">
                            <a class="cat" href="folio1.html">
                                Consultancy
                            </a>
                            <h3>
                                <a href="single-folio.html">Business Managment</a>
                            </h3>
                        </div>
                        {/* <a class="fm" href="single-folio.html">
              <i class="twi-eye2"></i>View Details
            </a> */}
                    </div>
                </div>
            </div>
            <section class="teamSection01">
                <div class="container largeContainer">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="subTitle">
                                <span class="bleft"></span>Our Memebers
                                <span class="bright"></span>
                            </div>
                            <h2 class="secTitle">
                                Expert <span>Teams</span>
                            </h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="team_01 text-center">
                                <div class="tm_thumb">
                                    <img
                                        src="https://i.ibb.co/hR8XcJf/manager01.jpg"
                                        style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div class="tm_social">
                                        <a href="https://www.facebook.com/">
                                            <i class="twi-facebook-f"></i>
                                        </a>
                                        <a href="https://linkedin.com/">
                                            <i class="twi-linkedin-in"></i>
                                        </a>
                                        <a href="https://twitter.com/">
                                            <i class="twi-twitter"></i>
                                        </a>
                                    </div>
                                    <a class="tmsToggle" href="javascript:void(0);">
                                        +
                                    </a>
                                </div>
                                <h3>
                                    <a href="single-team.html">Georgie Haynes</a>
                                </h3>
                                <p>Business Expert</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team_01 text-center">
                                <div class="tm_thumb">
                                    <img
                                        src="https://i.ibb.co/QnkWNTK/manager02.jpg"
                                        style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div class="tm_social">
                                        <a href="https://www.facebook.com/">
                                            <i class="twi-facebook-f"></i>
                                        </a>
                                        <a href="https://linkedin.com/">
                                            <i class="twi-linkedin-in"></i>
                                        </a>
                                        <a href="https://twitter.com/">
                                            <i class="twi-twitter"></i>
                                        </a>
                                    </div>
                                    <a class="tmsToggle" href="javascript:void(0);">
                                        +
                                    </a>
                                </div>
                                <h3>
                                    <a href="single-team.html">Lara Maleon</a>
                                </h3>
                                <p>Managment</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team_01 text-center">
                                <div class="tm_thumb">
                                    <img
                                        src="https://i.ibb.co/47tQQQn/manager03.jpg"
                                        style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div class="tm_social">
                                        <a href="https://www.facebook.com/">
                                            <i class="twi-facebook-f"></i>
                                        </a>
                                        <a href="https://linkedin.com/">
                                            <i class="twi-linkedin-in"></i>
                                        </a>
                                        <a href="https://twitter.com/">
                                            <i class="twi-twitter"></i>
                                        </a>
                                    </div>
                                    <a class="tmsToggle" href="javascript:void(0);">
                                        +
                                    </a>
                                </div>
                                <h3>
                                    <a href="single-team.html">Adam Delaua</a>
                                </h3>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team_01 text-center">
                                <div class="tm_thumb">
                                    <img
                                        src="https://i.ibb.co/1QVtsL7/manager04.jpg"
                                        style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div class="tm_social">
                                        <a href="https://www.facebook.com/">
                                            <i class="twi-facebook-f"></i>
                                        </a>
                                        <a href="https://linkedin.com/">
                                            <i class="twi-linkedin-in"></i>
                                        </a>
                                        <a href="https://twitter.com/">
                                            <i class="twi-twitter"></i>
                                        </a>
                                    </div>
                                    <a class="tmsToggle" href="javascript:void(0);">
                                        +
                                    </a>
                                </div>
                                <h3>
                                    <a href="single-team.html">Jizz Merkel</a>
                                </h3>
                                <p>Consultant</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mt38">
                        <div class="col-lg-8">
                            <div class="support">
                                <div class="spIcon">
                                    <i class="twi-phone"></i>
                                    <img src="https://i.ibb.co/vXgYBS6/phn1.jpg" alt="" />
                                </div>
                                <p>
                                    We are one of the highest graded company in United State. For
                                    any Kind of help please contact our{" "}
                                    <span>24/7 hotline call services.</span> we are ready for you
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="icon_box_04">
                                <div class="ib_box">
                                    <i class="twi-comments-alt-dollar"></i>
                                </div>
                                <p>Have any Questions?</p>
                                <h3>2569 25 21589</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="chooseSection">
                <div class="container largeContainer">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="subTitle">
                                <span class="bleft"></span>Why Choose Us
                            </div>
                            <h2 class="secTitle white">
                                Find Out More Our <span>Features</span>
                            </h2>
                            <p class="secDesc">
                                In addition to payroll cheques, a business writes many other
                                cheques during the course of a year to pay for a wide variety of
                                items including local business taxes,
                            </p>
                            <a href="javascript:void(0);" class="qu_btn">
                                View All
                            </a>
                        </div>
                        <div class="col-lg-7 mt44">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="icon_box_05">
                                        <div class="ib_box">
                                            <div class="pin1"></div>
                                            <i class="icon-local_1"></i>
                                            <div class="pin2"></div>
                                        </div>
                                        <h3>Improvement</h3>
                                        <p>
                                            All cash received from sales and from all other sources
                                            has to be carefully identified....
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="icon_box_05">
                                        <div class="ib_box">
                                            <div class="pin1"></div>
                                            <i class="icon-local_3"></i>
                                            <div class="pin2"></div>
                                        </div>
                                        <h3>Idea Generate</h3>
                                        <p>
                                            All cash received from sales and from all other sources
                                            has to be carefully identified....
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="icon_box_05">
                                        <div class="ib_box">
                                            <div class="pin1"></div>
                                            <i class="icon-XjxC7N01"></i>
                                            <div class="pin2"></div>
                                        </div>
                                        <h3>Consultancy</h3>
                                        <p>
                                            All cash received from sales and from all other sources
                                            has to be carefully identified....
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="icon_box_05">
                                        <div class="ib_box">
                                            <div class="pin1"></div>
                                            <i class="icon-local_11"></i>
                                            <div class="pin2"></div>
                                        </div>
                                        <h3>Success Business</h3>
                                        <p>
                                            All cash received from sales and from all other sources
                                            has to be carefully identified....
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonialSection01">
                <div class="container largeContainer">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cta">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="icon_box_06">
                                            <div class="ib_box">
                                                <i class="icon-local_7"></i>
                                            </div>
                                            <h3>Small / Growing Business!</h3>
                                            <p>
                                                Choose one channel and be great at it. Work toward the
                                                goal of being the leading provider
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 text-center">
                                        <div class="orcta">
                                            <p>or</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 text-right">
                                        <div class="icon_box_06">
                                            <div class="ib_box">
                                                <i class="icons-target"></i>
                                            </div>
                                            <h3>Enterprise Level Organization</h3>
                                            <p>
                                                Choose one channel and be great at it. Work toward the
                                                goal of being the leading provider
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="subTitle">
                                <span class="bleft"></span>Testimonial
                                <span class="bright"></span>
                            </div>
                            <h2 class="secTitle">
                                Client's <span>Feedback</span>
                            </h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div
                                class="testimonialslider01 owl-carousel d-flex"
                                style={{ gap: "1.5rem" }}
                            >
                                <div class="testiItem01">
                                    <img src="https://i.ibb.co/thWggTM/quote.png" alt="" />
                                    <p class="quotation">
                                        Grow tactical "outside the box" thinking whereas principle
                                        entered internal or "organic" sources. roductize tailers
                                        before
                                    </p>
                                    <div class="ts_author">
                                        <img src="https://i.ibb.co/0KS9LQL/t1.jpg" alt="" />
                                        <h5>David Smith</h5>
                                        <span>CEO & Founder</span>
                                    </div>
                                </div>
                                <div class="testiItem01">
                                    <img src="https://i.ibb.co/thWggTM/quote.png" alt="" />
                                    <p class="quotation">
                                        Grow tactical "outside the box" thinking whereas principle
                                        entered internal or "organic" sources. roductize tailers
                                        before
                                    </p>
                                    <div class="ts_author">
                                        <img src="https://i.ibb.co/F5cfSSK/t2.jpg" alt="" />
                                        <h5>Jasmine Dola</h5>
                                        <span>Founder</span>
                                    </div>
                                </div>
                                <div class="testiItem01">
                                    <img src="https://i.ibb.co/thWggTM/quote.png" alt="" />
                                    <p class="quotation">
                                        Grow tactical "outside the box" thinking whereas principle
                                        entered internal or "organic" sources. roductize tailers
                                        before
                                    </p>
                                    <div class="ts_author">
                                        <img src="https://i.ibb.co/TMwmVbC/t3.jpg" alt="" />
                                        <h5>Mark Smith</h5>
                                        <span>Co Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blogSectiont01">
                <div class="container largeContainer">
                    <div class="row">
                        <div class="col-xl-7 noPaddingRight">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="blogItem01">
                                        <div class="blogThumb">
                                            <img src="https://i.ibb.co/VmBXR9Q/vt1.jpg" alt="" />
                                        </div>
                                        <div class="blogContent">
                                            <div class="bmeta">
                                                <span>
                                                    <i class="twi-folder2"></i>
                                                    <a href="blog1.html">Develop</a>
                                                </span>
                                                |
                                                <span>
                                                    <i class="twi-user2"></i>
                                                    <a href="blog1.html">David Smith</a>
                                                </span>
                                            </div>
                                            <h3>
                                                <a href="single-blog.html">
                                                    ITAM joins the financial, inventory...
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="blogItem01">
                                        <div class="blogThumb">
                                            <img src="https://i.ibb.co/z8ZstW8/vt2.jpg" alt="" />
                                        </div>
                                        <div class="blogContent">
                                            <div class="bmeta">
                                                <span>
                                                    <i class="twi-folder2"></i>
                                                    <a href="blog1.html">Marketing</a>
                                                </span>
                                                |
                                                <span>
                                                    <i class="twi-user2"></i>
                                                    <a href="blog1.html">David Smith</a>
                                                </span>
                                            </div>
                                            <h3>
                                                <a href="single-blog.html">
                                                    How To Scale a Dropshipping Business...
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5">
                            <div class="ctaBcon">
                                <div class="subTitle">
                                    <span class="bleft"></span>News Feed
                                </div>
                                <h2 class="secTitle" style={{ marginBottom: "1.5rem" }}>
                                    Latest <span>News</span>
                                </h2>
                                <p class="secDesc" style={{ color: "#74777c", marginBottom: '2rem' }}>
                                    Trusted by the world’s best organizations, for 15 years and
                                    running, it has been delivering smiles to hundreds of IT
                                    advisors, developers...
                                </p>
                                <a href="blog1.html" class="qu_btn">
                                    View All News
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowITWork;