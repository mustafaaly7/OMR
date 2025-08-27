import { motion } from "framer-motion";

const PricingSection = ({ onSubscribe }) => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      description: "Perfect for individuals",
      features: ["100 scans", "Email support"],
      notIncluded: ["Priority support", "Dedicated manager"],
    },
    {
      name: "Pro",
      price: "$19",
      description: "For growing teams",
      popular: true,
      features: ["500 scans", "Priority support"],
      notIncluded: ["Dedicated manager"],
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "Best for large businesses",
      features: ["Unlimited scans", "Dedicated manager", "Priority support"],
      notIncluded: [],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  

  return (
    <section id="pricing" className="bg-gradient-to-br from-indigo-50 to-white py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12"
        >
          Choose a plan that fits your needs.
        </motion.p>

        <div className="flex flex-wrap -m-4 justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/3 w-full"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={index}
              viewport={{ once: true }}
            >
              <div
                className={`h-full p-6 rounded-2xl border-2 flex flex-col relative transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "border-indigo-500 bg-white shadow-xl"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 text-xs rounded-full absolute right-4 top-4 shadow-md">
                    MOST POPULAR
                  </span>
                )}

                <h2 className="text-sm tracking-widest font-medium uppercase mb-2">
                  {plan.name}
                </h2>
                <h1 className="text-5xl font-bold text-gray-900 mb-2">
                  {plan.price}
                  <span className="text-lg ml-1 text-gray-600">/mo</span>
                </h1>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-5 h-5 mr-2 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-5 h-5 mr-2 border-2 border-gray-400 rounded-full flex items-center justify-center text-xs">
                        ✕
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => onSubscribe(plan.name)}
                  className={`mt-auto py-2 px-4 rounded-lg text-white font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 shadow-md"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Subscribe
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
