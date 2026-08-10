import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import authService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";

import Input from "../common/Input";
import PasswordInput from "../common/PasswordInput";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";

const LoginForm = () => {
  const navigate = useNavigate();

  const { fetchCurrentUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        email: form.email,
        password: form.password,
      };

      // Login (sets cookies)
      await authService.login(payload);

      // Update AuthContext
      await fetchCurrentUser();

      toast.success("Login successful");

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between">
        <Checkbox
          label="Remember me"
          name="remember"
          checked={form.remember}
          onChange={handleChange}
        />

        <button
          type="button"
          className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
        >
          Forgot Password?
        </button>
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-indigo-600 transition hover:text-indigo-700"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
