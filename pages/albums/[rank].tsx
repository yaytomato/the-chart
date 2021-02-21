import Link from "next/link";
import moment from "moment";

import NavBar from "../../components/NavBar";

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
    <div className="responsive-container">
      <NavBar toChart />
      <div className="flex justify-between items-center bg-mint rounded-lg p-4">
        <img
          src={album.coverArt}
          alt={album.title}
          className="rounded-full h-30 sm:h-42.5"
        />
        <div className="text-white text-right">
          <p className="text-3xl">{album.title}</p>
          <a href={album.artist.link} className="uppercase underline">
            {album.artist.name}
          </a>
          <p className="mt-4 text-sm text-black">현재 {rank}위</p>
        </div>
      </div>

      <table className="mt-4 w-full">
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
            <td>{moment(album.releaseDate).format("YYYY년 MM월 DD일")}</td>
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
