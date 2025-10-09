/**
 * Add filename headers to code blocks
 * Looks for title= in code fence metadata and displays it as a header
 */

const enhanceCodeBlocks = () => {
  const codeBlocks = document.querySelectorAll('pre[data-language]');

  codeBlocks.forEach((pre) => {
    // Skip if already enhanced
    if (pre.parentElement?.classList.contains('code-block-wrapper')) {
      return;
    }

    // Extract title from meta attribute
    const meta = pre.getAttribute('data-meta');
    if (!meta) return;

    const titleMatch = meta.match(/title=([^\s]+)/);
    if (!titleMatch) return;

    const title = titleMatch[1];

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Create title header
    const header = document.createElement('div');
    header.className = 'remark-code-title';
    header.textContent = title;

    // Insert header before pre
    wrapper.insertBefore(header, pre);

    // Remove top border radius from pre
    pre.style.borderTopLeftRadius = '0';
    pre.style.borderTopRightRadius = '0';
    pre.style.marginTop = '0';
  });
};

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', enhanceCodeBlocks);
} else {
  enhanceCodeBlocks();
}

// Re-run after Astro page transitions (for view transitions)
document.addEventListener('astro:page-load', enhanceCodeBlocks);
