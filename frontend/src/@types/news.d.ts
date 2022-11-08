export interface Props {
  author?: string;
  content: string;
  createdAt?: string;
  editorial?: string;
  subtitle: string;
  title: string;
  updatedAt?: string;
  image?: {
    data: Buffer;
    contentType: String;
  };
  _id?: string;
}
