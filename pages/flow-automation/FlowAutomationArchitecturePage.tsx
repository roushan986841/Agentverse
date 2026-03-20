import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const FlowAutomationArchitecturePage = () => {
  return (
    <div className="max-w-7xl mx-auto text-center p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Flow Automation Agent Architecture</h1>
        <p className="text-lg text-slate-600 mb-8">A high-level overview of the agent's architecture and data flow.</p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 min-h-[400px] w-full flex items-center justify-center">
            <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-[#ED1C24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02zM4.75 12a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-slate-900">Architecture Diagram Coming Soon</h3>
                <p className="mt-1 text-sm text-slate-500">Check back later for a detailed architectural diagram.</p>
            </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/flow-automation-agent/agent-list"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default FlowAutomationArchitecturePage;
