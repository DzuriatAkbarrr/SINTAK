import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, email, subjek, pesan } = form;

    if (!nama || !email || !subjek || !pesan) {
      alert("Semua Kolom Harus Diisi!");
    } else {
      alert("Pesan telah terkirim!");
      setForm({ nama: '', email: '', subjek: '', pesan: '' });
    }
  };

  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center py-20 px-6"
      style={{ backgroundImage: "url('latarrr.jpg')" }}
    >
      
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="font-bold text-4xl md:text-6xl">Contact Us</h1>
        <p className="pt-4 text-gray-700 text-base md:text-lg">
          Ingin bekerja sama, menjadi mitra, atau memiliki ide menarik? <br />
          Hubungi tim kami dan mari mulai percakapan.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white/80 rounded-lg shadow-md p-6 md:p-10">
       
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="nama"
            value={form.nama}
            placeholder="Masukkan Nama"
            className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Masukkan Email"
            className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="subjek"
            value={form.subjek}
            placeholder="Subjek"
            className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            onChange={handleChange}
          />

          <textarea
            name="pesan"
            value={form.pesan}
            placeholder="Tulis pesan Anda..."
            rows="5"
            className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Kirim
          </button>
        </form>

        
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Hubungi kami untuk pertanyaan, kolaborasi, atau sekadar ingin ngobrol soal kopi.
            Kami siap membantu Anda kapan saja.
          </p>

          <div className="space-y-6 text-gray-800">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 w-6 h-6" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p>+62 888 *** ***</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-pink-500 w-6 h-6" />
              <div>
                <p className="font-semibold">Instagram</p>
                <p>@aromasriwijaya</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaTwitter className="text-blue-500 w-6 h-6" />
              <div>
                <p className="font-semibold">Twitter</p>
                <p>@aromasrwjy</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold">Email</p>
                <p>aromasrwjy@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot  className="text-black w-6 h-6"/>
              <div>
                <p className="font-semibold">Alamat</p>
                <p>Jl. Lunjuk No. 1, Palembang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
