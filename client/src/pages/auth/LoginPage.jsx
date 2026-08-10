import AuthLayout from "../../layouts/AuthLayout";

import AuthCard from "../../components/auth/AuthCard";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to continue your interview preparation."
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
