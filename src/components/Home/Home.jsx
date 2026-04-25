import React, { useState } from 'react'

const POSTS = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    handle: '@ahmed_h',
    initials: 'AH',
    gradient: 'from-violet-500 to-blue-500',
    time: '2 min ago',
    content: 'Just shipped a major new feature 🚀 Really excited about how this turned out after weeks of hard work. The team absolutely crushed it!',
    likes: 142,
    comments: 38,
    shares: 17,
    tags: ['#buildinpublic', '#react'],
  },
  {
    id: 2,
    name: 'Sara Mohamed',
    handle: '@sara_codes',
    initials: 'SM',
    gradient: 'from-rose-500 to-pink-500',
    time: '18 min ago',
    content: 'Beautiful morning walk 🌅 Sometimes you just need to step away from the screen to find clarity. Highly recommend it to every developer out there.',
    likes: 89,
    comments: 14,
    shares: 5,
    tags: ['#morningvibes', '#selfcare'],
  },
  {
    id: 3,
    name: 'Omar Khalil',
    handle: '@omar_dev',
    initials: 'OK',
    gradient: 'from-emerald-500 to-teal-500',
    time: '1 hr ago',
    content: 'Hot take: TypeScript makes you think twice before writing bad code. 🔥 The type system forces better design decisions. Change my mind.',
    likes: 231,
    comments: 64,
    shares: 42,
    tags: ['#typescript', '#webdev'],
  },
  {
    id: 4,
    name: 'Laila Nour',
    handle: '@laila_n',
    initials: 'LN',
    gradient: 'from-amber-500 to-orange-500',
    time: '3 hr ago',
    content: 'Finally finished my portfolio redesign! ✨ Would love some feedback from the community. Drop your thoughts below 👇',
    likes: 57,
    comments: 29,
    shares: 8,
    tags: ['#design', '#portfolio'],
  },
]

const TRENDING = [
  { tag: '#ReactJS', count: '8.2K' },
  { tag: '#OpenSource', count: '5.7K' },
  { tag: '#WebDev', count: '12.1K' },
  { tag: '#JavaScript', count: '9.4K' },
  { tag: '#AI', count: '21.3K' },
]

const SUGGESTED = [
  { name: 'Youssef Ali', handle: '@youssef_a', initials: 'YA', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'Nadia Omar', handle: '@nadia_o', initials: 'NO', gradient: 'from-fuchsia-500 to-purple-500' },
  { name: 'Kareem Said', handle: '@k_said', initials: 'KS', gradient: 'from-lime-500 to-green-500' },
]

function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(post.likes)

  const toggleLike = () => {
    setLiked(prev => !prev)
    setCount(prev => liked ? prev - 1 : prev + 1)
  }

  return (
    <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 shadow-lg hover:bg-white/20 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full bg-linear-to-br ${post.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}>
          {post.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{post.name}</p>
          <p className="text-white/50 text-xs">{post.handle} · {post.time}</p>
        </div>
        <button className="text-white/40 hover:text-white/70 transition p-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <p className="text-white/90 text-sm leading-relaxed mb-3">{post.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="text-blue-200 text-xs font-medium hover:text-white cursor-pointer transition">{tag}</span>
        ))}
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-5 pt-3 border-t border-white/10">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-150 ${liked ? 'text-rose-300' : 'text-white/50 hover:text-rose-300'}`}
        >
          <svg className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {count}
        </button>

        <button className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-blue-300 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {post.comments}
        </button>

        <button className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-green-300 transition ml-auto">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {post.shares}
        </button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

        {/* ── Feed ── */}
        <div className="flex flex-col gap-4">

          {/* Create Post */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow shrink-0">
                Me
              </div>
              <button className="flex-1 text-left bg-white/10 hover:bg-white/20 border border-white/20 text-white/50 hover:text-white/70 text-sm rounded-xl px-4 py-2.5 transition">
                What&apos;s on your mind?
              </button>
            </div>
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
              <button className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 20m-6-6l-4-4" />
                </svg>
                Photo
              </button>
              <button className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Feeling
              </button>
              <button className="ml-auto px-4 py-1.5 bg-white text-blue-600 font-semibold text-xs rounded-lg hover:bg-blue-50 transition shadow">
                Post
              </button>
            </div>
          </div>

          {/* Posts */}
          {POSTS.map(post => <PostCard key={post.id} post={post} />)}
        </div>

        {/* ── Sidebar ── */}
        <div className="flex flex-col gap-4">

          {/* Profile Card */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-20 bg-linear-to-r from-blue-400 to-indigo-500" />
            <div className="px-5 pb-5">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 border-4 border-white/20 flex items-center justify-center text-white font-bold -mt-7 shadow-lg">
                ME
              </div>
              <h3 className="text-white font-semibold mt-2 text-sm">Your Name</h3>
              <p className="text-white/50 text-xs">@yourhandle</p>
              <div className="flex gap-4 mt-3 pt-3 border-t border-white/10 text-center">
                {[['128', 'Posts'], ['4.2K', 'Followers'], ['391', 'Following']].map(([val, label]) => (
                  <div key={label} className="flex-1">
                    <p className="text-white font-bold text-sm">{val}</p>
                    <p className="text-white/50 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trending */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 shadow-lg">
            <h3 className="text-white font-semibold text-sm mb-3">🔥 Trending</h3>
            <div className="flex flex-col gap-2.5">
              {TRENDING.map(({ tag, count }, i) => (
                <div key={tag} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-white/30 text-xs font-bold w-4">{i + 1}</span>
                    <span className="text-blue-200 text-sm font-medium group-hover:text-white transition">{tag}</span>
                  </div>
                  <span className="text-white/30 text-xs">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 shadow-lg">
            <h3 className="text-white font-semibold text-sm mb-3">People You May Know</h3>
            <div className="flex flex-col gap-3">
              {SUGGESTED.map(user => (
                <div key={user.handle} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-linear-to-br ${user.gradient} flex items-center justify-center text-white font-bold text-xs shadow shrink-0`}>
                    {user.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{user.name}</p>
                    <p className="text-white/40 text-xs truncate">{user.handle}</p>
                  </div>
                  <button className="text-xs text-blue-200 font-medium border border-blue-300/30 rounded-lg px-3 py-1 hover:bg-white/15 transition shrink-0">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home