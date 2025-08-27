// src/components/TestimonialsSection.jsx
import { motion } from "framer-motion";

const testimonials = [
  // row 1 (left small)
  {
    id: "t1",
    text:
      "Really excited about this UI to React components platform. Definitely see a bright future!",
    name: "Herminio Garcia",
    role: "Software Engineer",
    company: "Sidecar Health",
    avatar: "https://i.pravatar.cc/100?img=32",
    span: "md:col-span-3",
  },
  // row 1 (center large)
  {
    id: "t2",
    text:
      "I had the opportunity to test out an early version of this and it’s awesome! Excited for the future of this design tool.",
    name: "Cole Bemis",
    role: "Design Systems Engineer",
    company: "@GitHub",
    avatar: "https://i.pravatar.cc/100?img=12",
    span: "md:col-span-6",
    large: true,
  },
  // row 1 (right small)
  {
    id: "t3",
    text:
      "After using this for about an hour, I’m convinced it’s the future.",
    name: "Max Gustafson",
    role: "Design Director",
    company: "Outdoorsy",
    avatar: "https://i.pravatar.cc/100?img=48",
    span: "md:col-span-3",
  },
  // row 2 (left small)
  {
    id: "t4",
    text:
      "Fellow UI engineers and designers, pay attention to what these folks are doing. The beta is excellent—certainly the future of component development.",
    name: "@voidwarren",
    role: "",
    company: "",
    avatar: "https://i.pravatar.cc/100?img=23",
    span: "md:col-span-3",
  },
  // row 2 (small)
  {
    id: "t5",
    text:
      "I was pleasantly surprised and at times blown away with the approach to solving the problem. Variants and slots feel natural and intuitive.",
    name: "Justin Wilkerson",
    role: "Software Developer",
    company: "APS Physics",
    avatar: "https://i.pravatar.cc/100?img=16",
    span: "md:col-span-3",
  },
  // row 2 (small)
  {
    id: "t6",
    text:
      "By far one of the most empowering tools to come out in a while. If you’re a no-code/visual developer or a team looking to serve your clients faster—check this out.",
    name: "Collin Thompson",
    role: "CEO",
    company: "Intrepid Ventures",
    avatar: "https://i.pravatar.cc/100?img=66",
    span: "md:col-span-3",
  },
  // row 2 (right small)
  {
    id: "t7",
    text:
      "Watching a live demo quickly creating React components with ease was mind-blowing. Second time seeing it and still as impressive!",
    name: "Stacy Taylor",
    role: "Front-End Engineer",
    company: "Zapier",
    avatar: "https://i.pravatar.cc/100?img=25",
    span: "md:col-span-3",
  },
];

const Card = ({ t, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: i * 0.05 }}
    viewport={{ once: true, amount: 0.3 }}
    className={[
      "bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/70",
      "shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
      "p-5 sm:p-6",
      t.large ? "md:p-8" : "",
      t.span,
    ].join(" ")}
  >
    {/* text */}
    <p
      className={[
        "text-gray-800",
        t.large ? "text-xl sm:text-2xl leading-relaxed" : "text-[15px] leading-6",
      ].join(" ")}
    >
      {t.text}
    </p>

    {/* author */}
    <div className=" flex items-center gap-3 py-20">
      <img
        src={t.avatar}
        alt={t.name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="text-sm ">
        <div className="font-semibold text-gray-900">{t.name}</div>
        {(t.role || t.company) && (
          <div className="text-gray-500">
            {[t.role, t.company].filter(Boolean).join(" · ")}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-1 text-[11px] font-medium tracking-wide text-white">
            THE WALL OF LOVE
          </span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Our Customer <span className="align-middle">💜</span> Us
        </motion.h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:mt-14 md:grid-cols-12">
          {testimonials.map((t, i) => (
            <Card key={t.id} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
