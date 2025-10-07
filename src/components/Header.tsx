'use client'

import Image from 'next/image'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header className="bg-black text-white shadow-md px-2 z-50 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <button className="p-2 rounded-full hover:bg-gray-900 flex-shrink-0">
              <Image src="/arrow-left.svg" alt="Back" width={24} height={24} />
            </button>
            <h1 className="text-xl font-bold truncate">Introduction to Python</h1>
            <button className="p-1 bg-gray-800 rounded-md hover:bg-gray-700 flex-shrink-0">
              <Image src="/info-icon.svg" alt="Info" width={12} height={12} />
            </button>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="flex items-center space-x-2 bg-purple-900 text-white rounded-md px-2 py-1" style={{ transform: 'scale(0.7)' }}>
              <span className="font-bold">1500</span>
              <span>XP</span>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-900">
              <Image src="/dots-vertical.svg" alt="Options" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between -mt-2">
          <div className="flex items-center space-x-2 min-w-0">
            <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-900 flex-shrink-0">
              <Image src="/sidebar-icon.svg" alt="Sidebar" width={24} height={24} />
            </button>
            <span className="text-lg truncate">module1/unit1</span>
            <div className="flex items-center space-x-2 bg-green-900 text-white rounded-md px-2 py-1 flex-shrink-0" style={{ transform: 'scale(0.7)' }}>
              <Image src="/cube-icon.svg" alt="Bits" width={20} height={20} />
              <span className="font-bold">250</span>
              <span>Bits</span>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-40 top-[4.5rem]"></div>}
    </>
  )
}
