import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import authService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";

import Input from "../common/Input";
import PasswordInput from "../common/PasswordInput";
import Button from "../common/Button";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { fetchCurrentUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      };

      // Register user (cookies are set by backend)
      await authService.register(payload);

      // Update AuthContext
      await fetchCurrentUser();

      toast.success("Account created successfully!");

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        value={form.fullName}
        onChange={handleChange}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="Create a password"
        value={form.password}
        onChange={handleChange}
      />

      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-indigo-600 transition hover:text-indigo-700"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
