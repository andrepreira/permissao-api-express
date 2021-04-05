

## Como rodar o projeto

docker-compose -f "src\database\docker-compose.yml" up -d --build 

http://localhost:5050/browser/  --> pgadmin login: admin@admin.com.br e senha:root

interface pgadmin criar server usando o IPAddress do postgres e os dados no dockercompose.yml

IPAddress -> docker ps -> descobrir <ID> do postgres e rodar docker inspect <ID>

yarn typeorm migration:run

yarn start 

docker ps -a 

docker start CONTAINER_ID


## Funcionalidades da API

[] Cadastro de users

[] Autenticação dos users

[] Cadastro de permissões

[] Cadastro de Roles

[] Cadastro de Produtos

[] Conexão User_Roles

[] Permisson_Roles


