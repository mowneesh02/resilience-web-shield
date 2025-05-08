
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cloud, Database, Lock, RefreshCw, Server } from "lucide-react";

const StrategySection = () => {
  const strategies = [
    {
      title: "Stateful Data Persistence",
      description: "Backup strategies for persistent volumes and stateful containerized applications.",
      icon: <Database className="h-10 w-10 text-primary" />,
      benefits: ["Volume snapshots", "Incremental backups", "Data consistency guarantees"]
    },
    {
      title: "Configuration Backup",
      description: "Preserve Kubernetes configurations, secrets, and critical deployment specs.",
      icon: <Server className="h-10 w-10 text-secondary" />,
      benefits: ["Version controlled configs", "Secret management", "Fast environment recreation"]
    },
    {
      title: "Multi-Cloud Resilience",
      description: "Distribute backups across multiple cloud providers for maximum redundancy.",
      icon: <Cloud className="h-10 w-10 text-accent" />,
      benefits: ["Geographic distribution", "Provider redundancy", "Cross-cloud recovery"]
    },
    {
      title: "Rapid Recovery Process",
      description: "Streamlined recovery procedures to minimize downtime during incidents.",
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      benefits: ["One-click restoration", "Prioritized recovery", "Recovery validation"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Backup 
            <span className="highlight-gradient"> Strategies</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our proven methodologies for protecting containerized applications against data loss,
            system failures, and disaster scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{strategy.icon}</div>
                <CardTitle className="text-2xl">{strategy.title}</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {strategy.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {strategy.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
