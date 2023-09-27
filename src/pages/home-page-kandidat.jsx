import { HomeSearchSectionKandidat } from "../components/Main/Kandidat/home-search-section";
import { NavbarKandidat } from "../components/Navbar/Navbar";
import { FooterKandidat } from "../components/Footer/Footer";
import Rekomendasi from "../components/Main/Kandidat/rekomendasi";
import PerusahaanTernama from "../components/Main/Kandidat/perusahaan-ternama";

const HomePageKandidat = () => {
  return (
    <div className="bg-bgGray">
      <NavbarKandidat />
      <HomeSearchSectionKandidat />
      <Rekomendasi />
      <PerusahaanTernama />
      <FooterKandidat />
    </div>
  );
};

export default HomePageKandidat;
