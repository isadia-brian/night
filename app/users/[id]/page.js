import { getUserById } from "@/lib/prisma/users";
import User from "../User";

const Page = async ({ params }) => {
  const { user } = await getUserById(params.id);

  return (
    <div className="h-[70vh] md:h-[80vh]">
      <User user={user} />
    </div>
  );
};

export default Page;
