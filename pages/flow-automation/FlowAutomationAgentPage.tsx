import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const ImagePlaceholder = ({className = ''}) => (
    <div className={`flex items-center justify-center bg-slate-200/50 rounded-2xl border-2 border-dashed border-slate-300/80 ${className}`}>
        <div className="text-center text-slate-500 p-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-16 w-16 text-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a2.625 2.625 0 00-1.933-1.933L12.5 18l1.178-.648a2.625 2.625 0 001.933-1.933L16.25 14.25l.648 1.178a2.625 2.625 0 001.933 1.933L20 18.25l-1.178.648a2.625 2.625 0 00-1.933 1.933z" />
            </svg>
            <p className="mt-4 text-sm font-semibold">Flow Automation Agent</p>
        </div>
    </div>
);


const FlowAutomationAgentPage = () => {
  return (
    <div className="max-w-6xl mx-auto text-slate-700 p-6 sm:p-8 lg:p-10 animate-fade-in">
      <div>
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Build Salesforce Automations at the Speed of Thought with the <span className="text-[#002D72]">Flow Automation Agent</span>
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
                     This agent translates natural language process descriptions into fully functional, best-practice Salesforce Flows. It empowers admins and business users to create complex process automations without writing code or manually configuring Flow Builder, drastically accelerating development cycles.
                    </p>
                  </div>
                </Card>
              </div>
               <div className="lg:col-span-2 flex justify-center p-4 h-full">
                  <ImagePlaceholder className="w-full h-full min-h-[300px]" />
              </div>
          </div>

          <Card>
             <div className="p-8">
                <SectionHeader>Strategic Value</SectionHeader>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 px-8 font-semibold text-slate-600 uppercase text-sm tracking-wider">Challenge</th>
                    <th className="p-4 px-8 font-semibold text-slate-600 uppercase text-sm tracking-wider">Solution Provided</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">Slow development lifecycle for building and testing Flows.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Instant generation of Flow metadata from a simple text prompt.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">Automations are inconsistent and don't follow best practices.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Enforces built-in guardrails for security, scalability, and error handling.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">Business users cannot build their own automations.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Empowers non-technical users to translate their process knowledge into automation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
              <Card>
                  <div className="p-8">
                    <SectionHeader>Core Capabilities</SectionHeader>
                    <ul className="space-y-3">
                        <BulletPoint>Natural Language to Flow Generation</BulletPoint>
                        <BulletPoint>Best Practice Enforcement</BulletPoint>
                        <BulletPoint>Automated Documentation and Description</BulletPoint>
                        <BulletPoint>Error Handling and Fault Path Creation</BulletPoint>
                    </ul>
                  </div>
              </Card>

               <Card>
                  <div className="p-8">
                    <SectionHeader>Time to Value</SectionHeader>
                    <div className="flex justify-around items-center h-full pt-4">
                        <div className="text-center">
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Activation Time</p>
                            <p className="text-4xl font-bold text-[#ED1C24] mt-1">~1 Week</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Complexity</p>
                            <p className="text-4xl font-bold text-[#ED1C24] mt-1">Medium</p>
                        </div>
                    </div>
                  </div>
              </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
              <Card>
                  <div className="p-8">
                    <SectionHeader>Technical requirements</SectionHeader>
                    <ul className="space-y-3">
                        <BulletPoint>Salesforce Admin or Developer credentials</BulletPoint>
                        <BulletPoint>Access to a Sandbox environment for testing</BulletPoint>
                        <BulletPoint>Clearly defined business process requirements</BulletPoint>
                    </ul>
                  </div>
              </Card>
              <Card>
                  <div className="p-8">
                    <SectionHeader>Who Benefits</SectionHeader>
                    <ul className="space-y-3">
                        <BulletPoint>Salesforce Administrators</BulletPoint>
                        <BulletPoint>Business Analysts</BulletPoint>
                        <BulletPoint>Sales & Service Operations</BulletPoint>
                        <BulletPoint>Salesforce Developers</BulletPoint>
                    </ul>
                  </div>
              </Card>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Link
          to="/flow-automation-agent/technical-components"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#001E4D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Technical Components
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default FlowAutomationAgentPage;
