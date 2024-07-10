## Info

**Name**: Greenshop

**Demo**: [Greenshop](https://nan-simon.github.io/GreenshopReact/)

**Build**: React, Typescript, RTK Query

**Render type**: Client-Side Rendering

## Installation:

**Install all dependencies**: `npm install`

**For real-time development**: `npm run start` and open [http://localhost:3000](http://localhost:3000)

**Get app**: `npm run dev`

**Get minimized app**: `npm run build`

## Plugins:

[framer-motion](https://github.com/framer/motion#readme)  - анимированные карточки

[rc-tooltip](https://github.com/react-component/tooltip) - подсказки значений в слайдере

[rc-slider](https://github.com/react-component/slider) - слайдер для фильтра по цене

[react-tabs](https://github.com/reactjs/react-tabs) - вкладки меню

[react-paginate](https://github.com/AdeleD/react-paginate) - смена страниц карточек товаров

[react-slick, slick-carousel](https://github.com/akiran/react-slick) - прокрутка баннеров и предложение дополнительных товаров

[react-select](https://github.com/JedWatson/react-select/tree/master) - всплывающие списки

[reactjs-popup](https://github.com/yjose/reactjs-popup) - всплывающие окна

[react-image-gallery](https://github.com/xiaolin/react-image-gallery) - прокручивающиеся товары

[react-hook-form](https://github.com/react-hook-form/react-hook-form) - формы

[yup](https://www.npmjs.com/package/yup) - валидация

[@hookform/resolvers](https://github.com/react-hook-form/resolvers) - связь валидации и формы

## Description

**Фреймворк**. Библиотека `React`. Страницы связаны роутингом плагина `react-router-dom^6.21.1` через Routes, Route;

**Api**: для симуляции *async* запроса, используется fake запрос на *jsonplaceholder.typicode*;

**Typescript**

**Route**: Страницы в папке *src/pages*. *HomePage*, *ShopPage*, *BlogPage* и динамические страницы продуктов *[productid]*;

**Фильтры**: *Categories*, *Price range*, *Size*, *All Plants New*, *Arrivals*, *Sale* меняют состояние товаров в *store* `@reduxjs/toolkit`. Сортировка изменяет порядок отображения;

**Styling**: Папка *src/styles* содержит базовые стили для всего проекта, стили обнуления, файл со шрифтами и миксины плагина `SASS/SCSS`. Плагин `styled-components`. Папка *src/theme* содержит палетку цветов, крайние точки размеров экрана и наборы настроек для тэгов;

**Eslint**: На проекте используется `eslint`. Основными пакетными настройками являются: *eslint:recommended*. Настроено авто-исправление возможных ошибок;

**Deploy**: Установлен плагин `gh-pages` для комфортного деплоя;

## Commentaries:

**SliderCarousel.tsx**: Для медиа-запроса theme.breakpoints.devices.xs размер width идет из кастомного хука, т.к width родительского компонента плагина Slider равна максимальной возможной width браузера