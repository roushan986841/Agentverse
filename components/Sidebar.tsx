import * as React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AGENT_CATEGORIES } from '../constants.tsx';

const Sidebar = () => {
    const location = useLocation();
    const [expandedCategories, setExpandedCategories] = React.useState(() => {
        const initialState = {};
        AGENT_CATEGORIES.forEach(category => {
            initialState[category.name] = category.agents.some(agent => 
                agent.path !== '/' && agent.path !== '/coming-soon' && location.pathname.startsWith(agent.path)
            );
        });
        return initialState;
    });

    React.useEffect(() => {
        const activeCategory = AGENT_CATEGORIES.find(category => 
            category.agents.some(agent => 
                agent.path !== '/' && agent.path !== '/coming-soon' && location.pathname.startsWith(agent.path)
            )
        );
        if (activeCategory) {
            setExpandedCategories(prev => {
                // Only update state if the active category is not already expanded
                if (!prev[activeCategory.name]) {
                    return { ...prev, [activeCategory.name]: true };
                }
                return prev;
            });
        }
    }, [location.pathname]);

    const toggleCategory = (categoryName) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [categoryName]: !prevState[categoryName]
        }));
    };
  
  return (
    <div className="w-72 bg-[#001E4D] border-r border-slate-700 flex flex-col h-full shadow-2xl">
        <div className="px-5 py-5 border-b border-white/10">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#001E4D] font-bold text-2xl group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">A</div>
                <h1 className="text-2xl font-bold text-white">Agentverse</h1>
            </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            <NavLink 
                to="/sales-pitch"
                className={({isActive}) => `flex items-center w-full text-left justify-between px-3 py-2.5 rounded-lg transition-colors duration-200 mb-2 ${isActive ? 'bg-[#ED1C24] text-white font-semibold' : 'text-slate-200 hover:bg-white/10'}`}
            >
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400">
                        <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                    <span className="text-sm font-semibold">Sales Pitch & Demo</span>
                </div>
            </NavLink>
            {AGENT_CATEGORIES.map(category => (
                <div key={category.name}>
                    <button onClick={() => toggleCategory(category.name)} className={`flex items-center w-full text-left justify-between px-3 py-2.5 text-slate-200 hover:bg-white/10 rounded-lg transition-colors duration-200`}>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 text-slate-400">{category.icon}</div>
                            <span className="text-sm font-semibold">{category.name}</span>
                        </div>
                        <svg className={`w-4 h-4 transition-transform duration-300 ${expandedCategories[category.name] ? 'rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    {expandedCategories[category.name] && (
                        <div className="pl-6 mt-1 space-y-1 border-l-2 border-white/10 ml-5 animate-fade-in">
                            {category.agents.map((agent) => (
                                <NavLink 
                                    key={agent.id} 
                                    to={agent.path}
                                    className={({isActive}) => `group flex items-center gap-3 pl-3 pr-2 py-2 text-sm rounded-md transition-colors duration-200 relative ${isActive ? 'bg-[#ED1C24] text-white font-semibold' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
                                >
                                    <div className="w-5 h-5 flex-shrink-0 transition-colors duration-200">{agent.icon}</div>
                                    <span>{agent.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
        <div className="p-4 border-t border-white/10">
            <p className="text-xs text-center text-slate-500">&copy; 2025 Agentverse</p>
        </div>
    </div>
  );
};

export default Sidebar;