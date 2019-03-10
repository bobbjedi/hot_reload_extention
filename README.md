# hot_reload_extention
Watcher, hot reload, monitoring changes in the development of Google Chrome extensions.
## Start
1. Установите расширение по пути `/ex` в режиме разработчика.
2. заполните файл `conf.json` или создайте свой.
3. Запустите watcher 
```
node watcher ./config_watcher.json
```
По дефолту берется конфиг `conf.json` в корне репозитория, в таком случае запускается командой
```
node watcher
```
