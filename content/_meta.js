import { AddIcon } from '../app/_components/addicon/addicon'
import { KeyFramesIcon } from '../public/icon'

export default {
    index: (
    <AddIcon>
      <KeyFramesIcon />
      О дизайн-системе
    </AddIcon>
    ),
    tokens: {
        title: 'Токены',
        type: 'doc'
    },
    components: {
        title: 'Компоненты',
        type: 'doc'
    },
    nextraStarter: {
        title: 'Menu DropDown',
        type: 'menu',
        items: {
            docs: {
                title: 'Docs Starter repo',
                href: 'https://ya.ru',
            },
            blog: {
                title: 'Blog Starter repo',
                href: 'https://google.ru'
            }
        }
    },
    contact1: {
        title: 'Menu URL',
        type: 'page',
        href: 'https://ya.ru'
    },
    blog: {
        title: 'Блог',
        type: 'page',
        href: 'https://google.ru'
    },
}