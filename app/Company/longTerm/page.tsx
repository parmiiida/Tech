import Head from 'next/head';

const LongTermPartnerships = () => {
  return (
    <>
      <Head>
        <title>Long-Term Web Development Partnerships | YourCompany</title>
        <meta
          name="description"
          content="Partner with us for long-term web development, maintenance, and growth. Scalable solutions tailored for startups & enterprises."
        />
        <meta name="keywords" content="long-term web development, ongoing website maintenance, startup web solutions, dedicated web development team" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <section className="text-center py-16 px-6">
          <h1 className="text-5xl font-bold">Long-Term Web Development Partnerships</h1>
          <p className="text-lg text-gray-300 mt-4">We offer ongoing support, maintenance, and scalable solutions for businesses that want continuous growth.</p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose a Long-Term Partnership?</h2>
          <ul className="text-lg text-gray-300 space-y-4">
            <li>✅ Continuous Website Improvements</li>
            <li>✅ Dedicated Support & Maintenance</li>
            <li>✅ Monthly Performance Reports</li>
            <li>✅ AI-Powered Optimization</li>
          </ul>
        </section>

        <section className="bg-gray-900 py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Long-Term Services</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-300">
            {["Security Updates", "Feature Enhancements", "Performance Optimization", "AI Automations"].map((service, index) => (
              <div key={index} className="p-6 border border-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold">{index + 1}. {service}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default LongTermPartnerships;
