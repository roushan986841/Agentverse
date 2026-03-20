import * as React from 'react';
import { Link } from 'react-router-dom';
import { AGENT_CATEGORIES } from '../constants.tsx';
import { AgentCard } from '../components/AgentCard.tsx';
import { GoogleGenAI, Type } from "@google/genai";

// Type for a single agent
type Agent = typeof AGENT_CATEGORIES[0]['agents'][0];


// Fix: Use a specific type for the category prop instead of 'any'.
const CategoryCard: React.FC<{ category: typeof AGENT_CATEGORIES[0] }> = ({ category }) => {
    const slug = category.name.replace(/[^a-zA-Z0-9 &]/g, "").trim().toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    const displayedAgents = category.agents.slice(0, 3);
    const remainingAgents = category.agents.length - displayedAgents.length;

    return (
        <Link to={`/category/${slug}`} className="block group h-full">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 flex flex-col p-6 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-[#ED1C24]/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1.5 w-full bg-slate-200 transition-all duration-300 group-hover:bg-[#ED1C24]"></div>
                <div className="flex items-start gap-4 mb-5 pt-4">
                    <div className="w-10 h-10 text-[#002D72] flex-shrink-0 mt-1 transition-colors duration-300 group-hover:text-[#ED1C24]">{category.icon}</div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800">{category.name}</h3>
                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{category.description}</p>
                    </div>
                </div>
                
                <div className="my-4 border-t border-slate-200/80"></div>

                <ul className="space-y-4 text-sm text-slate-600 mb-6 flex-grow">
                    {displayedAgents.map(agent => (
                        <li key={agent.id} className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                            <div>
                                <span className="font-semibold text-slate-700">{agent.name}</span>
                            </div>
                        </li>
                    ))}
                    {remainingAgents > 0 && (
                        <li className="text-slate-500 pl-7 text-xs font-medium">...and {remainingAgents} more specialized agents</li>
                    )}
                </ul>
                
                <div className="mt-auto text-right">
                    <span className="font-semibold text-[#002D72] group-hover:text-[#ED1C24] transition-colors">
                        Explore Category <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
                    </span>
                </div>
            </div>
        </Link>
    );
};

const HomePage = () => {
    const [problemStatement, setProblemStatement] = React.useState('');
    const [suggestedAgents, setSuggestedAgents] = React.useState<Agent[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasSearched, setHasSearched] = React.useState(false);

    const allAgents = React.useMemo(() => AGENT_CATEGORIES.flatMap(category => category.agents.map(agent => ({
        id: agent.id,
        name: agent.name,
        description: agent.description,
        path: agent.path,
        icon: agent.icon
    }))), []);


    const handleFindAgents = async () => {
        if (!problemStatement.trim()) return;

        setIsLoading(true);
        setHasSearched(true);
        setSuggestedAgents([]);
        
        setTimeout(() => {
            document.getElementById('agent-results-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const agentListString = JSON.stringify(allAgents.map(({ path, icon, ...rest }) => rest));

            const prompt = `You are an expert consultant specializing in business process automation and AI agents for the Life Sciences industry.
            A user has described a problem. Your task is to analyze the problem and recommend the most suitable agents from the provided list.
            
            Problem Description: "${problemStatement}"
            
            Available Agents (JSON format):
            ${agentListString}
            
            Based on the problem description, identify the top 1 to 4 agents that would be most effective.
            Return your answer as a JSON object with a single key "suggested_agent_ids", which is an array of strings containing the IDs of the recommended agents.
            For example: {"suggested_agent_ids": ["segmentation-agent", "flow-planner-agent"]}.
            If no agents are suitable, return an empty array.`;

            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    suggested_agent_ids: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.STRING
                        }
                    }
                }
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema,
                },
            });
            
            const responseJsonText = response.text;
            const result = JSON.parse(responseJsonText);
            const agentIds = result.suggested_agent_ids || [];

            if (agentIds.length > 0) {
                const matchedAgents = allAgents.filter(agent => agentIds.includes(agent.id));
                setSuggestedAgents(matchedAgents);
            } else {
                setSuggestedAgents([]);
            }

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setSuggestedAgents([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            handleFindAgents();
        }
    };

    const handleScrollToLibrary = (e) => {
        e.preventDefault();
        document.getElementById('agent-library')?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const renderResults = () => {
        if (isLoading) {
            return (
                <div className="text-center py-10">
                    <div className="animate-pulse">
                        <svg className="mx-auto h-12 w-12 text-[#002D72]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <p className="mt-4 text-lg font-semibold text-slate-600">Thinking...</p>
                        <p className="text-slate-500">Analyzing your problem to find the best agents for the job.</p>
                    </div>
                </div>
            );
        }

        if (suggestedAgents.length > 0) {
            return (
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Our Top Recommendations For You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {suggestedAgents.map(agent => (
                             <div key={agent.id} className="flex flex-col animate-scale-in">
                                <div className="flex-grow">
                                    <AgentCard agent={agent} />
                                </div>
                                <a
                                    href="https://indegenehcosp.my.salesforce.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 w-full text-center bg-[#002D72] text-white font-bold py-2.5 px-4 rounded-lg hover:bg-[#001E4D] transition-all duration-300 transform hover:scale-105 shadow-md text-sm"
                                >
                                    Demo This Agent
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="text-center py-10 bg-amber-50 rounded-lg border border-amber-200 animate-fade-in">
                <h3 className="text-xl font-semibold text-amber-800">No Direct Matches Found</h3>
                <p className="mt-2 text-amber-700 max-w-2xl mx-auto">
                    We couldn't find an agent that perfectly matches your description. Try describing your problem with different keywords.
                    <br /> For example, instead of 'make customers happier', try 'analyze customer feedback for sentiment'.
                </p>
            </div>
        );
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-white border-b border-slate-200/80">
                 <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(to_bottom,white_50%,transparent)]"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                               Intelligent AI Agents Powering <span className="text-[#002D72]">Life Sciences</span>
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                                Agentverse is a curated library of life sciences-focused Agentforce use cases, designed to accelerate your business outcomes.
                            </p>
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                                <a 
                                    href="#agent-library" 
                                    onClick={handleScrollToLibrary} 
                                    className="inline-block bg-[#002D72] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#001E4D] transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
                                >
                                    Browse Library
                                </a>
                            </div>
                        </div>

                        {/* Right prompt box */}
                        <div className="flex justify-center">
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-200/80 w-full max-w-lg">
                                <h3 className="text-xl font-bold text-center text-[#002D72] mb-4">Find Your Agent Army</h3>
                                <p className="text-center text-slate-600 mb-6 text-sm">
                                    Describe a business process or problem, and let our AI suggest the most effective agents for the job.
                                </p>
                                <textarea
                                    value={problemStatement}
                                    onChange={(e) => setProblemStatement(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    rows={4}
                                    className="w-full p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ED1C24] focus:border-[#ED1C24] transition duration-200 resize-none text-sm shadow-inner bg-slate-50/50"
                                    placeholder="e.g., 'I need to automate routing new leads to sales teams based on location and industry...'"
                                    aria-label="Problem Statement Input"
                                    disabled={isLoading}
                                />
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-xs text-slate-400">
                                        <kbd className="font-sans font-semibold border border-slate-300 rounded px-1.5 py-0.5 bg-slate-100">Ctrl</kbd> + <kbd className="font-sans font-semibold border border-slate-300 rounded px-1.5 py-0.5 bg-slate-100">Enter</kbd>
                                    </p>
                                    <button
                                        onClick={handleFindAgents}
                                        disabled={!problemStatement.trim() || isLoading}
                                        className="inline-flex items-center bg-[#ED1C24] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-[#c91a20] transition-colors duration-300 shadow-lg transform hover:scale-105 disabled:bg-slate-400 disabled:scale-100 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Analyzing...' : 'Suggest Agents'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Agent Suggestion Results Section */}
            {hasSearched && (
                <section id="agent-results" className="bg-white py-16 sm:py-24">
                    <div id="agent-results-container" className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {renderResults()}
                    </div>
                </section>
            )}

            {/* Agent Library Section */}
            <section id="agent-library" className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200/80">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">The Agentverse Library</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A library of pre-built agents that can be configured for your organization.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {AGENT_CATEGORIES.map(category => (
                            <CategoryCard key={category.name} category={category} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;