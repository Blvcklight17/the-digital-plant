"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed");

      setForm({ name: "", email: "", message: "" });
      setStatus(data.message || "Message received.");
    } catch (error) {
      setStatus(error.message || "Could not send message.");
    }
  }

  return (
    <form className="tool-form" onSubmit={submit}>
      <div className="field">
        <label>Name</label>
        <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" required />
      </div>
      <div className="field">
        <label>Email</label>
        <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" type="email" required />
      </div>
      <div className="field">
        <label>Message</label>
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows="6" placeholder="How can The Digital Plant help?" required />
      </div>
      <button className="button" type="submit">Send message</button>
      {status && <p className="tool-note">{status}</p>}
    </form>
  );
}
