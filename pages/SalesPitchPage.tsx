import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TargetIcon, ChartBarIcon, RocketIcon, UsersIcon, LightBulbIcon, PlatformAutomationIcon } from '../constants.tsx';

const SimulatedVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 225;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenes = [
    { start: 0, end: 45, image: 'CampaignStrategy.png', title: 'The Hook', text: "Imagine a marketing ecosystem where your data doesn't just sit there—it thinks, it plans, and it executes." },
    { start: 45, end: 90, image: 'HCP360Insight.png', title: 'Deliver Better', text: "Our HCP 360 Insight Agent and Channel Performance Agent work in tandem to give you unprecedented visibility." },
    { start: 90, end: 135, image: 'Flow Planner.png', title: 'Operate Better', text: "You simply describe your campaign strategy in natural language. The agents instantly translate your vision into structured technical requirements." },
    { start: 135, end: 180, image: 'Camellia.png', title: 'Innovate Better', text: "Meet Camellia and our Segmentation Agent. They identify hidden opportunities and automatically route them into highly personalized journeys." },
    { start: 180, end: 225, image: 'CampaignPerformance.png', title: 'ROI & Close', text: "A 40% reduction in campaign time-to-market. A 3x increase in HCP engagement rates. Welcome to Agentverse." }
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const currentScene = scenes.find(s => currentTime >= s.start && currentTime < s.end) || scenes[scenes.length - 1];

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setCurrentTime(percentage * duration);
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xl group">
      {/* Video Content (Images) */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img 
          src={`${import.meta.env.BASE_URL}${currentScene.image}`} 
          alt={currentScene.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      </div>

      {/* Subtitles */}
      <div className="absolute bottom-20 left-0 right-0 px-4 md:px-12 text-center">
        <p className="text-white text-lg md:text-2xl font-medium drop-shadow-lg max-w-4xl mx-auto bg-black/50 p-4 rounded-xl backdrop-blur-sm border border-white/10">
          "{currentScene.text}"
        </p>
      </div>

      {/* Big Play Button (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] cursor-pointer" onClick={() => setIsPlaying(true)}>
          <button className="w-24 h-24 bg-[#ED1C24]/90 hover:bg-[#ED1C24] text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ml-2">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 z-20">
        
        {/* Progress Bar */}
        <div 
          className="w-full h-2 bg-white/30 rounded-full cursor-pointer relative group/progress"
          onClick={handleSeek}
        >
          <div 
            className="absolute top-0 left-0 h-full bg-[#ED1C24] rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity"
            style={{ left: `calc(${(currentTime / duration) * 100}% - 8px)` }}
          ></div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between text-white mt-2">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#ED1C24] transition-colors">
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                </svg>
              )}
            </button>
            <span className="text-sm font-medium font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <span className="text-sm font-bold text-slate-300 ml-4 hidden sm:inline-block">
              Scene: {currentScene.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesPitchPage = () => {
  const [activeTab, setActiveTab] = useState('script');

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, url: string, filename: string) => {
    e.preventDefault();
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Download failed:', error);
        window.open(url, '_blank');
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-[#001E4D]">Agentverse: The Omnichannel AI Revolution</h1>
            <p className="text-slate-600 mt-2 text-lg">Complete Application Sales Pitch & Demo Video</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a 
              href={`${import.meta.env.BASE_URL}Agentverse_Pitch_Deck.pptx`}
              onClick={(e) => handleDownload(e, `${import.meta.env.BASE_URL}Agentverse_Pitch_Deck.pptx`, 'Agentverse_Pitch_Deck.pptx')}
              className="bg-[#001E4D] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-[#002D72] transition-colors shadow-sm flex items-center gap-2 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Deck (.pptx)
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}Agentverse_Video_Script.md`}
              onClick={(e) => handleDownload(e, `${import.meta.env.BASE_URL}Agentverse_Video_Script.md`, 'Agentverse_Video_Script.md')}
              className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-lg font-medium hover:bg-slate-200 transition-colors shadow-sm flex items-center gap-2 text-sm border border-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Script (.md)
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}Agentverse_NotebookLM_Guide.md`}
              onClick={(e) => handleDownload(e, `${import.meta.env.BASE_URL}Agentverse_NotebookLM_Guide.md`, 'Agentverse_NotebookLM_Guide.md')}
              className="bg-emerald-50 text-emerald-700 px-4 py-2.5 rounded-lg font-medium hover:bg-emerald-100 transition-colors shadow-sm flex items-center gap-2 text-sm border border-emerald-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              NotebookLM Guide
            </a>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <SimulatedVideoPlayer />
        </motion.div>

        {/* Pitch Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Script & Talking Points */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
          >
            <div className="flex border-b border-slate-200">
              <button 
                onClick={() => setActiveTab('script')}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${activeTab === 'script' ? 'text-[#001E4D] border-b-2 border-[#ED1C24]' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Executive Script
              </button>
              <button 
                onClick={() => setActiveTab('objections')}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${activeTab === 'objections' ? 'text-[#001E4D] border-b-2 border-[#ED1C24]' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Handling Objections
              </button>
              <button 
                onClick={() => setActiveTab('roi')}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${activeTab === 'roi' ? 'text-[#001E4D] border-b-2 border-[#ED1C24]' : 'text-slate-500 hover:text-slate-700'}`}
              >
                ROI & Value
              </button>
            </div>

            <div className="p-8 flex-1 overflow-y-auto bg-slate-50/50">
              {activeTab === 'script' && (
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-[#001E4D] mb-2">1. The Hook (0:00 - 0:45)</h3>
                    <p className="italic text-slate-500 mb-2">"Imagine a marketing ecosystem where your data doesn't just sit there—it thinks, it plans, and it executes."</p>
                    <p>Welcome to Agentverse. In today's hyper-competitive healthcare and life sciences market, reaching Healthcare Professionals (HCPs) and patients requires more than just automation. It requires intelligence. Agentverse is a suite of specialized AI agents designed to transform how you Deliver, Operate, and Innovate.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001E4D] mb-2">2. Deliver Better (0:45 - 1:30)</h3>
                    <p>Let's talk about delivery. Our <strong>HCP 360 Insight Agent</strong> and <strong>Channel Performance Agent</strong> work in tandem to give you unprecedented visibility. Instead of manually pulling reports, our agents analyze engagement across all channels in real-time. They tell you not just *what* happened, but *why* it happened, and *what to do next*.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001E4D] mb-2">3. Operate Better (1:30 - 2:15)</h3>
                    <p>Operational drag kills campaigns. Enter the <strong>Workflow Planner</strong> and <strong>Requirement Gathering Agent</strong>. You simply describe your campaign strategy in natural language. The agents instantly translate your vision into structured technical requirements, Jira tickets, and visual flowcharts. What used to take weeks of meetings now takes minutes.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001E4D] mb-2">4. Innovate Better (2:15 - 3:00)</h3>
                    <p>Finally, innovation. Meet <strong>Camellia</strong> and our <strong>Segmentation Agent</strong>. They don't just segment; they predict. They identify 'No-See' HCPs and automatically route them into highly personalized, multi-step digital journeys. They find the hidden opportunities in your Data Cloud that human analysts simply don't have the time to uncover.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001E4D] mb-2">5. The Close (3:00 - 3:45)</h3>
                    <p>Agentverse isn't just a tool; it's your new digital workforce. It integrates seamlessly with Salesforce, Marketing Cloud, and Data Cloud. It's secure, compliant, and ready to scale. Let's stop managing campaigns and start orchestrating experiences.</p>
                  </div>
                </div>
              )}

              {activeTab === 'objections' && (
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-[#001E4D] flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#ED1C24] flex items-center justify-center text-sm">Q</span>
                      "Is this secure enough for healthcare data?"
                    </h4>
                    <p className="mt-3 text-slate-600 pl-8 border-l-2 border-slate-100">
                      <strong>A:</strong> Absolutely. Agentverse is built on a Trust & Governance layer that ensures HIPAA compliance. It uses zero-data-retention prompts and connects directly to your existing secure environments (like Salesforce Health Cloud) without exposing PII to external models.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-[#001E4D] flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#ED1C24] flex items-center justify-center text-sm">Q</span>
                      "Will this replace my marketing team?"
                    </h4>
                    <p className="mt-3 text-slate-600 pl-8 border-l-2 border-slate-100">
                      <strong>A:</strong> No, it supercharges them. Agentverse handles the tedious, data-heavy tasks—like writing Jira tickets, pulling reports, and building segments—freeing your team to focus on creative strategy, messaging, and high-level relationship building.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-[#001E4D] flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#ED1C24] flex items-center justify-center text-sm">Q</span>
                      "How long does it take to implement?"
                    </h4>
                    <p className="mt-3 text-slate-600 pl-8 border-l-2 border-slate-100">
                      <strong>A:</strong> Because it leverages your existing CRM and Data Cloud infrastructure, deployment is measured in weeks, not months. The agents are pre-trained on industry-specific workflows.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'roi' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                      <div className="text-4xl font-black text-[#001E4D] mb-2">40%</div>
                      <div className="text-sm text-slate-500 font-medium">Reduction in Campaign Time-to-Market</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                      <div className="text-4xl font-black text-[#001E4D] mb-2">3x</div>
                      <div className="text-sm text-slate-500 font-medium">Increase in HCP Engagement Rates</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                      <div className="text-4xl font-black text-[#001E4D] mb-2">60%</div>
                      <div className="text-sm text-slate-500 font-medium">Less Time Spent on Manual Reporting</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                      <div className="text-4xl font-black text-[#001E4D] mb-2">100%</div>
                      <div className="text-sm text-slate-500 font-medium">Compliance & Audit Trail Accuracy</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Key Features to Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
          >
            <h3 className="text-lg font-bold text-[#001E4D] mb-6">Demo Highlights</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#001E4D] flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5"><PlatformAutomationIcon /></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Natural Language to Workflow</h4>
                  <p className="text-xs text-slate-500 mt-1">Show how the Flow Planner turns a typed sentence into a complete Mermaid.js diagram instantly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#ED1C24] flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5"><TargetIcon /></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Dynamic Segmentation</h4>
                  <p className="text-xs text-slate-500 mt-1">Highlight the 'No-See' HCP Segmenter. Explain how it combines Sales Cloud events with Marketing Cloud opens.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5"><ChartBarIcon /></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Predictive ROI</h4>
                  <p className="text-xs text-slate-500 mt-1">Point out the Ad Spend Optimizer. It doesn't just report CPA; it recommends budget reallocations automatically.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5"><RocketIcon /></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Camellia Orchestration</h4>
                  <p className="text-xs text-slate-500 mt-1">Showcase Camellia designing a multi-step journey. Emphasize the cross-channel capabilities.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pro Tip for Sales</h4>
              <p className="text-sm text-slate-600 italic">"Always tailor the demo to the client's biggest pain point. If they struggle with data silos, spend 80% of the time on the HCP 360 Insight Agent."</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SalesPitchPage;
