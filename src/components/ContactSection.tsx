
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your 
            <span className="highlight-gradient"> Containerized Applications?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with our container backup specialists for a personalized consultation and demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold">How We Can Help</h3>
            <p className="text-gray-600">
              Our team of container disaster recovery specialists will analyze your current setup, identify vulnerabilities, and create a customized backup strategy for your organization.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-gray-600">contact@resilienceshield.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-gray-600">+1 (888) 555-BACKUP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-gray-600">Available 24/7 for urgent recovery needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="lg:col-span-3 shadow-lg border-gray-100">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" placeholder="john@company.com" type="email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your Organization" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="container-platform" className="block text-sm font-medium text-gray-700">
                      Container Platform
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kubernetes">Kubernetes</SelectItem>
                        <SelectItem value="docker-swarm">Docker Swarm</SelectItem>
                        <SelectItem value="openshift">OpenShift</SelectItem>
                        <SelectItem value="amazon-ecs">Amazon ECS</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your current container backup challenges..."
                    rows={4} 
                  />
                </div>
                
                <div>
                  <Button className="w-full bg-primary hover:bg-brand-dark text-white">
                    Request Consultation
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
