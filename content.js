const closeTab = () => chrome.runtime.sendMessage({}, () => {});

window.onblur = closeTab();
setTimeout(closeTab, 6000);
