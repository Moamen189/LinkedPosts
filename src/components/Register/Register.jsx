import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  rePassword: z.string().min(6, 'Password must be at least 6 characters long'),
  dateOfBirth: z.string().min(10, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
})
function Register() {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [success, setSuccess] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data) {
    setLoading(true)
    setApiError(null)
    setSuccess(null)

    try {
      const response = await axios.post(
        'https://linked-posts.routemisr.com/users/signup',
        data
      )
      setSuccess(response.data.message || 'Account created successfully!')
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

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white/90 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className={inputClass}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

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
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
              })}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
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
                placeholder="••••••••"
                className={inputClass}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'At least 6 characters' },
                })}
              />
              {errors.password && <p className={errorClass}>{errors.password.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="rePassword" className="text-white/90 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="rePassword"
                placeholder="••••••••"
                className={inputClass}
                {...register('rePassword', { required: 'Please confirm your password' })}
              />
              {errors.rePassword && <p className={errorClass}>{errors.rePassword.message}</p>}
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
                className={`${inputClass} [color-scheme-dark]`}
                {...register('dateOfBirth', { required: 'Date of birth is required' , validate: (value) => {
                  const age = new Date().getFullYear() - new Date(value).getFullYear()
                  return age >= 18 || 'You must be at least 18 years old'
                } })}
              />
              {errors.dateOfBirth && <p className={errorClass}>{errors.dateOfBirth.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="gender" className="text-white/90 text-sm font-medium">
                Gender
              </label>
              <select
                id="gender"
                className={`${inputClass} appearance-none cursor-pointer [color-scheme-dark]`}
                {...register('gender', { required: 'Gender is required' })}
              >
                <option value="" disabled className="text-gray-700">Select gender</option>
                <option value="male" className="text-gray-700">Male</option>
                <option value="female" className="text-gray-700">Female</option>
              </select>
              {errors.gender && <p className={errorClass}>{errors.gender.message}</p>}
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