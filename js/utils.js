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
const pp = (title,text,bts) => {
  const overlay = makeElement(`<overlay></overlay>`);
  const pp = makeElement(`
    <pp>
      <h2>${title}</h2>
      <p>${text}</p>
      <btArea></btArea>
    </pp>
  `);

  Object.entries(bts).forEach(([key,value]) => {
    const b = makeElement(`<button>${key}</button>`);
    if(value && typeof value === 'function') b.addEventListener('click',value);

    $('btArea', pp).appendChild(b);
  });

  overlay.appendChild(pp);
  document.body.appendChild(overlay);
}

// const texto = parseText('Ganhe 2 <s> perca <a> e <p>. Role 1<d6> <d10> e <d12>');
// pp(texto,'text',{
//   SIM: ()=>alert('aaah'),
//   NÃO: ()=>alert('Nãaaao')
// });


function parseText(text){
  const tagMap = {
    '<s>': '<svg class="md bg-primary"><use href="#success"></use></svg>',
    '<a>': '<svg class="md bg-primary"><use href="#adaptation"></use></svg>',
    '<p>': '<svg class="md bg-primary"><use href="#stress"></use></svg>',
    '<d6>': '<d6 class="bg-primary"></d6>',
    '<d10>': '<d10 class="bg-primary"></d10>',
    '<d12>': '<d12 class="bg-primary"></d12>'
  };

  const regex = new RegExp(Object.keys(tagMap).join('|'), 'g');

  return text.replace(regex, (tagFound) => tagMap[tagFound]);
}

