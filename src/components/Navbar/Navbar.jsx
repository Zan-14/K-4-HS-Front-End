export default function Navbar() {
  return (
    <header className="font-montserrat">
      <div className="flex px-2 justify-between items-center py-5 md:px-20 md:py-10">
        <h1 className="text-3xl md:text-4xl text-blue-900 font-bold ">
          JobStreet
        </h1>
        <div className="hidden md:flex gap-2">
          <button className="py-1 text-blue-900 px-5 border border-blue-900 rounded-md">
            Untuk Kandidat
          </button>
          <button className="text-white py-1 px-3 bg-pink-600 rounded-md ">
            Daftar
          </button>
          <button className="text-white py-1 px-3 bg-blue-900 rounded-md ">
            Masuk
          </button>
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
              <button className="py-1 text-blue-900 px-5 border border-blue-900 rounded-md">
                Untuk Kandidat
              </button>
              <button className="text-white py-1 px-3 bg-pink-600 rounded-md ">
                Daftar
              </button>
              <button className="text-white py-1 px-3 bg-blue-900 rounded-md ">
                Masuk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
