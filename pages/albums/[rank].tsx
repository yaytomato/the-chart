import Link from "next/link";

import { useAlbum } from "../../api/album";

export const getServerSideProps = async (context) => {
  const { rank } = context.query;
  return {
    props: {
      rank,
    },
  };
};

interface Props {
  rank: string;
}

export const Album: React.FC<Props> = ({ rank }) => {
  const { album, isLoading, isError } = useAlbum(rank);

  if (isLoading || isError) return null;

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
