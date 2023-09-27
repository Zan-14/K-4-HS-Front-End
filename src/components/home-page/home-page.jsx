import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <>
        {/* header  */}
        <header className="font-montserrat">
          <div className="flex px-2 justify-between items-center py-5 md:px-20 md:py-10">
            <h1 className="text-3xl md:text-4xl text-blue-900 font-extrabold ">JobStreet</h1>
            <div className="hidden md:flex gap-2">
              <button className="py-1 text-blue-900 px-5 border border-blue-900 rounded-md">Untuk Kandidat</button>
              <button className="text-white py-1 px-3 bg-pink-600 rounded-md ">Daftar</button>
              <button className="text-white py-1 px-3 bg-blue-900 rounded-md ">Masuk</button>
            </div>
            <div className="group md:hidden">
              <button className="text-4xl">☰</button>
              <ul className="fixed hidden group-hover:flex flex-col w-full space-y-2 right-0 items-center justify-center z-[1] shadow p-4 bg-white">
                <li>
                  <a href="#" className="hover:text-blue-800">
                    Berpatner dengan kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-800">
                    Law of Attraction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-800">
                    Product &amp; Layanan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-800">
                    Hubungi Kami
                  </a>
                </li>
                <li className="py-5 flex flex-col space-y-2">
                  <button className="py-1 text-blue-900 px-5 border border-blue-900 rounded-md">Untuk Kandidat</button>
                  <button className="text-white py-1 px-3 bg-pink-600 rounded-md ">Daftar</button>
                  <button className="text-white py-1 px-3 bg-blue-900 rounded-md ">Masuk</button>
                </li>
              </ul>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 px-20 py-8 bg-blue-900 text-slate-50">
            <a href="#">Berpartner dengan kami</a>
            <a href="#">Law of Attraction</a>
            <a href="#">Produk &amp; Layanan</a>
            <a href="#">Hubungi Kami</a>
          </nav>
        </header>
        {/* Section */}
        <section className="mt-10 font-montserrat">
          <div className="container-rekrut">
            <section className="hero">
              <div className="content">
                <h1>Rekrut orang yang Anda butuhkan, mudah dan cepat</h1>
                <p>Daftar sekarang dan pasang iklan lowongan pekerjaan anda GRATIS</p>
                <a href="#">Pasang Iklan Sekarang</a>
              </div>
              <div className="image">
                <img className="w-[670px] h-[575px]" src="public/img-hero.png" alt="" />
              </div>
            </section>
            <section className="perusahaan">
              <div className="judul">
                <h3>Dipercaya oleh UKM dan perusahaan selama 20+ tahun</h3>
              </div>
              <div className="image-perusahaan">
                <div className="thumbnail">
                  <img src="public/Perusahaan-1.png" alt="" />
                </div>
                <div className="thumbnail">
                  <img src="public/Perusahaan-2.png" alt="" />
                </div>
                <div className="thumbnail">
                  <img src="public/Perusahaan-3.png" alt="" />
                </div>
                <div className="thumbnail">
                  <img src="public/Perusahaan-4.png" alt="" />
                </div>
                <div className="thumbnail">
                  <img src="public/Perusahaan-5.png" alt="" />
                </div>
                <div className="thumbnail">
                  <img src="public/Perusahaan-6.png" alt="" />
                </div>
                <div className="thumbnail">
                  <img src="public/Perusahaan-7.png" alt="" />
                </div>
              </div>
            </section>
            <section className="alasan">
              <div className="judul">
                <h3>Mengapa memilih JobStreet</h3>
              </div>
              <div className="card">
                <div className="icons">
                  <img src="public/icon-1.png" alt="" />
                  <div>
                    <h4>
                      Kami adalah pilihan pertama <br />
                      para pencari kerja
                    </h4>
                    <p>Akses 13,8+ juta kandidat di Indonesia</p>
                  </div>
                </div>
                <div className="icons">
                  <img src="public/icon-2.png" alt="" />
                  <h4>Kami dapat dipercaya</h4>
                  <p>Dipercaya 1+ juta perusahaan di Asia</p>
                </div>
                <div className="icons">
                  <img src="public/icon-3.png" alt="" />
                  <h4>Kami mendukung anda</h4>
                  <p>
                    Account manajer kami selalu siap <br />
                    membantu Anda
                  </p>
                </div>
              </div>
            </section>
            <section className="catatan">
              <h3>*Berdasarkan survey kandidat 2020 oleh Lembaga riset pihak ketiga dan data internal JobStreet</h3>
            </section>
          </div>
          {/* Rekrut */}
          <div className="bg-[#e5e5e5]">
            <div>
              <h1 className="pt-[50px] text-[#2d3648] text-center text-3xl font-bold p-[30px]">
                Rekrut Mudah dalam 3 Langkah Sederhana
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img
                  className="bg-slate-50"
                  width="564px"
                  height="483px"
                  src="/public/Rectangle 21.png"
                  alt="rectangle"
                />
              </div>
              <div className="w-[584px] h-[483px] flex justify-center">
                <div className="p-[11px]">
                  <div className="pt-5 pb-16">
                    <img width="56px" height="56px" src="public/point1.png" alt="" className="angka1" />
                  </div>
                  <div className="pt-5 pb-16">
                    <img width="56px" height="56px" src="public/point2.png" alt="" className="angka2" />
                  </div>
                  <div className="pt-5 pb-16">
                    <img width="56px" height="56px" src="public/point3.png" alt="" className="angka3" />
                  </div>
                </div>
                <div className="p-[11px] text-[#545B6A]">
                  <div className="pt-[14px] pb-16">
                    <h3 className="text-lg font-bold">Daftar untuk akun gratis Anda</h3>
                    <p className="text-sm">Cukup daftar online dan buat iklan lowongan pekerjaan Anda</p>
                  </div>
                  <div className="pt-5 pb-16">
                    <h3 className="text-lg font-bold">Posting iklan pekerjaan Anda</h3>
                    <p className="text-sm">
                      Gunakan paket Lite Ad GRATIS Anda atau pilih paket jenis iklan kami yang lain
                    </p>
                  </div>
                  <div className="pb-10">
                    <h3 className="text-lg font-bold">Mulailah merekrut</h3>
                    <p className="text-sm">Kelola semua pelamar dengan platform kami yang mudah digunakan</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="px-[30px] py-2 text-base font-bold text-[#4964e9] inline-block border-[3px] border-[#4964e9] rounded-lg"
                    >
                      <p>Pasang Iklan Sekarang</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="flex justify-center items-center">
            <iframe
              className="w-[1200px] h-[641px] mt-[50px] rounded-2xl"
              src="https://www.youtube.com/embed/UlaA6jhrd-0"
              title="YouTube 
      video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          {/* Pelanggan */}
          <div className="p-10 text-center">
            <h2 className="pt-[50px] text-[#2d3648] text-center text-[22px] font-bold p-[30px]">
              Yang Pelanggan katakan tentang kami
            </h2>
            <div className="flex justify-center items-center">
              <div className="m-auto">
                <div className="absolute">
                  <img width={275} height={241} src="public/pelanggan1.png" alt="pelanggan1" />
                </div>
                <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                  <p className="text-[11px] font-semibold text-[#1D559D] h-[106px]">
                    “Dengan menggunakan JobStreet, mencari kandidat untuk calon guru dan staf di sekolah kami menjadi
                    lebih mudah.”
                  </p>
                  <p className="text-[11px] text-right font-normal text-[#1D559D]">
                    Frisca Friscilia Arnita,
                    <br />
                    Primary Teacher at Yayasan Pendidikan dan Pelatihan Pelita Global
                  </p>
                </div>
              </div>
              <div className="m-auto">
                <div className="absolute">
                  <img width={275} height={241} src="public/pelanggan2.png" alt="pelanggan2" />
                </div>
                <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                  <p className="text-[11px] font-semibold text-[#E60278] h-[106px]">
                    “JobStreet memudahkan pencarian kandidat, menghemat waktu dan juga user friendly.”
                  </p>
                  <p className="text-[11px] text-right font-normal text-[#E60278]">
                    Sartono,
                    <br />
                    Head of HR at PT Inasentra Unisatya
                  </p>
                </div>
              </div>
              <div className="m-auto">
                <div className="absolute">
                  <img width={275} height={241} src="public/pelanggan1.png" alt="pelanggan1" />
                </div>
                <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                  <p className="text-[11px] font-semibold text-[#1D559D] h-[106px]">
                    “JobStreet sangat membantu kami dalam percepatan pengembangan bisnis dalam hal pemenuhan karyawan.”
                  </p>
                  <p className="text-[11px] text-right font-normal text-[#1D559D]">
                    Rio Jonas,
                    <br />
                    HRGA Manajer at Kurniawan Group
                  </p>
                </div>
              </div>
              <div className="m-auto">
                <div className="absolute">
                  <img width={275} height={241} src="public/pelanggan1.png" alt="pelanggan1" />
                </div>
                <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                  <p className="text-[11px] font-semibold text-[#E60278] h-[106px]">
                    “JobStreet merupakan salah satu pioneer jasa penyedia talent search yang memudahkan proses pemilihan
                    kandidat dengen mengerucutkan kesesuaian kebutuhan.”
                  </p>
                  <p className="text-[11px] text-right font-normal text-[#1D559D]">
                    Niko Arise,
                    <br />
                    Recruitment Coordinator at Bukaka
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Iklan */}
          <div className="relative mt-20">
            <img className="min-w-full" src="/public/iklan.png" alt="iklan" />
            <div className="absolute top-[26vh] left-[40.5vw]">
              <h1 className="text-[#2D3648] text-4xl font-extrabold ">Iklan loker GRATIS Anda menunggu!</h1>
              <p className="pt-2.5 pb-5 text-[#2D3648] text-base font-bold">
                Dapatkan paket Lite Ad Gratis untuk pendaftaran pertama kali, tanpa <br />
                komitmen
              </p>
              <a
                href="#"
                className="px-[30px] py-2 text-base font-bold text-[#2D3648] inline-block border-[3px] border-[#2D3648] rounded-lg"
              >
                Pasang Iklan Sekarang
              </a>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className="bg-gray-800 px-4 py-5 text-gray-400 font-montserrat">
          <div className="flex flex-col gap-4 md:flex-row md:justify-around md:py-8">
            <div>
              <h2 className="text-lg text-slate-50 mb-2">Perusahaan</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Berpatner dengan kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Harga &amp; Paket
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-slate-50 mb-2">Produk dan layanan</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Iklan lowongan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Iklan lowongan bintang 5
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Talent Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    SiVA Recruitment Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Layanan Branding Perusahaan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-slate-50 mb-2">Bantuan</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-slate-50 mb-2">Informasi lainnya</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Law of Attraction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Artikel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-50">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-slate-50 mb-2">Temukan Kami di</h2>
              <div className="flex items-center gap-3">
                <div>
                  <svg width={31} height={31} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31Z"
                      fill="#3C5A9A"
                    />
                    <path
                      d="M20.54 4.75781H17.1064C15.0688 4.75781 12.8023 5.61481 12.8023 8.56844C12.8123 9.5976 12.8023 10.5832 12.8023 11.6925H10.4451V15.4436H12.8753V26.2424H17.3409V15.3723H20.2884L20.5551 11.682H17.264C17.264 11.682 17.2713 10.0403 17.264 9.5636C17.264 8.39639 18.4785 8.46323 18.5515 8.46323C19.1295 8.46323 20.2532 8.46492 20.5417 8.46323V4.75781H20.54Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z"
                      fill="#2DAAE1"
                    />
                    <path
                      d="M21 11.1831C20.5136 11.3873 19.997 11.5214 19.4678 11.5807C20.0262 11.2635 20.4429 10.7673 20.6404 10.1842C20.1177 10.4783 19.5447 10.6856 18.9466 10.7969C18.6984 10.5455 18.3973 10.3449 18.0623 10.2077C17.7274 10.0706 17.3657 9.99985 17.0001 10C16.6481 10.0017 16.2998 10.0684 15.9753 10.1962C15.6508 10.324 15.3563 10.5105 15.1087 10.7449C14.8611 10.9793 14.6652 11.2571 14.5322 11.5625C14.3992 11.8678 14.3318 12.1947 14.3336 12.5245C14.3334 12.7181 14.3564 12.9112 14.4023 13.1C13.3394 13.0483 12.3001 12.7866 11.3528 12.332C10.4055 11.8774 9.57158 11.2402 8.9058 10.4623C8.56488 11.0181 8.46048 11.674 8.61347 12.2989C8.76646 12.9237 9.16557 13.4714 9.73101 13.8325C9.30707 13.82 8.89263 13.7117 8.52295 13.5169V13.5488C8.52067 14.1291 8.73229 14.6922 9.12204 15.1432C9.51179 15.5942 10.0558 15.9053 10.6621 16.0239C10.4332 16.0831 10.1969 16.1128 9.95945 16.1125C9.79098 16.1125 9.62289 16.0977 9.4574 16.0681C9.62509 16.5673 9.95551 17.0048 10.4022 17.3191C10.849 17.6334 11.3896 17.8087 11.9482 17.8203C11.3966 18.2305 10.7636 18.5341 10.0859 18.7134C9.40814 18.8928 8.69917 18.9444 8 18.8653C9.21643 19.6065 10.6365 20.0007 12.0876 20C16.9923 20 19.6749 16.1533 19.6749 12.8174C19.6749 12.7079 19.6722 12.599 19.6668 12.4908C20.1906 12.1322 20.642 11.6891 21 11.1822V11.1831Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29C22.5081 29 29 22.5081 29 14.5Z"
                      fill="#FF0000"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.5916 8.54345C22.368 8.75243 22.9801 9.36457 23.1892 10.1409C23.5774 11.5593 23.5624 14.5154 23.5624 14.5154C23.5624 14.5154 23.5624 17.4566 23.1892 18.8749C22.9801 19.6513 22.368 20.2634 21.5916 20.4724C20.1733 20.8457 14.4999 20.8457 14.4999 20.8457C14.4999 20.8457 8.8415 20.8457 7.40823 20.4575C6.63188 20.2485 6.01977 19.6364 5.81075 18.86C5.4375 17.4566 5.4375 14.5005 5.4375 14.5005C5.4375 14.5005 5.4375 11.5593 5.81075 10.1409C6.01977 9.36457 6.6468 8.73751 7.40823 8.52847C8.82657 8.15527 14.4999 8.15527 14.4999 8.15527C14.4999 8.15527 20.1733 8.15527 21.5916 8.54345ZM17.4113 14.5005L12.6934 17.2177V11.7832L17.4113 14.5005Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14.5" cy="14.5" r="12.5" fill="white" />
                    <path
                      d="M14.5 0C6.49181 0 0 6.49182 0 14.5C0 22.5082 6.49181 29 14.5 29C22.5081 29 29 22.5082 29 14.5C28.9999 6.49182 22.508 0 14.5 0ZM10.6314 21.5101H7.44773V11.2247H10.6314V21.5101ZM9.02437 9.87776C7.98464 9.87776 7.14175 9.028 7.14175 7.97994C7.14175 6.93175 7.98475 6.08205 9.02437 6.08205C10.064 6.08205 10.9069 6.93175 10.9069 7.97994C10.9069 9.02806 10.064 9.87776 9.02437 9.87776ZM22.5619 21.5101H19.3938V16.1111C19.3938 14.6303 18.8313 13.8038 17.6604 13.8038C16.3861 13.8038 15.7204 14.6646 15.7204 16.1111V21.5101H12.6669V11.2247H15.7204V12.61C15.7204 12.61 16.6388 10.911 18.8198 10.911C21.0007 10.911 22.562 12.2427 22.562 14.9975L22.5619 21.5101Z"
                      fill="url(#paint0_linear_18_274)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_18_274"
                        x1="4.24694"
                        y1="4.24695"
                        x2="24.753"
                        y2="24.753"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2489BE" />
                        <stop offset={1} stopColor="#0575B3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_18_277"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={29}
                      height={29}
                    >
                      <circle cx="14.5" cy="14.5" r="14.5" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_18_277)">
                      <path
                        d="M1.84933 2.01541C-0.42649 4.37765 0.0392923 6.887 0.0392923 14.5103C0.0392923 22.1505 -0.151365 23.5529 0.76572 25.4533C1.53197 27.0426 2.99568 28.2364 4.71884 28.6813C6.09929 29.0358 7.01637 28.9864 14.493 28.9864C20.7606 28.9864 22.7106 29.0985 24.336 28.6789C26.7445 28.0579 28.7042 26.1056 28.9721 22.7016C29.0095 22.2265 29.0095 6.80259 28.9709 6.31784C28.6861 2.69189 26.4525 0.602167 23.5094 0.178918C22.8337 0.0812451 22.6985 0.052305 19.2377 0.0462758C6.96207 0.052305 4.27115 -0.49394 1.84933 2.01541Z"
                        fill="url(#paint0_linear_18_277)"
                      />
                      <path
                        d="M14.5002 7.00723C11.4282 7.00723 8.51104 6.73417 7.3968 9.59154C6.93655 10.7717 7.00339 12.3044 7.00339 14.4989C7.00339 16.4247 6.94162 18.2347 7.3968 19.4055C8.5085 22.2646 11.4493 21.9907 14.4985 21.9907C17.4402 21.9907 20.4733 22.2967 21.601 19.4055C22.0621 18.2135 21.9944 16.7037 21.9944 14.4989C21.9944 11.5723 22.156 9.68284 20.7355 8.2643C19.2973 6.82716 17.3522 7.00723 14.4968 7.00723H14.5002ZM13.8284 8.35729C17.5053 8.35138 20.4369 7.84415 20.6019 11.4708C20.6628 12.8141 20.6628 16.1804 20.6019 17.5237C20.442 21.021 17.7769 20.6372 14.501 20.6372C11.6143 20.6372 10.1828 20.7395 9.21833 19.7749C8.23946 18.7968 8.35621 17.3986 8.35621 14.4956C8.35621 11.054 8.03048 8.55596 11.4722 8.39787C12.1634 8.36659 12.4316 8.35729 13.8284 8.3556V8.35729ZM18.502 9.60084C18.0053 9.60084 17.6026 10.0032 17.6026 10.4995C17.6026 10.9957 18.0053 11.3981 18.502 11.3981C18.9986 11.3981 19.4013 10.9957 19.4013 10.4995C19.4013 10.0032 18.9986 9.60084 18.502 9.60084ZM14.5002 10.6516C12.3741 10.6516 10.6507 12.3745 10.6507 14.4989C10.6507 16.6234 12.3741 18.3454 14.5002 18.3454C16.6263 18.3454 18.3488 16.6234 18.3488 14.4989C18.3488 12.3745 16.6263 10.6516 14.5002 10.6516ZM14.5002 12.0017C15.8801 12.0017 16.9986 13.1201 16.9986 14.4989C16.9986 15.8778 15.8801 16.9962 14.5002 16.9962C13.1203 16.9962 12.0018 15.8778 12.0018 14.4989C12.0018 13.1193 13.1203 12.0017 14.5002 12.0017Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_18_277"
                        x1="1.92723"
                        y1="27.1093"
                        x2="28.7935"
                        y2="3.83942"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFDD55" />
                        <stop offset="0.5" stopColor="#FF543E" />
                        <stop offset={1} stopColor="#C837AB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="flex flex-col md:flex-row md:px-20 gap-5 py-10">
            <a href="#">Tentang JobStreet.com</a>
            <a href="#">Syarat penggunaan</a>
            <a href="#">Kebijakan Privasi</a>
          </div>
        </footer>
      </>
    </div>
  );
};

export default HomePage;
