function simulateServerDelay() {
    return new Promise(resolve => setTimeout(resolve, 750));
  }
  
  function renderPagelet(id, content, className) {
    const container = document.getElementById('pagelet-container');
    const pagelet = document.createElement('div');
    pagelet.className = `pagelet ${className}`;
    pagelet.id = id;
    pagelet.innerHTML = content;
    container.appendChild(pagelet);
  }
  
  async function loadPage() {
    await simulateServerDelay();
    renderPagelet('pagelet1', '<h2>Books</h2><p>Click here for more.</p>', 'pagelet1');
    await simulateServerDelay();
    renderPagelet('pagelet2', '<h2>Cloth Style</h2><p>Click here for more.</p>', 'pagelet2');
    await simulateServerDelay();
    renderPagelet('pagelet3', '<h2>Core</h2><p>Click here for more.</p>', 'pagelet3');
    await simulateServerDelay();
    renderPagelet('pagelet4', '<h2>Places</h2><p>Click here for more.</p>', 'pagelet4');
    await simulateServerDelay();
    renderPagelet('pagelet5', '<h2>Movies</h2><p>Click here for more.</p>', 'pagelet5');
    await simulateServerDelay();
    renderPagelet('pagelet6', '<h2>Latest News</h2><p>Click here for more.</p>', 'pagelet6');
  }
  
  window.onload = loadPage;
  