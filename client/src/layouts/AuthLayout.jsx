import { Sparkles } from "lucide-react";
import BrandPanel from "../components/auth/BrandPanel";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Desktop Brand Panel */}
        <BrandPanel />

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-10 flex flex-col items-center lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg">
                <Sparkles size={20} className="text-white" />
              </div>

              <h1 className="mt-4 text-2xl font-bold text-slate-900">
                DevRise
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                AI Interview Platform
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
