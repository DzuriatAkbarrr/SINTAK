import React from 'react'

export default function Product() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 py-25 px-6">
      <h1 className="text-center text-5xl font-extrabold text-amber-700 mb-16 drop-shadow-lg">
        Koleksi Biji Kopi Premium Kami
      </h1>

      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            img: "arabikaGayo.jpg",
            title: "Arabika Gayo",
            desc: "Rasa asam lembut dan aroma harum khas dataran tinggi Gayo.",
          },
          {
            img: "robustaLampung.jpg",
            title: "Robusta Lampung",
            desc: "Kopi pekat dengan cita rasa kuat dan pahit yang khas.",
          },
          {
            img: "liberikaBengkulu.jpg",
            title: "Liberika Bengkulu",
            desc: "Aroma buah dan rasa unik yang langka ditemukan.",
          },
        ].map(({ img, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden rounded-t-xl">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-2xl font-bold drop-shadow-lg">{title}</h3>
              </div>
            </div>
            <div className="p-6 text-gray-700 text-lg">{desc}</div>
          </div>
        ))}
      </div>

      <section className="max-w-4xl mx-auto mt-24 bg-white rounded-3xl shadow-2xl p-12">
        <h2 className="text-center text-4xl font-extrabold text-amber-600 mb-10">
          Apa Kata Mereka
        </h2>
        <form className="flex flex-col gap-6 mb-16">
          <input
            type="text"
            name="nama"
            placeholder="Nama Anda"
            className="p-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-lg"
          />
          <textarea
            name="komentar"
            rows={5}
            placeholder="Tulis komentar Anda"
            className="p-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-lg resize-none"
          />
          <button
            type="submit"
            disabled
            className="bg-amber-500 text-white text-xl py-4 rounded-xl font-semibold shadow-lg cursor-pointer select-none"
          >
            Kirim Komentar
          </button>
        </form>

        <div className="space-y-10">
          {[
            {
              nama: "Rina",
              komentar:
                "Kopi Arabikanya benar-benar nikmat dan segar, recommended! Aroma dan rasa yang membuat saya ketagihan.",
            },
            {
              nama: "Dedi",
              komentar: "Robustanya punya rasa yang kuat dan bikin semangat tiap pagi!",
            },
            {
              nama: "Sari",
              komentar:
                "Pelayanan cepat dan kopinya berkualitas, selalu jadi favorit saya.",
            },
          ].map(({ nama, komentar }) => (
            <div
              key={nama}
              className="bg-yellow-50 border-l-8 border-amber-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-amber-700 font-bold text-xl mb-2">{nama}</p>
              <p className="text-gray-700 italic leading-relaxed">{komentar}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
