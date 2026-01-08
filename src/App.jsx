import React from 'react';
import { 
  Phone, Mail, Linkedin, MapPin, 
  Award, Cloud, Github, Terminal, Shield, Cpu, Briefcase 
} from 'lucide-react';

const CertificationItem = ({ title, company, issued, expires, credentialId, skills, logoColor, icon: Icon }) => (
  <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0 h-full">
    {/* Logo Icon Box */}
    <div className={`flex-shrink-0 w-12 h-12 ${logoColor} flex items-center justify-center rounded text-white shadow-sm`}>
      {Icon ? <Icon size={24} /> : <Award size={24} />}
    </div>

    {/* Content */}
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h3 className="text-[13px] font-bold text-gray-900 leading-tight uppercase tracking-tight">{title}</h3>
      </div>
      <p className="text-xs font-semibold text-gray-700">{company}</p>
      <p className="text-[11px] text-gray-500 mt-0.5">
        Emitido em {issued} {expires && `· Expira em ${expires}`}
      </p>
      {credentialId && (
        <p className="text-[10px] text-gray-400 font-mono mt-0.5 break-all">
          ID: {credentialId}
        </p>
      )}
      {skills && (
        <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">
          <span className="font-bold text-gray-800">Competências:</span> {skills}
        </p>
      )}
    </div>
  </div>
);

const TimelineItem = ({ date, location, title, company, isLast }) => (
  <div className="flex gap-4 min-h-16">
    <div className="w-32 text-right pt-1">
      <div className="text-sm font-bold text-gray-900">{date}</div>
      <div className="text-xs text-gray-400 font-medium uppercase">{location}</div>
    </div>
    <div className="relative flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-gray-900 z-10" />
      {!isLast && <div className="w-px h-full bg-gray-200 absolute top-3" />}
    </div>
    <div className="flex-1 pt-0.5 pb-6">
      <div className="text-sm font-bold text-gray-800">{title}</div>
      <div className="text-sm font-medium text-gray-500">{company}</div>
    </div>
  </div>
);

const Resume = () => {
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
    <div className="max-w-4xl mx-auto p-12 bg-white shadow-2xl font-sans text-gray-800 border border-gray-100 my-8">
      {/* Header */}
      <header className="mb-10 border-b-4 border-gray-900 pb-6">
        <h1 className="text-5xl font-black tracking-tighter mb-3">ROBERTA C. AQUILA</h1>
        <p className="text-[13px] font-bold leading-relaxed mb-6 text-gray-600 uppercase tracking-wide">
          Platform Engineer | SRE | Cloud Architect | FinOps | IaaC | Linux Specialist
        </p>
        <div className="flex flex-wrap gap-6 text-xs font-bold">
          <span className="flex items-center gap-2"><Phone size={14} className="text-gray-400" /> +55 11 986138671</span>
          <span className="flex items-center gap-2"><Mail size={14} className="text-gray-400" /> aquila.roberta@gmail.com</span>
          <span className="flex items-center gap-2"><Linkedin size={14} className="text-gray-400" /> linkedin.com/in/robertaquila/</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-gray-400" /> SÃO PAULO, BR</span>
        </div>
      </header>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-xl font-black mb-6 tracking-[0.2em] uppercase border-b-2 border-gray-900 inline-block">Experience</h2>
        <div className="mt-4">
          <TimelineItem 
            date="06/2025 - Present" 
            location="São Paulo" 
            title="Site Reliability Engineer" 
            company="Banco Itaú" 
          />
          <TimelineItem 
            date="2022 - 2023" 
            location="São Paulo" 
            title="Site Reliability Engineer" 
            company="BV" 
          />
          <TimelineItem 
            date="2019 - 2022" 
            location="São Paulo" 
            title="Platform Engineer" 
            company="Digitra" 
          />
          <TimelineItem 
            date="2017 - 2019" 
            location="São Paulo" 
            title="Devops Engineer" 
            company="Safra" 
            isLast={true}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-xl font-black mb-6 tracking-[0.2em] uppercase border-b-2 border-gray-900 inline-block">Education</h2>
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

      {/* Certification Section - EXPANDIDA */}
      <section className="mb-4">
        <h2 className="text-xl font-black mb-6 tracking-[0.2em] uppercase border-b-2 border-gray-900 inline-block">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 mt-2">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} {...cert} />
          ))}
        </div>
        <div className="mt-8 pt-4 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 italic font-medium">
            * Lista resumida focada em Cloud e DevOps. Mais de 10 certificações adicionais disponíveis para validação no perfil do LinkedIn.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;