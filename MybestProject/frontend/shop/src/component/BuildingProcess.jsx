import React from 'react';

const steps = [
  {
    icon: '/11.svg',
    title: 'Meet our experts',
    desc: 'Discuss your ideas and goals. We’ll help plan your budget and design preferences.',
  },
  {
    icon: '/2.svg',
    title: 'Design your custom home',
    desc: 'See detailed 3D renderings that let you visualise your home before construction begins.',
  },
  {
    icon: '/13.svg',
    title: 'Track the construction',
    desc: 'Stay informed with regular updates on progress and quality checks at every stage.',
  },
  {
    icon: '/14.svg',
    title: 'Move in to your home',
    desc: 'A pre-delivery inspection ensures everything is in place before handover.',
  },
];

const BuildingProcess = () => {
  return (
    <section className=" py-16 px-4 sm:px-10 md:px-24 font-montreal">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000]">
          A glimpse into our building process
        </h2>
        <p className="mt-4 text-[#5f5f5f] text-base md:text-lg">
          Explore our step-by-step process of building your dream home.
        </p>
      </div>

      {/* Vertical Timeline for Mobile */}
      <div className="relative pl-10 border-l-2 border-dashed border-gray-300">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-10 relative">
            {/* Icon */}
            <div className="absolute -left-[26px] top-5 sm:top-3 w-10 h-10 bg-[#fcfbf9]">
              <img src={step.icon} alt="" className="w-8 h-8" />
            </div>

            {/* Text */}
            <div className="ml-4">
              <h3 className="font-semibold text-base sm:text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default BuildingProcess;
