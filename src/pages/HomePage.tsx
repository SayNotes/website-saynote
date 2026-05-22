import Navbar from '../components/organisms/Navbar'
import Button from '../components/atoms/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar />

      {/* 2. Isi Konten Utama Halaman (Hero / Dashboard Catatan) */}
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Kelola Catatan Tanpa Ribet
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            SayNote membantu kamu mencatat ide, tugas, dan arsip penting dengan tampilan modern, super cepat, dan mendukung dark mode otomatis.
          </p>
          
          <div className="pt-4 flex justify-center gap-4">
            {/* Panggil Atom Button yang sudah kita buat */}
            <Button>Mulai Mencatat — Gratis</Button>
          </div>
        </div>

        {/* Tempat menampung list catatan nanti (Organism/Molecule baru) */}
        <div className="mt-16 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl p-12 bg-white dark:bg-neutral-900/50">
          <p className="text-sm text-neutral-400">Belum ada catatan. Klik tombol di atas untuk membuat!</p>
        </div>
      </main>
    </div>
  )
}