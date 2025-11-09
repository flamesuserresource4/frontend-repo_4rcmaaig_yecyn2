import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[88vh] pt-24">
      <div className="absolute inset-0">
        {/* 3D scene background - replace URL with your Spline scene if desired */}
        <Spline
          scene="https://prod.spline.design/4gQ21EJ9cV8P4s2h/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Bergerak untuk Dampak Nyata
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Organisasi Modern untuk Perubahan Positif
            </h1>
            <p className="max-w-xl text-slate-600">
              Kami adalah komunitas yang berkolaborasi untuk mewujudkan masa depan yang berkelanjutan,
              inklusif, dan berdampak bagi masyarakat.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#visi-misi"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Pelajari Lebih Lanjut <ArrowRight size={16} />
              </a>
              <a
                href="#tujuan"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-black/10 hover:bg-slate-50"
              >
                Lihat Tujuan
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-slate-500">
              <div>
                <span className="font-semibold text-slate-900">500+</span> anggota aktif
              </div>
              <div>
                <span className="font-semibold text-slate-900">30+</span> program tahunan
              </div>
            </div>
          </div>

          <div className="relative h-[360px] rounded-3xl border border-black/5 bg-white/80 p-1 shadow-xl backdrop-blur">
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 p-8">
              <div className="grid h-full place-items-center text-center">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Bersama Kita Bisa</h3>
                  <p className="mt-2 text-slate-600">
                    Bergabunglah dan wujudkan proyek kolaboratif yang memberi manfaat nyata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
