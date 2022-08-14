import { Post } from 'src/components/interfaces';
import { reactive } from 'vue';

export function usePosts() {
  const posts: Post[] = reactive([
    {
      id: 1,
      title: 'Titulo de la noticia',
      description:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...',
      tags: ['tag 1', 'tag 2'],
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      title: 'Titulo de la noticia',
      description:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...',
      tags: ['tag 1', 'tag 2'],
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      title: 'Titulo de la noticia',
      description:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...',
      tags: ['tag 1', 'tag 2'],
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      title: 'Titulo de la noticia',
      description:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...',
      tags: ['tag 1', 'tag 2'],
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      title: 'Titulo de la noticia',
      description:
        'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...',
      tags: ['tag 1', 'tag 2'],
      image: 'https://picsum.photos/200/300',
    },
  ]);
  return { posts };
}
