import React, { useState } from 'react'
import axios from 'axios'

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: '',
    dateOfBirth: '',
    gender: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
 // e => setUser({ ...user, [e.target.name]: e.target.value })
 // e => Event Info name and value 
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function handleRegister(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const { data } = await axios.post(
        'https://linked-posts.routemisr.com/users/signup',
        user
      )
      setSuccess(data.message || 'Account created successfully!')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white/20 border border-white/40 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition'

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

        {/* API Feedback */}
        {error && (
          <div className="mb-5 bg-red-500/20 border border-red-400/50 text-red-100 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-5 bg-green-500/20 border border-green-400/50 text-green-100 text-sm rounded-xl px-4 py-3">
            {success}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white/90 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={inputClass}
              required
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
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClass}
              required
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
                value={user.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={inputClass}
                required
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
                value={user.rePassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={inputClass}
                required
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
                value={user.dateOfBirth}
                onChange={handleChange}
                className={`${inputClass} [scheme-dark]`}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="gender" className="text-white/90 text-sm font-medium">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer [scheme-dark]`}
                required
              >
                <option value="" disabled className="text-gray-700">Select gender</option>
                <option value="male" className="text-gray-700">Male</option>
                <option value="female" className="text-gray-700">Female</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-white text-blue-600 font-semibold py-3 rounded-xl text-sm tracking-wide shadow-lg hover:bg-blue-50 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account…' : 'Create Account'}
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