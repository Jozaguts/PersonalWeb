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
