// Markdown content
const content = {
    abstract: `
Write your abstract here...
    `,
    overview: `
Write your overview here...
    `,
    pipeline: `
Write your pipeline description here...
    `,
    'experiment-video': `
## Experiments on ALFRED Benchmark
Description of ALFRED benchmark experiments...

## Real-World Instruction Following Application
Description of real-world applications...
    `
};

// Add video function
function addVideo(videoUrl, containerId) {
    const container = document.querySelector(containerId);
    if (!container) {
        console.error('Video container not found:', containerId);
        return;
    }
    
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.muted = false;
    video.autoplay = false;
    
    // 添加错误处理
    video.onerror = function() {
        console.error('Video error:', video.error);
    };
    
    // 添加加载处理
    video.onloadeddata = function() {
        console.log('Video loaded successfully:', videoUrl);
    };
    
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

    // Add local videos
    console.log('Adding videos...');
    addVideo('./videos/1.mp4', '.real-world-videos');
    addVideo('./videos/2.mp4', '.real-world-videos');
    addVideo('./videos/3.mp4', '.real-world-videos');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeContent); 