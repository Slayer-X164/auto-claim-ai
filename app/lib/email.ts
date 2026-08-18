import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendReviewerInvitation({
  email,
  inviterName,
  organizationName,
  inviteLink,
}: {
  email: string;
  inviterName: string;
  organizationName: string;
  inviteLink: string;
}) {
  const { data, error } = await resend.emails.send({
    from: "AutoClaim AI <noreply@siddx.in>",
    to: email,
    subject: `You've been invited to AutoClaim AI`,
    html: `
      <div>
        <h2>You've been invited to AutoClaim AI</h2>

        <p>
          ${inviterName} has invited you to join
          <strong>${organizationName}</strong>
          as a Reviewer.
        </p>

        <a href="${inviteLink}">
          Accept Invitation
        </a>

        <p>
          This invitation will expire in 48 hours.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error sending email:", error);
  } else {
    console.log("Resend success sending email:", data);
  }
}