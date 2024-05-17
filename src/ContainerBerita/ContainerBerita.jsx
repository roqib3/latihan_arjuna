import "./ContainerBerita.css";
import { Button2Property1Default } from "../Button2Property1Default/Button2Property1Default.jsx";

export const ContainerBerita = ({ className, ...props }) => {
  return (
    <div className={"container-berita " + className}>
      <div className="frame-4462">
        <div className="frame-4460">
          <div className="header">Header </div>
          <div className="permasalahan-sampah-telah-menjadi-sebuah-ancaman-bagi-bangsa-indonesia-tumpukan-sampah-kian-menggunung-di-berbagai-tempat-mencemari-lingkungan-dan-membahayakan-kesehatan-masyarakat-tak-hanya-itu-sampah-juga-menimbulkan-dampak-sosial-dan-ekonomi-yang-tak-kalah-serius">
            Permasalahan sampah telah menjadi sebuah ancaman bagi bangsa
            Indonesia. Tumpukan sampah kian menggunung di berbagai tempat,
            mencemari lingkungan dan membahayakan kesehatan masyarakat. Tak
            hanya itu, sampah juga menimbulkan dampak sosial dan ekonomi yang
            tak kalah serius.{" "}
          </div>
        </div>
        <div className="frame-4461">
          <Button2Property1Default className="button-2-instance"></Button2Property1Default>
        </div>
      </div>
      <div className="frame-4463">
        <img
          className="ramadhan-momentum-untuk-menyadari-bahaya-sampah-1710922717-1"
          src="ramadhan-momentum-untuk-menyadari-bahaya-sampah-1710922717-10.png"
        />
      </div>
    </div>
  );
};
