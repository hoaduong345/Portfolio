import { mySocials } from "../contants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"></div>
      <div className="flex ga-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((socials, index) => (
          <a href={socials.href} key={index}>
            <img src={socials.icon} alt={socials.name} className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p>© 2025 Hoa Truong. All rights reserved.</p>
    </section>
  );
};

export default Footer;
