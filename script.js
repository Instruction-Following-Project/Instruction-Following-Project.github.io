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
    'alfred-description': `
TODO: ALFRED Benchmark experiments description...
`,
    'real-world-description': `
TODO: Real-world instruction following experiments description...
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
    // Render Markdown content for main sections
    ['abstract', 'overview', 'pipeline'].forEach(key => {
        const element = document.querySelector(`#${key} .markdown-content`);
        if (element) {
            element.innerHTML = marked.parse(content[key]);
        }
    });

    // Render Markdown content for video sections
    const alfredDesc = document.querySelector('.alfred-description');
    if (alfredDesc) {
        alfredDesc.innerHTML = marked.parse(content['alfred-description']);
    }

    const realWorldDesc = document.querySelector('.real-world-description');
    if (realWorldDesc) {
        realWorldDesc.innerHTML = marked.parse(content['real-world-description']);
    }

    // Add videos to Real-World section
    addVideo('videos/1.mp4', '.real-world-videos');
    addVideo('videos/2.mp4', '.real-world-videos');
    addVideo('videos/3.mp4', '.real-world-videos');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeContent); 