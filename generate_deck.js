import pptxgen from "pptxgenjs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let pres = new pptxgen();

// Slide 1: Title
let slide1 = pres.addSlide();
slide1.background = { color: "001E4D" };
slide1.addText("Agentverse", { x: 1, y: 1.5, w: "80%", h: 1, fontSize: 54, color: "FFFFFF", bold: true, align: "center" });
slide1.addText("The Omnichannel AI Revolution for Life Sciences", { x: 1, y: 2.5, w: "80%", h: 1, fontSize: 24, color: "ED1C24", align: "center" });
slide1.addText("Sales Pitch & Executive Overview", { x: 1, y: 3.5, w: "80%", h: 1, fontSize: 18, color: "A0AABF", align: "center" });

// Slide 2: The Problem
let slide2 = pres.addSlide();
slide2.addText("The Challenge in Life Sciences Marketing", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: "001E4D", bold: true });
slide2.addText("Data silos, manual workflows, and generic campaigns are slowing down time-to-market and reducing HCP engagement.", { x: 0.5, y: 2, w: "90%", h: 2, fontSize: 20, color: "333333" });
slide2.addText("• 60% of time spent on manual reporting\n• Disconnected channels leading to poor HCP experiences\n• Slow turnaround from strategy to execution", { x: 0.5, y: 3.5, w: "90%", h: 2, fontSize: 18, color: "666666", bullet: true });

// Slide 3: Deliver Better
let slide3 = pres.addSlide();
slide3.addText("Deliver Better", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: "001E4D", bold: true });
slide3.addText("Gain unprecedented visibility and analyze engagement across all channels in real-time.", { x: 0.5, y: 1.5, w: "90%", h: 1, fontSize: 18, color: "ED1C24", bold: true });
slide3.addText("• HCP 360 Insight Agent\n• Channel Performance Agent\n• Email Segregator Agent", { x: 0.5, y: 2.5, w: "90%", h: 2, fontSize: 20, color: "333333", bullet: true });

// Slide 4: Operate Better
let slide4 = pres.addSlide();
slide4.addText("Operate Better", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: "001E4D", bold: true });
slide4.addText("Translate vision into structured technical requirements, Jira tickets, and visual flowcharts instantly.", { x: 0.5, y: 1.5, w: "90%", h: 1, fontSize: 18, color: "ED1C24", bold: true });
slide4.addText("• Workflow Planner Agent\n• Campaign Strategy Agent\n• Requirement Gathering Agent", { x: 0.5, y: 2.5, w: "90%", h: 2, fontSize: 20, color: "333333", bullet: true });

// Slide 5: Innovate Better
let slide5 = pres.addSlide();
slide5.addText("Innovate Better", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: "001E4D", bold: true });
slide5.addText("Predict behaviors, identify 'No-See' HCPs, and automatically route them into highly personalized digital journeys.", { x: 0.5, y: 1.5, w: "90%", h: 1, fontSize: 18, color: "ED1C24", bold: true });
slide5.addText("• Camellia – Next CampAgent\n• Segmentation Agent", { x: 0.5, y: 2.5, w: "90%", h: 2, fontSize: 20, color: "333333", bullet: true });

// Slide 6: ROI
let slide6 = pres.addSlide();
slide6.addText("The Agentverse Impact & ROI", { x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 36, color: "001E4D", bold: true });
slide6.addText("• 40% Reduction in Campaign Time-to-Market\n• 3x Increase in HCP Engagement Rates\n• 60% Less Time Spent on Manual Reporting\n• 100% Compliance & Audit Trail Accuracy", { x: 0.5, y: 2, w: "90%", h: 3, fontSize: 24, color: "333333", bullet: true });

// Slide 7: Close
let slide7 = pres.addSlide();
slide7.background = { color: "001E4D" };
slide7.addText("Thank You", { x: 1, y: 2, w: "80%", h: 1, fontSize: 48, color: "FFFFFF", bold: true, align: "center" });
slide7.addText("Let's stop managing campaigns and start orchestrating experiences.", { x: 1, y: 3, w: "80%", h: 1, fontSize: 20, color: "ED1C24", align: "center" });

const outPath = path.join(__dirname, "public", "Agentverse_Pitch_Deck.pptx");
pres.writeFile({ fileName: outPath }).then(() => {
    console.log("Deck created at: " + outPath);
});
