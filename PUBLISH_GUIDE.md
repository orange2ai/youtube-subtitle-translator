# 发布到 GitHub 指南

## 方案 1：通过 GitHub 网页界面（推荐）

### 步骤 1：创建新仓库
1. 访问 https://github.com/new
2. 填写信息：
   - **Repository name**: `youtube-subtitle-translator`
   - **Description**: `Real-time YouTube subtitle translator browser extension`
   - **Public** (公开)
   - ✅ Add a README file (不勾选，我们已经有了)
   - ✅ Add .gitignore (不勾选，我们已经有了)
   - ✅ Choose a license: MIT (不勾选，我们已经有了)
3. 点击 "Create repository"

### 步骤 2：上传文件
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将整个 `youtube-translator-extension` 文件夹拖拽到页面
3. 或者点击 "choose your files" 选择文件
4. 填写 commit 信息：
   ```
   Initial commit: YouTube real-time subtitle translator
   
   - Real-time subtitle translation
   - Dual subtitle display
   - Smart caching
   - Multi-language support
   ```
5. 点击 "Commit changes"

### 步骤 3：添加 Topics（标签）
在仓库页面右侧，点击 ⚙️ 设置，添加 topics：
- `browser-extension`
- `youtube`
- `translation`
- `subtitle`
- `chrome-extension`
- `firefox-addon`
- `real-time`

---

## 方案 2：通过命令行（需要登录）

### 步骤 1：登录 GitHub CLI
```bash
gh auth login
```

### 步骤 2：创建仓库并推送
```bash
cd /Users/marsoran/.openclaw/workspace/youtube-translator-extension

# 初始化 git
git init
git add .
git commit -m "Initial commit: YouTube real-time subtitle translator"

# 创建 GitHub 仓库
gh repo create youtube-subtitle-translator --public --source=. --remote=origin --push

# 添加描述
gh repo edit --description "Real-time YouTube subtitle translator browser extension"

# 添加 topics
gh repo edit --add-topic browser-extension,youtube,translation,subtitle,chrome-extension,firefox-addon,real-time
```

---

## 方案 3：我来准备，你来执行

### 我已经准备好的文件：
- ✅ README.md（英文）
- ✅ README_CN.md（中文）
- ✅ LICENSE（MIT）
- ✅ .gitignore
- ✅ 所有源代码和资源

### 你需要做的：
1. 打开终端，进入项目目录：
   ```bash
   cd /Users/marsoran/.openclaw/workspace/youtube-translator-extension
   ```

2. 初始化 git：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: YouTube real-time subtitle translator"
   ```

3. 在 GitHub 创建新仓库（网页或 CLI）

4. 推送代码：
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/youtube-subtitle-translator.git
   git branch -M main
   git push -u origin main
   ```

---

## 推荐的仓库设置

### About（关于）
- **Description**: Real-time YouTube subtitle translator browser extension
- **Website**: 可以添加演示视频或博客链接
- **Topics**: browser-extension, youtube, translation, subtitle, chrome-extension

### README 徽章（可选）
在 README.md 顶部添加：
```markdown
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Chrome](https://img.shields.io/badge/chrome-extension-green.svg)
![Firefox](https://img.shields.io/badge/firefox-addon-orange.svg)
```

### Release（发布版本）
创建第一个 release：
1. 点击 "Releases" → "Create a new release"
2. Tag: `v1.0.0`
3. Title: `v1.0.0 - Initial Release`
4. Description:
   ```markdown
   ## 🎉 First Release
   
   ### Features
   - Real-time subtitle translation
   - Dual subtitle display (original + translated)
   - Smart caching for better performance
   - Support for 8+ languages
   - Zero latency translation
   
   ### Installation
   Download the zip file and follow the instructions in README.md
   ```
5. 上传 `youtube-translator-extension.zip`

---

## 需要我帮你做什么？

1. **方案 1**：我可以生成一个完整的 zip 包，你直接在 GitHub 网页上传
2. **方案 2**：你运行 `gh auth login` 登录后，我来执行命令
3. **方案 3**：你告诉我你的 GitHub 用户名，我准备好完整的命令

你想用哪个方案？🍊
