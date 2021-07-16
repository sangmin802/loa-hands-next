import React, {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import Lodash from "lodash";
import { ItemPartBox, IndentString, TripodSkillCustom, Image, Text } from "..";
import * as Styled from "./index.style";

interface IDetail {
  src: string;
  grade: string;
  title: string;
  subTitle: string[];
  itemPartBox: [];
  indentStringGroup: [];
  tripodSkillCustom: [];
}

interface IData<T> {
  backSrc: string;
  detail: T;
}

interface IHoverContent<T> {
  data: T;
  children: ReactElement;
}

const HoverContent = ({
  data,
  children,
}: PropsWithChildren<Partial<IHoverContent<IData<IDetail>>>>) => {
  const { backSrc, detail } = data;
  const {
    src,
    grade,
    title,
    subTitle,
    itemPartBox,
    indentStringGroup,
    tripodSkillCustom,
  } = detail;

  const titleColor = useMemo(() => (grade ? `color${grade}` : "white"), [
    grade,
  ]);

  return (
    <>
      <Styled.Top>
        <Styled.Container>
          <Image
            role="gradient"
            src={src ?? backSrc}
            color={`gradient${grade}`}
          />
          <Styled.Desc>
            {subTitle.map(res => (
              <Text type="subTitle" key={res}>
                {res}
              </Text>
            ))}
            <Text type="title" color={titleColor}>
              {title}
            </Text>
          </Styled.Desc>
        </Styled.Container>
      </Styled.Top>
      <Styled.Children>
        {children && cloneElement(children, { data })}
      </Styled.Children>
      <>
        {itemPartBox && <ItemPartBox data={itemPartBox} />}
        {indentStringGroup && <IndentString data={indentStringGroup} />}
        {tripodSkillCustom && <TripodSkillCustom data={tripodSkillCustom} />}
      </>
    </>
  );
};

export default React.memo(HoverContent, (left, right) =>
  Lodash.isEqual(left, right)
);
