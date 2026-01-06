import React from 'react';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Resume = () => {
  const data = [
    { name: 'A', value: 1 },
    { name: 'B', value: 1 },
    { name: 'C', value: 1 },
    { name: 'D', value: 1 },
    { name: 'E', value: 1 },
    { name: 'F', value: 1 },
  ];

  const COLORS = ['#4a5568', '#4a5568', '#4a5568', '#4a5568', '#4a5568', '#4a5568'];

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
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase border-b-0">Experience</h2>
        <div className="mt-2">
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
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase">Education</h2>
        <div className="mt-2">
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

      {/* Certification Section */}
      <section className="mb-8">
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase">Certification</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          <div>
            <div className="text-sm font-bold">AWS Academy Graduate - AWS Academy Cloud Foundations</div>
            <div className="text-xs text-gray-500">Amazon Web Services (AWS)</div>
          </div>
          <div>
            <div className="text-sm font-bold">Build a Secure Google Cloud Network Skill Badge</div>
            <div className="text-xs text-gray-500">Google</div>
          </div>
          <div>
            <div className="text-sm font-bold">Implement Load Balancing on Compute Engine Skill Badge</div>
            <div className="text-xs text-gray-500">Google</div>
          </div>
          <div>
            <div className="text-sm font-bold">Prepare Data for ML APIs on Google Cloud Skill Badge</div>
            <div className="text-xs text-gray-500">Google</div>
          </div>
          <div>
            <div className="text-sm font-bold">Set Up an App Dev Environment on Google Cloud Skill Badge</div>
            <div className="text-xs text-gray-500">Google</div>
          </div>
          <div>
            <div className="text-sm font-bold">Cloud Hero DevOps Skills</div>
            <div className="text-xs text-gray-500">Google</div>
          </div>
        </div>
      </section>

      {/* My Time Section */}
      <section>
        <h2 className="text-lg font-black mb-4 tracking-widest uppercase">My Time</h2>
        <div className="flex items-center gap-12">
          <div className="w-48 h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Labels on Chart */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">F</div>
            <div className="absolute top-4 right-8 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">A</div>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">B</div>
            <div className="absolute bottom-4 right-8 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">C</div>
            <div className="absolute bottom-4 left-8 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">D</div>
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">E</div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
              <div key={letter} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                  {letter}
                </div>
                  <div className="flex items-center gap-2"><strong>A</strong> Focus on Infrastructure</div>
                  <div className="flex items-center gap-2"><strong>B</strong> Automation & CI/CD</div>
                  <div className="flex items-center gap-2"><strong>C</strong> Mentoring & Leadership</div>
                  <div className="flex items-center gap-2"><strong>D</strong> Learning New Tech</div>
                  <div className="flex items-center gap-2"><strong>E</strong> Improving System Performance</div>
                  <div className="flex items-center gap-2"><strong>F</strong> Cloud Architecture</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;