# Игры Creatica

Статический сайт (без сборки и сервера): `index.html` — список игр, `run.html` — Creatica Run,
`delivery.html` — Creatica Delivery, `paint.html` — Creatica Colors. Картинки лежат в `assets/`.

## Что настраивать
В начале скрипта каждой игры есть блок `CONFIG`:
- `tiers` — пороги очков и промокоды (в коде сейчас заглушки `RUN…`, `DRIVE…`, `COLOR…`, замените на реальные);
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
