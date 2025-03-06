// Markdown content
const content = {
    abstract: `
Robotic instruction following tasks require seamless integration of visual perception, task planning, target localization, and motion execution. However, existing task planning methods for instruction following are either datadriven or underperform in zero-shot scenarios due to difficulties in grounding lengthy instructions into actionable plans under operational constraints. To address this, we propose FlowPlan, a structured multi-stage LLM workflow that elevates zero-shot pipeline and bridges the performance gap between zero-shot and data-driven in-context learning methods. By decomposing the planning process into modular stages—task information retrieval, language-level reasoning, symbolic-level planning, and logical evaluation—FlowPlan generates logically coherent action sequences while adhering to operational constraints and further extracts contextual guidance for precise instance-level target localization. Benchmarked on ALFRED and validated in real-world applications, our method achieves competitive performance relative to data-driven in-context learning methods and demonstrates adaptability across diverse environments. This work advances zero-shot task planning in robotic systems without reliance on labeled data.
`,
    overview: `
TBD...

![Method Overview](images/3-method-overview.svg)
`,
    pipeline: `
TBD...
`,
    'alfred-description': `
TBD...
`,
    'real-world-description': `
TBD...
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