import React from 'react'
// https://linked-posts.routemisr.com/users/signup
// {
//     "name": "Ahmed Bahnasy",
//     "email":"bahnasy2040101@gmail.com",
//     "password":"Bahnasy@123",
//     "rePassword":"Bahnasy@123",
//     "dateOfBirth":"7-10-1994",
//     "gender":"male"
// }

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Glass card */}
      <div className="w-full max-w-lg bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-blue-100 text-sm">
            Join us today — it only takes a minute
          </p>
        </div>

        <form className="space-y-5">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white/90 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full bg-white/20 border border-white/40 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white/90 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-white/20 border border-white/40 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition"
            />
          </div>

          {/* Password row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-white/90 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-white/20 border border-white/40 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="rePassword" className="text-white/90 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                placeholder="••••••••"
                className="w-full bg-white/20 border border-white/40 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition"
              />
            </div>
          </div>

          {/* Date of Birth + Gender row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="dateOfBirth" className="text-white/90 text-sm font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="w-full bg-white/20 border border-white/40 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition [scheme-dark]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="gender" className="text-white/90 text-sm font-medium">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full bg-white/20 border border-white/40 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition appearance-none cursor-pointer [scheme-dark]"
              >
                <option value="" disabled selected className="text-gray-700">Select gender</option>
                <option value="male" className="text-gray-700">Male</option>
                <option value="female" className="text-gray-700">Female</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 bg-white text-blue-600 font-semibold py-3 rounded-xl text-sm tracking-wide shadow-lg hover:bg-blue-50 active:scale-95 transition-all duration-150"
          >
            Create Account
          </button>

        </form>

        {/* Footer link */}
        <p className="text-center text-white/60 text-xs mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-white font-medium underline underline-offset-2 hover:text-blue-200 transition">
            Sign in
          </a>
        </p>

      </div>
    </div>
  )
}

export default Register