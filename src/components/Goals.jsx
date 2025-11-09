import { Award, HeartHandshake, Leaf, Sparkles } from 'lucide-react';

export default function Goals() {
  const goals = [
    {
      icon: <Sparkles className="text-indigo-600" />,
      title: 'Inovasi Sosial',
      desc: 'Menciptakan program inovatif untuk menyelesaikan tantangan masyarakat secara kreatif.'
    },
    {
      icon: <Leaf className="text-emerald-600" />,
      title: 'Keberlanjutan',
      desc: 'Mengarusutamakan praktik berkelanjutan dalam setiap kegiatan organisasi.'
    },
    {
      icon: <HeartHandshake className="text-fuchsia-600" />,
      title: 'Kolaborasi',
      desc: 'Membangun kemitraan lintas sektor untuk dampak yang lebih luas.'
    },
    {
      icon: <Award className="text-amber-600" />,
      title: 'Pengembangan SDM',
      desc: 'Meningkatkan kapasitas anggota melalui pelatihan dan pendampingan.'
    },
  ];

  return (
    <section id="tujuan" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tujuan Organisasi</h2>
          <p className="mt-3 text-slate-600">Empat fokus utama yang menjadi peta jalan kami.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g, i) => (
            <div key={i} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-black/5">
                {g.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{g.title}</h3>
              <p className="mt-1 text-slate-600">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-indigo-600 via-indigo-500 to-fuchsia-600 p-1 shadow-lg">
          <div className="grid items-center gap-6 rounded-[22px] bg-white/5 p-8 text-white lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Siap bergabung dan berkontribusi?</h3>
              <p className="mt-2 text-white/90">Mari bentuk masa depan yang lebih baik bersama kami.</p>
            </div>
            <div className="flex justify-end gap-3">
              <a href="#beranda" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-white/90">Lihat Program</a>
              <a href="#contact" className="rounded-xl bg-black/20 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/30 hover:bg-black/10">Hubungi Kami</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
