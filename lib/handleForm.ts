"use server"
import { sendMail, SendMailParams } from "./mailService"

async function handleForm({
  fromName,
  fromEmail,
  subject,
  message,
}: SendMailParams) {
  try {
    // Send Email
    await sendMail({
      fromName,
      fromEmail,
      subject,
      message,
    })

    return {
      success: "Thanks for contacting me! I will reach out to you soon.",
    }
  } catch (e) {
    return {
      error:
        "Oops! Something went wrong while trying to handle your request. Please, try again later.",
    }
  }
}

export default handleForm
