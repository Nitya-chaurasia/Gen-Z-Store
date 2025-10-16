export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-7">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Create your account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Enter your name
            </label>
            <input
              type="text"
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Confirm password
            </label>
            <input
              type="password"
              className="w-full text-black bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-gray-800 transition"
          >
            SIGN UP
          </button>
        </form>

        {/* OR */}
        <div className="text-center text-sm text-gray-500 my-6">or sign up with</div>

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

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </section>
  );
}
