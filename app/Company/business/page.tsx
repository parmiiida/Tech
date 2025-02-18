import Head from 'next/head';

const BusinessProjects = () => {
  return (
    <>
      <Head>
        <title>Enterprise Web Solutions & Business Websites | YourCompany</title>
        <meta
          name="description"
          content="Scalable, high-performance business websites tailored to drive sales and engagement. Custom web development for businesses of all sizes."
        />
        <meta name="keywords" content="business website, enterprise solutions, custom business web development, corporate web design, scalable web apps" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <section className="text-center py-16 px-6">
          <h1 className="text-5xl font-bold">Business & Enterprise Web Solutions</h1>
          <p className="text-lg text-gray-300 mt-4">We create scalable, high-performance websites that help businesses grow and drive revenue.</p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-4">Our Business Solutions</h2>
          <ul className="text-lg text-gray-300 space-y-4">
            <li>✅ Custom E-commerce Development</li>
            <li>✅ CRM & ERP Integration</li>
            <li>✅ Automated Business Processes</li>
            <li>✅ Scalable Cloud-Based Infrastructure</li>
          </ul>
        </section>

        <section className="bg-gray-900 py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Process</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-300">
            {["Planning", "UI/UX Design", "Development", "Optimization"].map((step, index) => (
              <div key={index} className="p-6 border border-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold">{index + 1}. {step}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessProjects;
