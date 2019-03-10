# hot_reload_extention
Watcher, hot reload, monitoring changes in the development of Google Chrome extensions.
## Start
1. Install the extension along the path `/ ex` in developer mode.
2. fill in the `conf.json` file or create your own.
3. Run the watcher
```
node watcher ./config_watcher.json
```
По дефолту берется конфиг `conf.json` в корне репозитория, в таком случае запускается командой
```
node watcher
```
