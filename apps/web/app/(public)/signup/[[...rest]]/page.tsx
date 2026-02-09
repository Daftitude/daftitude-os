import { SignUp } from "@clerk/nextjs";

export const metadata = { title: "Get started | DaFTitude" };

export default function SignupPage() {
  return (
    <main className="authPage">
      <section className="authCard">
        <header className="authHeader">
          <h1 className="authTitle">Get started</h1>
          <p className="authSubtitle">Create your DaFTitude account.</p>
        </header>

        <SignUp />
      </section>
    </main>
  );
}
