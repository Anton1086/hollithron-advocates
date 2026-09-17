"use client";

import { useState } from "react";
import { formCopy } from "@/lib/copy";
import { site, type Locale } from "@/lib/site";

type ContactFormProps = {
  locale: Locale;
};

type Status = "idle" | "sending" | "success";

export function ContactForm({ locale }: ContactFormProps) {
  const t = formCopy[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) nextErrors.name = t.errorName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t.errorEmail;
    if (message.length < 8) nextErrors.message = t.errorMessage;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    const subject =
      locale === "es"
        ? `Consulta — ${name}`
        : `Consultation request — ${name}`;
    const body = [
      locale === "es" ? `Nombre: ${name}` : `Name: ${name}`,
      locale === "es" ? `Correo: ${email}` : `Email: ${email}`,
      phone
        ? locale === "es"
          ? `Teléfono: ${phone}`
          : `Phone: ${phone}`
        : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setStatus("success"), 400);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-l-2 border-accent bg-white/[0.03] px-6 py-8"
      >
        <h3 className="display text-2xl">{t.successTitle}</h3>
        <p className="mt-3 text-white/60">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field
        id="name"
        label={t.name}
        error={errors.name}
        autoComplete="name"
        required
      />
      <Field
        id="email"
        label={t.email}
        type="email"
        error={errors.email}
        autoComplete="email"
        required
      />
      <Field id="phone" label={t.phone} type="tel" autoComplete="tel" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="field"
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{t.privacy}</p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary disabled:cursor-wait disabled:opacity-80"
      >
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
