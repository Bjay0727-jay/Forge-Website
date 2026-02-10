import { Shield, FolderOpen, FileText, Bell } from 'lucide-react';

export default function PortalDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy-700 mb-6">Welcome Back</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: FolderOpen, title: 'Resources', desc: 'Access internal documents and templates.', count: '12 items' },
          { icon: FileText, title: 'Policies', desc: 'Security policies and procedures.', count: '8 policies' },
          { icon: Bell, title: 'Announcements', desc: 'Latest team updates.', count: '3 new' },
        ].map((card) => (
          <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center mb-4"><card.icon className="w-5 h-5 text-teal-500" /></div>
            <h3 className="font-bold text-navy-700 mb-1">{card.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{card.desc}</p>
            <span className="text-xs font-medium text-teal-500">{card.count}</span>
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-navy-700 mb-4">Quick Links</h2>
        <div className="space-y-3">
          {['Security Awareness Training', 'Timesheet Portal', 'Benefits Information', 'IT Support Desk'].map((link) => (
            <div key={link} className="flex items-center gap-3 text-sm text-gray-600 py-2 border-b border-gray-100 last:border-0">
              <Shield className="w-4 h-4 text-gray-400" /><span>{link}</span><span className="ml-auto text-xs text-gray-400">Coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
