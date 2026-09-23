# Игры Creatica

Статический сайт (без сборки и сервера): `index.html` — список игр, `run.html` — Creatica Run,
`delivery.html` — Creatica Delivery, `paint.html` — Creatica Colors. Картинки лежат в `assets/`.

## Что настраивать
В начале скрипта каждой игры есть блок `CONFIG`:
- `tiers` — пороги очков и промокоды (максимальная скидка в играх — 10%). Коды в файлах: RUN3-K7Q, RUN5-M2X, RUN7-T9B, RUN10-Z4W, DRIVE3-H8P, DRIVE5-C5N, DRIVE7-V3R, DRIVE10-L6D, COLOR3-F2J, COLOR5-Y7S, COLOR7-A9G, COLOR10-P4E — создайте такие же на сайте или замените на свои;
- скорость, жизни и прочие параметры баланса.

Hosting: GitHub Pages (Settings → Pages → ветка `main`, папка `/`). Обновление сайта — обычный `git push`.

## Telegram Mini App
`tg.js` включается автоматически только внутри Telegram: раскрывает окно, отключает свайп-закрытие,
показывает кнопку «Назад» и синхронизирует рекорды с облаком Telegram.

Подключение (бесплатно):
1. В Telegram откройте @BotFather → `/newbot` → задайте имя и username бота.
2. `/newapp` → выберите бота → название, описание, картинка 640×360, **URL: https://gulever1992-coder.github.io/creatica-run/** → короткое имя.
3. Готовая ссылка на игру: `https://t.me/<username_бота>/<короткое_имя>`.
4. Чтобы кнопка запуска была в самом чате бота: `/mybots` → бот → Bot Settings → Menu Button → Configure menu button → тот же URL.
