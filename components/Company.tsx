import React from 'react'

const Company = () => {
  return (
    <div className="absolute left-0 top-full mt-2 w-[600px] rounded-lg border border-gray-700 bg-black p-6 shadow-lg">
  <div className="grid grid-cols-2 gap-6">
    {/* Left Column */}
    <div>
      <h3 className="text-gray-400 text-sm font-medium">Company</h3>
      <ul className="mt-2 space-y-2">
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            About
          </a>
          <p className="text-gray-400 text-xs">Meet the team</p>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Careers
          </a>
          <p className="text-gray-400 text-xs">We're hiring</p>
        </li>
      </ul>
    </div>

    {/* Right Column */}
    <div>
      <h3 className="text-gray-400 text-sm font-medium">Explore</h3>
      <ul className="mt-2 grid grid-cols-2 gap-4">
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Linear Method
          </a>
          <p className="text-gray-400 text-xs">Practices for building</p>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Switch to Linear
          </a>
          <p className="text-gray-400 text-xs">Migration guide</p>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Security
          </a>
          <p className="text-gray-400 text-xs">Safe, secure, and private</p>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Download
          </a>
          <p className="text-gray-400 text-xs">Get the app</p>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Docs
          </a>
          <p className="text-gray-400 text-xs">How to use Linear</p>
        </li>
        <li>
          <a href="#" className="text-white font-semibold hover:underline">
            Quality
          </a>
          <p className="text-gray-400 text-xs">Conversations on quality</p>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Company
