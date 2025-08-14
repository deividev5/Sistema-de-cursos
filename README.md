
# Sistema de Cursos

## Descrição

Sistema para gestão de cursos, construído com uma stack moderna focada em backend e testes automatizados. Ideal para adicionar, consultar e manter informações sobre cursos.

## Tecnologias Utilizadas
* **TypeScript**, **JavaScript** (composição do frontend) ([GitHub][1])
* **Drizzle ORM** (configuração presente em `drizzle.config.ts`) ([GitHub][1])
* **Vitest** para testes (`vitest.config.ts`) ([GitHub][1])
* **Docker & Docker-Compose** para containerização (`docker-compose.yml`) ([GitHub][1])

## Estrutura do Projeto

```
/
├── coverage/                # Relatórios de cobertura de testes
├── drizzle/                 # Pasta com migrações ou configurações do Drizzle
├── src/                     # Códigos-fonte principais
├── .env                     # Configurações padrão de ambiente
├── .env.test                # Variáveis de ambiente para testes
├── docker-compose.yml       # Orquestração de containers
├── drizzle.config.ts        # Configuração do ORM Drizzle
├── package.json
├── tsconfig.json            # Configuração TypeScript
└── vitest.config.ts         # Configuração de testes com Vitest
```

## Como Usar

### Pré-requisitos

* Docker e Docker-Compose instalados
* Node.js (versão compatível com seu projeto)

### Passos para Execução

```bash
git clone https://github.com/deividev5/Sistema-de-cursos.git
cd Sistema-de-cursos
cp .env.example .env         # se existir
docker-compose up -d
# Após subir os containers:
npm install
npm run build
npm run dev                   # ou o comando equivalente para rodar localmente
npm test                      # para executar os testes com Vitest
```


## Diagrama da Aplicação

```plaintext
+------------------+      HTTP/API      +------------------+
|                  | <---------------> |                  |
|      Cliente     |                   |    Servidor /    |
| (frontend em TS) |                   | backend Node.js  |
|                  |                   | + Drizzle ORM    |
+------------------+                   +------------------+
        │                                      │
        │                           Acesso a banco via Drizzle
        │                                      │
+------------------+                   +------------------+
|                  |                   |                  |
|  Docker Compose  |                   |     Banco de     |
| Containeriza App |                   |     Dados       |
| (backend + testes)|                   |  (por exemplo:  |
|                  |                   | PostgreSQL etc.) |
+------------------+                   +------------------+
```

