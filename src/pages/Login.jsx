import loginImg from "../assets/Images/login.webp";
import Template from "../components/core/Auth/Template";

const Login = () => {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      formType="login"
      image={loginImg}
    />
  );
};

export default Login;
