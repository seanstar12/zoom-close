setTimeout(function() {
  chrome.runtime.sendMessage({}, function() {});
}, 3000);
