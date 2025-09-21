import React from 'react'
import { DownloadCloud } from 'lucide-react'

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-extrabold">Alexander Rankov</h1>
        <p className="text-sm opacity-70">Frontend • Data Viz • UI</p>
      </div>
      <div className="flex gap-3 items-center">
        <a href="/resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border">
          <DownloadCloud size={16} /> Resume
        </a>
      </div>
    </header>
  )
}