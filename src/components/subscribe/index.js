import React, { useState } from "react";
import * as styles from "./styles";

export default () => {
  const [email, updateEmail] = useState("");
  const [captcha, updateCaptcha] = useState("");
  return (
    <section css={styles.wrapper}>
      <div css={styles.flexChildLeft}>
        <h1 css={styles.heading}>Keep in touch</h1>
        <p css={styles.description}>
          Subscribe to receive the latest less blog posts and updates
        </p>
      </div>
      <div css={styles.flexChildRight}>
        <div css={styles.inputContainer}>
          {/* <!-- Begin Mailchimp Signup Form --> */}
          <div id="mc_embed_signup" style={{ height: "100%", width: "100%" }}>
            <form
              action="https://gmail.us10.list-manage.com/subscribe/post?u=5852c7d54cc1e3fc143c586a1&amp;id=16afe59346"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
              style={{ height: "100%" }}
            >
              <div id="mc_embed_signup_scroll" style={{ height: "100%" }}>
                <div className="mc-field-group" style={{ height: "100%" }}>
                  <label htmlFor="mce-EMAIL" style={{ display: "none" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => updateEmail(e.target.value)}
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    placeholder="Enter your email"
                    aria-label="Email Address"
                    css={styles.input}
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>{" "}
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_5852c7d54cc1e3fc143c586a1_16afe59346"
                    tabIndex="-1"
                    value={captcha}
                    aria-label="Captcha"
                    onChange={(e) => updateCaptcha(e.target.value)}
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value=""
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    aria-label="Submit"
                    css={styles.arrow}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* <!-- End mc_embed_signup --> */}
        </div>
      </div>
    </section>
  );
};
