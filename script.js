// Markdown 内容
const content = {
    abstract: `
# 在这里输入 Abstract 的 Markdown 内容
- 支持 Markdown 格式
- 可以添加列表、链接等
    `,
    overview: `
# 在这里输入 Overview 的 Markdown 内容
    `,
    pipeline: `
# 在这里输入 Pipeline 的 Markdown 内容
    `
};

// 初始化函数
function initializeContent() {
    // 渲染 Markdown 内容
    Object.keys(content).forEach(key => {
        const element = document.querySelector(`#${key} .markdown-content`);
        if (element) {
            element.innerHTML = marked.parse(content[key]);
        }
    });
}

// 页面加载完成后初始化内容
document.addEventListener('DOMContentLoaded', initializeContent);

// 添加视频的函数
function addVideo(videoUrl, containerId = 'experiment-video') {
    const container = document.querySelector(`#${containerId} .video-container`);
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
} 