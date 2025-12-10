import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body || {}

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO || process.env.SMTP_TO
    const from = process.env.CONTACT_FROM || user

    if (!host || !user || !pass || !to) {
      return Response.json({
        error: "Email transport is not configured",
        missing: {
          SMTP_HOST: !host,
          SMTP_USER: !user,
          SMTP_PASS: !pass,
          CONTACT_TO: !to,
        },
      }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = `New Case Review: ${firstName} ${lastName}`
    const text = `New case review submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "-"}\n\nMessage:\n${message}`
    const html = `<h2>New Case Review Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>`

    await transporter.sendMail({ from, to, subject, text, html })

    return Response.json({ ok: true })
  } catch (err: any) {
    return Response.json({ error: err?.message || "Unknown error" }, { status: 500 })
  }
}

