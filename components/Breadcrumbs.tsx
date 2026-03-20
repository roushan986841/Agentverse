import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BREADCRUMB_MAP = {
    'segmentation-agent': 'Segmentation Agent',
    'camellia-agent': 'Camellia Agent',
    'flow-planner-agent': 'Flow Planner Agent',
    'campaign-performance-agent': 'Campaign Performance Agent',
    'hcp-360-insight-agent': 'HCP 360 Insight Agent',
    'campaign-strategy-agent': 'Campaign Strategy Agent',
    'requirement-gathering-agent': 'Requirement Gathering Agent',
    'email-segregator-agent': 'Email Segregator Agent',
    'agent-list': 'Agent List',
    'technical-components': 'Technical Components',
    'architecture': 'Architecture',
    'deliver-better': 'Deliver Better',
    'operate-better': 'Operate Better',
    'innovate-better': 'Innovate Better',
};

const formatCrumb = (crumb: string) => {
    return BREADCRUMB_MAP[crumb] || crumb
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) {
        return null;
    }

    // Handle special case for category pages to show a cleaner path
    if (pathnames[0] === 'category' && pathnames.length > 1) {
        const categorySlug = pathnames[1];
        const formattedCategory = formatCrumb(categorySlug);
        return (
             <nav aria-label="breadcrumb" className="mb-8">
                <ol className="flex items-center flex-wrap gap-y-2 text-sm font-medium text-slate-500">
                    <li>
                        <Link to="/" className="text-[#002D72] hover:underline">Home</Link>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-slate-400 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <span className="text-slate-700 font-semibold" aria-current="page">{formattedCategory}</span>
                    </li>
                </ol>
            </nav>
        );
    }

    return (
        <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-y-2 text-sm font-medium text-slate-500">
                <li>
                    <Link to="/" className="text-[#002D72] hover:underline">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const formattedValue = formatCrumb(value);

                    return (
                        <li key={to} className="flex items-center">
                            <svg className="w-4 h-4 text-slate-400 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            {isLast ? (
                                <span className="text-slate-700 font-semibold" aria-current="page">{formattedValue}</span>
                            ) : (
                                <Link to={to} className="text-[#002D72] hover:underline">{formattedValue}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;