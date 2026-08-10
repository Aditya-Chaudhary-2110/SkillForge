import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  UserRound,
  Mail,
  CalendarDays,
  LockKeyhole,
  ShieldCheck,
  KeyRound,
  Eye,
  EyeOff,
  ArrowLeft,
  Trash2,
  AlertTriangle,
} from "lucide-react";

import {
  getSettings,
  changePassword,
  deleteAccount,
} from "../../api/settings.api";

const SettingsPage = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [changingPassword, setChangingPassword] = useState(false);

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [deletePassword, setDeletePassword] = useState("");
  const [showDeletePassword, setShowDeletePassword] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await getSettings();
        setSettings(data);
      } catch (error) {
        console.error("Failed to load settings:", error);

        toast.error(
          error?.response?.data?.message || "Failed to load settings",
        );
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((previous) => ({
      ...previous,
      [field]: !previous[field],
    }));
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    if (currentPassword === newPassword) {
      toast.error("New password must be different from your current password.");
      return;
    }

    try {
      setChangingPassword(true);

      await changePassword({
        currentPassword,
        newPassword,
      });

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setShowPasswords({
        current: false,
        new: false,
        confirm: false,
      });

      toast.success("Password changed successfully.");
    } catch (error) {
      console.error("Failed to change password:", error);

      toast.error(
        error?.response?.data?.message || "Failed to change password.",
      );
    } finally {
      setChangingPassword(false);
    }
  };

  const handleDeleteAccount = async (event) => {
    event.preventDefault();

    if (!deletePassword) {
      toast.error("Please enter your password.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your SkillForge account? This action cannot be undone.",
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingAccount(true);

      await deleteAccount(deletePassword);

      toast.success("Account deleted successfully.");

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Failed to delete account:", error);

      toast.error(
        error?.response?.data?.message || "Failed to delete account.",
      );
    } finally {
      setDeletingAccount(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-8 py-10">
          <div className="animate-pulse">
            <div className="h-8 w-32 rounded-lg bg-slate-200" />
            <div className="mt-3 h-4 w-72 rounded bg-slate-200" />

            <div className="mt-10 h-52 rounded-2xl bg-white shadow-sm" />
            <div className="mt-6 h-80 rounded-2xl bg-white shadow-sm" />
          </div>
        </div>
      </div>
    );
  }

  const initials =
    settings?.fullName
      ?.split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-8 py-10">
        {/* ==========================================
            HEADER
        ========================================== */}

        <div>
          {/* Back to Dashboard */}

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mb-6 inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </button>

          <p className="text-sm font-semibold text-indigo-600">ACCOUNT</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Settings
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Manage your account information and security preferences.
          </p>
        </div>

        {/* ==========================================
            ACCOUNT
        ========================================== */}

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Account information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Basic information associated with your SkillForge account.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Profile Header */}

            <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600">
                {initials}
              </div>

              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-slate-900">
                  {settings?.fullName || "—"}
                </p>

                <p className="mt-0.5 truncate text-sm text-slate-500">
                  {settings?.email || "—"}
                </p>
              </div>
            </div>

            {/* Account Details */}

            <div className="grid divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Name */}

              <div className="flex items-start gap-4 px-6 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <UserRound size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Full name
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {settings?.fullName || "—"}
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-4 px-6 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email address
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-800">
                    {settings?.email || "—"}
                  </p>
                </div>
              </div>

              {/* Created */}

              <div className="flex items-start gap-4 px-6 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <CalendarDays size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Member since
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {settings?.createdAt
                      ? new Date(settings.createdAt).toLocaleDateString(
                          undefined,
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )
                      : "—"}
                  </p>
                </div>
              </div>

              {/* Account Status */}

              <div className="flex items-start gap-4 px-6 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Account status
                  </p>

                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECURITY
        ========================================== */}

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-slate-900">Security</h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep your account secure by using a strong, unique password.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Security Header */}

            <div className="flex items-start gap-4 border-b border-slate-100 px-6 py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <LockKeyhole size={18} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Change password
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Your password will be updated immediately after verification.
                </p>
              </div>
            </div>

            {/* Password Form */}

            <form onSubmit={handleChangePassword} className="px-6 py-6">
              <div className="max-w-2xl space-y-5">
                {/* Current Password */}

                <div>
                  <label
                    htmlFor="currentPassword"
                    className="text-sm font-medium text-slate-700"
                  >
                    Current password
                  </label>

                  <div className="relative mt-2">
                    <KeyRound
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="currentPassword"
                      name="currentPassword"
                      type={showPasswords.current ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                      placeholder="Enter current password"
                    />

                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("current")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                      aria-label={
                        showPasswords.current
                          ? "Hide current password"
                          : "Show current password"
                      }
                    >
                      {showPasswords.current ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* New Password */}

                <div>
                  <label
                    htmlFor="newPassword"
                    className="text-sm font-medium text-slate-700"
                  >
                    New password
                  </label>

                  <div className="relative mt-2">
                    <KeyRound
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="newPassword"
                      name="newPassword"
                      type={showPasswords.new ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                      placeholder="Enter new password"
                    />

                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("new")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                      aria-label={
                        showPasswords.new
                          ? "Hide new password"
                          : "Show new password"
                      }
                    >
                      {showPasswords.new ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-slate-700"
                  >
                    Confirm new password
                  </label>

                  <div className="relative mt-2">
                    <KeyRound
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPasswords.confirm ? "text" : "password"}
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                      placeholder="Confirm new password"
                    />

                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("confirm")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                      aria-label={
                        showPasswords.confirm
                          ? "Hide confirmed password"
                          : "Show confirmed password"
                      }
                    >
                      {showPasswords.confirm ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Footer */}

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <p className="hidden text-xs text-slate-400 sm:block">
                  Changing your password will sign you out of other active
                  sessions.
                </p>

                <button
                  type="submit"
                  disabled={changingPassword}
                  className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {changingPassword ? "Updating..." : "Update password"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ==========================================
            DANGER ZONE
        ========================================== */}

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Danger zone
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Permanently remove your SkillForge account and associated data.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            {/* Danger Header */}

            <div className="flex items-start gap-4 border-b border-red-100 bg-red-50/40 px-6 py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <AlertTriangle size={18} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Delete account
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  This permanently deletes your account, profile, resume, and
                  associated account data. This action cannot be undone.
                </p>
              </div>
            </div>

            {/* Delete Form */}

            <form onSubmit={handleDeleteAccount} className="px-6 py-6">
              <div className="max-w-2xl">
                <label
                  htmlFor="deletePassword"
                  className="text-sm font-medium text-slate-700"
                >
                  Confirm your password
                </label>

                <div className="relative mt-2">
                  <KeyRound
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="deletePassword"
                    name="deletePassword"
                    type={showDeletePassword ? "text" : "password"}
                    value={deletePassword}
                    onChange={(event) => setDeletePassword(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-50"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowDeletePassword((previous) => !previous)
                    }
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                    aria-label={
                      showDeletePassword ? "Hide password" : "Show password"
                    }
                  >
                    {showDeletePassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <p className="text-xs leading-5 text-slate-400">
                    You will be permanently signed out after your account is
                    deleted.
                  </p>

                  <button
                    type="submit"
                    disabled={deletingAccount}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition hover:border-red-300 hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Trash2 size={16} />

                    {deletingAccount ? "Deleting..." : "Delete account"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Bottom spacing */}

        <div className="h-10" />
      </div>
    </div>
  );
};

export default SettingsPage;
