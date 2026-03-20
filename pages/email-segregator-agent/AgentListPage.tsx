import * as React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';
import { EMAIL_SEGREGATOR_AGENTS_LIST } from '../../constants.tsx';

const AgentListPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-10">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Email Segregator Agent List</h1>
      <div className="grid gap-6">
        {EMAIL_SEGREGATOR_AGENTS_LIST.map((agent) => (
          <div key={agent.id} className="bg-white p-6 rounded-xl shadow border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 text-[#002D72]">{agent.icon}</div>
              <h2 className="text-2xl font-bold text-slate-800">{agent.name}</h2>
            </div>
            <p className="text-slate-600 mb-2"><strong>Status:</strong> {agent.status}</p>
            <p className="text-slate-600 mb-2"><strong>Created:</strong> {agent.createdDate}</p>
            <p className="text-slate-600 mb-2"><strong>Setup Details:</strong> {agent.setupDetails}</p>
            <p className="text-slate-600 mb-2"><strong>Prompt Template:</strong> {agent.promptTemplate}</p>
            <p className="text-slate-600 mb-2 whitespace-pre-line"><strong>Business Rules:</strong><br/>{agent.businessRules}</p>
            <p className="text-slate-600"><strong>Output Template:</strong> {agent.outputTemplate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentListPage;
