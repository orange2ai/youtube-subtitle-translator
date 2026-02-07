// YouTube 字幕翻译 - Popup Script

document.addEventListener('DOMContentLoaded', () => {
  const enableToggle = document.getElementById('enableToggle');
  const targetLangSelect = document.getElementById('targetLang');
  const statusDiv = document.getElementById('status');

  // 加载保存的设置
  chrome.storage.sync.get(['enabled', 'targetLang'], (result) => {
    enableToggle.checked = result.enabled !== false;
    targetLangSelect.value = result.targetLang || 'zh-CN';
  });

  // 保存设置
  const saveSettings = () => {
    const settings = {
      enabled: enableToggle.checked,
      targetLang: targetLangSelect.value
    };

    chrome.storage.sync.set(settings, () => {
      showStatus('设置已保存 ✓', 'success');
    });
  };

  // 显示状态消息
  const showStatus = (message, type = '') => {
    statusDiv.textContent = message;
    statusDiv.className = 'status ' + type;
    
    setTimeout(() => {
      statusDiv.className = 'status';
    }, 2000);
  };

  // 监听设置变化
  enableToggle.addEventListener('change', saveSettings);
  targetLangSelect.addEventListener('change', saveSettings);
});
