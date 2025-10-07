'use client'

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div
      className={`fixed top-[4.75rem] left-0 h-[calc(100vh-4.75rem)] w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">_</div>
    </div>
  );
}
