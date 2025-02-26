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

// Add video function for iframe
function addVideo(videoUrl, containerId) {
    const container = document.querySelector(containerId);
    
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    
    videoWrapper.appendChild(iframe);
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

    // 使用 YouTube 嵌入链接
    addVideo('https://www.youtube.com/embed/VIDEO_ID_1', '.real-world-videos');
    addVideo('https://www.youtube.com/embed/VIDEO_ID_2', '.real-world-videos');
    addVideo('https://www.youtube.com/embed/VIDEO_ID_3', '.real-world-videos');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeContent); 