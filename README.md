# FakeStore SPA

Aplicação Single Page Application desenvolvida em JavaScript Vanilla, consumindo a Fake Store API. Permite visualizar produtos, favoritar itens, aplicar filtros e alternar entre modo claro/escuro.

## Tecnologias Utilizadas

- JavaScript Vanilla (ES6 Modules)
- Fetch API
- LocalStorage
- HTML5
- CSS3

## Funcionalidades

- **Listagem de Produtos:** Exibe os produtos em cards com imagem, nome, preço e categoria.
- **Favoritar Produtos:** Adicione ou remova produtos dos favoritos, com persistência no localStorage.
- **Página de Favoritos:** Visualize apenas os produtos marcados como favoritos.
- **Filtros Dinâmicos:** Filtre produtos por nome, categoria, preço mínimo e máximo.
- **Modo Noturno/Claro:** Alternância visual entre temas claro e escuro com botão no cabeçalho.
- **SPA (Single Page Application):** Navegação entre páginas sem recarregar o site.
- **Layout Responsivo:** Interface adaptável para desktop e dispositivos móveis.
- **Indicador de Carregamento:** Exibe mensagem enquanto os produtos são carregados.
- **Switch de Tema:** Botão estilizado no canto superior direito para alternar entre os modos.
- **Hover nos Cards:** Efeito de aumento suave ao passar o mouse sobre os cards.

## Estrutura de Pastas

```
ap1 componentes/
│
├── index.html
├── readme.md
├── assets/
│   └── css/
├── css/
│   └── style.css
├── js/
│   ├── api/
│   │   └── api.js
│   └── components/
│       ├── api.js
│       ├── app.js
│       ├── cabecalho.js
│       ├── cartao_produtos.js
│       ├── estado.js
│       ├── header.js
│       └── main.js
```

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositório>
   ```

2. **Abra a pasta do projeto no VS Code ou outro editor.**

3. **Execute o Live Server:**
   - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
   - Ou utilize uma extensão similar para rodar um servidor local.

4. **Acesse o endereço local gerado pelo Live Server no navegador.**

Pronto! A aplicação estará funcionando e você poderá navegar, filtrar, favoritar produtos e alternar entre os modos claro e escuro.

## Observações

- O projeto utiliza apenas JavaScript puro, sem frameworks.
- Os favoritos são salvos no navegador, mesmo após fechar a página.
- O botão de modo noturno está no canto superior direito, com visual de switch.
- Para dúvidas ou sugestões, abra uma issue ou envie um pull request..