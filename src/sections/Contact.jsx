import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Sending email with data:", formData);

      await emailjs.send(
        "service_vkivck5",
        "template_zuxbgmi",
        {
          form_name: formData.name,
          to_name: "Hoa",
          from_email: formData.email,
          to_email: "vanhoa284@gmail.com",
          message: formData.message,
        },
        "iruU27R5gdvZT19kB"
      );
      setIsLoading(false);
      alert("Success! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      alert("Failed.");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <div
        className="flex flex-col items-center 
      justify-center max-w-md p-5 border border-white/10 rouded-2xl bg-primary"
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-forcus"
              placeholder="Join Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="field-input field-input-forcus"
              placeholder="JoinDoe@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-forcus"
              placeholder="Share your thoughts...."
              autoComplete="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg rounded-md text-center 
          cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
