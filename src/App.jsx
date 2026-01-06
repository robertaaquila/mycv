import React from 'react';
import { 
  Phone, Mail, Linkedin, MapPin, ExternalLink, 
  Award, Cloud, Github, Terminal, Shield, Cpu, Briefcase 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CertificationItem = ({ title, company, issued, expires, credentialId, skills, logoColor, icon: Icon }) => (
  <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
    {/* Logo Placeholder */}
    <div className={`flex-shrink-0 w-10 h-10 ${logoColor} flex items-center justify-center rounded text-white`}>
      {Icon ? <Icon size={20} /> : <Award size={20} />}
    </div>

    {/* Content */}
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-bold text-gray-900 leading-tight">{title}</h3>
      </div>
      <p className="text-xs text-gray-700">{company}</p>
      <p className="text-[11px] text-gray-500 mt-0.5">
        Emitido em {issued} {expires && `· Expira em ${expires}`}
      </p>
      {credentialId && (
        <p className="text-[10px] text-gray-400 font-mono mt-0.5">ID: {credentialId}</p>
      )}
      {skills && (
        <p className="text-[11px] text-gray-600 mt-1">
          <span className="font-semibold text-gray-700">Competências:</span> {skills}
        </p>
      )}
    </div>
  </div>
);

const TimelineItem = ({ date, location, title, company, isLast }) => (
  <div className="flex gap-4 min-h-16">
    <div className="w-32 text-right pt-1">
      <div className="text-sm font-bold text-gray-900">{date}</div>
      <div className="text-xs text-gray-500">{location}</div>
    </div>
    <div className="relative flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-gray-900 z-10" />
      {!isLast && <div className="w-px h-full bg-gray-300 absolute top-3" />}
    </div>
    <div className="flex-1 pt-0.5 pb-6">
      <div className="text-sm font-bold text-gray-800">{title}</div>
      <div className="text-sm font-medium text-gray-600">{company}</div>
    </div>
  </div>
);

const Resume = () => {
  const chartData = [
    { name: 'A', value: 1, label: 'Focus on Infrastructure' },
    { name: 'B', value: 1, label: 'Automation & CI/CD' },
    { name: 'C', value: 1, label: 'Mentoring & Leadership' },
    { name: 'D', value: 1, label: 'Learning New Tech' },
    { name: 'E', value: 1, label: 'Improving System Performance' },
    { name: 'F', value: 1, label: 'Cloud Architecture' },
  ];

  const COLORS = ['#1a202c', '#2d3748', '#4a5568', '#718096', '#a0aec0', '#cbd5e0'];

  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      company: "Amazon Web Services (AWS)",
      issued: "dez de 2025",
      expires: "dez de 2028",
      skills: "AWS Elastic Beanstalk · AWS CloudFormation · IAM",
      logoColor: "bg-slate-900",
      icon: Cloud
    },
    {
      title: "DevNet Associate",
      company: "Cisco",
      issued: "out de 2025",
      logoColor: "bg-blue-800",
      icon: Briefcase
    },
    {
      title: "Red Hat OpenStack Administration I (CL110)",
      company: "Red Hat",
      issued: "out de 2025",
      logoColor: "bg-red-600",
      icon: Terminal
    },
    {
      title: "Cloud Digital Leader Certification",
      company: "Google",
      issued: "jun de 2025",
      expires: "jun de 2028",
      credentialId: "d07f770a2abc4293a7e8e503f0c93f92",
      logoColor: "bg-blue-500",
      icon: Shield
    },
    {
      title: "GitHub Actions",
      company: "GitHub",
      issued: "jan de 2025",
      expires: "jan de 2028",
      credentialId: "32257322-befe-4800-98f8-9815eaa60421",
      skills: "GitHub · YAML",
      logoColor: "bg-zinc-900",
      icon: Github
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      company: "Oracle",
      issued: "jan de 2025",
      expires: "jan de 2028",
      credentialId: "E2582A03406A125C3F5FCF6F1470CF28CB2FEBF5EEAD78726ED44412F0A62388",
      skills: "IA · Machine Learning",
      logoColor: "bg-orange-700",
      icon: Cpu
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white shadow-lg font-sans text-gray-800 border border-gray-100">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-black tracking-tight mb-2">ROBERTA C. AQUILA</h1>
        <p className="text-sm font-bold leading-relaxed mb-4">
          Platform Engineer with DevOps and SRE expertise | Systems Engineer | Cloud | IT | FinOps | IaaC | Linux | AWS certified | OCI Certified | GCP Certified | Github Certified | RH Certified
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-medium">
          <span className="flex items-center gap-1"><Phone size={12} /> +55 11 986138671</span>
          <span className="flex items-center gap-1"><Mail size={12} /> aquila.roberta@gmail.com</span>
          <span className="flex items-center gap-1"><Linkedin size={12} /> linkedin.com/in/robertaquila/</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> São Paulo</span>
        </div>
      </header>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase border-b-2 border-gray-900 inline-block">Experience</h2>
        <div className="mt-4">
          <TimelineItem 
            date="06/2025 - Present" 
            location="São Paulo, Brazil" 
            title="Site Reliability Engineer" 
            company="Banco Itaú" 
          />
          <TimelineItem 
            date="2022 - 2023" 
            location="São Paulo, Brazil" 
            title="Site Reliability Engineer" 
            company="BV" 
          />
          <TimelineItem 
            date="2019 - 2022" 
            location="São Paulo, Brazil" 
            title="Platform Engineer" 
            company="Digitra" 
          />
          <TimelineItem 
            date="2017 - 2019" 
            location="São Paulo, Brazil" 
            title="Devops Engineer" 
            company="Safra" 
            isLast={true}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase border-b-2 border-gray-900 inline-block">Education</h2>
        <div className="mt-4">
          <TimelineItem 
            date="01/2024 - 12/2025" 
            location="FIAP" 
            title="Bachelor of Technology - BTech" 
            company="FIAP" 
          />
          <TimelineItem 
            date="01/2009 - 12/2013" 
            location="FIAP" 
            title="Bachelor of Engineering - BE" 
            company="FIAP" 
          />
          <TimelineItem 
            date="01/2004 - 12/2006" 
            location="ETEC" 
            title="High school/Tec. IT" 
            company="ETEC Professor Basilides de Godoy" 
            isLast={true}
          />
        </div>
      </section>

      {/* Certification Section - ATUALIZADA */}
      <section className="mb-8">
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase border-b-2 border-gray-900 inline-block">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-2">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} {...cert} />
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-4 italic">* Lista resumida. Outras 10+ certificações disponíveis no perfil.</p>
      </section>

      {/* My Time Section */}
      <section>
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase border-b-2 border-gray-900 inline-block">My Time</h2>
        <div className="flex items-center gap-12 mt-4">
          <div className="w-40 h-40 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Labels simplificados no gráfico */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Daily Focus</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 flex-1">
            {chartData.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-3 text-sm">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: COLORS[idx] }}
                >
                  {item.name}
                </div>
                <div className="text-xs font-medium text-gray-700">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;