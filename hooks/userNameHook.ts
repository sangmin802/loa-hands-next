import { useRouter } from "next/router";

const UserNameHook = () => {
  const router = useRouter();
  const { name } = router.query;
  return name;
};

export default UserNameHook;
