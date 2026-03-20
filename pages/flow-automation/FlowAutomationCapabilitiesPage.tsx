





import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const aspectsData = [
    {
        title: "1. Surfaces",
        subtitle: "Where agents can be invoked",
        definition: "The interface where users interact with the agent to describe and generate their desired automation.",
        examplesTitle: "Example Surfaces:",
        examples: [
            "AgentForce Web UI: A dedicated page with a prompt box for users to type their automation request.",
            "Salesforce App Builder: A Lightning Component that can be added to any page for contextual flow creation.",
            "Slack/Teams Integration: A chatbot that allows users to request new flows conversationally.",
            "IDE Extension (VS Code): A tool for developers to quickly scaffold flows from comments or text descriptions."
        ],
        whyItMatters: "Meeting users where they work, whether in Salesforce setup or their IDE, lowers the barrier to adoption and makes automation a natural part of their workflow."
    },
    {
        title: "2. Topics and Instructions",
        subtitle: "The job-to-be-done and its rules",
        definition: "The user's natural language prompt describing the business process to be automated, including objects, conditions, and outcomes.",
        examplesTitle: "Examples:",
        examples: [
            {
                subheading: "Topics (User Prompts):",
                items: [
                    "\"When an Opportunity is updated and the stage is 'Closed Won', create a new Project record and assign it to the Opportunity owner.\"",
                    "\"Every time a new Case is created with a priority of 'High', send an email alert to the support manager.\"",
                    "\"Create a screen flow that allows a user to create a new Contact and an associated Account in one step.\""
                ]
            },
            {
                subheading: "Instructions/Guardrails (System-enforced):",
                items: [
                    "Always use 'before-save' flows for field updates on the same record.",
                    "Include a fault path to catch and log any errors during execution.",
                    "Automatically add a description to the flow based on the user's prompt.",
                    "Check for existing automations on the same object to prevent conflicts."
                ]
            }
        ],
        whyItMatters: "The quality of the prompt dictates the quality of the output. The agent's ability to understand complex business logic is key, while built-in guardrails ensure the generated flows are robust and efficient."
    },
    {
        title: "3. Actions",
        subtitle: "Tools the agent can access to get work done",
        definition: "The agent's primary action is to interact with the Salesforce Metadata API to create, define, and deploy Flow components.",
        examplesTitle: "Examples of Actions:",
        examples: [
            "Generate Flow metadata in XML format.",
            "Call the Salesforce Metadata API to deploy the new Flow to a Sandbox.",
            "Query existing Salesforce schema (objects, fields) to validate the user's prompt.",
            "Analyze existing flows to identify potential conflicts or redundancies.",
            "Suggest improvements or alternative implementations to the user."
        ],
        whyItMatters: "The agent's ability to directly manipulate Salesforce metadata is what makes it a true automation tool, not just a code generator. It builds and deploys the final product."
    },
    {
        title: "4. Data Library",
        subtitle: "Data the agent has access to",
        definition: "The agent requires access to metadata, not record data, to understand the structure of the Salesforce org and build valid flows.",
        examplesTitle: "Types of Data:",
        examples: [
            "Salesforce Object and Field Schema: The list of all standard and custom objects and their fields.",
            "Existing Flow, Process Builder, and Workflow Rule Definitions: To understand the current automation landscape.",
            "User and Profile Information: To understand permissions and set running context.",
            "Salesforce Flow Best Practices: A knowledge base of design patterns and common pitfalls."
        ],
        whyItMatters: "Access to the org's schema is crucial for the agent to validate that the user's request is possible (e.g., the requested fields exist) and to generate correct API names and data types."
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
                                    <svg className="w-5 h-5 text-[#ED1C24] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{example}</span>
                                </div>
                            );
                        }
                        return (
                            <div key={index} className="pl-4">
                                <p className="font-semibold text-slate-800">{example.subheading}</p>
                                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                                    {example.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const FlowAutomationTechnicalComponentsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Flow Automation Agent: Technical Components</h1>
        </header>
      </div>
      
      <div>
        <div className="space-y-8">
          {aspectsData.map(aspect => (
            <AspectDetailCard key={aspect.title} aspect={aspect} />
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/flow-automation-agent/architecture"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default FlowAutomationTechnicalComponentsPage;
