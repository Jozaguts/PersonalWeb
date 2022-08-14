export interface Post {
  id?: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}
export interface Icon {
  name: string;
  href: string;
}
interface ILink {
  to: string;
  text: string;
  class: string;
}

export const links: ILink[] = [
  {
    to: '/',
    text: 'Inicio',
    class: 'text-h6 text-white text-capitalize underline-animated',
  },
  {
    to: '/posts',
    text: 'Articulos',
    class: 'text-h6 text-white text-capitalize underline-animated',
  },
];
