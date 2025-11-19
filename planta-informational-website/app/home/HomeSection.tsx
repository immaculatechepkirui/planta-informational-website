import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="pt-28 pb-20 px-4 flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-planta leading-tight">
          Data for <span className="text-planta-gold">better rice farming</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-planta font-medium">
          Planta is a simple AI dashboard designed to help you grow more rice and make smarter decisions. Enter your local details,like rainfall and soil type,and let advanced machine learning predict your rice yield and recommend the best paddy varieties for your farm.
        </p>
        <a
          href="#"
          className="mt-4 px-6 py-2 bg-planta text-white font-bold text-base rounded-full hover:bg-planta-gold hover:text-planta transition text-center self-start"
        >
          Get Started
        </a>
      </div>
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <Image
          src="/images/planta-main-bot.jpeg"
          alt="Planta home visual"
          width={410}
          height={410}
          priority
          className="rounded-xl shadow-xl max-h-[420px] object-contain bg-white"
        />
      </div>
    </section>
  )
}