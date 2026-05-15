const BREAKPOINTS = {
  mobile: 425,
  tablet: 768,
  desktop: 1024,
  ultrawide: 1440,
};

/**
 * Executa toda vez que a tela muda de tamanho e quando carrega a tela.
 * 
 * Funcionalidades: Calcula e define qual o breakpoint atual como uma classe na tag body
 */
function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let currentBreakpoint = 'mobile'; // Default

  Object.keys(BREAKPOINTS).forEach(key => {
    const bpWidth = BREAKPOINTS[key];
    if (width >= bpWidth) currentBreakpoint = key;
  });

  document.body.classList.remove(...Object.keys(BREAKPOINTS));
  document.body.classList.add(currentBreakpoint);
  
  console.log(`Breakpoint atual: ${currentBreakpoint}`);
}

document.addEventListener('DOMContentLoaded', onResize);
window.addEventListener('resize', onResize);

