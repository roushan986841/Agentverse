

import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const WorkflowBox = ({ icon, title, subtitle = '', className = '' }) => (
    <div className={`bg-white p-4 rounded-xl shadow-md border border-slate-200 text-center ${className}`}>
        <div className="w-12 h-12 mx-auto mb-3 text-[#ED1C24]">{icon}</div>
        <h4 className="font-semibold text-[#002D72]">{title}</h4>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
    </div>
);

const Connector = ({ isVertical = false }) => (
    <div className={`flex items-center justify-center ${isVertical ? 'h-12' : 'w-16'}`}>
        <svg className={`w-8 h-8 text-slate-300 ${isVertical ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
        </svg>
    </div>
);

const FlowAutomationDeepDivePage = () => {
    
    const UserIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
    const PromptIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    const BrainIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A4.5 4.5 0 0114 6.5V9a.5.5 0 01-.5.5h-4A.5.5 0 019 9V6.5A4.5 4.5 0 019.5 2z" /><path d="M7 10v3.5a1.5 1.5 0 003 0V10" /><path d="M14 10v3.5a1.5 1.5 0 003 0V10" /><path d="M6 14s-1 2-1 3.5a5.5 5.5 0 0011 0c0-1.5-1-3.5-1-3.5" /></svg>;
    const CodeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
    const DeployIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

    return (
        <div className="max-w-full mx-auto p-6 sm:p-8 lg:p-10">
            <div>
                <Breadcrumbs />
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Flow Automation Agent Workflow</h1>
                     <p className="mt-4 text-lg text-slate-600">A visual overview of how the agent turns a prompt into a deployed Salesforce Flow.</p>
                </header>
            </div>
            
            <div>
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200">
                    <div className="w-full bg-[#ED1C24] text-white p-4 rounded-xl text-center mb-10 text-base md:text-lg shadow-lg">
                        "When an Opportunity stage changes to 'Closed Won', create a Task for the Account Owner to schedule a kickoff call."
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                        {/* Stage 1: Input */}
                        <div className="flex-1 flex flex-col items-center w-full">
                            <h3 className="font-bold text-xl text-[#002D72] mb-4 uppercase tracking-wider">1. Prompt</h3>
                             <div className="space-y-4">
                               <WorkflowBox icon={<UserIcon />} title="Salesforce Admin" />
                               <Connector isVertical />
                               <WorkflowBox icon={<PromptIcon />} title="Describes Process in Natural Language" />
                             </div>
                        </div>

                        <Connector />

                        {/* Stage 2: Logic */}
                        <div className="flex-1 flex flex-col items-center w-full">
                            <h3 className="font-bold text-xl text-[#002D72] mb-4 uppercase tracking-wider">2. Logic</h3>
                            <WorkflowBox icon={<BrainIcon />} title="Agent Analyzes Prompt" subtitle="Identifies objects, criteria, actions" />
                        </div>
                        
                        <Connector />

                        {/* Stage 3: Generation */}
                        <div className="flex-1 flex flex-col items-center w-full">
                             <h3 className="font-bold text-xl text-[#002D72] mb-4 uppercase tracking-wider">3. Generation</h3>
                            <WorkflowBox icon={<CodeIcon />} title="Generate Flow Metadata" subtitle="Creates Flow XML definition" />
                        </div>

                        <Connector />

                        {/* Stage 4: Deployment */}
                        <div className="flex-1 flex flex-col items-center w-full">
                             <h3 className="font-bold text-xl text-[#002D72] mb-4 uppercase tracking-wider">4. Deployment</h3>
                             <WorkflowBox icon={<DeployIcon />} title="Deploy to Sandbox" subtitle="Via Metadata API" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-end items-center">
                <Link
                    to="/flow-automation-agent/media"
                    className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    Next page
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Link>
            </div>
        </div>
    );
};

export default FlowAutomationDeepDivePage;
