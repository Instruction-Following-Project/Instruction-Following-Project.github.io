// Markdown content
const content = {
    abstract: `
Your abstract content here...
    `,
    overview: `
Your overview content here...
    `,
    pipeline: `
Your pipeline content here...
    `,
    'experiment-video': `
## Experiments on ALFRED Benchmark

Your ALFRED benchmark experiments content here...

## Real-World Instruction Following Application

Your real-world application content here...

### Demo Videos:
    `
};

// Initialize function
function initializeContent() {
    // Render Markdown content
    Object.keys(content).forEach(key => {
        const element = document.querySelector(`#${key} .markdown-content`);
        if (element) {
            element.innerHTML = marked.parse(content[key]);
        }
    });

    // Add videos after content is rendered
    addVideo('1.mp4', 'experiment-video');
    addVideo('2.mp4', 'experiment-video');
    addVideo('3.mp4', 'experiment-video');
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