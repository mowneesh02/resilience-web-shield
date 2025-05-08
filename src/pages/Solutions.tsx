
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Database, Shield, Cloud, Server } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "Container Backup Suite",
      description: "Complete backup and recovery solution for containerized applications",
      icon: <Database className="h-12 w-12 text-primary" />,
      features: [
        "Volume snapshots and persistent volume backups",
        "Application-consistent backups with pre/post scripts",
        "Incremental and differential backup options",
        "Multi-cluster support with centralized management"
      ]
    },
    {
      title: "Kubernetes Protection",
      description: "Kubernetes-native protection for all your cluster resources",
      icon: <Shield className="h-12 w-12 text-secondary" />,
      features: [
        "Namespace-level and cluster-wide backups",
        "RBAC and policy management",
        "Custom resource definition protection",
        "Automated recovery verification"
      ]
    },
    {
      title: "Multi-Cloud DR Strategy",
      description: "Cross-cloud disaster recovery with seamless failover",
      icon: <Cloud className="h-12 w-12 text-accent" />,
      features: [
        "Cloud-agnostic recovery procedures",
        "Cross-provider replication",
        "Automated testing and verification",
        "RPO/RTO optimization across providers"
      ]
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
                Our <span className="highlight-gradient">Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore our comprehensive suite of disaster recovery and backup solutions
                designed specifically for modern containerized environments.
              </p>
              <Button size="lg" className="bg-primary hover:bg-brand-dark text-white">
                Request Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{solution.icon}</div>
                    <CardTitle className="text-2xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mt-4">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to secure your container infrastructure?</h2>
              <p className="text-gray-600 mb-8">
                Get in touch with our container backup specialists for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-brand-dark text-white">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
