import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const SignInPage = () => {
  return (
    <div>
      <ClerkLoading>
        <div className="h-[100px] w-[100px] flex flex-col justify-center items-center">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </div>
  );
};

export default SignInPage;
