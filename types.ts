export interface Album {
  rank: number;
  title: string;
  artist: {
    name: string;
    link: string;
  };
  trackCount: number;
  genre: string;
  releaseDate: string;
  publisher: string;
  price: string;
  coverArt: string;
}
