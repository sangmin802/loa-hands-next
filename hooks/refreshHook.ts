import { useRouter } from "next/router";

const RefreshHook = () => {
  const router = useRouter();

  if (typeof window !== "undefined" && router.asPath !== "/") {
    (function (l) {
      if (l.search[1] === "/") {
        var decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");

        router.push(decoded + l.hash);
      }
    })(window.location);
    return null;
  }
};

export default RefreshHook;
