import Form from "../Components/Login-Signup/Form";
import "./AuthSection.css"

function LoginPage() {
  return (
    <div className="auth-section">
      <div>
        <div className="auth-section-head">
          <h2>
            Wana Take <span style={{ color: `#737477` }}>note?</span>{" "}
          </h2>
        </div>
        <Form type="Login" route="/api/user/login" />
      </div>
    </div>
  );
}
export default LoginPage;
