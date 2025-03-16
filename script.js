// Markdown content
const content = {
    abstract: `
Robotic instruction following tasks require seamless integration of visual perception, task planning, target localization, and motion execution. However, existing task planning methods for instruction following are either datadriven or underperform in zero-shot scenarios due to difficulties in grounding lengthy instructions into actionable plans under operational constraints. To address this, we propose FlowPlan, a structured multi-stage LLM workflow that elevates zero-shot pipeline and bridges the performance gap between zero-shot and data-driven in-context learning methods. By decomposing the planning process into modular stages—task information retrieval, language-level reasoning, symbolic-level planning, and logical evaluation—FlowPlan generates logically coherent action sequences while adhering to operational constraints and further extracts contextual guidance for precise instance-level target localization. Benchmarked on ALFRED and validated in real-world applications, our method achieves competitive performance relative to data-driven in-context learning methods and demonstrates adaptability across diverse environments. This work advances zero-shot task planning in robotic systems without reliance on labeled data.
`,
    overview: `
FlowPlan introduces a novel structured workflow for zero-shot robotic instruction following, combining multi-stage task planning and context-aligned target localization. The framework decomposes complex natural language instructions into four sequential planning stages: Task Information Retrieval, Language-Level Reasoning, Symbolic-Level Planning, and Logical Evaluation. This modular approach ensures logical coherence while adhering to operational constraints. Complementing this, the localization component leverages semantic maps and contextual guidance from instructions to achieve precise instance-level target localization, enabling robots to navigate unfamiliar environments effectively.

<img src="images/3-method-overview.svg" style="max-width: 80%;" />
`,
    pipeline: `
Multi-Stage Task Planning transforms instructions into actionable sequences through four integrated steps. First, Task Information Retrieval classifies tasks into predefined categories (e.g., Clean & Place) and retrieves associated constraints. Next, Language-Level Reasoning converts natural language into human-readable action sequences, resolving ambiguities using operational rules. This transitions to Symbolic-Level Planning, which translates these sequences into executable robotic actions (e.g., ``pick_up("Rag", "Tub")``) while extracting spatial context for localization. Finally, Logical Evaluation validates plans against hard constraints (e.g., action order rules) and corrects any invalid components within the plan.

<img src="images/3-method-CTP.svg" style="max-width: 95%;" />

Context-Aligned Target Localization combines two complementary processes. Object Co-location predicts category-level probability maps based on linguistic correlations (e.g., "knife" → "kitchen counter"), while Context Alignment uses LLM-driven spatial reasoning (e.g., "cabinet under the coffee machine") to localize specific instances. These distributions are fused to generate navigation goals, guiding robots to targets even in unseen environments.

<img src="images/3-method-CSP.svg" style="max-width: 65%;" />

`,
    'alfred-description': `
FlowPlan outperforms previous zero-shot methods and achieves competitive results against data-driven in-context learning approaches on the ALFRED benchmark. The framework demonstrates robust performance across diverse environments, significantly improving task success rates compared to prior zero-shot solutions.

`,

    'real-world-description': `
FlowPlan is validated on a Franka Emika FR3 robot in a kitchen-like setup with 100% task planning precision across 50 trials. It handles diverse instructions (e.g., "Place tissue pack on the pan near the cooker") by directly integrating with vision systems (SAM for segmentation, Contact-GraspNet for grasping). The framework adapts to new tasks/environments via natural language constraint descriptions, eliminating manual example curation or model retraining.
`
};

// 配置 marked.js 以正确处理图片路径
marked.setOptions({
    breaks: true,
    gfm: true
});

// Add video function
function addVideo(videoUrl, containerId) {
    const container = document.querySelector(containerId);
    if (!container) {
        console.error(`Container ${containerId} not found`);
        return;
    }
    
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.preload = 'metadata';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.maxWidth = '800px';
    video.style.margin = '20px auto';
    video.style.display = 'block';
    
    videoWrapper.appendChild(video);
    container.appendChild(videoWrapper);
}

// Initialize function
function initializeContent() {
    // 先确保 marked.js 已加载
    if (typeof marked === 'undefined') {
        console.error('Marked.js is not loaded');
        return;
    }

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
    const realWorldVideosContainer = document.querySelector('.real-world-videos');
    if (realWorldVideosContainer) {
        addVideo('videos/1.mp4', '.real-world-videos');
        addVideo('videos/2.mp4', '.real-world-videos');
        addVideo('videos/3.mp4', '.real-world-videos');
    }
}

// 等待 DOM 和资源加载完成后再初始化
window.addEventListener('load', initializeContent); 