const socket = io.connect('ws://localhost:33233');
let id;

socket.on('connect', () => {
    console.info('Success connect watcher.');
    socket.emit("get_id");
    socket.on("change", reloadExtension);
    socket.on("set_id", data => id = data.ex_id);
});

function reloadExtension() {
    console.log({id})
    chrome.management.setEnabled(id, false, () => {
        chrome.management.setEnabled(id, true);
    });
}
chrome.browserAction.onClicked.addListener(() => {
    reloadExtension();
});