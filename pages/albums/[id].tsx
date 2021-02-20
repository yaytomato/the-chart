import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {}

export const Album: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  // temp dummy data
  const [album, setAlbum] = useState({
    rank: 1,
    title: "25",
    artist: {
      name: "Adele",
      link: "https://github.com",
    },
    trackCount: 5,
    genre: "Country",
    releaseDate: "2021/02/20",
    publisher: "Awesome Music Company",
    price: "$5",
    coverArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5b/9b/bf/5b9bbf44-dc8a-9ee2-7e5c-42723a00fd74/21BMR0002226.rgb.jpg/170x170bb.png",
  });

  return (
    <div>
      <Link href="/">
        <a>← 차트 보기</a>
      </Link>
      <div className="flex">
        <img src={album.coverArt} alt={album.title} />
        <div>
          <p>{album.title}</p>
          <a href={album.artist.link}>{album.artist.name}</a>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <td>트랙 수</td>
            <td>{album.trackCount}</td>
          </tr>
          <tr>
            <td>장르</td>
            <td>{album.genre}</td>
          </tr>
          <tr>
            <td>발매일</td>
            <td>{album.releaseDate}</td>
          </tr>
          <tr>
            <td>발매사</td>
            <td>{album.publisher}</td>
          </tr>
          <tr>
            <td>가격</td>
            <td>{album.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Album;
