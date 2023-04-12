import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Props = {};

function ContactME({}: Props) {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
     first-letter:max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center ">
          I have got just what you neeed. Lets Talk
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p className="text-2xl">+90 0589... </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />

            <a href="mailto:muratal0606@gmail.com" className="text-2xl">
              muratal0606@gmail.com
            </a>
          </div>
          <div
            className="flex items-center space-x-5 justify-center"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Ankara+Turkey",
                "_blank"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 animate-pulse"
              viewBox="0 0 20 20"
              fill="#F7AB0A"
            >
              <path d="M10 0C6.607 0 4 2.607 4 6c0 3.866 5.179 9.391 5.5 9.782.209.273.491.273.7 0 .321-.391 5.5-5.916 5.5-9.782 0-3.393-2.607-6-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <p className="text-2xl">Ankara, Turkey </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactME;
