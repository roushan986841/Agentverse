

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const FlowAutomationMediaPage = () => {
  return (
    <div className="max-w-5xl mx-auto text-center p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Agent Media Showcase</h1>
        <p className="text-lg text-slate-600 mb-8">Visuals and media assets related to the Flow Automation Agent.</p>
      </div>
      
      <div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-[#ED1C24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 14m6-6l.01.01" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-slate-900">No media yet</h3>
            <p className="mt-1 text-sm text-slate-500">Check back later for visuals and demos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowAutomationMediaPage;
