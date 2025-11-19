import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-16 px-4 bg-[#F8F4EC]">
      <div className="text-center mb-14">
        <span className="block text-base font-semibold text-planta-gold uppercase tracking-wider mb-2">
          How It Works
        </span>
        <h2 className="text-3xl font-bold text-planta">Smart Rice Farming in 4 Steps</h2>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 max-w-5xl mx-auto">
        {[
          { img: "/images/planta-logo.svg", title: "1. Enter Your Details", desc: "Sign up and provide your field's information: rainfall, area, soil type, and other specifics." },
          { img: "/images/planta-bot-2.jpeg", title: "2. Chat with Planta", desc: "Interact with the AI bot. Describe your farm or ask what rice is best for your place and needs." },
          { img: "/images/planta-bot.png", title: "3. See Your Predicted Yield", desc: "Planta analyzes your info with cutting-edge ML and instantly predicts your likely rice harvest." },
          { img: "/images/planta-main-bot.jpeg", title: "4. Get Best Variety Suggestions", desc: "Planta recommends the paddy varieties best matching your local data—no more guesswork." }
        ].map((step, i) => (
          <div className="flex flex-col items-center text-center gap-4" key={i}>
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#ECECEA] shadow">
              <Image src={step.img} alt={step.title} width={72} height={72} className="object-contain" />
            </div>
            <span className="font-bold text-planta">{step.title}</span>
            <p className="text-base text-neutral-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}