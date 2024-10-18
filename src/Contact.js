import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>

      <p>
        Have a question, suggestion, or need support? We're here to help! Get in
        touch with us through any of the following methods, and our team will
        respond as quickly as possible.
      </p>

      <h2>Customer Support</h2>
      <p>
        For technical issues or general inquiries:
        <br />
        📧 Email: <a href="mailto:support@quizzler.com">support@quizzler.com</a>
        <br />
        📞 Phone: (123) 456-7890
      </p>

      <h2>Feedback and Suggestions</h2>
      <p>
        We value your feedback! If you have ideas on how we can improve your
        experience on <strong>Quizzler</strong>, feel free to reach out:
        <br />
        📧 Email:{" "}
        <a href="mailto:feedback@quizzler.com">feedback@quizzler.com</a>
      </p>

      <h2>Follow Us</h2>
      <p>
        Stay connected with us on social media to receive updates on new
        quizzes, features, and more:
        <br />
        <a href="http://facebook.com/quizzler" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <br />
        <a href="http://twitter.com/quizzler" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <br />
        <a href="http://instagram.com/quizzler" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </p>
    </div>
  );
};

export default ContactUs;