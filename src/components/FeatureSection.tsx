
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Clock, 
  Layers, 
  Activity, 
  AlertCircle 
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      id: "proactive",
      title: "Proactive Protection",
      icon: <Shield className="h-6 w-6" />,
      description: "Our proactive approach prevents data loss before it happens with continuous monitoring and automated backup scheduling.",
      image: "/backup-dashboard.svg",
      benefits: [
        "Scheduled automatic backups",
        "Real-time monitoring and alerts",
        "Predictive failure detection",
        "Compliance-ready audit trails"
      ]
    },
    {
      id: "recovery",
      title: "Rapid Recovery",
      icon: <Clock className="h-6 w-6" />,
      description: "When disaster strikes, our rapid recovery protocols minimize downtime and get your critical applications back online quickly.",
      image: "/recovery-process.svg",
      benefits: [
        "Point-in-time recovery options",
        "One-click application restoration",
        "Prioritized service recovery",
        "Recovery testing and validation"
      ]
    },
    {
      id: "architecture",
      title: "Container-Native Architecture",
      icon: <Layers className="h-6 w-6" />,
      description: "Purpose-built for modern containerized environments, our solutions understand Kubernetes, Docker, and microservices.",
      image: "/container-architecture.svg",
      benefits: [
        "Kubernetes-aware backups",
        "Stateful workload protection",
        "Microservices dependency mapping",
        "Container image versioning"
      ]
    },
    {
      id: "continuity",
      title: "Business Continuity",
      icon: <Activity className="h-6 w-6" />,
      description: "Ensure uninterrupted operations with comprehensive business continuity planning and implementation.",
      image: "/business-continuity.svg",
      benefits: [
        "Recovery time objective optimization",
        "Cross-region failover",
        "Disaster recovery simulation",
        "Business impact analysis"
      ]
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Designed for 
            <span className="highlight-gradient"> Modern Infrastructure</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Purpose-built backup and recovery solutions that understand the unique challenges of containerized applications
          </p>
        </div>

        <Tabs defaultValue="proactive" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-transparent gap-2 h-auto">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                {feature.icon}
                <span className="hidden md:inline">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {features.map((feature) => (
            <TabsContent 
              key={feature.id} 
              value={feature.id}
              className="border border-gray-100 rounded-xl bg-white p-6 md:p-8 shadow-md animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <h4 className="font-medium mb-3 text-primary">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-1 text-secondary">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.0234 5.58281L6.5125 9.09375C6.33281 9.27344 6.08125 9.36875 5.82969 9.36875C5.57812 9.36875 5.32656 9.27344 5.14688 9.09375L3.97656 7.92344C3.61719 7.56406 3.61719 6.98125 3.97656 6.62188C4.33594 6.2625 4.91875 6.2625 5.27812 6.62188L5.82969 7.17344L8.72188 4.28125C9.08125 3.92188 9.66406 3.92188 10.0234 4.28125C10.3828 4.64062 10.3828 5.22344 10.0234 5.58281Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                  <div className="relative w-full aspect-square max-w-xs mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg"></div>
                    <div className="relative z-10 text-gray-400">
                      <AlertCircle className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-center text-sm">Image placeholder for {feature.title} visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureSection;
