import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl bg-white p-4 border shadow-sm">
      <div className="h-40 w-full overflow-hidden rounded-xl mb-3">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-semibold text-lg">{project.title}</h4>
      <p className="text-sm opacity-70">{project.subtitle}</p>
      <p className="mt-3 text-sm">{project.description}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {project.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-2">
        <a href={project.link} className="px-3 py-2 rounded-2xl bg-sky-600 text-white">Live</a>
        <a href={project.repo} className="px-3 py-2 rounded-2xl border">Code</a>
      </div>
    </article>
  )
}