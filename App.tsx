import * as React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import HomePage from './pages/HomePage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';
import SegmentationAgentPage from './pages/segmentation/SegmentationAgentPage.tsx';
import SegmentationTechnicalComponentsPage from './pages/segmentation/CapabilitiesPage.tsx';
import ArchitecturePage from './pages/segmentation/ArchitecturePage.tsx';
import AgentListPage from './pages/segmentation/AgentListPage.tsx';

import CampaignPerformanceAgentPage from './pages/campaign-performance/AgentPage.tsx';
import CampaignPerformanceCapabilitiesPage from './pages/campaign-performance/CapabilitiesPage.tsx';
import CampaignPerformanceArchitecturePage from './pages/campaign-performance/ArchitecturePage.tsx';
import CampaignPerformanceAgentListPage from './pages/campaign-performance/AgentListPage.tsx';

import CamelliaAgentPage from './pages/camellia-agent/AgentPage.tsx';
import CamelliaCapabilitiesPage from './pages/camellia-agent/CapabilitiesPage.tsx';
import CamelliaAgentListPage from './pages/camellia-agent/AgentListPage.tsx';
import CamelliaArchitecturePage from './pages/camellia-agent/ArchitecturePage.tsx';

import FlowPlannerAgentPage from './pages/flow-planner-agent/FlowPlannerAgentPage.tsx';
import FlowPlannerTechnicalComponentsPage from './pages/flow-planner-agent/FlowPlannerCapabilitiesPage.tsx';
import FlowPlannerAgentListPage from './pages/flow-planner-agent/FlowPlannerAgentListPage.tsx';
import FlowPlannerArchitecturePage from './pages/flow-planner-agent/FlowPlannerArchitecturePage.tsx';

import HCP360InsightAgentPage from './pages/hcp-360-insight-agent/AgentPage.tsx';
import HCP360InsightCapabilitiesPage from './pages/hcp-360-insight-agent/CapabilitiesPage.tsx';
import HCP360InsightArchitecturePage from './pages/hcp-360-insight-agent/ArchitecturePage.tsx';
import HCP360InsightAgentListPage from './pages/hcp-360-insight-agent/AgentListPage.tsx';

import CampaignStrategyAgentPage from './pages/campaign-strategy-agent/AgentPage.tsx';
import CampaignStrategyCapabilitiesPage from './pages/campaign-strategy-agent/CapabilitiesPage.tsx';
import CampaignStrategyArchitecturePage from './pages/campaign-strategy-agent/ArchitecturePage.tsx';
import CampaignStrategyAgentListPage from './pages/campaign-strategy-agent/AgentListPage.tsx';

import RequirementGatheringAgentPage from './pages/requirement-gathering-agent/AgentPage.tsx';
import RequirementGatheringCapabilitiesPage from './pages/requirement-gathering-agent/CapabilitiesPage.tsx';
import RequirementGatheringArchitecturePage from './pages/requirement-gathering-agent/ArchitecturePage.tsx';
import RequirementGatheringAgentListPage from './pages/requirement-gathering-agent/AgentListPage.tsx';

import EmailSegregatorAgentPage from './pages/email-segregator-agent/AgentPage.tsx';
import EmailSegregatorCapabilitiesPage from './pages/email-segregator-agent/CapabilitiesPage.tsx';
import EmailSegregatorArchitecturePage from './pages/email-segregator-agent/ArchitecturePage.tsx';
import EmailSegregatorAgentListPage from './pages/email-segregator-agent/AgentListPage.tsx';
import SalesPitchPage from './pages/SalesPitchPage.tsx';

const ComingSoonPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center h-full p-6 sm:p-8 lg:p-10">
            <div className="text-center p-10 bg-white rounded-xl shadow-lg border border-slate-200 animate-scale-in">
                <h1 className="text-4xl font-bold text-[#001E4D]">Coming Soon!</h1>
                <p className="mt-4 text-lg text-slate-600">This agent's detailed showcase is being crafted.</p>
                <p className="mt-2 text-slate-500">Check back later for more information.</p>
                <button onClick={() => navigate(-1)} className="mt-8 inline-block bg-[#002D72] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-[#001E4D] transition-all duration-300 transform hover:scale-105 shadow-md">
                    Back
                </button>
            </div>
        </div>
    );
};

const App = () => {
  return (
    <div className="flex h-screen bg-transparent font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/segmentation-agent">
            <Route index element={<SegmentationAgentPage />} />
            <Route path="technical-components" element={<SegmentationTechnicalComponentsPage />} />
            <Route path="architecture" element={<ArchitecturePage />} />
            <Route path="agent-list" element={<AgentListPage />} />
          </Route>

          <Route path="/campaign-performance-agent">
            <Route index element={<CampaignPerformanceAgentPage />} />
            <Route path="technical-components" element={<CampaignPerformanceCapabilitiesPage />} />
            <Route path="architecture" element={<CampaignPerformanceArchitecturePage />} />
            <Route path="agent-list" element={<CampaignPerformanceAgentListPage />} />
          </Route>
          
          <Route path="/camellia-agent">
            <Route index element={<CamelliaAgentPage />} />
            <Route path="technical-components" element={<CamelliaCapabilitiesPage />} />
            <Route path="architecture" element={<CamelliaArchitecturePage />} />
            <Route path="agent-list" element={<CamelliaAgentListPage />} />
          </Route>
          <Route path="/flow-planner-agent">
            <Route index element={<FlowPlannerAgentPage />} />
            <Route path="technical-components" element={<FlowPlannerTechnicalComponentsPage />} />
            <Route path="architecture" element={<FlowPlannerArchitecturePage />} />
            <Route path="agent-list" element={<FlowPlannerAgentListPage />} />
          </Route>

          <Route path="/hcp-360-insight-agent">
            <Route index element={<HCP360InsightAgentPage />} />
            <Route path="technical-components" element={<HCP360InsightCapabilitiesPage />} />
            <Route path="architecture" element={<HCP360InsightArchitecturePage />} />
            <Route path="agent-list" element={<HCP360InsightAgentListPage />} />
          </Route>

          <Route path="/campaign-strategy-agent">
            <Route index element={<CampaignStrategyAgentPage />} />
            <Route path="technical-components" element={<CampaignStrategyCapabilitiesPage />} />
            <Route path="architecture" element={<CampaignStrategyArchitecturePage />} />
            <Route path="agent-list" element={<CampaignStrategyAgentListPage />} />
          </Route>

          <Route path="/requirement-gathering-agent">
            <Route index element={<RequirementGatheringAgentPage />} />
            <Route path="technical-components" element={<RequirementGatheringCapabilitiesPage />} />
            <Route path="architecture" element={<RequirementGatheringArchitecturePage />} />
            <Route path="agent-list" element={<RequirementGatheringAgentListPage />} />
          </Route>

          <Route path="/email-segregator-agent">
            <Route index element={<EmailSegregatorAgentPage />} />
            <Route path="technical-components" element={<EmailSegregatorCapabilitiesPage />} />
            <Route path="architecture" element={<EmailSegregatorArchitecturePage />} />
            <Route path="agent-list" element={<EmailSegregatorAgentListPage />} />
          </Route>

          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/sales-pitch" element={<SalesPitchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;