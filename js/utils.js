// SVG Injection
fetch('assets/icons.svg')
  .then(response => response.text())
  .then(data => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = data;
    document.body.insertBefore(div, document.body.childNodes[0]);
  });


/** Query selector*/
const $ = (s, el = document) => el.querySelector(s);
/** Query selector all*/
const $$ = (s, el = document) => el.querySelectorAll(s);

/** Função para criar Elementos html a partir de uma string */
const makeElement = (html)=>{
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

/** Popup */
const pp = (title,text,bts,colors = {text: 'color-white', bg: 'bg-secondary'}) => {
  const overlay = makeElement(`<overlay class='center'></overlay>`);
  const pp = makeElement(`
    <pp class="card">
      <h2>${parseText(title, colors.bg)}</h2>
      <p>${parseText(text, colors.bg)}</p>
      <btArea></btArea>
    </pp>
  `);

  Object.entries(bts).forEach(([text,action]) => {
    const b = makeElement(`<button class="btFill ${colors.bg} ${colors.text}">${text}</button>`);
    if(action && typeof action === 'function') {
      b.addEventListener('click',()=>{
        action();
        overlay.remove();
      });
    }

    $('btArea', pp).appendChild(b);
  });

  overlay.appendChild(pp);
  document.body.appendChild(overlay);
}

pp("Erro!", 'Não é possível transferir recursos sem <a> disponíveis!',{
  OK: ()=> {},
});


function parseText(text,bgColor){
  const tagMap = {
    '<s>': `<svg class="md ${bgColor}"><use href="#success"></use></svg>`,
    '<a>': `<svg class="md ${bgColor}"><use href="#adaptation"></use></svg>`,
    '<p>': `<svg class="md ${bgColor}"><use href="#stress"></use></svg>`,
    '<d6>': `<d6 class="${bgColor}"></d6>`,
    '<d10>': `<d10 class="${bgColor}"></d10>`,
    '<d12>': `<d12 class="${bgColor}"></d12>`,
  };

  const regex = new RegExp(Object.keys(tagMap).join('|'), 'g');

  return text.replace(regex, (tagFound) => tagMap[tagFound]);
}

