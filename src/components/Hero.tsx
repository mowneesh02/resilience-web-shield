
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Shield, RefreshCw } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Protect Your Containerized Applications with{" "}
                <span className="highlight-gradient">Resilient Backup Strategies</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Comprehensive disaster recovery and backup solutions designed specifically for modern containerized environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-brand-dark text-white">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Request Consultation
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm font-medium">Zero Data Loss</span>
              </div>
              <div className="flex items-center">
                <RefreshCw className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm font-medium">Quick Recovery</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 text-secondary mr-2" />
                <span className="text-sm font-medium">Kubernetes Compatible</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database className="h-16 w-16 text-primary" />
                  </div>
                  <div className="absolute w-full h-full animate-spin-slow opacity-20">
                    <div className="absolute top-0 left-1/2 w-1 h-1/5 bg-secondary transform -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-1/5 bg-secondary transform -translate-x-1/2"></div>
                    <div className="absolute left-0 top-1/2 w-1/5 h-1 bg-secondary transform -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-1/5 h-1 bg-secondary transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded-full"></div>
                <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <RefreshCw className="h-5 w-5 text-accent" />
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
