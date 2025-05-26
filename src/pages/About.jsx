import React from "react";

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-60 bg-gradient-to-b from-cyan-400 flex justify-center items-center">
        <p className="text-center text-4xl sm:text-6xl font-bold font-mono">
          About Us
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full bg-white px-6 py-16 md:px-32">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Kopi Berkualitas Tinggi, Dari Hati Petani Hingga Cangkir Anda
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Di balik setiap cangkir kopi kami, terdapat perjalanan panjang penuh
          dedikasi dan semangat. Kami percaya bahwa{" "}
          <span className="font-semibold text-gray-800">
            kopi terbaik lahir dari kemitraan yang kuat dengan petani lokal.
          </span>{" "}
          itulah sebabnya sejak awal kami berkomitmen untuk bekerja sama
          langsung dengan para petani kopi terbaik di berbagai daerah di
          Indonesia.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Dengan memilih hanya{" "}
          <span className="font-semibold">biji kopi berkualitas tinggi</span>{" "}
          dan mengedepankan proses sangrai yang presisi, kami ingin menghadirkan
          rasa kopi yang otentik, kaya aroma, dan memuaskan setiap selera.
          Kualitas dan keaslian adalah prinsip utama kami.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Tak hanya menghadirkan kopi terbaik, kami juga bangga menjadi bagian
          dari <span className="font-semibold">penguatan ekonomi lokal</span>{" "}
          dan keberlanjutan lingkungan. Kami tumbuh bersama para petani dan
          kini, kopi kami telah dikenal luas dan dipercaya oleh komunitas
          pecinta kopi maupun para petani itu sendiri.
        </p>
        <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4 mt-6">
          "Karena bagi kami, kopi bukan sekadar minuman tapi warisan rasa,
          cerita, dan hubungan yang menghangatkan."
        </blockquote>
      </div>

      {/* Our Values Section */}
      <div
        className="w-full bg-no-repeat bg-cover bg-center py-20 px-6"
        style={{ backgroundImage: "url('bgAbout.jpg')" }}
      >
        <div className="text-center mb-10">
          <p className="text-white text-4xl sm:text-5xl font-bold font-mono">
            Our Values
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "1. Passion For Coffee",
              text: "Kami mencintai kopi, dan itu tercermin dalam setiap cangkir yang kami sajikan. Dari pemilihan biji terbaik hingga proses penyeduhan yang sempurna, kami berdedikasi untuk memberikan pengalaman kopi yang tak terlupakan."
            },
            {
              title: "2. Quality First",
              text: "Kualitas adalah prioritas kami. Kami hanya menggunakan biji kopi berkualitas tinggi dari petani yang terpercaya, dan kami memastikan setiap proses dari roasting hingga penyajian dilakukan dengan standar tertinggi."
            },
            {
              title: "3. Sustainability",
              text: "Kami percaya bahwa kopi yang baik datang dari praktik yang bertanggung jawab. Kami berkomitmen mendukung pertanian berkelanjutan, mengurangi jejak lingkungan, dan membangun hubungan yang adil dengan para petani lokal."
            },
            {
              title: "4. Community Driven",
              text: "Kopi menyatukan orang, dan kami ingin menjadi bagian dari itu. Kami menciptakan ruang yang nyaman untuk berbagi cerita, ide, dan tawa menjadikan kedai kami sebagai rumah kedua bagi pelanggan."
            },
            {
              title: "5. Innovation & Craftsmanship",
              text: "Kami terus bereksperimen dan berinovasi untuk menyajikan menu yang kreatif, tanpa mengorbankan rasa autentik kopi. Kami menghargai seni meracik kopi dan terus belajar untuk menyempurnakannya."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-amber-600 text-white rounded-xl p-5 transform transition duration-300 hover:scale-105 hover:bg-amber-600"
            >
              <h3 className="font-bold text-xl text-center mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#ECFAE5]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
