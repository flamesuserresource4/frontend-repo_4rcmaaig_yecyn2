import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Organisasi Keren</h4>
            <p className="mt-2 text-sm text-slate-600">Bersama mewujudkan perubahan yang berdampak.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Kontak</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone size={16} /> +62 812-3456-7890</li>
              <li className="flex items-center gap-2"><Mail size={16} /> halo@organisasi.id</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Tautan</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#beranda" className="hover:text-slate-900">Beranda</a></li>
              <li><a href="#visi-misi" className="hover:text-slate-900">Visi & Misi</a></li>
              <li><a href="#tujuan" className="hover:text-slate-900">Tujuan</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Ikuti Kami</h5>
            <div className="mt-3 flex gap-3 text-slate-600">
              <a aria-label="instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-slate-50"><Instagram size={18} /></a>
              <a aria-label="facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-slate-50"><Facebook size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Organisasi Keren. All rights reserved.</p>
          <p>Didesain dengan cinta dan kepedulian.</p>
        </div>
      </div>
    </footer>
  );
}
