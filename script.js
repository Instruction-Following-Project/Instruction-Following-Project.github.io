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

// Add video function
function addVideo(videoUrl, containerId = 'experiment-video') {
    const container = document.querySelector(`#${containerId} .video-container`);
    
    // Create video element instead of iframe
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.style.width = '100%';
    video.style.height = '100%';
    
    videoWrapper.appendChild(video);
    container.appendChild(videoWrapper);
}

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
    addVideo('videos/1.mp4'); // 注意这里的路径格式
}

// 页面加载完成后初始化内容
document.addEventListener('DOMContentLoaded', initializeContent); 