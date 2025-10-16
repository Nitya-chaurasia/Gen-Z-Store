export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Log into your account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-gray-800 transition"
          >
            LOG IN
          </button>
        </form>

        {/* OR */}
        <div className="text-center text-sm text-gray-500 my-6">or log in with</div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <img src="/apple-logo.svg" alt="Apple" className="w-5" />
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <img src="/google-logo.webp" alt="Google" className="w-5" />
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <img src="/facebook-logo.webp" alt="Facebook" className="w-5" />
          </button>
        </div>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-black font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
