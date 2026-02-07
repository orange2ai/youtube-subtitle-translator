// YouTube 字幕翻译 - Background Service Worker

chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube 字幕翻译扩展已安装');
  
  // 设置默认配置
  chrome.storage.sync.set({
    enabled: true,
    targetLang: 'zh-CN'
  });
});

// 监听来自 content script 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'translate') {
    // 可以在这里添加更复杂的翻译逻辑
    // 比如使用付费 API、本地模型等
    sendResponse({ success: true });
  }
  return true;
});
