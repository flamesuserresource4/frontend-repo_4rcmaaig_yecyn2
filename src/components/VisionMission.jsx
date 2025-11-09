import { CheckCircle, Target, Users } from 'lucide-react';

export default function VisionMission() {
  const missions = [
    'Meningkatkan kualitas hidup masyarakat melalui program sosial dan pendidikan.',
    'Mendorong inovasi yang berkelanjutan dengan berbasis data dan kolaborasi.',
    'Menumbuhkan kepemimpinan dan partisipasi aktif generasi muda.',
  ];

  return (
    <section id="visi-misi" className="relative py-24">
      <div className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_30%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.08),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <Target size={14} />
              Visi & Misi
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Visi
            </h2>
            <p className="mt-3 text-slate-600">
              Menjadi organisasi rujukan yang mendorong perubahan positif dan berkelanjutan
              melalui kolaborasi dan inovasi.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {missions.map((text, idx) => (
                <div key={idx} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-emerald-500" />
                    <p className="text-slate-700">{text}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-6 text-white shadow-sm">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Nilai Inti</h3>
                    <p className="mt-1 text-white/90">
                      Integritas, kolaborasi, inklusivitas, dan keberlanjutan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
