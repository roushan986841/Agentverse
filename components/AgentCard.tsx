import * as React from 'react';
import { Link } from 'react-router-dom';
import { AGENT_CATEGORIES } from '../constants.tsx';

// Type for a single agent, derived from the main constant for type safety.
type Agent = typeof AGENT_CATEGORIES[0]['agents'][0];

export const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => (
    <Link to={agent.path} className="block group h-full">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full border border-slate-200/80 ring-1 ring-transparent hover:ring-[#ED1C24]/80">
            <div className="w-16 h-16 mb-5 text-[#002D72] group-hover:text-[#ED1C24] transition-colors duration-300 flex-shrink-0">
                {agent.icon}
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-slate-800">{agent.name}</h3>
              <p className="text-sm text-slate-500 mt-2 flex-grow leading-relaxed">{agent.description}</p>
            </div>
        </div>
    </Link>
);