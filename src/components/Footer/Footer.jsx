import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 px-4 py-5 text-gray-400 font-montserrat">
        <div className="flex flex-col gap-4 md:flex-row md:justify-around md:py-8">
          <div>
            <h2 className="text-lg text-slate-50 mb-2">Perusahaan</h2>
            <ul className="space-y-2">
              <li>
                <Link to="index" className="hover:text-slate-50">
                  Beranda
                </Link>
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
                <svg
                  width={31}
                  height={31}
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
    </div>
  );
};

export default Footer;

export const FooterKandidat = () => {
  // Unduh Aplikasi dropdown button
  const [hideUnduhAplikasi, setHideUnduhAplikasi] = useState(true);
  const handleClickUnduh = () => {
    {
      hideUnduhAplikasi
        ? setHideUnduhAplikasi(false)
        : setHideUnduhAplikasi(true);
    }
  };

  return (
    <footer className="bg-white  text-slate-600 w-screen">
      <div className="flex py-5 container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:justify-around md:py-8 container justify-center">
          {/* Pencari Kerja */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">Pencari Kerja</h2>
            <ul className="space-y-2">
              <li>
                <Link to="index" className="hover:text-black hover:underline">
                  Panduan mencari kerja secara aman
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Sumber daya karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Bantuan Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Eksplorasi karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Eksplorasi gaji
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Testimoni
                </a>
              </li>
              {/* Unduh Aplikasi Dropdown */}
              {hideUnduhAplikasi ? (
                <li>
                  <button
                    onClick={() => handleClickUnduh()}
                    className="flex items-center gap-2 hover:text-black hover:underline"
                  >
                    Unduh Aplikasi{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="10"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                          fill="#828282"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              ) : (
                <li>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleClickUnduh()}
                      className="flex items-center gap-2 hover:text-black hover:underline"
                    >
                      Unduh Aplikasi{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                        >
                          <path
                            d="M0.633572 5L0 4.5075L5 0L10 4.5075L9.36643 5L5 1.06375L0.633572 5Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="flex flex-col gap-2">
                      <Link>
                        <button className="flex gap-3 pl-3 hover:text-black items-center hover:underline">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 16 19"
                              fill="none"
                            >
                              <path
                                d="M13.0502 17.28C12.0702 18.23 11.0002 18.08 9.97016 17.63C8.88016 17.17 7.88016 17.15 6.73016 17.63C5.29016 18.25 4.53016 18.07 3.67016 17.28C-1.20984 12.25 -0.489836 4.59 5.05016 4.31C6.40016 4.38 7.34016 5.05 8.13016 5.11C9.31016 4.87 10.4402 4.18 11.7002 4.27C13.2102 4.39 14.3502 4.99 15.1002 6.07C11.9802 7.94 12.7202 12.05 15.5802 13.2C15.0102 14.7 14.2702 16.19 13.0402 17.29L13.0502 17.28ZM8.03016 4.25C7.88016 2.02 9.69016 0.18 11.7702 0C12.0602 2.58 9.43016 4.5 8.03016 4.25Z"
                                fill="#5A6881"
                              />
                            </svg>
                          </span>
                          JobStreet @ App Store
                        </button>
                      </Link>
                      <Link>
                        <button className="flex gap-3 pl-3 hover:text-black items-center hover:underline">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="10"
                              viewBox="0 0 22 13"
                              fill="none"
                            >
                              <path
                                d="M0 12.6281C0.15 10.8448 0.696 9.20312 1.638 7.70312C2.58 6.20312 3.834 5.01146 5.4 4.12813L3.55 0.928125C3.45 0.778125 3.425 0.619791 3.475 0.453125C3.525 0.286458 3.63333 0.161458 3.8 0.0781248C3.93333 -0.00520853 4.08333 -0.0218749 4.25 0.0281251C4.41667 0.0781251 4.55 0.178125 4.65 0.328125L6.5 3.52812C7.93333 2.92812 9.43333 2.62812 11 2.62812C12.5667 2.62812 14.0667 2.92812 15.5 3.52812L17.35 0.328125C17.45 0.178125 17.5833 0.0781251 17.75 0.0281251C17.9167 -0.0218749 18.0667 -0.00520853 18.2 0.0781248C18.3667 0.161458 18.475 0.286458 18.525 0.453125C18.575 0.619791 18.55 0.778125 18.45 0.928125L16.6 4.12813C18.1667 5.01146 19.4207 6.20312 20.362 7.70312C21.3033 9.20312 21.8493 10.8448 22 12.6281H0ZM6 9.87813C6.35 9.87813 6.646 9.75713 6.888 9.51513C7.13 9.27313 7.25067 8.97746 7.25 8.62813C7.25 8.27813 7.129 7.98213 6.887 7.74013C6.645 7.49813 6.34933 7.37746 6 7.37813C5.65 7.37813 5.354 7.49913 5.112 7.74113C4.87 7.98313 4.74933 8.27879 4.75 8.62813C4.75 8.97813 4.871 9.27412 5.113 9.51612C5.355 9.75812 5.65067 9.87879 6 9.87813ZM16 9.87813C16.35 9.87813 16.646 9.75713 16.888 9.51513C17.13 9.27313 17.2507 8.97746 17.25 8.62813C17.25 8.27813 17.129 7.98213 16.887 7.74013C16.645 7.49813 16.3493 7.37746 16 7.37813C15.65 7.37813 15.354 7.49913 15.112 7.74113C14.87 7.98313 14.7493 8.27879 14.75 8.62813C14.75 8.97813 14.871 9.27412 15.113 9.51612C15.355 9.75812 15.6507 9.87879 16 9.87813Z"
                                fill="#5A6881"
                              />
                            </svg>
                          </span>
                          JobStreet @ Google Play
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
          {/* Perusahaan */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">Perusahaan</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Pasang iklan lowongan kerja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Talent search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Beriklan dengan kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Profil perusahaan
                </a>
              </li>
            </ul>
          </div>
          {/* Tentang JobStreet */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">
              Tentang JobStreet
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Berkarier JobStreet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Mitra International
                </a>
              </li>
            </ul>
          </div>
          {/* Kontak */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">Kontak</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Kirim saran
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Media sosial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b-textGray border max-w-[1440px] mx-auto"></div>
      {/* bottom link*/}
      <div className="flex justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 text-black py-10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 1.875C6.89453 1.875 4.375 4.27305 4.375 7.22656C4.375 10.625 8.125 16.0105 9.50195 17.8707C9.55911 17.9492 9.63402 18.0131 9.72058 18.0572C9.80713 18.1012 9.90288 18.1242 10 18.1242C10.0971 18.1242 10.1929 18.1012 10.2794 18.0572C10.366 18.0131 10.4409 17.9492 10.498 17.8707C11.875 16.0113 15.625 10.6277 15.625 7.22656C15.625 4.27305 13.1055 1.875 10 1.875Z"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9.375C11.0355 9.375 11.875 8.53553 11.875 7.5C11.875 6.46447 11.0355 5.625 10 5.625C8.96447 5.625 8.125 6.46447 8.125 7.5C8.125 8.53553 8.96447 9.375 10 9.375Z"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Indonesia
        </div>
        <div className="flex flex-col md:flex-row gap-5 py-10 over:underline">
          <Link to="#" className="hover:text-black hover:underline">
            Pernyataan Privasi
          </Link>
          <Link to="#" className="hover:text-black hover:underline">
            Persyaratan & ketentuan
          </Link>
          <Link to="#" className="hover:text-black hover:underline">
            Hak cipta 2023 &copy; JobStreet
          </Link>
        </div>
      </div>
    </footer>
  );
};
