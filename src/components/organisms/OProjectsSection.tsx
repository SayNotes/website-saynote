import React from "react";
import { MTermLine } from "../molecules/MTermLine";
import { ADivider } from "../atoms/ADivider";
import { MProjectCard } from "../molecules/MProjectCard";

export const OProjectsSection: React.FC = () => {
  const PROJECTS = [
    { title: "NEXUS-PLATFORM", desc: "Enterprise SaaS for team collaboration — real-time editing, WebSocket presence, multi-tenant auth, and auto-scaling infra.", tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"], year: "2024", status: "LIVE" },
    { title: "ALGO-TRADER", desc: "ML-powered automated trading system with backtesting engine, risk management, and live market data integration via WebSocket.", tech: ["Python", "FastAPI", "TensorFlow", "ClickHouse"], year: "2024", status: "LIVE" },
    { title: "QUANTUM-CMS", desc: "Headless CMS with visual drag-and-drop page builder, GraphQL API, media CDN, and i18n support out of the box.", tech: ["React", "GraphQL", "Node.js", "MongoDB"], year: "2023", status: "BETA" },
    { title: "VOID-ANALYTICS", desc: "Privacy-first analytics platform — cookie-less tracking, GDPR compliant, funnel analysis, and real-time dashboards.", tech: ["Vue.js", "Go", "ClickHouse", "K8s"], year: "2023", status: "LIVE" },
    { title: "RETRO-OS-UI", desc: "Open-source React component library mimicking a retro operating system. 40+ components, themes, and sound effects.", tech: ["React", "TypeScript", "Storybook", "NPM"], year: "2022", status: "OSS" },
    { title: "MESHLINK-API", desc: "High-throughput IoT data ingestion gateway handling 50k+ msg/sec with dynamic routing and schema validation.", tech: ["Go", "MQTT", "Kafka", "TimescaleDB"], year: "2022", status: "LIVE" },
  ];

  return (
    <section className="py-16 px-8">
      <MTermLine prompt="C:\>" command="dir /projects /od /p" />
      <ADivider />
      <div className="mt-2 text-[var(--color-gray)]/40 text-[0.85rem] mb-6">
        Volume in drive C is PORTFOLIO&nbsp;&nbsp;|&nbsp;&nbsp;{PROJECTS.length} File(s) found
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] gap-4">
        {PROJECTS.map(p => <MProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
};