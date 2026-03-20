import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const ArchitecturePage = () => {
  return (
    <div className="max-w-7xl mx-auto text-center p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Campaign Performance Agent Architecture</h1>
        <p className="text-lg text-slate-600 mb-8">A high-level overview of the agent's architecture and data flow.</p>
      </div>
      
      <div className="bg-white p-12 rounded-xl shadow-xl border border-slate-200 flex items-center justify-center min-h-[400px]">
        <div className="text-slate-400 text-center">
            <svg className="w-24 h-24 mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <p className="text-xl font-medium">Architecture Diagram Placeholder</p>
            <p className="text-sm mt-2">Visualizing Data Cloud ↔ Marketing Cloud ↔ Sales Cloud Integration</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/campaign-performance-agent/agent-list"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default ArchitecturePage;
