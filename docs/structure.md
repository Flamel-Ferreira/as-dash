# Structure

Esse arquivo define como é estruturado o projeto e também qual o propósito de cada arquivo.

## 📁 Estrutura de Pastas e Arquivos

### 📌 Raiz do Projeto
```
as_dash_v3/
├── index.html          - Arquivo HTML principal da aplicação
├── README.md           - Documentação geral do projeto (descrição, funcionalidades, como usar)
├── .git/               - Repositório Git do projeto
└── ...
```

### 📂 `/assets/` - Recursos Visuais e Referências
Contém todos os assets estáticos do projeto (ícones, imagens, SVGs e referências de design).

```
assets/
├── icons.svg           - Arquivo SVG com ícones reutilizáveis da aplicação
├── imgs/               - Pasta para imagens do projeto (atualmente vazia)
├── refs/               - Pasta para referências de design e documentação visual
│   └── Desktop - 11.png - Captura de tela ou mockup de referência da interface
└── svg/                - Pasta com SVGs específicos para elementos da interface
    ├── adaptacao.svg   - Ícone SVG do recurso "Adaptação"
    ├── pressao.svg     - Ícone SVG do recurso "Pressão"
    ├── sucesso.svg     - Ícone SVG do recurso "Sucesso"
    └── chevron-up-svgrepo-com.svg - Ícone de chevron para componentes expansíveis
```

### 📄 `/css/` - Estilos e Temas
Contém toda a estilização visual da aplicação.

```
css/
├── global.css          - Arquivo de estilos globais (variáveis de cores, temas, padrões base)
└── style.css           - Arquivo de estilos específicos dos componentes (atualmente vazio)
```

### 📜 `/docs/` - Documentação do Projeto
Contém toda a documentação interna do projeto.

```
docs/
├── structure.md        - Este arquivo - define a estrutura do projeto
├── changelog.md        - Histórico de mudanças, versões e atualizações do projeto
└── knowledge_base.md   - Base de conhecimento com informações técnicas e regras do sistema
```

### 🔧 `/js/` - Lógica da Aplicação
Contém os scripts JavaScript responsáveis pela funcionalidade.

```
js/
├── app.js              - Arquivo principal da aplicação (atualmente vazio, pronto para desenvolvido)
├── main.js             - Arquivo com funções principais de inicialização (atualmente vazio)
└── utils.js            - Arquivo com funções utilitárias reutilizáveis (atualmente vazio)
```


