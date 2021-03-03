import Link from "next/link";
import moment from "moment";

import NavBar from "../../components/NavBar";

import { getAlbum } from "../../api/album";
import { Album as AlbumType } from "../../types";

interface Props {
  rank: string;
  album: AlbumType;
}

export const Album: React.FC<Props> = ({ rank, album }) => {
  return (
    <div className="responsive-container">
      <NavBar toChart />
      <div className="album-preview">
        <img
          src={album.coverArt}
          alt={album.title}
          className=" h-30 sm:h-42.5"
        />
        <div className="p-4 text-right">
          <p className="text-3xl">{album.title}</p>
          <a
            href={album.artist.link}
            className="block mt-1 uppercase font-semibold text-sm text-black"
          >
            {album.artist.name}
          </a>
        </div>
      </div>

      <p className="mt-8 mb-2 text-sm text-black">현재 {rank}위</p>
      <table className="w-full">
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

export async function getServerSideProps({ params: { rank } }) {
  const album = await getAlbum(rank);
  return {
    props: {
      rank,
      album,
    },
  };
}

export default Album;
