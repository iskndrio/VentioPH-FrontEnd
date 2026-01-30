import Navbar from "./components/Navbar";
// import Portfolio from "./components/Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faBuilding,
  faRectangleAd,
  faCamera,
  faVideo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import bgImage from "./assets/btsfotopin.jpg";

export default function App() {
  return (
    <div className="text-gray-900">
      <Navbar />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-white pt-16 relative overflow-hidden"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/heros-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="text-center max-w-2xl px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p
            className="text-lg opacity-90 mb-8"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
            dolore numquam.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-6 py-3 font-semibold hover:scale-105 transition inline-block"
            style={{ backgroundColor: "transparent", fontFamily: "Poppins" }}
          >
            Click for collab
          </a>
        </div>
      </section>

      <section
        id="about"
        className="py-24"
        style={{ backgroundColor: "#090f15" }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-3xl mb-6 text-white"
            style={{ fontFamily: "Poppins" }}
          >
            WE ARE
          </h2>
          <h2 className="text-6xl font-bold mb-6 text-white">
            V E N T I O.P R O D U C T I O N
          </h2>
          <p
            className="text-white max-w-3xl mx-auto"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            suscipit iusto repudiandae sint porro corporis ab asperiores iste.
            Aut non itaque neque rerum harum molestias atque. Cupiditate
            repellat, necessitatibus, voluptates aspernatur dolorem vel
            voluptatibus at quis maxime delectus totam, ea soluta vitae
            doloribus! Dolore nam incidunt, totam reiciendis sit alias?
          </p>
        </div>
      </section>

      <section
        id="services"
        className="py-24 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            WHAT WE DO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border hover:shadow-xl transition bg-black bg-opacity-40">
              <div className="text-4xl mb-3 text-white">
                <FontAwesomeIcon icon={faFilm} />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Short Movie
              </h3>
              <p className="text-white" style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at
                ipsa autem dolor quia. Saepe officia architecto amet a atque!
              </p>
            </div>

            <div className="p-8 border hover:shadow-xl transition bg-black bg-opacity-40">
              <div className="text-4xl mb-3 text-white">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Video company profile
              </h3>
              <p className="text-white" style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                quidem magni consequuntur error quam libero natus saepe quasi
                ipsum non?
              </p>
            </div>

            <div className="p-8 border hover:shadow-xl transition bg-black bg-opacity-40">
              <div className="text-4xl mb-3 text-white">
                <FontAwesomeIcon icon={faRectangleAd} />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Video iklan
              </h3>
              <p className="text-white" style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                tempore, incidunt rerum cumque eveniet magnam nobis tenetur
                inventore suscipit fugit.
              </p>
            </div>

            <div className="p-8 border hover:shadow-xl transition bg-black bg-opacity-40">
              <div className="text-4xl mb-3 text-white">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Storyboard & Shotlist
              </h3>
              <p className="text-white" style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis commodi quo cupiditate quia, praesentium laborum
                architecto. Excepturi nobis veniam culpa.
              </p>
            </div>

            <div className="p-8 border hover:shadow-xl transition bg-black bg-opacity-40">
              <div className="text-4xl mb-3 text-white">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Fotografi profesional
              </h3>
              <p className="text-white" style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis commodi quo cupiditate quia, praesentium laborum
                architecto. Excepturi nobis veniam culpa.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Portfolio /> */}
      <section
        id="contact"
        className="py-24 text-white text-center"
        style={{ backgroundColor: "#314b6e" }}
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
        <p className="mb-8 text-gray-400" style={{ fontFamily: "Poppins" }}>
          Have a project in mind? Let’s talk.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition"
            title="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://instagram.com/ventio.production"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-4xl hover:scale-110 transition"
            title="Gmail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </section>
    </div>
  );
}
