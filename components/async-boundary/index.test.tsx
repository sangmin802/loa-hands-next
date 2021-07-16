import { fireEvent, render, waitFor } from "utils/test";
import { useQuery } from "react-query";
import AsyncBoundary from "./index";

const SuspenseFallback = () => <span data-testid="loading">로딩중</span>;
const ErrorFallback = ({
  error,
  resetBoundary,
}: {
  error?;
  resetBoundary?;
}) => {
  return (
    <>
      <span data-testid="error-message">{error.message}</span>
      <button data-testid="retry-button" onClick={resetBoundary}>
        재시도
      </button>
    </>
  );
};

const renderAsyncBoundary = (key, mock) => {
  const Component = () => {
    useQuery(key, () => mock());
    return <span data-testid="fetched-data">성공</span>;
  };

  return (
    <AsyncBoundary
      errorFallback={<ErrorFallback />}
      suspenseFallback={<SuspenseFallback />}
    >
      <Component />
    </AsyncBoundary>
  );
};

describe("asyncBoundary", () => {
  it("로딩", async () => {
    const { getByTestId } = render(renderAsyncBoundary("로딩", jest.fn()));
    await waitFor(() => expect(getByTestId("loading")).toBeTruthy());
  });

  describe("에러 발생", () => {
    it("에러 핸들링", async () => {
      const mock = jest.fn().mockRejectedValue(new Error("에러"));
      const { getByTestId } = render(renderAsyncBoundary("에러", mock));

      await waitFor(() => expect(getByTestId("error-message")).toBeTruthy());
    });

    it("에러 발생 후, retry", async () => {
      const mock = jest
        .fn()
        .mockRejectedValueOnce(new Error("에러"))
        .mockResolvedValueOnce({ data: "성공" });

      const { getByTestId } = render(renderAsyncBoundary("retry", mock));

      await waitFor(() => expect(getByTestId("retry-button")).toBeTruthy());

      fireEvent.click(getByTestId("retry-button"));

      await waitFor(() => expect(getByTestId("loading")).toBeTruthy());
      await waitFor(() => expect(getByTestId("fetched-data")).toBeTruthy());
    });
  });

  it("데이터 패칭 완료", async () => {
    const mock = jest.fn().mockResolvedValueOnce({ data: "성공" });

    const { getByTestId } = render(renderAsyncBoundary("완료", mock));

    await waitFor(() => expect(getByTestId("loading")).toBeTruthy());
    await waitFor(() => expect(getByTestId("fetched-data")).toBeTruthy());
  });
});
