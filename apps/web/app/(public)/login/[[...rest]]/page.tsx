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

        <SignIn
          appearance={{
            elements: {
              card: "clerkCard",
              cardBox: "clerkCard",
              headerTitle: "clerkHeaderTitle",
              headerSubtitle: "clerkHeaderSubtitle",

              formFieldInput: "clerkInput",
              formButtonPrimary: "navBtnPrimary clerkPrimaryBtn",

              footerActionLink: "clerkLink",
              formResendCodeLink: "clerkLink",
              identityPreviewEditButton: "clerkLink",

              socialButtonsBlockButton: "clerkSocialBtn",
            },
          }}
        />
      </section>
    </main>
  );
}
