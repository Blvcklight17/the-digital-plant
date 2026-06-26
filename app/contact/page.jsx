import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact The Digital Plant."
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Contact</div>
          <h1>Contact</h1>
          <p>For partnerships, article suggestions, engineering tools, or consulting inquiries, use the form below.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
