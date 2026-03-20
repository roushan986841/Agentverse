


import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl font-bold text-[#002D72] mb-4">{children}</h2>
);

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 text-[#ED1C24] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span className="text-slate-600">{children}</span>
    </li>
);

const FlowPlannerAgentPage = () => {
  return (
    <div className="max-w-5xl mx-auto text-slate-700 p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Visualize Your Automations with the <span className="text-[#ED1C24]">Flow Planner Agent</span>
          </h1>
        </header>
      </div>

      <div className="pb-4">
        <div className="space-y-12">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
               <div className="lg:col-span-3">
                  <Card className="h-full">
                    <SectionHeader>What It Does</SectionHeader>
                    <p className="text-lg text-slate-600">
                      The Flow Planner Agent transforms your business process ideas into clear, visual flow diagrams. By understanding natural language descriptions, it generates easy-to-understand charts that map out your automation logic, making it perfect for planning, documentation, and stakeholder collaboration before any development begins.
                    </p>
                  </Card>
               </div>
               <div className="lg:col-span-2 flex justify-center p-4">
                  <img 
                      src="/Flow Planner.png" 
                      alt="Flow Planner Agent Illustration" 
                      className="rounded-2xl shadow-2xl object-contain max-h-[300px] w-auto"
                  />
              </div>
          </div>

          <Card>
            <SectionHeader>Strategic Value</SectionHeader>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-200 rounded-t-lg">
                  <tr>
                    <th className="p-4 font-semibold text-slate-500 uppercase text-sm tracking-wider">Challenge</th>
                    <th className="p-4 font-semibold text-slate-500 uppercase text-sm tracking-wider">Solution Provided</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 align-top text-slate-600">Miscommunication between business stakeholders and technical teams.</td>
                    <td className="p-4 align-top text-slate-800 font-medium">Clear, visual diagrams that serve as a single source of truth for everyone.</td>
                  </tr>
                  <tr>
                    <td className="p-4 align-top text-slate-600">Lack of clear documentation for existing or planned automations.</td>
                    <td className="p-4 align-top text-slate-800 font-medium">Auto-generated flowcharts that serve as instant, living documentation.</td>
                  </tr>
                  <tr>
                    <td className="p-4 align-top text-slate-600">Time wasted building incorrect or incomplete automations.</td>
                    <td className="p-4 align-top text-slate-800 font-medium">Rapidly prototype and validate automation logic visually before development.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
              <Card>
                  <SectionHeader>Core Capabilities</SectionHeader>
                  <ul className="space-y-3">
                      <BulletPoint>Natural Language to Diagram Generation</BulletPoint>
                      <BulletPoint>Visual Flow Mapping</BulletPoint>
                      <BulletPoint>Export to PNG/SVG for Documentation</BulletPoint>
                      <BulletPoint>Collaboration-Ready Output</BulletPoint>
                  </ul>
              </Card>

               <Card>
                  <SectionHeader>Time to Value</SectionHeader>
                  <div className="flex justify-around items-center h-full py-4">
                      <div className="text-center">
                          <p className="text-sm text-slate-500 uppercase tracking-wider">Activation Time</p>
                          <p className="text-4xl font-bold text-[#ED1C24] mt-1">~1 Day</p>
                      </div>
                      <div className="text-center">
                          <p className="text-sm text-slate-500 uppercase tracking-wider">Complexity</p>
                          <p className="text-4xl font-bold text-[#ED1C24] mt-1">Low</p>
                      </div>
                  </div>
              </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
              <Card>
                  <SectionHeader>Technical requirements</SectionHeader>
                  <ul className="space-y-3">
                      <BulletPoint>Clearly defined business process requirements</BulletPoint>
                      <BulletPoint>Understanding of basic flowchart concepts (optional)</BulletPoint>
                  </ul>
              </Card>
              <Card>
                  <SectionHeader>Who Benefits</SectionHeader>
                  <ul className="space-y-3">
                      <BulletPoint>Business Analysts</BulletPoint>
                      <BulletPoint>Salesforce Architects</BulletPoint>
                      <BulletPoint>Salesforce Administrators</BulletPoint>
                      <BulletPoint>Project Managers</BulletPoint>
                  </ul>
              </Card>
          </div>
          <Card>
            <SectionHeader>Potential Pitfalls</SectionHeader>
            <p className="text-slate-600 mb-4">
                Understanding potential failure modes is crucial for successful implementation. Learn about common challenges in logic, visualization, and strategy.
            </p>
            <Link
                to="/flow-planner-agent/failures"
                className="font-semibold text-[#002D72] hover:text-[#ED1C24] transition-colors group"
            >
                Explore Failure Modes <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
        </Card>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          to="/flow-planner-agent/technical-components"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default FlowPlannerAgentPage;
