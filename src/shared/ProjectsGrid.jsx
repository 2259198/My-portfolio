import React, { useState, useMemo } from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => projects.filter(p => (p.title + p.description + p.tags.join(' ')).toLowerCase().includes(q.toLowerCase())), [q])

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold">Selected projects</h3>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects..." className="px-3 py-2 rounded-xl border" />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}