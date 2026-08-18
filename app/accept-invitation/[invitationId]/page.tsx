import LoginWithGoogleBtn from "@/component/buttons/LoginWithGoogleBtn"

export default function AcceptInvitationPage() {
    return (
        <div>
            <h1>Accept Invitation</h1>
            <h3>You are invited to join as a Reviewer</h3>
            <LoginWithGoogleBtn/>
            <input type="email" placeholder="Enter your email" />
            <button>otp login</button>
        </div>
    );
}