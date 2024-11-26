# BEAR_App

## 📜 Descrição do Projeto

O **BEAR** é um aplicativo mobile desenvolvido em React Native para gerenciar e exibir informações sobre roupas. Este projeto inclui funcionalidades como autenticação, navegação intuitiva, listagem de produtos, além do gerenciamento completo (CRUD) de roupas. Também apresenta informações sobre os integrantes do grupo do projeto.

---

## 🔧 Funcionalidades

### 1. **Login**
- Autenticação obrigatória: o usuário só pode acessar o aplicativo com login e senha corretos.
- Exibição de mensagens de erro no caso de credenciais inválidas.

### 2. **Navegação**
- Implementação de dois tipos de navegação:
  - **Drawer Navigation**: Navegação lateral para acesso rápido às telas principais.
  - **Stack Navigation**: Transições entre telas para melhor experiência de usuário.

### 3. **Vitrine de Produtos**
- Exibição de produtos em uma **FlatList** para navegação eficiente.
- **Filtro de produtos** por categorias específicas, como roupas masculinas ou femininas.

### 4. **Detalhes do Produto**
- Página que apresenta informações detalhadas do produto selecionado na vitrine.

### 5. **Gerenciamento de Produtos (CRUD)**
- Utilização do **Axios** para realizar operações de:
  - **Criar** novos produtos.
  - **Ler** os dados existentes.
  - **Atualizar** produtos já cadastrados.
  - **Excluir** produtos.
- Validação dos campos de entrada com mensagens de erro claras.
- Feedback visual para operações realizadas com sucesso ou erro.

### 6. **Interações Assíncronas**
- Indicadores de **loading** em todas as operações que envolvem comunicação com a API.
- Mensagens de confirmação e de sucesso após a conclusão de interações.

### 7. **Página de Integrantes**
- Tela que exibe os integrantes do grupo utilizando uma **FlatList**, com os dados carregados dinamicamente a partir do arquivo `dadosintegrantes.js`.

---

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento mobile.
- **React Navigation**: Gerenciamento de navegação no aplicativo.
- **Axios**: Ferramenta para realizar requisições HTTP.
- **FlatList**: Componente para renderização eficiente de listas.
- **Styled Components** ou **CSS-in-JS**: Para estilização de componentes.

---
## 👨‍💻 Integrantes do Grupo
- Milton Rodrigues de Melo Filho
- Guilherme Senna Pires
- João Gabriel Tavares Siqueira
- Victor Hugo Barros Schuenck
- Júlia Henriques de Azevedo Xavier
- Gustavo Cordeiro Santos



1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/roupasapp.git](https://github.com/Gustavo-c-s/SerraTecMobileTrabalhoFinal

Instale as dependências:

bash
 ```bash
Copiar código
npm install
Execute o projeto:
npx expor start

npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

npm install @react-navigation/drawer @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated

npm install axios

npm install styled-components

