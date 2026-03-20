



import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AGENT_CATEGORIES } from '../constants.tsx';
import { AgentCard } from '../components/AgentCard.tsx';
import Breadcrumbs from '../components/Breadcrumbs.tsx';

const CategoryPage = () => {
    const { categorySlug } = useParams();

    const category = AGENT_CATEGORIES.find(
        cat => cat.name.replace(/[^a-zA-Z0-9 &]/g, "").trim().toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === categorySlug
    );

    if (!category) {
        return (
            <div className="flex items-center justify-center h-full bg-slate-50 p-6 sm:p-8 lg:p-10">
                <div className="text-center p-10 bg-white rounded-xl shadow-md border border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-800">Category Not Found</h1>
                    <p className="mt-4 text-slate-600">The category you're looking for doesn't exist.</p>
                    <Link to="/" className="mt-8 inline-block bg-[#002D72] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-[#00255A] transition-colors duration-300">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 sm:p-8 lg:p-10">
            <div>
                <Breadcrumbs />
                <header className="mb-10">
                    <h1 className="text-4xl font-bold text-[#002D72] tracking-tight">{category.name}</h1>
                    <p className="mt-2 text-lg text-slate-600 max-w-3xl">{category.description}</p>
                </header>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {category.agents.map(agent => (
                        <AgentCard key={agent.id} agent={agent} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
