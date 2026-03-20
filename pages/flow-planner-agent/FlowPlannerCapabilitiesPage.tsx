





import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const aspectsData = [
    {
        title: "1. Surfaces",
        subtitle: "Where the agent visualizes the flow",
        definition: "The interface where users interact with the agent to describe their process and view the resulting diagram.",
        examplesTitle: "Example Surfaces:",
        examples: [
            "Agentverse Web UI: A dedicated page with a prompt box and a canvas to render the flow diagram.",
            "Salesforce Flow Builder: A plugin that generates a visual plan before building the actual flow.",
            "Collaboration Tools (e.g., Lucidchart, Miro): An integration that sends the generated diagram to a planning board.",
            "Documentation Platforms (e.g., Confluence): Export diagrams directly to a knowledge base."
        ],
        whyItMatters: "The surface must provide both an intuitive input for the prompt and a clear, readable canvas for the output diagram, facilitating immediate feedback and collaboration."
    },
    {
        title: "2. Topics and Instructions",
        subtitle: "The job-to-be-done and its rules",
        definition: "The user's natural language prompt describing the business process to be visualized, including triggers, conditions, and actions.",
        examplesTitle: "Examples:",
        examples: [
            {
                subheading: "Topics (User Prompts):",
                items: [
                    "\"When an Opportunity is updated and the stage is 'Closed Won', create a new Project record and assign it to the Opportunity owner.\"",
                    "\"Every time a new Case is created with a priority of 'High', check if the Account is a VIP. If it is, send an email to the support manager; otherwise, assign it to the Tier 1 queue.\"",
                    "\"Visualize a screen flow that lets a user create a new Contact and an associated Account.\""
                ]
            },
            {
                subheading: "Instructions/Guardrails (System-enforced):",
                items: [
                    "Clearly label all decision points and outcomes.",
                    "Use standard flowchart notation (e.g., rectangles for actions, diamonds for decisions).",
                    "Automatically add a title and description to the diagram based on the prompt.",
                    "Highlight the objects and key fields involved in each step."
                ]
            }
        ],
        whyItMatters: "The agent's ability to parse complex, multi-step logic with conditional paths is key. The guardrails ensure the output is a standardized, easy-to-read diagram, not a confusing mess."
    },
    {
        title: "3. Actions",
        subtitle: "Tools the agent can access to get work done",
        definition: "The agent's primary action is to generate a visual representation of a process, not to execute it.",
        examplesTitle: "Examples of Actions:",
        examples: [
            "Generate a diagram in a specific format (e.g., Mermaid.js syntax, SVG, PNG).",
            "Render the generated diagram in a web canvas.",
            "Allow the user to download the diagram file.",
            "Query Salesforce metadata to validate object and field names mentioned in the prompt.",
            "Suggest simplifications or best practices for the described flow."
        ],
        whyItMatters: "The core action is translation—from text to a visual medium. The output must be accurate and portable for use in various documentation and planning tools."
    },
    {
        title: "4. Data Library",
        subtitle: "Data the agent has access to",
        definition: "The agent needs access to Salesforce metadata to understand the org's structure and create accurate diagrams. It does not need access to record data.",
        examplesTitle: "Types of Data:",
        examples: [
            "Salesforce Object and Field Schema: The list of all standard and custom objects and their fields.",
            "Flow and Automation Best Practices: A knowledge base of common design patterns.",
            "User and Profile Information: To understand permissions and context for the process.",
            "Diagramming Logic: Knowledge of how to construct a logical and readable flowchart."
        ],
        whyItMatters: "Access to the org's schema allows the agent to create a diagram that accurately reflects the real-world system, using correct field and object names, which is critical for planning."
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

const FlowPlannerTechnicalComponentsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Flow Planner Agent: Technical Components</h1>
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
          to="/flow-planner-agent/architecture"
          className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Next page
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default FlowPlannerTechnicalComponentsPage;
