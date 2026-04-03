import { NextResponse } from "next/server";
import { serviceOptions } from "@/app/lib/contact";

const RESEND_API_URL = "https://api.resend.com/emails";
const USER_AGENT = "zielony-warsztat-contact-form/1.0";

type ContactRequestBody = {
  name?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  page?: unknown;
};

function normalizeSingleLine(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function normalizeMessage(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/[^\d+\s()-]/g, "");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return NextResponse.json(
      {
        error:
          "Formularz nie jest jeszcze skonfigurowany po stronie serwera. Uzupełnij zmienne środowiskowe i spróbuj ponownie.",
      },
      { status: 500 },
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Nie udało się odczytać danych formularza." },
      { status: 400 },
    );
  }

  const name = normalizeSingleLine(body.name);
  const phone = normalizePhone(body.phone);
  const service = normalizeSingleLine(body.service);
  const message = normalizeMessage(body.message);
  const honeypot = normalizeSingleLine(body.website);
  const page = normalizeSingleLine(body.page);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { error: "Podaj proszę imię lub nazwę kontaktu." },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Podaj proszę poprawny numer telefonu." },
      { status: 400 },
    );
  }

  if (!serviceOptions.includes(service as (typeof serviceOptions)[number])) {
    return NextResponse.json(
      { error: "Wybierz proszę usługę z listy." },
      { status: 400 },
    );
  }

  if (message.length > 2000) {
    return NextResponse.json(
      { error: "Wiadomość jest za długa. Skróć ją proszę do 2000 znaków." },
      { status: 400 },
    );
  }

  const sentAt = new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Warsaw",
  }).format(new Date());

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(service);
  const safeMessage = message
    ? escapeHtml(message).replaceAll("\n", "<br />")
    : "Klient nie dodał dodatkowej wiadomości.";
  const safePage = page ? escapeHtml(page) : "Nieznana strona";

  const subject = `Nowe zapytanie ze strony: ${service} — ${name}`;
  const text = [
    "Nowe zapytanie z formularza kontaktowego",
    "",
    `Imię: ${name}`,
    `Telefon: ${phone}`,
    `Usługa: ${service}`,
    `Wysłano: ${sentAt}`,
    `Strona: ${page || "Nieznana strona"}`,
    "",
    "Wiadomość:",
    message || "Klient nie dodał dodatkowej wiadomości.",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2b18; max-width: 640px;">
      <h1 style="font-size: 24px; margin-bottom: 24px;">Nowe zapytanie z formularza kontaktowego</h1>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 24px;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; font-weight: 700; width: 140px;">Imię</td>
            <td style="padding: 8px 0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Telefon</td>
            <td style="padding: 8px 0;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Usługa</td>
            <td style="padding: 8px 0;">${safeService}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Wysłano</td>
            <td style="padding: 8px 0;">${sentAt}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Strona</td>
            <td style="padding: 8px 0;">${safePage}</td>
          </tr>
        </tbody>
      </table>
      <div style="padding: 16px; border: 1px solid #d9e2cf; border-radius: 12px; background: #f8faf5;">
        <p style="margin: 0 0 8px; font-weight: 700;">Wiadomość</p>
        <p style="margin: 0;">${safeMessage}</p>
      </div>
    </div>
  `;

  let resendResponse: Response;

  try {
    resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": USER_AGENT,
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        subject,
        html,
        text,
        tags: [{ name: "source", value: "contact-form" }],
      }),
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Nie udało się połączyć z usługą wysyłającą wiadomości. Spróbuj proszę ponownie za chwilę.",
      },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    let resendError = "Nie udało się wysłać wiadomości.";

    try {
      const errorPayload = (await resendResponse.json()) as {
        message?: string;
        error?: string;
      };
      resendError = errorPayload.message || errorPayload.error || resendError;
    } catch {
      // Intentionally ignore JSON parsing failures from upstream.
    }

    return NextResponse.json(
      {
        error:
          resendResponse.status === 429
            ? "Formularz został chwilowo ograniczony. Spróbuj proszę ponownie za moment."
            : `Nie udało się wysłać wiadomości: ${resendError}`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
