import { 
  BarChart3, 
  Database, 
  LineChart, 
  Search, 
  FileText, 
  Github, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Award, 
  CheckCircle2,
  Code2,
  Cpu,
  Layout,
  ArrowRight,
  Download,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const DATA = {
  name: "Alex Chen",
  role: "Business Analyst",
  headline: "Bridging Data Insights with Strategic Business Outcomes.",
  valueProp: "I transform complex datasets into actionable growth strategies, specializing in supply chain optimization and predictive modeling.",
  about: {
    summary: "Final-year Business Analytics student with a track record of identifying $150k+ in annual savings through data-driven process improvements. I specialize in translating technical findings into executive-level narratives that drive decision-making.",
    strengths: [
      "Quantitative Modeling & Forecasting",
      "Stakeholder Management & Requirements Gathering",
      "Process Optimization (Lean Six Sigma)",
      "Data Visualization & Storytelling"
    ],
    techStack: [
      { category: "Languages", items: ["SQL (PostgreSQL)", "Python (Pandas, Scikit-learn)", "R"] },
      { category: "Visualization", items: ["Tableau", "Power BI", "D3.js"] },
      { category: "Tools", items: ["Excel (VBA/Power Query)", "Jira", "Confluence", "SAP"] },
      { category: "Cloud", items: ["AWS Redshift", "Google BigQuery"] }
    ]
  },
  projects: [
    {
      id: "supply-chain",
      title: "Supply Chain Cost Optimization Engine",
      problem: "A regional distributor faced a 15% year-over-year increase in logistics costs due to inefficient route planning and inventory stockouts.",
      importance: "Logistics costs were eroding profit margins, threatening the company's ability to compete on price in a saturated market.",
      approach: "Developed a Python-based optimization model using linear programming to re-route deliveries and implemented a safety stock forecasting tool in SQL.",
      tech: ["Python", "SQL", "Tableau", "Pandas"],
      results: [
        "Reduced total logistics spend by 12% ($180k annually).",
        "Decreased stockout frequency by 22% through predictive inventory alerts.",
        "Automated weekly reporting, saving 10 manual hours/week for the ops team."
      ],
      demo: "#",
      github: "#"
    },
    {
      id: "churn-prediction",
      title: "SaaS Customer Churn Predictive Model",
      problem: "A B2B SaaS startup was losing 4% of its customer base monthly without a clear understanding of the underlying triggers.",
      importance: "High churn was stifling MRR growth and increasing Customer Acquisition Cost (CAC) pressure.",
      approach: "Conducted exploratory data analysis (EDA) on user behavior logs and built a Random Forest classifier to identify 'at-risk' accounts 30 days before renewal.",
      tech: ["R", "Power BI", "SQL", "Random Forest"],
      results: [
        "Achieved 87% prediction accuracy for churn triggers.",
        "Identified 'Feature Fatigue' as the primary churn driver, leading to a UI/UX redesign.",
        "Enabled the CS team to retain 15% more at-risk accounts in Q3."
      ],
      demo: "#",
      github: "#"
    }
  ],
  experience: [
    {
      company: "FinTech Solutions Inc.",
      role: "Data Analyst Intern",
      period: "June 2025 – Aug 2025",
      bullets: [
        "Engineered a SQL-based dashboard for real-time monitoring of transaction failures, reducing mean-time-to-resolution (MTTR) by 30%.",
        "Collaborated with Product Managers to define KPIs for a new mobile payment feature, tracking adoption across 50k+ users.",
        "Presented weekly data narratives to the VP of Operations, influencing a $50k shift in marketing spend toward high-LTV segments."
      ]
    },
    {
      company: "University Research Lab",
      role: "Junior Research Assistant",
      period: "Sept 2024 – May 2025",
      bullets: [
        "Cleaned and normalized a dataset of 1M+ records using Python, ensuring 99% data integrity for a published economic study.",
        "Automated data collection from 5+ public APIs, reducing manual entry time by 95%."
      ]
    }
  ],
  certifications: [
    { name: "Google Data Analytics Professional Certificate", issuer: "Coursera", date: "2025" },
    { name: "Tableau Desktop Specialist", issuer: "Tableau", date: "2024" },
    { name: "Excel Skills for Business: Advanced", issuer: "Macquarie University", date: "2024" }
  ],
  seo: {
    bio: "Alex Chen is a high-potential Business Analyst candidate with expertise in SQL, Python, and Tableau. Specializing in data-driven strategy and process optimization, Alex has a proven track record of delivering measurable business impact, including a 12% reduction in logistics costs for regional distributors. With a background in Business Analytics and experience in FinTech, Alex bridges the gap between complex technical data and executive decision-making. Looking for Business Analyst roles where data storytelling and quantitative modeling can drive growth and operational efficiency. Skills include predictive modeling, stakeholder management, and advanced Excel."
  }
};

export const ICONS = {
  BarChart3, Database, LineChart, Search, FileText, Github, ExternalLink, Mail, Linkedin, Award, CheckCircle2, Code2, Cpu, Layout, ArrowRight, Download, Briefcase, GraduationCap
};
