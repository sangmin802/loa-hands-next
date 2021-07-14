import React, { useEffect } from "react";
import { Image } from "components/";
import * as Styeld from "./index.style";

const SearchLoading = () => {
  useEffect(() => {
    const input: HTMLInputElement =
      document.querySelector(".search-area") ?? null;
    input?.setAttribute("disabled", "true");

    return () => {
      input?.removeAttribute("disabled");
    };
  }, []);

  return (
    <Styeld.BackgroundContainer data-testid="search-loading">
      <Styeld.ImageContainer>
        <Image src={`${process.env.PUBLIC_URL}/img/emoticon_5.gif`} />
      </Styeld.ImageContainer>
    </Styeld.BackgroundContainer>
  );
};

export default SearchLoading;
