import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const aspectsData = [
    {
        title: "1. Role (Major Jobs)",
        subtitle: "What job should they do",
        definition: "The primary role of this agent is to act as an intelligent assistant for marketing and data teams.",
        examplesTitle: "Main Jobs:",
        examples: [
            "Segment Creation: To interpret a user's natural language request (e.g., \"build a segment of customers in New York who bought a t-shirt in the last 30 days\") and use the connected Apex class and Flow to create that segment in Data Cloud.",
            "Segment Information Retrieval: To fetch and present key details about an existing segment when asked (e.g., \"Give details about the segment High-Value Customers' segment). This includes identifying if it was created via the UI or a dbt model.",
            "Intent Disambiguation: To understand whether the user is asking to create a new segment or get information about an existing one, and then trigger the correct Flow (e.g., Segmentation Creation vs. Segment Details Retrieval)."
        ],
        whyItMatters: "A clearly defined role focuses the agent on specific business outcomes, ensuring its work is strategically aligned and delivers measurable value. It's the 'why' behind the agent's existence."
    },
    {
        title: "2. Data (Data Access)",
        subtitle: "What can they access",
        definition: "The agent needs access to specific data within your Salesforce org to function:",
        examplesTitle: "Required Data Access:",
        examples: [
            "Data Cloud Objects: It requires Read access to the Data Model Objects (DMOs) and Data Lake Objects (DLOs) that you segment on (e.g., Individual, SalesOrder, WebsiteEngagement DMOs).",
            "Segment Metadata: It needs Read access to the Salesforce objects that store the segment definitions and their metadata (e.g., SegmentApiName, Description, Status, Scope, CreationMethod__c).",
            "Prompt Template Data: It accesses the Prompt Templates you've defined to understand how to process the user's request and what information to extract."
        ],
        whyItMatters: "The breadth and depth of the data library determine how insightful and context-aware the agent can be. Richer data leads to more accurate segmentation and personalization."
    },
    {
        title: "3. Actions (What it can do)",
        subtitle: "What capabilities do they have",
        definition: "Based on your setup (Apex, Flows), the agent's actions are performed entirely within Salesforce.",
        examplesTitle: "Capabilities:",
        examples: [
            "Execute Business Logic: It invokes Apex classes (like your DataCloudSegmentCreator) and launches Salesforce Flows to orchestrate the creation or retrieval process.",
            "Query Database (Read): It fetches data from Data Cloud objects and other Salesforce records (e.g., to find an existing segment's details).",
            "Create Segment (Write): It creates new Segment that define a new segment within Data Cloud.",
            "Limitations: Based on your description, this agent does not fetch data from 3rd-party websites. Its actions are confined to the Salesforce platform."
        ],
        whyItMatters: "Actions transform the agent from a passive analysis tool into an active participant in the business workflow, capable of executing tasks autonomously and driving real change."
    },
    {
        title: "4. Guardrails (Suggestions for your agent)",
        subtitle: "What shouldn't they do",
        definition: "This is the most critical part. The text you provided looks like the setup screen where you enter the guardrails (Instructions). Here are the actual instructions (guardrails) you should use for those topics.",
        examplesTitle: "Guardrail Instructions:",
        examples: [
            {
                subheading: "For the Segmentation Creation Topic:",
                items: [
                    "Instruction 1 (Clarity): \"Before creating any segment, you MUST summarize the criteria back to the user and ask for explicit confirmation (e.g., 'I will create a segment for [Criteria]. Is this correct?').\"",
                    "Instruction 2 (Safety): \"You MUST NOT attempt to modify or delete any existing data or segments. Your role is only to create new segments.\"",
                    "Instruction 3 (Scope): \"If the user's request is vague or missing key information (like a name or specific filter), you MUST ask clarifying questions to get all necessary details before proceeding.\"",
                    "Instruction 4 (Refusal): \"You MUST refuse any request to create a segment based on sensitive personal information (e.g., race, religion, sexual orientation) or any criteria that would be unethical or discriminatory.\"",
                    "Instruction 5 (Hand-off): \"If the user asks for a segment that is too complex for your capabilities, politely explain your limitations and suggest they use the manual segmentation UI.\""
                ]
            },
            {
                subheading: "For the Segment Details Retrieval Topic:",
                items: [
                    "Instruction 1 (PII Protection): \"You MUST NOT display any raw Personal Identifiable Information (PII) from the segment, such as full names, email addresses, or phone numbers. Only provide metadata (Name, API Name, Scope, Description) and aggregated counts.\"",
                    "Instruction 2 (Accuracy): \"Only provide information about segments that exist in the system. If a segment cannot be found, state that clearly. Do not invent or guess details.\"",
                    "Instruction 3 (Scope): \"Your job is only to fetch information. Do not offer to modify, delete, or run the segment unless that is a separate, defined action.\""
                ]
            }
        ],
        whyItMatters: "Guardrails build trust and are critical for deploying AI responsibly. They ensure agents operate within compliance and business policy frameworks, protecting both the company and its customers."
    },
    {
        title: "5. Channel (Where it can work)",
        subtitle: "Where do they work",
        definition: "Since this agent is built using the Salesforce \"Agent\" framework (Einstein Copilot), it can be deployed in several channels:",
        examplesTitle: "Deployment Channels:",
        examples: [
            "Einstein Copilot: The primary channel, available directly on the Lightning Experience desktop and Salesforce mobile app for your internal users.",
            "Experience Cloud: It can be surfaced to customers and partners on a website built with Experience Cloud.",
            "Slack: Can be integrated and called from within Slack channels via the Salesforce + Slack integration.",
            "Embedded Chat: Can be placed on any external website using an Embedded Service Chat window."
        ],
        whyItMatters: "The channel dictates the user’s context and required action. Deploying the agent across multiple channels makes its capabilities accessible wherever your users are working."
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
                    {aspect.examples.map((example, index) => {
                        if (typeof example === 'string') {
                            return (
                                <div key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{example}</span>
                                </div>
                            );
                        }
                        return (
                            <div key={index} className="pl-4 mt-4">
                                <p className="font-semibold text-slate-800">{example.subheading}</p>
                                <ul className="list-inside mt-2 space-y-2">
                                    {example.items.map((item, i) => <li key={i} className="flex items-start"><svg className="w-5 h-5 text-slate-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>{item}</span></li>)}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const SummaryTable = () => {
    const summaryData = [
        { component: "Role", definition: "Acts as an intelligent assistant for marketing and data teams.", examples: "Segment creation, information retrieval, intent disambiguation." },
        { component: "Data", definition: "What data it can access within Salesforce.", examples: "Data Cloud Objects (DMO/DLO), Segment Metadata, Prompt Templates." },
        { component: "Actions", definition: "What capabilities it has on the platform.", examples: "Execute Apex & Flows, Query DB (Read), Create Segments (Write)." },
        { component: "Guardrails", definition: "The safety rules and constraints it must follow.", examples: "Confirm before creating, no data modification, PII protection." },
        { component: "Channel", definition: "Where the agent can be deployed and used.", examples: "Einstein Copilot, Experience Cloud, Slack, Embedded Chat." },
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


const TechnicalComponentsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Segmentation Agent: Technical Components</h1>
        </header>
      </div>
      
      <div>
        <div className="mb-12 flex justify-center">
            <img 
                src="./pages/segmentation/Component.png" 
                alt="Agentforce Component Diagram" 
                className="rounded-lg shadow-lg border border-slate-200 object-contain w-full max-w-2xl"
            />
        </div>
        <SummaryTable />
        <div className="space-y-8">
          {aspectsData.map(aspect => (
            <AspectDetailCard key={aspect.title} aspect={aspect} />
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/segmentation-agent/architecture"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default TechnicalComponentsPage;
