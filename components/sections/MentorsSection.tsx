interface Role {
    title: string;
    description: string;
    bgColor?: string;
  }
  
  const roles: Role[] = [
    {
      title: "I'm a Capitalist",
      description: "I'm looking to meet, invest in, and learn from founders pushing the edge of the known universe."
    },
    {
      title: "I'm a Hacker & Maker",
      description: "I build and launch new projects, spend nights and weekends exploring the depths of my interests, or just generally love tinkering and pushing my limits. I may also already be a founder."
    },
    {
      title: "I'm a Curious Mind",
      description: "I'm just looking to learn more about Next12 and am neither a founder/maker/hacker nor an investor.",
      bgColor: "bg-[var(--accent)]"
    },
    {
      title: "I'm a Builder",
      description: "I'm passionate about creating innovative solutions and bringing ideas to life through code and technology."
    },
    {
      title: "I'm a Creator",
      description: "I'm an artist, designer, or writer looking to bring my creative vision to life and collaborate with others."
    }
  ];
  
  export default function RolesSection() {
    return (
      <section className="min-h-[80vh] py-32 relative overflow-hidden bg-gradient-to-r from-[rgba(var(--accent-rgb),0.05)] via-white to-[rgba(var(--accent-rgb),0.05)]">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            Who Are You? <span className="gradient-text">Choose Your Path</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <div
                key={index}
                className={`p-8 sm:p-12 rounded-lg border border-gray-200 [data-theme='dark']:border-gray-700 
                  hover:border-[var(--accent)] transition-all cursor-pointer group 
                  ${role.bgColor || 'bg-gray-50 [data-theme="dark"]:bg-gray-800'}`}
              >
                <h3 className={`text-2xl sm:text-3xl font-medium mb-4 
                  ${role.bgColor ? 'text-white' : 'group-hover:text-[var(--accent)] dark:text-gray-100'}`}>
                  {role.title}
                </h3>
                <p className={`text-base sm:text-lg leading-relaxed 
                  ${role.bgColor ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }