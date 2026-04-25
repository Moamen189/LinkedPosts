import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

function Login() {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [success, setSuccess] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const navigate = useNavigate()

  async function onSubmit(data) {
    setLoading(true)
    setApiError(null)
    setSuccess(null)

    try {
      const response = await axios.post(
        'https://linked-posts.routemisr.com/users/signin',
        data
      )

      setSuccess(response.data.message || 'Logged in successfully!')
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (err) {
      setApiError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white/20 border border-white/40 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/80 focus:bg-white/25 transition'

  const errorClass = 'text-red-300 text-xs mt-1'

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Glass card */}
      <div className="w-full max-w-md bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-blue-100 text-sm">
            Sign in to your account to continue
          </p>
        </div>

        {/* API Feedback */}
        {apiError && (
          <div className="mb-5 bg-red-500/20 border border-red-400/50 text-red-100 text-sm rounded-xl px-4 py-3">
            {apiError}
          </div>
        )}
        {success && (
          <div className="mb-5 bg-green-500/20 border border-green-400/50 text-green-100 text-sm rounded-xl px-4 py-3">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white/90 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={inputClass}
              {...register('email')}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-white/90 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className={inputClass}
              {...register('password')}
            />
            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-white text-blue-600 font-semibold py-3 rounded-xl text-sm tracking-wide shadow-lg hover:bg-blue-50 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>

        </form>

        {/* Footer link */}
        <p className="text-center text-white/60 text-xs mt-6">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-white font-medium underline underline-offset-2 hover:text-blue-200 transition">
            Create one
          </a>
        </p>

      </div>
    </div>
  )
}

export default Login