import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 flex items-center justify-center px-8">
      <div className="text-center">
        <ShieldAlert className="w-20 h-20 text-teal-400 mx-auto mb-6" />
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="inline-block bg-teal-500 text-white no-underline font-semibold px-8 py-3.5 rounded-lg hover:bg-teal-600 transition-colors">Back to Home</Link>
      </div>
    </div>
  );
}
