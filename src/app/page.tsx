import { redirect } from "next/navigation";

const RedirectPage: React.FC = () => {
  redirect("/dashboard")

  return null; // Optionally, you can return a loading indicator here.
};

export default RedirectPage;
