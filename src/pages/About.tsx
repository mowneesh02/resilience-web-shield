
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      bio: "Former CTO at CloudSafe with 15+ years experience in data protection and cloud infrastructure."
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Kubernetes contributor and container expert with background in distributed systems and data resilience."
    },
    {
      name: "Marcus Williams",
      role: "VP of Product",
      bio: "Product leader specializing in disaster recovery solutions with experience at major cloud providers."
    },
    {
      name: "Priya Mehta",
      role: "Head of Engineering",
      bio: "Systems architect with extensive experience building scalable backup and recovery systems."
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
                About <span className="highlight-gradient">ResilienceShield</span>
              </h1>
              <p className="text-lg text-gray-600">
                Pioneering disaster recovery solutions for the container-native world.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At ResilienceShield, we're on a mission to ensure that organizations running modern containerized applications never lose critical data or experience extended downtime.
                </p>
                <p className="text-gray-600 mb-4">
                  As containers have transformed how applications are built and deployed, traditional backup approaches have struggled to keep pace. We've purpose-built our solutions to address the unique challenges of protecting stateful containerized workloads.
                </p>
                <p className="text-gray-600">
                  Our team combines deep expertise in Kubernetes, data protection, and disaster recovery to deliver solutions that are as agile and flexible as the container platforms they protect.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                      <li>Resilience in everything we build</li>
                      <li>Customer success as our top priority</li>
                      <li>Continuous innovation and improvement</li>
                      <li>Transparency in operations and security</li>
                      <li>Proactive protection over reactive recovery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-600">
                Meet the experts behind our container disaster recovery solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-center">{member.name}</h3>
                  <p className="text-secondary font-medium text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
              <p className="text-gray-600 mb-8">
                Get in touch with our team to discuss your container backup and disaster recovery needs.
              </p>
              <Button size="lg" className="bg-primary hover:bg-brand-dark text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
