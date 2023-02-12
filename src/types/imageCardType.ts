export interface SeasonDataType {
  title: string;
  imgUrl: string;
  date: string;
  photoOwner: string;

  comment: string;

  season?: "spring" | "summer" | "autumn" | "winter";
}
