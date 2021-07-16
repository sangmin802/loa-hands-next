import {
  Suspense,
  PropsWithChildren,
  SuspenseProps,
  useEffect,
  useState,
  ReactElement,
  ComponentProps,
} from "react";

// interface ICustomSuspense extends SuspenseProps {
//   fallback: ReactElement;
// }

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export default function CustomSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}
