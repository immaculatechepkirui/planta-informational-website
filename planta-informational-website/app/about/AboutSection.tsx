import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 px-4 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/planta-device.jpeg"
          alt="Planta about"
          width={380}
          height={350}
          className="rounded-lg shadow-lg max-h-[350px] object-contain bg-[#ECECEA]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-planta mb-2">About Planta</h2>
        <p className="text-lg text-planta">
          Planta was built for one purpose: <span className="font-semibold">Enhance rice production using data and AI.</span> Agriculture occupies a third of the world's land and rice feeds half the planet, making smart rice farming a global need.
        </p>
        <p className="text-base text-neutral-700">
          Planta uses a scientifically-proven, hybrid machine learning model that analyzes your unique farm data—like soil, rainfall, and management practices—to predict your rice yields and recommend the most suitable paddy varieties for your conditions. The predictions are powered by a unique combination of advanced feature selection and multiple AI models, making them reliable and actionable for real-world farmers.
        </p>
      </div>
    </section>
  )
}