import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4 ">
        <div className="text-center space-y-4 pt-16 pb-4">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7e8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <SignIn path="/sign-in" />
        </div>
      </div>
    </div>
  );
}
