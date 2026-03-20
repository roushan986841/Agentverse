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

const CampaignPerformanceAgentPage = () => {
  return (
    <div className="max-w-6xl mx-auto text-slate-700 p-6 sm:p-8 lg:p-10 animate-fade-in">
      <div>
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Optimize Marketing Impact with the <span className="text-[#002D72]">Campaign Performance Agent</span>
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
                        Continuously monitors and analyzes marketing campaign performance across channels. It provides real-time insights into ROI, conversion rates, and engagement, enabling data-driven optimizations to maximize marketing spend.
                      </p>
                    </div>
                  </Card>
               </div>
               <div className="lg:col-span-2 flex justify-center p-4">
                  <img 
                      src="/CampaignPerformance.png" 
                      alt="Campaign Performance Agent Illustration" 
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
                    <td className="p-4 px-8 align-top text-slate-600">Difficulty in tracking real-time ROI across multiple platforms.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Unified performance dashboard with cross-channel attribution and real-time ROI tracking.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">Slow response to underperforming campaigns leading to wasted budget.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Automated alerts and optimization recommendations for underperforming ad sets or emails.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 px-8 align-top text-slate-600">Manual and time-consuming reporting cycles.</td>
                    <td className="p-4 px-8 align-top text-slate-800 font-medium">Automated, AI-generated performance summaries and stakeholder reports.</td>
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
                        <BulletPoint>Real-Time ROI & Conversion Tracking</BulletPoint>
                        <BulletPoint>Cross-Channel Attribution Analysis</BulletPoint>
                        <BulletPoint>Automated Performance Alerts</BulletPoint>
                        <BulletPoint>Budget Reallocation Recommendations</BulletPoint>
                    </ul>
                  </div>
              </Card>

               <Card>
                  <div className="p-8">
                    <SectionHeader>Time to Value</SectionHeader>
                    <div className="flex justify-around items-center h-full pt-4">
                        <div className="text-center">
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Activation Time</p>
                            <p className="text-4xl font-bold text-[#ED1C24] mt-1">~4 Weeks</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Complexity</p>
                            <p className="text-4xl font-bold text-[#ED1C24] mt-1">High</p>
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
                        <BulletPoint>Integration with Marketing Cloud & Ad Platforms</BulletPoint>
                        <BulletPoint>Data Cloud Unified Data Model for Attribution</BulletPoint>
                        <BulletPoint>Standardized conversion tracking across channels</BulletPoint>
                        <BulletPoint>Access to Campaign and Opportunity objects</BulletPoint>
                    </ul>
                  </div>
              </Card>
              <Card>
                  <div className="p-8">
                    <SectionHeader>Who Benefits</SectionHeader>
                    <ul className="space-y-3">
                        <BulletPoint>Marketing Directors</BulletPoint>
                        <BulletPoint>Digital Marketing Managers</BulletPoint>
                        <BulletPoint>CMOs</BulletPoint>
                        <BulletPoint>Marketing Operations</BulletPoint>
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
                  to="/campaign-performance-agent/failures"
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
          to="/campaign-performance-agent/technical-components"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#001E4D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Technical Components
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default CampaignPerformanceAgentPage;
