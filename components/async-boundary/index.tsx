import { PropsWithChildren, ReactElement, useCallback } from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary, CustomSuspense } from "components/";

interface IAsyncBoundary {
  suspenseFallback: ReactElement;
  errorFallback: ReactElement;
  children: ReactElement;
}

const AsyncBoundary = ({
  suspenseFallback,
  errorFallback,
  children,
}: PropsWithChildren<IAsyncBoundary>) => {
  const { reset } = useQueryErrorResetBoundary();
  const resetHandler = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ErrorBoundary resetQuery={resetHandler} errorFallback={errorFallback}>
      <CustomSuspense fallback={suspenseFallback}>{children}</CustomSuspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
