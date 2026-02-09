import { SignIn } from "@clerk/nextjs";

export const metadata = { title: "Sign in | DaFTitude" };

export default function LoginPage() {
  return (
    <main className="authPage">
      <section className="authCard">
        <header className="authHeader">
          <h1 className="authTitle">Sign in</h1>
          <p className="authSubtitle">
            Welcome back. Continue with your preferred method.
          </p>
        </header>

        <SignIn />
      </section>
    </main>
  );
}
