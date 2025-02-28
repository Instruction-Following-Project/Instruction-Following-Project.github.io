// Markdown content
const content = {
    abstract: `
TODO...
`,
    overview: `
TODO...
`,
    pipeline: `
TODO...
`,
    'experiment-video': `
## Experiments on ALFRED Benchmark
TODO...

## Real-World Instruction Following Application
TODO...
`
};

// Add video function
function addVideo(videoUrl, containerId) {
    const container = document.querySelector(containerId);
    
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.preload = 'metadata';
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

    // Add videos to Real-World section
    addVideo('videos/1.mp4', '.real-world-videos');
    addVideo('videos/2.mp4', '.real-world-videos');
    addVideo('videos/3.mp4', '.real-world-videos');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeContent); 