import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import Text from "../../utils/CustomText";

const LinksBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <aside className={"linksBox"}>
      <Text tag={"h3"} className={`boldText ${isDesktopOrLaptop ? "f28" : "f18"}`} style={{ color: "#fff", marginBottom: "8px" }}>
        Contact Information
      </Text>
      <Text tag={"p"} className={`regularText f16 `} style={{ color: "#C5C6D0" }}>
        Any questions or remarks? Just write us a message.
      </Text>
      <div>
        <ul>
          <li className={"flexRow alignCenter "} style={{ gap: "20px", marginTop: "20px" }}>
            <FaPhoneAlt size={22} color="#fff" />
            <Text tag={"p"} className={"f16 mediumText"} onClick={() => window.open("tel:07033586599")} style={{ color: "#fff", cursor: "pointer" }}>
              07033586599,
            </Text>
            <Text tag={"p"} className={"f16 mediumText"} onClick={() => window.open("tel:09064372882")} style={{ color: "#fff", cursor: "pointer" }}>
              09064372882
            </Text>
          </li>
          <li className={"flexRow alignCenter"} style={{ gap: "20px", marginTop: "20px" }}>
            <MdEmail size={22} color="#fff" />
            <Text tag={"p"} className={"f16 mediumText"} onClick={() => window.open("mailto:exagorazo@gmail.com")} style={{ color: "#fff", cursor: "pointer" }}>
              exagorazo@gmail.com
            </Text>
          </li>
          <li className={"flexRow"} style={{ gap: "20px", marginTop: "20px" }}>
            <MdLocationOn size={48} color="#fff" />
            <Text tag={"address"} className={"f14 mediumText"} style={{ color: "#fff", cursor: "pointer" }}>
              Exagorazo Global ventures limited, Suite 15, Flagship plaza, 56 Ezilo street, Independence layout, Opposite ICPC and NEMA Office, Enugu.
            </Text>
          </li>
        </ul>
      </div>
      <div className={"socialLinksBox"}>
        <ul className={"flexRow alignCenter"} style={{ gap: "20px" }}>
          <li>
            <FaFacebookF size={20} color="#fff" />
          </li>
          <li>
            <FaInstagram size={20} color="#fff" />
          </li>
          <li>
            <FaLinkedin size={20} color="#fff" />
          </li>
          <li>
            <FaYoutube size={20} color="#fff" />
          </li>
          <li>
            <FaTiktok size={20} color="#fff" />
          </li>
          <li>
            <FaWhatsapp size={20} color="#fff" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LinksBox;
