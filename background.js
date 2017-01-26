chrome.runtime.onMessage.addListener(
  function (req, sender) {
    chrome.tabs.remove(sender.tab.id);
  }
);
