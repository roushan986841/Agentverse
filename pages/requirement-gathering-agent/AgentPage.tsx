import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden ${className}`}>
    {children}
  </div>
);

const SectionHeader: React.FC<{ children: React.ReactNode, noMargin?: boolean }> = ({ children, noMargin = false }) => (
    <h2 className={`text-2xl font-bold text-slate-800 ${noMargin ? '' : 'mb-4'}`}>{children}</h2>
);

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mr-1 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        <span className="text-slate-600">{children}</span>
    </li>
);

const AgentPage = () => {
  return (
    <div className="max-w-6xl mx-auto text-slate-700 p-6 sm:p-8 lg:p-10 animate-fade-in">
      <div>
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Requirement Gathering Agent
          </h1>
        </header>
      </div>

      <div className="pb-4">
        <div className="space-y-10">
           <div className="grid lg:grid-cols-5 gap-8 items-center">
               <div className="lg:col-span-3">
                  <Card className="h-full">
                    <div className="p-8">
                      <SectionHeader>What It Does</SectionHeader>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        Automates gathering and standardization of campaign and content data for automation. Designed for Marketing Ops and Campaign Managers to streamline the intake process.
                      </p>
                    </div>
                  </Card>
               </div>
               <div className="lg:col-span-2 flex justify-center p-4">
                  <img 
                      src="/RequirementGathering.png" 
                      alt="Requirement Gathering Agent Illustration" 
                      className="rounded-2xl shadow-2xl object-contain max-h-[300px] w-auto"
                  />
              </div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
              <Card>
                  <div className="p-8">
                    <SectionHeader>Features</SectionHeader>
                    <ul className="space-y-3">
                        <BulletPoint>Multi-parameter intake</BulletPoint>
                        <BulletPoint>Data ingestion</BulletPoint>
                        <BulletPoint>Requirement change tracking</BulletPoint>
                        <BulletPoint>Conversational requirement intake</BulletPoint>
                        <BulletPoint>Auto-validation against platform constraints</BulletPoint>
                    </ul>
                  </div>
              </Card>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Link
          to="/requirement-gathering-agent/technical-components"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#001E4D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Technical Components
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default AgentPage;
