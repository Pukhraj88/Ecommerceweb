import HowItWorks from "./HowItWorks";


export const Services = () => {
    return (
        <div className="owncontainer cards-m-outside font-[Ubuntu]">
<HowItWorks />

<div className="w-full py-6 px-4 sm:px-6 lg:px-20">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl sm:text-5xl font-extrabold text-gray-900 tracking-tight font-serif mb-4">
      Our Services
    </h2>
    <p className="text-lg sm:text-xl text-gray-700 font-light font-sans mb-8">
      We specialize in delivering high-quality construction materials with fast and reliable service.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-6">
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-blue-700 font-mono mb-2">Cement (OPC & PPC)</h3>
        <p className="text-gray-600 font-sans">Top brands delivered for strong and lasting structures.</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-green-700 font-mono mb-2">Construction Soil</h3>
        <p className="text-gray-600 font-sans">Fine and coarse soil for foundational stability.</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-yellow-700 font-mono mb-2">Bricks</h3>
        <p className="text-gray-600 font-sans">Durable bricks perfect for any construction project.</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-red-700 font-mono mb-2">Rodi (Stone Aggregates)</h3>
        <p className="text-gray-600 font-sans">Crushed stone for strong concrete and road base.</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-purple-700 font-mono mb-2">Sand & Gravel</h3>
        <p className="text-gray-600 font-sans">Clean, high-grade sand and gravel for all builds.</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-indigo-700 font-mono mb-2">Transport & Delivery</h3>
        <p className="text-gray-600 font-sans">On-time delivery with reliable logistics support.</p>
      </div>
    </div>
  </div>
</div>


        </div>
    );
}

