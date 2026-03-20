import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const aspectsData = [
    {
        title: "1. Role (Major Jobs)",
        subtitle: "What job should they do",
        definition: "The primary role of this agent is to act as an intelligent monitor and optimizer for marketing campaigns.",
        examplesTitle: "Main Jobs:",
        examples: [
            "Performance Monitoring: Continuously track KPIs like CTR, Conversion Rate, and CPA across all active campaigns.",
            "ROI Analysis: Calculate and report on the financial return of marketing spend by linking campaign data to sales outcomes.",
            "Optimization Recommendations: Identify underperforming segments or channels and suggest budget reallocations or content changes."
        ],
        whyItMatters: "Ensures marketing budgets are spent efficiently and that the team can react quickly to market changes and performance trends."
    },
    {
        title: "2. Data (Data Access)",
        subtitle: "What can they access",
        definition: "The agent needs access to marketing engagement and sales outcome data.",
        examplesTitle: "Required Data Access:",
        examples: [
            "Marketing Cloud Data: Engagement metrics (opens, clicks, bounces) from email and mobile journeys.",
            "Ad Platform Data: Spend and performance data from Google Ads, LinkedIn, etc., via Data Cloud connectors.",
            "Sales Cloud Objects: Campaign, Lead, and Opportunity records to track the full conversion funnel."
        ],
        whyItMatters: "Accurate attribution and ROI calculation depend on having a unified view of both marketing activity and sales results."
    },
    {
        title: "3. Actions (What it can do)",
        subtitle: "What capabilities do they have",
        definition: "The agent performs analysis and triggers notifications or updates within the Salesforce ecosystem.",
        examplesTitle: "Capabilities:",
        examples: [
            "Generate Reports: Create automated performance summaries and dashboards.",
            "Trigger Alerts: Send notifications to Slack or email when KPIs fall below predefined thresholds.",
            "Update Records: Update campaign status or priority based on performance insights.",
            "Propose Budget Shifts: Generate recommendations for reallocating spend between ad sets."
        ],
        whyItMatters: "Turns insights into action by automating the monitoring process and providing clear, actionable steps for improvement."
    },
    {
        title: "4. Guardrails (Suggestions for your agent)",
        subtitle: "What shouldn't they do",
        definition: "Constraints to ensure the agent operates safely and within policy.",
        examplesTitle: "Guardrail Instructions:",
        examples: [
            "Budget Control: \"You MUST NOT automatically change campaign budgets. All budget reallocations must be approved by a human manager.\"",
            "PII Protection: \"When generating reports for external stakeholders, you MUST redact all raw PII and only provide aggregated data.\"",
            "Tone & Clarity: \"Always explain the reasoning behind an optimization recommendation, citing specific data points.\""
        ],
        whyItMatters: "Maintains human oversight on financial decisions and ensures compliance with data privacy regulations."
    },
    {
        title: "5. Channel (Where it can work)",
        subtitle: "Where do they work",
        definition: "Deployment options for internal marketing teams.",
        examplesTitle: "Deployment Channels:",
        examples: [
            "Einstein Copilot: For ad-hoc queries from marketing managers within Salesforce.",
            "Slack: For automated alerts and daily performance briefings.",
            "Tableau/Dashboards: Surfacing insights within existing reporting tools."
        ],
        whyItMatters: "Integrates performance insights into the tools marketers use every day, ensuring they are always informed."
    }
];

const InfoTooltip = ({ definition, whyItMatters }) => (
    <div className="relative group flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-[#002D72] cursor-pointer transition-colors" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-96 p-4 bg-slate-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 text-left">
            <h5 className="font-bold text-base mb-2 text-slate-200 border-b border-slate-600 pb-1">Definition</h5>
            <p className="mb-4 leading-relaxed">{definition}</p>
            <h5 className="font-bold text-base mb-2 text-slate-200 border-b border-slate-600 pb-1">Why it matters</h5>
            <p className="leading-relaxed">{whyItMatters}</p>
            <div className="absolute top-1/2 -translate-y-1/2 right-full w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-slate-800"></div>
        </div>
    </div>
);

const AspectDetailCard: React.FC<{ aspect: any }> = ({ aspect }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 transition-shadow hover:shadow-lg">
            <div className="flex items-start gap-3">
                <h3 className="text-3xl font-bold text-slate-900">{aspect.title}</h3>
                <InfoTooltip definition={aspect.definition} whyItMatters={aspect.whyItMatters} />
            </div>
            <p className="text-lg text-slate-500 mb-6 italic">{aspect.subtitle}</p>

            <div>
                <h4 className="font-bold text-xl text-[#ED1C24]">{aspect.examplesTitle}</h4>
                <div className="mt-2 space-y-3 text-slate-600 leading-relaxed">
                    {aspect.examples.map((example, index) => (
                        <div key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>{example}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SummaryTable = () => {
    const summaryData = [
        { component: "Role", definition: "Intelligent monitor and optimizer for marketing campaigns.", examples: "Performance tracking, ROI analysis, optimization recommendations." },
        { component: "Data", definition: "Marketing engagement and sales outcome data.", examples: "Marketing Cloud, Ad Platforms, Sales Cloud (Campaigns, Opps)." },
        { component: "Actions", definition: "Analysis and triggering notifications/updates.", examples: "Generate reports, trigger alerts, propose budget shifts." },
        { component: "Guardrails", definition: "Constraints for safe and policy-compliant operation.", examples: "No auto-budget changes, PII redaction, clear reasoning." },
        { component: "Channel", definition: "Deployment options for marketing teams.", examples: "Einstein Copilot, Slack, Tableau Dashboards." },
    ];

    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#002D72] mb-8">Summary Table</h2>
            <div className="bg-white p-2 sm:p-6 rounded-xl shadow-md border border-slate-200 overflow-x-auto">
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr className="bg-slate-200 border-b border-slate-200">
                            <th className="p-4 font-semibold text-slate-500 uppercase text-sm tracking-wider">Attribute</th>
                            <th className="p-4 font-semibold text-slate-500 uppercase text-sm tracking-wider">Definition</th>
                            <th className="p-4 font-semibold text-slate-500 uppercase text-sm tracking-wider">Key Examples</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {summaryData.map(row => (
                            <tr key={row.component} className="hover:bg-slate-100/80 transition-colors">
                                <td className="p-4 font-medium text-slate-800 align-top">{row.component}</td>
                                <td className="p-4 text-slate-600 align-top">{row.definition}</td>
                                <td className="p-4 text-slate-600 align-top">{row.examples}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const CapabilitiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Campaign Performance Agent: Technical Components</h1>
        </header>
      </div>
      
      <div>
        <SummaryTable />
        <div className="space-y-8">
          {aspectsData.map(aspect => (
            <AspectDetailCard key={aspect.title} aspect={aspect} />
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/campaign-performance-agent/architecture"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default CapabilitiesPage;
