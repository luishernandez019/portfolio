import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "El correo no es válido" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "luishdz.dev@gmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #583EBC;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 80px;">Nombre:</td>
              <td style="padding: 10px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Correo:</td>
              <td style="padding: 10px 0; color: #333;">
                <a href="mailto:${email}" style="color: #583EBC;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Mensaje:</p>
            <p style="background: #f5f5f5; padding: 16px; border-radius: 8px; color: #333; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).json({ error: "Error al enviar el mensaje. Intenta de nuevo más tarde." });
  }
}
