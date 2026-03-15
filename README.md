# Сайт Общаги | smalytale / FastMC

Это будет что-то типо смеси вк и телеграма со связью с майнкрафт-сервером (управление аккаунтом и кланом)

## Дизайн сайта
Дизайн сайта создается в [Figma](https://www.figma.com/design/Q2l3FEk4UEThiRtqGTcoMX/smllySite?node-id=0-1&t=fF1ks99LovFVJbWS-1) <- Кликните для перехода на доску

Сайт создан на [Next.js](https://nextjs.org)

## Хотите запустить сайт?

Запустите dev сервер с помощью одной из этих команд:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

По [http://localhost:3000](http://localhost:3000) вы сможете увидеть результат

При редактировании файлов `app/page.tsx` и подобных сайт автоматически обновляется 

## Структура сайта
- backend (серверная часть сайта)
- prisma
  - schema.prisma (схема базы данных)
- public (глобально доступные файлы) 
- src
  - app (страницы сайта) 
  - language (файлы локализации)
    - RU
    - EN
    - BY
    - ...
  - components
    - authform (формы авторизации)
    - navigation (компоненты навигации)
    - ui (кнопки и карточки (shadcnUI))
  - styles (стили сайта)
    - AppleUI
    - FluentUI
    - MaterialUI
