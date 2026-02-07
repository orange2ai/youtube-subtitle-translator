// YouTube 实时字幕翻译 - Content Script

class YouTubeSubtitleTranslator {
  constructor() {
    this.translatedContainer = null;
    this.lastSubtitle = '';
    this.observer = null;
    this.enabled = true;
    this.targetLang = 'zh-CN';
    this.translationCache = new Map();
    
    this.init();
  }

  init() {
    console.log('[YT Translator] 初始化...');
    
    // 加载设置
    chrome.storage.sync.get(['enabled', 'targetLang'], (result) => {
      this.enabled = result.enabled !== false;
      this.targetLang = result.targetLang || 'zh-CN';
      
      if (this.enabled) {
        this.start();
      }
    });

    // 监听设置变化
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.enabled) {
        this.enabled = changes.enabled.newValue;
        if (this.enabled) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changes.targetLang) {
        this.targetLang = changes.targetLang.newValue;
        this.translationCache.clear();
      }
    });
  }

  start() {
    console.log('[YT Translator] 启动翻译...');
    
    // 创建翻译字幕容器
    this.createTranslatedContainer();
    
    // 监控字幕变化
    this.watchSubtitles();
  }

  stop() {
    console.log('[YT Translator] 停止翻译...');
    
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    if (this.translatedContainer) {
      this.translatedContainer.remove();
      this.translatedContainer = null;
    }
  }

  createTranslatedContainer() {
    if (this.translatedContainer) {
      return;
    }

    // 创建翻译字幕显示容器
    this.translatedContainer = document.createElement('div');
    this.translatedContainer.id = 'yt-translated-subtitle';
    this.translatedContainer.className = 'ytp-caption-window-container';
    
    // 等待视频播放器加载
    const checkPlayer = setInterval(() => {
      const player = document.querySelector('.html5-video-player');
      if (player) {
        clearInterval(checkPlayer);
        player.appendChild(this.translatedContainer);
        console.log('[YT Translator] 翻译容器已创建');
      }
    }, 500);
  }

  watchSubtitles() {
    // 查找字幕容器
    const findSubtitleContainer = () => {
      return document.querySelector('.ytp-caption-window-container');
    };

    const subtitleContainer = findSubtitleContainer();
    
    if (!subtitleContainer) {
      console.log('[YT Translator] 未找到字幕容器，等待...');
      setTimeout(() => this.watchSubtitles(), 1000);
      return;
    }

    console.log('[YT Translator] 找到字幕容器，开始监控');

    // 使用 MutationObserver 监控字幕变化
    this.observer = new MutationObserver((mutations) => {
      this.handleSubtitleChange();
    });

    this.observer.observe(subtitleContainer, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // 初始翻译
    this.handleSubtitleChange();
  }

  handleSubtitleChange() {
    const subtitleElement = document.querySelector('.ytp-caption-segment');
    
    if (!subtitleElement) {
      this.updateTranslatedSubtitle('');
      return;
    }

    const currentSubtitle = subtitleElement.textContent.trim();
    
    if (currentSubtitle && currentSubtitle !== this.lastSubtitle) {
      this.lastSubtitle = currentSubtitle;
      this.translateSubtitle(currentSubtitle);
    }
  }

  async translateSubtitle(text) {
    if (!text) return;

    // 检查缓存
    if (this.translationCache.has(text)) {
      this.updateTranslatedSubtitle(this.translationCache.get(text));
      return;
    }

    try {
      // 使用 Google Translate API (免费)
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${this.targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data && data[0] && data[0][0] && data[0][0][0]) {
        const translatedText = data[0].map(item => item[0]).join('');
        
        // 缓存翻译结果
        this.translationCache.set(text, translatedText);
        
        // 更新显示
        this.updateTranslatedSubtitle(translatedText);
      }
    } catch (error) {
      console.error('[YT Translator] 翻译失败:', error);
    }
  }

  updateTranslatedSubtitle(text) {
    if (!this.translatedContainer) return;

    if (!text) {
      this.translatedContainer.innerHTML = '';
      return;
    }

    this.translatedContainer.innerHTML = `
      <div class="ytp-caption-window-bottom" style="display: block;">
        <span class="captions-text" style="background-color: rgba(8, 8, 8, 0.75);">
          <span class="ytp-caption-segment" style="color: rgb(255, 255, 255);">
            ${text}
          </span>
        </span>
      </div>
    `;
  }
}

// 初始化
if (window.location.hostname === 'www.youtube.com') {
  const translator = new YouTubeSubtitleTranslator();
  
  // 监听页面导航（YouTube 是 SPA）
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      if (url.includes('/watch')) {
        setTimeout(() => translator.start(), 1000);
      }
    }
  }).observe(document, { subtree: true, childList: true });
}
