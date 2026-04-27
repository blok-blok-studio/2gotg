import Image from "next/image";
import { Award, Heart, Users, HandHeart } from "lucide-react";

const credentials = [
  { icon: Award, label: "Certified Fora Advisor" },
  { icon: Heart, label: "40+ Years Traveling" },
  { icon: Users, label: "Solo & Group Travel" },
  { icon: HandHeart, label: "Travel for a Purpose, Volunteer Experiences" },
];

export function AboutTeam() {
  return (
    <section id="team" className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
            Meet the Founder
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Your Travel <span className="text-primary">Architect</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 md:w-full md:h-auto aspect-[3/4] rounded-2xl border border-primary/10 overflow-hidden shadow-xl shadow-primary/10">
                  <Image
                    src="/brand/heidie-haynes-2-girls-on-the-go-founder.jpg"
                    alt="Heidie Haynes, founder of 2 Girls on the Go travel agency"
                    width={787}
                    height={1400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-cta/25">
                  40+ Years Traveling
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <h3 className="font-[var(--font-heading)] text-2xl lg:text-3xl font-bold text-foreground mb-1">
                Heidie Haynes
              </h3>
              <p className="text-primary font-medium mb-6">Founder &amp; Owner</p>

              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  As an experienced traveler having traveled for more than 40 years
                  on her own, with groups, and with family, I love what I do, and that
                  is introducing the world of travel and culture to others.
                </p>
                <p>
                  Some people wait a lifetime for that one special trip. I believe it is my
                  privilege to provide moments where others understand that travel is
                  accessible, whether it is a weekend trip to explore someplace close to home
                  or a trip to a faraway exotic land.
                </p>
                <p>
                  Travel is a mindset that allows us to explore the world no matter our budget.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <cred.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{cred.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
