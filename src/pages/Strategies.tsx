
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Strategies = () => {
  const strategies = [
    {
      title: "3-2-1 Backup Strategy for Containers",
      description: "The classic 3-2-1 backup strategy applied to modern container environments.",
      category: "Backup",
      steps: [
        "Maintain at least 3 copies of your data (including the original)",
        "Store backups on 2 different storage types",
        "Keep 1 backup offsite or in a different cloud region",
        "Automate backup verification and testing",
        "Implement backup rotation and retention policies"
      ]
    },
    {
      title: "Immutable Backup Architecture",
      description: "Protect your backup data from ransomware and tampering with immutable storage.",
      category: "Security",
      steps: [
        "Configure Write-Once-Read-Many (WORM) storage for backups",
        "Implement strong access controls and separation of duties",
        "Use cryptographic verification of backup integrity",
        "Establish backup monitoring and alerting",
        "Conduct regular security audits of backup systems"
      ]
    },
    {
      title: "Cross-Region Disaster Recovery",
      description: "Ensure business continuity with geographically distributed recovery sites.",
      category: "Recovery",
      steps: [
        "Deploy infrastructure across multiple regions or data centers",
        "Implement automated data replication between regions",
        "Configure DNS and load balancers for seamless failover",
        "Document regional failover procedures and test regularly",
        "Monitor replication lag and data consistency"
      ]
    },
    {
      title: "Stateful Workload Protection",
      description: "Specialized approach for protecting persistent data in containerized applications.",
      category: "Data",
      steps: [
        "Identify all persistent volumes and stateful workloads",
        "Use volume snapshots for application-consistent backups",
        "Implement pre/post snapshot hooks for database consistency",
        "Backup both data and configuration as a unit",
        "Test recovery of stateful applications regularly"
      ]
    }
  ];

  const faqs = [
    {
      question: "How often should I back up my containerized applications?",
      answer: "The frequency of your backups depends on your Recovery Point Objective (RPO). For critical applications, consider continuous backup or snapshots every few hours. Less critical applications might be backed up daily or weekly. Always align your backup schedule with your organization's data loss tolerance."
    },
    {
      question: "What's the difference between disaster recovery and backup for containers?",
      answer: "Backup focuses on creating copies of your data and application state that can be restored when needed. Disaster recovery is a broader strategy that includes backups but also encompasses the processes, infrastructure, and procedures to recover entire applications or environments after a disaster. For containers, DR typically includes replicating configurations, networking, and orchestrator settings in addition to the data."
    },
    {
      question: "How do I handle secrets and sensitive configuration in container backups?",
      answer: "Secrets management is critical in container environments. Best practices include: using a dedicated secrets manager (like Vault or cloud provider solutions), encrypting all backup data containing secrets, implementing RBAC for backup access, and considering storing secrets separately from other configuration backups with higher security controls."
    },
    {
      question: "What challenges are unique to backing up Kubernetes environments?",
      answer: "Kubernetes environments present unique challenges including: capturing both persistent volumes and cluster state, maintaining consistency across interconnected microservices, handling custom resources and operators, managing namespace-scoped vs cluster-scoped resources, and coordinating backups across potentially multiple clusters in a fleet."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Recovery <span className="highlight-gradient">Strategies</span>
              </h1>
              <p className="text-lg text-gray-600">
                Expert-designed approaches to protect your containerized applications from data loss and downtime.
              </p>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <Card key={index} className="border border-gray-100 shadow-md">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-secondary text-white">{strategy.category}</Badge>
                    <h3 className="text-2xl font-bold mb-2">{strategy.title}</h3>
                    <p className="text-gray-600 mb-6">{strategy.description}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-3">Implementation Steps:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        {strategy.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-gray-600">
                Download our comprehensive guides for more in-depth strategies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-md border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Kubernetes Backup Guide</h3>
                  <p className="text-gray-600 mb-4">Complete guide to backing up Kubernetes clusters and applications.</p>
                  <div className="mt-auto">
                    <Badge variant="outline" className="cursor-pointer">Download PDF</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">DR Runbook Template</h3>
                  <p className="text-gray-600 mb-4">Customizable disaster recovery runbook for containerized applications.</p>
                  <div className="mt-auto">
                    <Badge variant="outline" className="cursor-pointer">Download Template</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Backup Checklist</h3>
                  <p className="text-gray-600 mb-4">Comprehensive checklist to evaluate your container backup strategy.</p>
                  <div className="mt-auto">
                    <Badge variant="outline" className="cursor-pointer">Download Checklist</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Strategies;
