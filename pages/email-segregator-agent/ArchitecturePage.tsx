import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const ArchitecturePage = () => {
  return (
    <div className="max-w-7xl mx-auto text-center p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Architecture</h1>
        <p className="text-lg text-slate-600 mb-8">A high-level overview of the agent's architecture and data flow.</p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 min-h-[400px] w-full flex items-center justify-center">
            <div className="text-center">
                <h3 className="mt-2 text-sm font-medium text-slate-900">Architecture Diagram Coming Soon</h3>
                <p className="mt-1 text-sm text-slate-500">Check back later for a detailed architectural diagram.</p>
            </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/email-segregator-agent/agent-list"
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
