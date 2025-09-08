import React, { useEffect, useState } from "react";
import "./SignIn.css";

const SignIn = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  // prevent background scroll while modal is open
//   useEffect(() => {
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = prev; };
//   }, []);

  // close when clicking the overlay (but not inside the modal)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  // basic submit handler ....this is similar to video OnLogin
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (isSignIn) {
      console.log("Sign In submit:", data);
    } else {
      console.log("Sign Up submit:", data);
    }
  };

  return (
    <div
      className="overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={isSignIn ? "Sign in dialog" : "Sign up dialog"}
    >
      <div className="signin-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="brand">
          <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Your email" required autoFocus />
          <input name="password" type="password" placeholder="Password" required />

          {!isSignIn && (
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          )}

          <button type="submit" className="signin-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

        </form>

        {isSignIn ? (
          <>
            <div className="checkbox">
              <a href="#!" className="forgot">Forgot Password?</a>
            </div>
            <p className="signup-text">
              Don't have an account?{" "}
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <p className="signup-text">
            Already have an account?{" "}
            <button
              type="button"
              className="link-btn"
              onClick={() => setIsSignIn(true)}
            >
              Sign In
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
