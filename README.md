
## 🗂 Como rodar o projeto

docker-compose -f "src\database\docker-compose.yml" up -d --build 

http://localhost:5050/browser/  --> pgadmin login: admin@admin.com.br e senha:root

interface pgadmin criar server usando o IPAddress do postgres e os dados no dockercompose.yml

IPAddress -> docker ps -> descobrir <ID> do postgres e rodar docker inspect <ID>

yarn typeorm migration:run

yarn start 

docker ps -a 

docker start CONTAINER_ID

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [TypeORM](https://typeorm.io/#/)
- [PostgresSQL](https://www.postgresql.org/)

---

## 🗂 Material de apoio

- [TypeORM](typeorm.io/)
- [JWT](https://jwt.io)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](www.npmjs.com/package/jsonwebtoken)
- [Tutorial Youtube](https://www.youtube.com/watch?v=TGCwB9oMR0o)


## ☑️ Funcionalidades da API

[ ] Cadastro de users

[ ] Autenticação dos users

[ ] Cadastro de permissões

[ ] Cadastro de Roles

[ ] Cadastro de Produtos

[ ] Conexão User_Roles

[ ] Permisson_Roles

---

<h3 align="center">Desenvolvido por André Pereira </h3>

