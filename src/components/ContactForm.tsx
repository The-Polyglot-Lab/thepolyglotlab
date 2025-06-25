import { useState } from 'react';
import '../styles/ContactForm.css';
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // optional for feedback

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://thepolyglotlab.onrender.com:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Message sent! 🚀");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Something went wrong. 😬");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message. 😔");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;