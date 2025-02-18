import Head from 'next/head';

const IndividualProjects = () => {
  return (
    <>
      <Head>
        <title>Custom Web Development for Individual Projects | YourCompany</title>
        <meta
          name="description"
          content="Get a high-performance, custom website for your personal brand, portfolio, or startup. Tailored solutions for freelancers and entrepreneurs."
        />
        <meta name="keywords" content="custom website, personal branding, freelancer website, individual web development, portfolio site" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-5xl font-bold text-white">Custom Web Development for Individuals</h1>
          <p className="text-lg text-gray-300 mt-4">We build high-performance, custom websites for freelancers, entrepreneurs, and creatives.</p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">
            Get a Free Consultation
          </a>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="text-lg text-gray-300 space-y-4">
            <li>✅ **Personalized Designs** – Tailored to match your brand identity.</li>
            <li>✅ **High Performance** – Fast-loading and SEO-friendly.</li>
            <li>✅ **Mobile-Friendly** – Optimized for all devices.</li>
            <li>✅ **Easy-to-Manage** – No coding skills required to update your site.</li>
          </ul>
        </section>

        {/* Our Process */}
        <section className="bg-gray-900 py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Process</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">1. Consultation</h3>
              <p className="mt-2">We discuss your needs, goals, and vision for the website.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">2. Design</h3>
              <p className="mt-2">We create a custom design that matches your brand identity.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">3. Development</h3>
              <p className="mt-2">We bring the design to life with cutting-edge technologies.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">4. Launch</h3>
              <p className="mt-2">Your site goes live, optimized for SEO and performance.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold text-white">Ready to Elevate Your Online Presence?</h2>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">
            Contact Us Today
          </a>
        </section>
      </div>
    </>
  );
};

export default IndividualProjects;
