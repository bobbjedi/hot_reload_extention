# hot_reload_extention
Watcher, hot reload, monitoring changes in the development of Google Chrome extensions.
## Start
1. Clone rep:
```
git clone https://github.com/RomanSlep/hot_reload_extention.git
cd hot_reload_extention
npm i
```
2. Install the extension along the path `/ ex` in developer mode.
3. fill in the `conf.json` file or create your own.
4. Run the watcher:
```
node watcher ./config_watcher.json
```
By default, the `conf.json` config in the root of the repository is taken, in which case it is launched by the command:
```
node watcher
```