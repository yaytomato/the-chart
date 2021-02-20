import React from "react";
import Link from "next/link";

interface Props {
  toChart?: boolean;
}

export const NavBar: React.FC<Props> = ({ toChart }) => {
  return (
    <div className="flex">
      <Link href="/">
        <a>the chart</a>
      </Link>
      {toChart ? (
        <Link href="/">
          <a>← 차트 보기</a>
        </Link>
      ) : null}
    </div>
  );
};

export default NavBar;
