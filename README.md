# Agregador de links - Extensão para Chrome

## Descrição

Uma extensão para o Google Chrome que permite aos usuários salvar, visualizar e gerenciar URLs. A extensão permite que você adicione URLs manualmente ou diretamente da aba ativa do navegador. Todos os links são armazenados localmente no `localStorage`, garantindo que você possa acessá-los em futuras sessões.

## Funcionalidades

- **Adicionar URL manualmente**: Insira um link diretamente no campo de texto e adicione-o à sua lista de links.
- **Adicionar URL da aba ativa**: Capture a URL da aba ativa do navegador com um clique em um botão.
- **Visualizar links salvos**: Todos os links salvos são exibidos na interface da extensão em uma lista clicável.
- **Excluir links salvos**: Você pode apagar todos os links salvos com um clique duplo no botão de exclusão.

## Como usar

1. **Instalar a extensão**:
   - Baixe ou clone este repositório em seu computador.
   - Abra o Chrome e acesse a página de **Extensões** (chrome://extensions/).
   - Ative o **Modo de desenvolvedor** no canto superior direito.
   - Clique em **Carregar sem compactação** e selecione a pasta do repositório no seu computador.

2. **Adicionar links**:
   - Clique no ícone da extensão na barra de ferramentas do Chrome.
   - No popup da extensão, insira um link no campo de texto e clique em "Adicionar" ou clique no botão "Adicionar aba ativa" para adicionar a URL da aba atual.

3. **Visualizar links**:
   - Todos os links adicionados serão exibidos em uma lista no popup da extensão. Clique em qualquer link para abri-lo em uma nova aba.

4. **Excluir links**:
   - Clique duas vezes no botão de exclusão para remover todos os links salvos da sua lista.

## Tecnologias

- **HTML/CSS**: Para a estrutura e estilo da interface.
- **JavaScript**: Para a funcionalidade interativa.
- **Chrome APIs**: Uso da API `chrome.tabs` para capturar a URL da aba ativa.
- **localStorage**: Armazenamento local para persistir os links entre as sessões.

## Permissões

- **tabs**: Permite à extensão acessar informações sobre as abas do navegador, como capturar a URL da aba ativa.

## Como contribuir

1. Faça um fork deste repositório.
2. Crie uma branch com suas alterações (`git checkout -b feature/nova-funcionalidade`).
3. Faça o commit das suas alterações (`git commit -am 'Adicionando nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um pull request.

## Licença

Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
