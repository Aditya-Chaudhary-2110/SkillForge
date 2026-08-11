import AuthLayout from "../../layouts/AuthLayout";

import AuthCard from "../../components/auth/AuthCard";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <AuthCard
        className="-mt-8"
        title="Create Account"
        subtitle="Start your DevRise journey."
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default RegisterPage;
