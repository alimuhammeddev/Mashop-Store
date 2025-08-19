import { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    localStorage.setItem("mashopUser", JSON.stringify(formData));

    setErrors({});
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <section>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 lg:p-0 p-5">
        <div className="w-full max-w-md lg:p-8 p-5 space-y-6 bg-white shadow-lg rounded-xl">
          <div>
            <h1 className="text-center text-2xl">New To Mashop?</h1>
            <p className="text-center">Create a new customer account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <input
                type="text"
                name="fullName"
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none ${
                  errors.fullName ? "border-red-500" : ""
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="username"
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none ${
                  errors.username ? "border-red-500" : ""
                }`}
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 mt-5 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-blue-500"></div>
              <span className="mx-4 text-blue-500 font-medium">OR</span>
              <div className="flex-grow border-t border-blue-500"></div>
            </div>

            <div className="flex justify-center gap-6">
              <button className="p-3 border border-blue-500 rounded-full hover:bg-gray-100 transition text-2xl">
                <FcGoogle />
              </button>
              <button className="p-3 border border-blue-500 rounded-full hover:bg-gray-100 transition text-blue-600 text-2xl">
                <FaFacebook />
              </button>
              <button className="p-3 border border-blue-500 rounded-full hover:bg-gray-100 transition text-black text-2xl">
                <FaApple />
              </button>
            </div>
          </div>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;