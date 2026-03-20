import * as React from 'react';
import { Link } from 'react-router-dom';
import { CAMELLIA_AGENTS_LIST } from '../../constants.tsx';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const DetailSection: React.FC<{ title: string; children: React.ReactNode, isCode?: boolean }> = ({ title, children, isCode = false }) => (
    <div className="mb-6">
        <h4 className="text-lg font-semibold text-[#ED1C24] mb-2">{title}</h4>
        {isCode ? (
            <pre className="bg-slate-100 p-4 rounded-md text-sm text-slate-700 whitespace-pre-wrap font-mono">{children}</pre>
        ) : (
            <p className="text-slate-600 text-sm leading-relaxed">{children}</p>
        )}
    </div>
);

const AgentDetailModal: React.FC<{ agent: any | null, onClose: () => void }> = ({ agent, onClose }) => {
    if (!agent) return null;

    React.useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-6 border-b border-slate-200 flex-shrink-0">
                    <div className="flex items-center">
                        <div className="w-8 h-8 mr-3 text-[#002D72]">{agent.icon}</div>
                        <h2 className="text-2xl font-bold text-[#002D72]">{agent.name}</h2>
                    </div>
                    <button onClick={onClose} className="text-3xl text-slate-400 hover:text-slate-700 transition-colors">&times;</button>
                </div>
                <div className="p-8 overflow-y-auto">
                    <DetailSection title="Set-up Details">
                        {agent.setupDetails}
                    </DetailSection>
                    <DetailSection title="Prompt Template" isCode>
                        {agent.promptTemplate}
                    </DetailSection>
                    <DetailSection title="Business Rules / Action Template" isCode>
                        {agent.businessRules}
                    </DetailSection>
                    <DetailSection title="Output Template">
                        {agent.outputTemplate}
                    </DetailSection>
                </div>
            </div>
        </div>
    );
};


const AgentTile: React.FC<{ agent: any, onDetailsClick: (agent: any) => void }> = ({ agent, onDetailsClick }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col justify-between h-full transition-shadow hover:shadow-lg">
            <div>
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-4 text-[#002D72] flex-shrink-0">{agent.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-800 leading-tight">{agent.name}</h3>
                </div>
                <div className="text-sm text-slate-500 space-y-2 mb-6">
                    <p><span className="font-medium text-slate-600">ID:</span> {agent.id}</p>
                    <p><span className="font-medium text-slate-600">Created:</span> {agent.createdDate}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-auto">
                <button
                    onClick={() => onDetailsClick(agent)}
                    className="w-full text-center bg-[#002D72] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#00255A] transition-colors duration-300 text-sm"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

const FlowAutomationAgentListPage = () => {
    const [selectedAgent, setSelectedAgent] = React.useState(null);

    const openModal = (agent) => setSelectedAgent(agent);
    const closeModal = () => setSelectedAgent(null);

    return (
        <>
            <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-10">
                <div>
                    <Breadcrumbs />
                    <header className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Active Camellia Agents</h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Manage your deployed Camellia agents. View their configuration details or run a demo.</p>
                    </header>
                </div>
              
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {CAMELLIA_AGENTS_LIST.map(agent => (
                        <AgentTile key={agent.id} agent={agent} onDetailsClick={openModal} />
                    ))}
                </div>
              </div>
              
              <div className="mt-12 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <a
                        href="https://developer.salesforce.com/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-slate-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300 shadow-md"
                    >
                        Setup with Salesforce
                    </a>
                     <a
                        href="https://trailhead.salesforce.com/en/content/learn/trails/discover-ai-for-business"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-slate-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300 shadow-md"
                    >
                        Learn AI on Trailhead
                    </a>
                </div>
                <a
                  href="https://indegenehcosp.my.salesforce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#ED1C24] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#c91a20] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Demo
                </a>
              </div>
            </div>
            <AgentDetailModal agent={selectedAgent} onClose={closeModal} />
        </>
    );
};

export default FlowAutomationAgentListPage;
