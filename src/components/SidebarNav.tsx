import { Module } from "@/types/module";

interface SidebarNavProps {
  modules: Module[];
  activeModule: string;
  onSelectModule: (id: string) => void;
}

const SidebarNav = ({ modules, activeModule, onSelectModule }: SidebarNavProps) => {
  return (
    <aside className="w-72 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col shrink-0">
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            F
          </div>
          <div>
            <h1 className="text-sm font-bold text-sidebar-accent-foreground tracking-tight">Fedora Linux</h1>
            <p className="text-xs text-sidebar-foreground">Guia Completo</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        <div className="px-4 mb-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Trilha de Aprendizado
          </span>
        </div>
        {modules.map((module, index) => (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-all duration-150 border-l-[3px] ${
              activeModule === module.id
                ? "border-l-primary bg-primary/10 text-primary font-medium"
                : "border-l-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <span className="text-base">{module.icon}</span>
            <span className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              {module.title}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="text-[10px] text-muted-foreground text-center">
          Fedora Workstation Docs v1.0
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
