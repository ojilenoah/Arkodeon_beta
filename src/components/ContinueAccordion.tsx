'use client'

import { useState, useEffect, useRef } from 'react'

export default function ContinueAccordion() {
  const [isOpen, setIsOpen] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [componentRef])

  return (
    <div ref={componentRef} className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">

      {/* The Panel: Now closer to the button (mb-1) and more compact. */}
      <div
        className={`absolute bottom-full mb-1 w-max bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        {/* The inner buttons have reduced padding for a compact feel. */}
        <div className="flex flex-col items-stretch">
          {Array.from({ length: 6 }, (_, i) => (
            <button key={`q-${i+1}`} className="text-left px-2 text-white hover:bg-gray-700">Question {i + 1}</button>
          ))}
          <button className="text-left px-2 text-white font-bold hover:bg-gray-700 rounded-b-lg">Maintrack</button>
        </div>
      </div>

      {/* The Button: A simple, standalone button. Its layout is stable and correct. */}
      <button
        onClick={toggleAccordion}
        className="w-auto bg-gray-800 text-white shadow-lg font-bold flex items-center justify-center hover:bg-gray-700 rounded-lg"
        style={{ padding: '4px 12px', minHeight: '32px' }}
      >
        Continue
      </button>
    </div>
  )
}
