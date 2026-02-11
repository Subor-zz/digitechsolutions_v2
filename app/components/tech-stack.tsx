'use client';

const technologies = [
  { name: 'React', icon: 'code' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'Node.js', icon: 'storage' },
  { name: 'TypeScript', icon: 'data_object' },
  { name: 'PostgreSQL', icon: 'dns' },
  { name: 'GitHub', icon: 'terminal' },
  { name: 'Claude Code', icon: 'auto_awesome' },
  { name: 'Expo', icon: 'devices' },
  { name: 'Asana', icon: 'task_alt' },
  { name: 'Notion', icon: 'menu_book' },
  { name: 'Agile', icon: 'published_with_changes' },
  { name: 'Scrum', icon: 'view_kanban' },
  { name: 'Tailwind', icon: 'palette' },
];

export default function TechStack() {
  // We duplicate the list to create a seamless infinite scroll effect
  const displayTechs = [...technologies, ...technologies];

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologieen & Tools</p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Subtle edge fades for a premium look */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-12 md:gap-24 animate-marquee whitespace-nowrap py-4 items-center">
          {displayTechs.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 text-lg md:text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default"
            >
              <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
