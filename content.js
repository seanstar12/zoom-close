setTimeout(function() {
  chrome.runtime.sendMessage({}, function() {});
}, 6000);
