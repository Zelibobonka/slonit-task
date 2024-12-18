# Git

**Git** - распределённая система управления версиями.  
Официальный сайт: [git-scm.com](https://git-scm.com/)

## Основные команды для работы с Git

1. [Первоначальная настройка Git](#title1)
2. [Работа с репозиторием](#title2)
3. [Работа с изменениями](#title3)

### <a id="title1">Первоначальная настройка Git</a>

1. **Указать имя пользователя** — `git config --global user.name "[name]"` Задаёт имя пользователя, от которого будут идти коммиты. Если имя состоит из одного слова, кавычки можно не ставить.
2. **Указать электронную почту** — `git config --global user.email "[email]"` Задает почту пользователя, от которого будут идти коммиты.
3. **Посмотреть настройки** — `git config --list` Параметры можно посмотреть и в конфигурационном файле, но этот способ быстрее.

### <a id="title2">Работа с репозиторием</a>

1. **Создать репозиторий** — `git init` Инициализирует пустой репозиторий.
2. **Склонировать удалённый репозиторий** — `git clone [ссылка на удалённый репозиторий]` Проект появится в директории, где вы находились в момент клонирования.
3. **Связать удалённый и локальный репозитории** — `git remote add origin [ссылка на удалённый репозиторий]`

### <a id="title3">Работа с изменениями</a>

1. **Подтянуть изменения** — `git pull` Подтягивает в локальный репозиторий последнюю версию проекта. Вызов этой команды сотрёт все незафиксированные изменения.
2. **Посмотреть статус файлов** — `git status` Вы увидите, какие файлы изменили, удалили или добавили в проект.
3. **Добавить файлы в индекс** — `git add [название файла]` После ввода этой команды вы можете сделать коммит.
   - `git add .` индексирует сразу все изменённые файлы и папки в директории, где вы находитесь.
4. **Сделать коммит** — `git commit -m "[Комментарий к коммиту]"` — фиксирует изменения. Нужно правильно разбивать изменения и давать полные комментарии к коммитам.
5. **Посмотреть историю коммитов** — `git log` Выводит список всех коммитов. У этой команды есть разные опции, самая используемая из них — --oneline. Она показывает хеш в укороченном формате, ветку, в которой сделан коммит, а также текст коммита. Чтобы использовать эту опцию (как и любую другую), нужно добавить её после команды: `git log--oneline`
6. **Запушить изменения** — `git push` Отправляет все зафиксированные изменения с локального репозитория в удалённый.
