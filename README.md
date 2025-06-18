# Projeto Minimercado Raízes do Sul - Fundamentos de Sistemas Web

Este projeto consiste no desenvolvimento de uma plataforma online para o minimercado "Raízes do Sul", como parte da disciplina de Fundamentos de Sistemas Web. O projeto foi construído em duas fases.

## Descrição Geral

A plataforma visa expandir o alcance do minimercado, oferecer conveniência aos clientes através de compras online e apresentar seus produtos e serviços de forma clara e atrativa.

## Fase 1: Estrutura Base (HTML)

Nesta fase inicial, o foco foi na construção da estrutura básica das páginas web utilizando exclusivamente HTML. Foram criadas páginas para:
*   Apresentação do minimercado (Página Inicial).
*   Listagem de produtos divididos em categorias (Frutas e Verduras, Alimentos Não Perecíveis, Higiene e Limpeza), cada um com foto, descrição e valor.
*   Apresentação dos serviços (Retirada no Local e Tele-entrega) com descrição e valor.
*   Implementação de cabeçalho e rodapé consistentes em todas as páginas.

## Fase 2: Dinamismo, Estilização e Novas Funcionalidades (CSS, Bootstrap, JavaScript)

A Fase 2 evoluiu o sistema web, adicionando os seguintes recursos e melhorias:

*   **Estilização Visual com CSS e Bootstrap:**
    *   Integração do framework Bootstrap 5 (via CDN) para responsividade e componentes visuais modernos.
    *   Criação de um arquivo `estilos.css` customizado para aplicar a identidade visual do "Minimercado Raízes do Sul", incluindo uma paleta de cores e estilos específicos para cabeçalho, rodapé, cards de produtos, e outros elementos.
*   **Interface Dinâmica com JavaScript:**
    *   **Carrossel de Imagens:** Implementado na página inicial para destacar promoções ou produtos, utilizando o componente carousel do Bootstrap.
    *   **Função Temporal:** Uma mensagem de boas-vindas é exibida dinamicamente na página inicial ao ser carregada e desaparece após alguns segundos.
*   **Formulário de Cadastro de Cliente:**
    *   Uma nova página (`cadastro.html`) foi criada contendo um formulário completo para o cliente fornecer seus dados de identificação (nome, CPF, sexo), contato (telefone, e-mail) e endereço.
    *   O formulário utiliza diversos tipos de input HTML5 (text, email, tel, radio, select, checkbox) e atributos como `placeholder` e `required` para validação básica no navegador.
*   **Agendamento de Serviços:**
    *   A página `servicos.html` foi aprimorada para incluir uma seção de agendamento.
    *   O cliente pode selecionar o tipo de serviço (Retirada no Local ou Tele-entrega), escolher uma data (usando o input `type="date"`) e um horário (usando o input `type="time"`).
*   **Acessibilidade:**
    *   Foi mantido e revisado o uso de atributos `alt` descritivos para todas as imagens, auxiliando na audiodescrição para deficientes visuais.
    *   Foram adicionados estilos para melhorar a visibilidade do foco em elementos interativos (`links`, `botões`, `campos de formulário`), beneficiando a navegação por teclado.
    *   Os formulários utilizam a tag `<label>` corretamente associada aos seus respectivos campos de entrada.

## Estrutura de Arquivos

O projeto é composto pelos seguintes arquivos principais:
*   **HTML:**
    *   `index.html` (Página Inicial com carrossel e mensagem temporal)
    *   `frutas_verduras.html`
    *   `alimentos_nao_pereciveis.html`
    *   `higiene_limpeza.html`
    *   `servicos.html` (Com seção de agendamento)
    *   `cadastro.html` (Formulário de cadastro)
*   **CSS:**
    *   `estilos.css` (Estilos customizados para o site)
*   **JavaScript:**
    *   `scripts.js` (Script para a mensagem de boas-vindas temporal)
*   **Imagens:**
    *   Todas as imagens utilizadas estão localizadas na pasta `/imagens/`.

## Como Acessar e Navegar

1.  Acesse o link do site publicado através do GitHub Pages: [COLOQUE O LINK DO SEU GITHUB PAGES AQUI]
2.  Utilize os links no menu de navegação presente no cabeçalho de cada página para transitar entre as seções:
    *   **Início:** Página principal com destaques e carrossel.
    *   **Frutas e Verduras:** Página com os produtos desta categoria.
    *   **Alimentos Não Perecíveis:** Página com os produtos desta categoria.
    *   **Higiene e Limpeza:** Página com os produtos desta categoria.
    *   **Serviços:** Página que descreve os serviços e permite o agendamento.
    *   **Cadastro:** Página com o formulário para cadastro de novos clientes.
3.  O carrossel na página inicial alterna as imagens automaticamente e também possui controles manuais.
4.  O formulário de cadastro e o de agendamento possuem campos obrigatórios e utilizam validações básicas do HTML5.

---
Autor: JOÃO VICTOR ROCHA FERREIRA   
Matrícula: 24150418-2