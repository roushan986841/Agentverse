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

const SegmentationAgentPage = () => {
  return (
    <div className="max-w-6xl mx-auto text-slate-700 p-6 sm:p-8 lg:p-10 animate-fade-in">
      <div>
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Accelerate Precision Engagement with the <span className="text-[#002D72]">Segmentation Agent</span>
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
                        Transform unified customer data from Salesforce Data Cloud into powerful, actionable segments—no code required. Experience faster, smarter segmentation deeply integrated with Sales Cloud and Marketing Cloud for immediate omnichannel activation.
                      </p>
                    </div>
                  </Card>
               </div>
               <div className="lg:col-span-2 flex justify-center p-4">
                  <img 
                      src="./pages/segmentation/Segmentation.png" 
                      alt="Segmentation Agent Illustration" 
                      className="rounded-2xl shadow-2xl object-contain max-h-[300px] w-auto"
                  />
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
                    <td className="p-4 px-8 align-top text-slate-600">Delayed campaign cycles due to complex data analysis.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Instant campaign audience creation with intuitive templates and powerful filters.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">Low engagement from generic, non-personalized outreach.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Hyper-relevant segments built from purchase history, support cases, and digital engagement.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">High dependency on data science teams for customer segmentation.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Empower Marketing and Sales Ops with a no-code UI to build, refine, and activate segments independently.</td>
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
                        <BulletPoint>Unified Customer Profile Activation</BulletPoint>
                        <BulletPoint>Behavioral & Transactional Intelligence</BulletPoint>
                        <BulletPoint>Plug-and-Play Industry Templates</BulletPoint>
                        <BulletPoint>Real-Time Sync with Salesforce Objects</BulletPoint>
                    </ul>
                  </div>
              </Card>

               <Card>
                  <div className="p-8">
                    <SectionHeader>Time to Value</SectionHeader>
                    <div className="flex justify-around items-center h-full pt-4">
                        <div className="text-center">
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Activation Time</p>
                            <p className="text-4xl font-bold text-[#ED1C24] mt-1">~3 Weeks</p>
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
                        <BulletPoint>Active Salesforce Data Cloud ↔ AgentForce sync</BulletPoint>
                        <BulletPoint>Mapped data attributes (transactions, web analytics, service data)</BulletPoint>
                        <BulletPoint>Role-based permissions for sales vs. marketing teams</BulletPoint>
                        <BulletPoint>Alignment with CRM and marketing automation processes</BulletPoint>
                    </ul>
                  </div>
              </Card>
              <Card>
                  <div className="p-8">
                    <SectionHeader>Who Benefits</SectionHeader>
                    <ul className="space-y-3">
                        <BulletPoint>Marketing Managers</BulletPoint>
                        <BulletPoint>Sales Operations</BulletPoint>
                        <BulletPoint>Data Analysts</BulletPoint>
                        <BulletPoint>Sales Leadership</BulletPoint>
                    </ul>
                  </div>
              </Card>
          </div>
          <Card>
            <div className="p-8 flex items-center justify-between">
              <div>
                <SectionHeader noMargin>Potential Pitfalls</SectionHeader>
                <p className="text-slate-600 mt-2">
                    Understanding potential failure modes is crucial for successful implementation.
                </p>
              </div>
              <Link
                  to="/segmentation-agent/failures"
                  className="font-semibold text-[#002D72] hover:text-[#ED1C24] transition-colors group whitespace-nowrap ml-6"
              >
                  Explore Failure Modes <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
        </Card>
        </div>
      </div>

      <div className="text-center pt-8">
        <Link
          to="/segmentation-agent/technical-components"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#001E4D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Technical Components
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default SegmentationAgentPage;
