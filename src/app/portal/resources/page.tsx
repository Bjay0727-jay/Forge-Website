import { FileText, Download } from 'lucide-react';

const resources = [
  { name: 'SSP Template v4.2', type: 'Template', category: 'FedRAMP', updated: '2025-12-15' },
  { name: 'POA&M Tracking Workbook', type: 'Spreadsheet', category: 'Compliance', updated: '2025-12-10' },
  { name: 'Security Assessment Report Template', type: 'Template', category: 'Assessment', updated: '2025-11-28' },
  { name: 'Incident Response Playbook', type: 'Document', category: 'Security Ops', updated: '2025-11-15' },
  { name: 'CMMC Assessment Checklist', type: 'Checklist', category: 'CMMC', updated: '2025-11-01' },
];

export default function ResourcesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6"><h1 className="text-2xl font-extrabold text-navy-700">Internal Resources</h1><span className="text-sm text-gray-500">{resources.length} resources</span></div>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="divide-y divide-gray-100">
          {resources.map((r) => (
            <div key={r.name} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-blue-500" /></div>
              <div className="flex-1 min-w-0"><div className="font-medium text-navy-700 text-sm">{r.name}</div><div className="text-xs text-gray-400">{r.type} &bull; {r.category} &bull; Updated {r.updated}</div></div>
              <button className="text-gray-400 hover:text-teal-500 transition-colors p-2"><Download className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
