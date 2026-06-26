"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("Saving...");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error("Failed");
      setEmail("");
      setStatus("You're on the list.");
    } catch {
      setStatus("This local starter captured the structure. Connect Mailchimp, ConvertKit, Beehiiv, or a database before production.");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="engineer@company.com"
        type="email"
        required
      />
      <button className="button" type="submit">Join</button>
      {status && <small className="newsletter-status">{status}</small>}
    </form>
  );
}
