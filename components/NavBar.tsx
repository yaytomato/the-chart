import React from "react";
import Link from "next/link";

interface Props {
  toChart?: boolean;
}

export const NavBar: React.FC<Props> = ({ toChart }) => {
  return (
    <div className="nav-bar">
      <Link href="/">
        <a className="logo">the chart</a>
      </Link>
      {toChart ? (
        <Link href="/">
          <a className="text-white font-bold">← 차트 보기</a>
        </Link>
      ) : null}
    </div>
  );
};

export default NavBar;
