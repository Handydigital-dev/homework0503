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
            Intuitive cloud-based SaaS solution to simplify your daily
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
                &quot;BizBoost has revolutionized the way we manage our business.
                It&apos;s intuitive, feature-rich, and has significantly improved our
                productivity.&quot;
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
                &quot;We&apos;ve been using BizBoost for over a year now, and it has been a game-changer for our business. The intuitive interface and powerful features have streamlined our operations and boosted our productivity.&quot;
              </p>
              <div className="flex items-center">
                <img
                  src="avatar2.jpg"
                  alt="Customer Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Jane Smith</p>
                  <p className="text-gray-600">CFO, XYZ Corporation</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-200"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                What is the difference between the Basic and Pro plans?
              </h3>
              <p>
                The main differences are the number of users, available features,
                and storage capacity. The Pro plan offers unlimited users,
                advanced features, and 20 GB of storage, while the Basic plan is
                limited to 10 users, basic features, and 5 GB of storage.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-400"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Can I cancel my subscription at any time?
              </h3>
              <p>
                Yes, you can cancel your subscription at any time. We don&apos;t
                require long-term contracts, and you can switch between plans as
                needed.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-600"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Do you offer any discounts or promotions?
              </h3>
              <p>
                Yes, we occasionally offer discounts and promotions, especially
                for annual subscriptions or for new customers. Be sure to check
                our website or contact our sales team for the latest offers.
              </p>
            </div>
            <div
              className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-20 transition duration-500 ease-out delay-800"
              style={{ transform: "translateY(0)", opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">
                How do I get started with BizBoost?
              </h3>
              <p>
                Getting started with BizBoost is easy! Simply sign up for the
                plan that best fits your needs, and our onboarding team will
                guide you through the setup process. We&apos;re here to help you
                get up and running quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2023 BizBoost. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;