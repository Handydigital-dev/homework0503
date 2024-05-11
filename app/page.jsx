"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-roboto">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-blue-500 hover:text-blue-600"
          >
            BizBoost
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#pricing"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-[#1976D2]"
          >
            Get Started
          </a>
        </div>
      </header>

      <section
        id="hero"
        className="bg-gray-100 py-32"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold mb-6 opacity-0 translate-y-20 transition duration-500 ease-out"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            Streamline Your Business with BizBoost
          </h1>
          <p
            className="text-xl mb-8 opacity-0 translate-y-20 transition duration-500 ease-out delay-200"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            Intuitive  cloud-based SaaS solution to simplify your daily
            operations and boost productivity.
          </p>
          <a
            href="#pricing"
            className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg hover:bg-[#1976D2] opacity-0 translate-y-20 transition duration-500 ease-out delay-400"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-12 opacity-0 translate-y-20 transition duration-500 ease-out"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-200"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <i className="fas fa-chart-line text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
              <p>
                Gain valuable insights into your business performance with
                real-time analytics.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-400"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <i className="fas fa-tasks text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Task Management</h3>
              <p>
                Efficiently manage and assign tasks to your team members for
                seamless collaboration.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-600"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <i className="fas fa-file-invoice text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Invoice Management</h3>
              <p>
                Create, send, and track invoices effortlessly to ensure timely
                payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-12 opacity-0 translate-y-20 transition duration-500 ease-out"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-lg shadow-md p-8 opacity-0 translate-y-20 transition duration-500 ease-out delay-200"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">
                $9<span className="text-xl font-normal">/month</span>
              </p>
              <ul className="mb-6">
                <li className="mb-2">10 users</li>
                <li className="mb-2">Basic features</li>
                <li>5 GB storage</li>
              </ul>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-3 rounded-md block text-center hover:bg-[#1976D2]"
              >
                Choose Plan
              </a>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-8 opacity-0 translate-y-20 transition duration-500 ease-out delay-400"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">
                $29<span className="text-xl font-normal">/month</span>
              </p>
              <ul className="mb-6">
                <li className="mb-2">Unlimited users</li>
                <li className="mb-2">Advanced features</li>
                <li>20 GB storage</li>
              </ul>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-3 rounded-md block text-center hover:bg-[#1976D2]"
              >
                Choose Plan
              </a>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-8 opacity-0 translate-y-20 transition duration-500 ease-out delay-600"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">
                $99<span className="text-xl font-normal">/month</span>
              </p>
              <ul className="mb-6">
                <li className="mb-2">Unlimited users</li>
                <li className="mb-2">Premium features</li>
                <li>Unlimited storage</li>
              </ul>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-3 rounded-md block text-center hover:bg-[#1976D2]"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-12 opacity-0 translate-y-20 transition duration-500 ease-out"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-200"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <p className="mb-4">
                "BizBoost has revolutionized the way we manage our business.
                It's intuitive, feature-rich, and has significantly improved our
                productivity."
              </p>
              <div className="flex items-center">
                <img
                  src="avatar1.jpg"
                  alt="Customer Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-600">CEO, ABC Company</p>
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-400"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <p className="mb-4">
                "We've been using BizBoost for a few months now, and it has
                already made a significant impact on our business. The real-time
                analytics and task management features are game-changers."
              </p>
              <div className="flex items-center">
                <img
                  src="avatar2.jpg"
                  alt="Customer Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Jane Smith</p>
                  <p className="text-gray-600">Marketing Manager, XYZ Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-12 opacity-0 translate-y-20 transition duration-500 ease-out"
            style={{ transform: "translateY(0)", opacity: 1 }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-200"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                How does BizBoost help improve productivity?
              </h3>
              <p>
                BizBoost offers a range of features, such as task management,
                real-time analytics, and invoice management, that streamline
                your daily operations and help you focus on what matters most.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-400"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Is my data secure with BizBoost?
              </h3>
              <p>
                Yes, we take data security seriously. BizBoost uses
                industry-standard encryption and follows best practices to
                ensure your data remains safe and secure.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-600"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                What kind of support does BizBoost provide?
              </h3>
              <p>
                We offer 24/7 customer support via email, phone, and live chat.
                Our knowledgeable support team is always ready to assist you
                with any questions or issues you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BizBoost</h3>
              <p className="mb-4">
                Streamline your business with our intuitive cloud-based SaaS
                solution.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook text-2xl hover:text-blue-500"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter text-2xl hover:text-blue-500"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram text-2xl hover:text-blue-500"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">City, State 12345</p>
              <p className="mb-2">info@bizboost.com</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .opacity-0 {
          opacity: 0;
        }

        .translate-y-20 {
          transform: translateY(20px);
        }

        .transition {
          transition-property: opacity, transform;
          transition-duration: 0.5s;
          transition-timing-function: ease-out;
        }

        .delay-200 {
          transition-delay: 0.2s;
        }

        .delay-400 {
          transition-delay: 0.4s;
        }

        .delay-600 {
          transition-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;