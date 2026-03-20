import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs.tsx';

const failuresData = [
  {
    category: "1. Generation and Logic Failures",
    description: "These failures occur when the agent generates incorrect, inefficient, or non-compliant Salesforce Flow metadata.",
    failures: [
      {
        title: "Generating Incorrect or Buggy Logic",
        text: "The agent misinterprets the user's prompt and generates a Flow with flawed logic, incorrect conditions, or wrong actions, which could lead to data corruption or process failures when deployed.",
        example: "The agent is asked to 'update the Opportunity status to Closed Lost if the close date is in the past'. It generates a flow that incorrectly updates *all* opportunities, not just open ones, causing massive data integrity issues."
      },
      {
        title: "Creating Non-Bulkified or Inefficient Flows",
        text: "The agent generates a Flow that works for a single record but fails under load because it isn't 'bulkified' (e.g., it places a DML statement or SOQL query inside a loop), hitting Salesforce governor limits and causing errors in production.",
        example: "A generated flow to update child records works perfectly in a test with one record, but fails completely when a data load of 200 records triggers it simultaneously."
      },
      {
        title: "Ignoring Org-Specific Context and Nuances",
        text: "The agent generates a generic, 'textbook' Flow that doesn't account for the org's unique validation rules, existing triggers, or complex record-sharing configurations, leading to deployment errors or unexpected runtime behavior.",
        example: "The agent creates a flow to create a contact, but it fails on deployment because it doesn't populate a custom required field that is unique to that specific Salesforce org."
      }
    ]
  },
  {
    category: "2. Deployment and Security Failures",
    description: "These failures relate to the security, deployment, and lifecycle management of the generated automations.",
    failures: [
      {
        title: "Security Vulnerabilities (SOQL Injection, FLS)",
        text: "If not properly sandboxed, the agent could generate Flows that inadvertently ignore Field-Level Security (FLS) or, in a worst-case scenario, create Apex actions that are vulnerable to SOQL injection if they process user input insecurely.",
        example: "An agent generates an Apex action for a flow that dynamically builds a query string, exposing a potential injection vulnerability if it were ever exposed to external input."
      },
      {
        title: "Creating Conflicting Automations",
        text: "The agent deploys a new Flow without checking for existing automations (e.g., other Flows, Apex Triggers, Process Builders) on the same object, leading to recursive triggers, unpredictable outcomes, and performance issues.",
        example: "The agent creates a 'before-save' flow to update an address, which conflicts with an existing Apex trigger that also tries to update the address, leading to a save order of execution error."
      },
      {
        title: "Bypassing Change Management and Testing",
        text: "The ease of generation encourages users to create and deploy Flows directly to production without proper testing in a sandbox, documentation, or peer review, leading to a fragile and unmanageable org.",
        example: null
      }
    ]
  },
  {
    category: "3. Strategic and Governance Failures",
    description: "These failures occur when the agent's use is disconnected from broader business strategy and IT governance.",
    failures: [
      {
        title: "Automating a Bad Process",
        text: "The agent makes it very easy to automate a flawed or inefficient business process. Instead of improving operations, it simply makes a bad process run faster, cementing inefficiency into the system.",
        example: "A user asks the agent to automate a 10-step manual approval process. The agent does so successfully, but the real failure was not first questioning and simplifying the approval process itself."
      },
      {
        title: "Lack of Oversight and 'Automation Sprawl'",
        text: "Without governance, users create dozens of small, single-purpose, and undocumented automations, leading to an org that is incredibly difficult to maintain, debug, and enhance.",
        example: null
      },
      {
        title: "Building Solutions Instead of Solving Problems",
        text: "The focus shifts from solving the underlying business problem to the novelty of generating a Flow. This can lead to technically correct but strategically worthless automations.",
        example: null
      }
    ]
  }
];

const FailureCategoryCard: React.FC<{ category: any }> = ({ category }) => (
    <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 transition-shadow hover:shadow-lg">
        <h3 className="text-3xl font-bold text-[#002D72]">{category.category}</h3>
        <p className="text-lg text-slate-500 my-4 italic">{category.description}</p>
        <div className="mt-6 border-t border-slate-200 pt-6 space-y-8">
            {category.failures.map((failure, index) => (
                <div key={index}>
                    <h4 className="font-bold text-xl text-[#ED1C24]">{failure.title}</h4>
                    <p className="mt-2 text-slate-600 leading-relaxed">{failure.text}</p>
                    {failure.example && (
                        <div className="mt-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                            <p className="text-sm text-slate-700"><span className="font-semibold text-slate-800">Example:</span> {failure.example}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);


const FlowAutomationFailuresPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10">
      <div>
        <Breadcrumbs />
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D72]">Potential Failures of a Flow Automation Agent</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A consolidated list of potential failures when generating and deploying automations.</p>
        </header>
      </div>
      
      <div>
        <div className="space-y-8">
          {failuresData.map((category, index) => (
            <FailureCategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
      
      <div className="mt-12 flex justify-end items-center">
        <Link
            to="/flow-automation-agent/agent-list"
            className="inline-flex items-center bg-[#002D72] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#00255A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
            View Agent List
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
};

export default FlowAutomationFailuresPage;
