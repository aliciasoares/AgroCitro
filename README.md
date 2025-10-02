# Agro Citro

## 1) Apps usados
- XAMPP 
- HeidiSQL
- Vscode
- Navegador 
#### para verificar a versão do Node, digite o seguinte comando no Terminal(CMD):
- node -v



## 2) Criar o Banco de Dados
1. Abra XAMPP → Start em Apache e MySQL  
2. Abra HeidiSQL → conectar com Host: 127.0.0.1, User: root, Password: (vazio), Port: 3306  
3. Crie o banco `plantio` e as tabelas


-
## 3) Configuração do Backend
Navegue até a pasta do backend 


colocar os seguintes comandos no terminal:


- npm init -y
- npm install express mysql2 


depois de criar seu backend, no caso Server.js inicie:


### Rodar backend:




- npm start
ou
- node server.js
## 4) Configuração do Frontend


crie arquivo html e CSS para a produçao do site




## 5) Linkar Frontend e Backend
Backend já habilita CORS:


js
Copiar código
- server.use(cors());


- rontend pode chamar rotas via fetch ou AJAX usando localhost:3000.






## 6) Rodar Projeto Completo
Iniciar XAMPP → Apache + MySQL


Criar banco e tabelas no HeidiSQL


Configurar backend (.env, instalar dependências)


Rodar backend (node server.js)


Abrir frontend HTML no navegador e testar formulários


## participantes: 
- Daniel Cavalcante Martins
- Alicia Oliveira Soares
- Julia de Souza Bonfim
- Natalia Donangelo Nogueira


