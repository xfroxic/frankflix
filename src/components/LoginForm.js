import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


export default function LoginForm() {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const login = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(`User signed in`)
        console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
  }

  const onEmailChanged = (e) => {
    const updatedEmail = e.target.value;
    setEmail(() => updatedEmail);
  };

  const onPasswordChanged = (e) => {
    const updatedPassword = e.target.value;
    setPassword(() => updatedPassword);
  };
  
  return (
    <div className="login-body">
      <div className="login-body_form">
        <h1>Sign In</h1>
        <div className="login-body_input mb-16">
          <input type="text" placeholder="Email or phone number" onChange={onEmailChanged} />
        </div>
        <div className="login-body_input">
          <input type="password" placeholder="Password" onChange={onPasswordChanged} />
        </div>
        <button className="login-body_submit-btn" onClick={login}>Sign In</button>
        <div className="login-body_options">
          <span>Remember me</span>
          <span className="login-body_need-help">Need help?</span>
        </div>
        <div className="login-body_footer">
          <div className="login-body_fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo_blue_57.png" alt="fb" />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body_new-to-nl">
            <span>New to Netflix?</span>
            <span className="login-body_sign-up"> Sign up now.</span>
          </div>
          <div className="login-body_google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="login-body_learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}