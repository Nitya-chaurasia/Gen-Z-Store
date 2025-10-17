export default function ForgotPassword() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-7">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Forgot Password
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>

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

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-gray-800 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Remember your password?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </section>
  );
}
