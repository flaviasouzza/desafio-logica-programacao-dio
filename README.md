# Informações importantes para usar

# git init
O que faz: Inicializa um repositório Git em um diretório. Cria uma pasta oculta chamada .git onde o Git armazenará o histórico de versões e configurações do repositório.
Por que usar: Marca o início do controle de versão para o projeto.

# git add .
O que faz: Adiciona todos os arquivos modificados ou novos no diretório atual ao "staging area" (área de preparação).
Por que usar: Prepara os arquivos para serem incluídos no próximo commit.
O ponto (.) significa "todos os arquivos e subdiretórios do diretório atual".

# git commit -m "commit arquivos"
O que faz: Cria um snapshot (captura de estado) dos arquivos que estão na "staging area" e adiciona ao histórico do repositório.
Por que usar: Salva as mudanças com uma mensagem descritiva. A mensagem entre aspas deve explicar o que foi alterado

# git branch -M main
O que faz: Renomeia a branch atual para "main".
Por que usar: Muitas vezes, a branch principal do projeto é chamada de main (em vez de master, que era o padrão antigo do Git).

# git push -u origin main
O que faz:
Envia o histórico de commits da branch main para o repositório remoto chamado origin.
O parâmetro -u (ou --set-upstream) configura o repositório remoto como o padrão para a branch local.
Por que usar: Sincroniza o repositório local com o repositório remoto e configura um vínculo entre as branches local e remota.

# (exemplo) node src/index.js
O que faz: Executa o arquivo index.js localizado na pasta src usando o Node.js.
Por que usar: Inicia o código que você está desenvolvendo. O Node.js é usado para rodar aplicações JavaScript no lado do servidor.

# git add . 
Repetição: Novamente adiciona todos os arquivos modificados ou novos à "staging area".
Por que usar novamente: Você fez novas alterações no código e está preparando-as para o próximo commit.

# git commit -m "testando"
O que faz: Cria um commit com as alterações feitas após o último commit.
Por que usar: Salva o novo estado do projeto no histórico, com uma mensagem ("testando") que explica o propósito das mudanças.

# git push -u origin main
Repetição: Envia os novos commits para o repositório remoto na branch main.
Por que usar novamente: As mudanças locais agora precisam ser compartilhadas ou sincronizadas com o repositório remoto.
