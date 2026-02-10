import { Module } from "@/types/module";

export const modules: Module[] = [
  {
    id: "introducao",
    title: "Introdução ao Fedora",
    icon: "🐧",
    description: "Conheça o Fedora Workstation e o ambiente Linux",
    content: [
      "O Fedora Workstation é uma distribuição Linux desenvolvida pela comunidade Fedora e patrocinada pela Red Hat. É conhecida por trazer as tecnologias mais recentes de forma estável e segura.",
      "O Fedora utiliza o GNOME como ambiente gráfico padrão e o DNF como gerenciador de pacotes. É uma distribuição rolling-release pontual, com novas versões a cada ~6 meses.",
      "O terminal (também chamado de shell) é a ferramenta mais poderosa do Linux. No Fedora, o shell padrão é o Bash (Bourne Again Shell). Para abrir o terminal, pressione Ctrl+Alt+T ou busque 'Terminal' no menu de aplicativos.",
    ],
    commands: [
      {
        command: "uname -a",
        description: "Exibe informações completas do sistema operacional (kernel, hostname, arquitetura)",
        example: "uname -a",
        output: "Linux fedora 6.5.0-200.fc39.x86_64 #1 SMP x86_64 GNU/Linux",
      },
      {
        command: "cat /etc/fedora-release",
        description: "Mostra a versão do Fedora instalada",
        example: "cat /etc/fedora-release",
        output: "Fedora release 39 (Thirty Nine)",
      },
      {
        command: "whoami",
        description: "Exibe o nome do usuário atual logado no sistema",
        example: "whoami",
        output: "estudante",
      },
      {
        command: "hostname",
        description: "Mostra o nome do computador na rede",
        example: "hostname",
        output: "fedora-workstation",
      },
      {
        command: "uptime",
        description: "Mostra há quanto tempo o sistema está ligado, número de usuários e carga do sistema",
        example: "uptime",
        output: " 14:30:25 up 2:15, 1 user, load average: 0.52, 0.48, 0.39",
      },
      {
        command: "date",
        description: "Exibe a data e hora atual do sistema",
        example: "date",
        output: "Seg Fev 10 14:30:25 -03 2026",
      },
    ],
    exercises: [
      { id: 1, question: "Qual comando mostra a versão do kernel Linux instalado?", answer: "uname -r", hint: "Use o comando uname com a flag correta" },
      { id: 2, question: "Como descobrir qual usuário está logado no terminal?", answer: "whoami" },
      { id: 3, question: "Qual comando exibe a versão do Fedora instalada?", answer: "cat /etc/fedora-release" },
      { id: 4, question: "Como ver há quanto tempo o sistema está ligado?", answer: "uptime" },
    ],
  },
  {
    id: "navegacao",
    title: "Navegação no Sistema",
    icon: "📂",
    description: "Aprenda a navegar pelo sistema de arquivos",
    content: [
      "No Linux, tudo é organizado em uma árvore de diretórios que começa na raiz '/'. Diferente do Windows, não existem letras de unidade (C:, D:). Tudo está dentro de '/'.",
      "Os diretórios mais importantes são: /home (arquivos dos usuários), /etc (configurações), /var (dados variáveis e logs), /tmp (arquivos temporários), /usr (programas e bibliotecas) e /bin (comandos essenciais).",
      "O diretório home do seu usuário é representado por '~' (til). Caminhos podem ser absolutos (começam com /) ou relativos (começam do diretório atual).",
    ],
    commands: [
      {
        command: "pwd",
        description: "Print Working Directory — mostra o caminho completo do diretório onde você está",
        example: "pwd",
        output: "/home/estudante",
      },
      {
        command: "ls",
        description: "Lista os arquivos e diretórios no diretório atual",
        example: "ls",
        output: "Desktop  Documents  Downloads  Music  Pictures  Videos",
        flags: [
          { flag: "-l", description: "Lista detalhada com permissões, dono, tamanho e data" },
          { flag: "-a", description: "Mostra arquivos ocultos (começam com ponto)" },
          { flag: "-la", description: "Combinação: lista detalhada incluindo ocultos" },
          { flag: "-lh", description: "Lista detalhada com tamanhos legíveis (KB, MB, GB)" },
          { flag: "-R", description: "Lista recursivamente (subdiretórios incluídos)" },
        ],
      },
      {
        command: "cd",
        description: "Change Directory — muda para outro diretório",
        example: "cd /home/estudante/Documents",
        flags: [
          { flag: "cd ~", description: "Vai para o diretório home do usuário" },
          { flag: "cd ..", description: "Sobe um nível na árvore de diretórios" },
          { flag: "cd -", description: "Volta para o diretório anterior" },
          { flag: "cd /", description: "Vai para o diretório raiz" },
        ],
      },
      {
        command: "tree",
        description: "Exibe a estrutura de diretórios em forma de árvore visual",
        example: "tree -L 2",
        output: ".\n├── Desktop\n├── Documents\n│   ├── projeto1\n│   └── notas.txt\n└── Downloads",
      },
      {
        command: "find",
        description: "Busca arquivos e diretórios por nome, tipo, tamanho e outros critérios",
        example: "find /home -name '*.txt'",
        flags: [
          { flag: "-name", description: "Busca por nome (aceita wildcards como *)" },
          { flag: "-type f", description: "Busca apenas arquivos" },
          { flag: "-type d", description: "Busca apenas diretórios" },
          { flag: "-size +10M", description: "Busca arquivos maiores que 10MB" },
        ],
      },
      {
        command: "locate",
        description: "Busca rápida de arquivos usando um banco de dados indexado (precisa instalar: sudo dnf install mlocate)",
        example: "locate firefox",
      },
    ],
    exercises: [
      { id: 1, question: "Como listar todos os arquivos (incluindo ocultos) com detalhes em tamanhos legíveis?", answer: "ls -lah" },
      { id: 2, question: "Qual comando leva você de volta para sua pasta home?", answer: "cd ~", hint: "Use cd com um caractere especial" },
      { id: 3, question: "Como encontrar todos os arquivos .pdf dentro de /home?", answer: "find /home -name '*.pdf'" },
      { id: 4, question: "Qual comando mostra o diretório atual?", answer: "pwd" },
    ],
  },
  {
    id: "arquivos",
    title: "Manipulação de Arquivos",
    icon: "📄",
    description: "Crie, copie, mova e remova arquivos e diretórios",
    content: [
      "No Linux, manipular arquivos pelo terminal é extremamente eficiente. Você pode criar, copiar, mover, renomear e remover arquivos e diretórios com poucos comandos.",
      "ATENÇÃO: O Linux não tem lixeira no terminal! Quando você remove um arquivo com 'rm', ele é apagado permanentemente. Sempre tenha cuidado ao usar rm, especialmente com a flag -rf.",
      "Dica: Use o comando 'man' seguido do nome de qualquer comando para ver seu manual completo. Por exemplo: man cp",
    ],
    commands: [
      {
        command: "touch",
        description: "Cria um arquivo vazio ou atualiza a data de modificação de um existente",
        example: "touch meu_arquivo.txt",
      },
      {
        command: "mkdir",
        description: "Cria um ou mais diretórios",
        example: "mkdir meu_projeto",
        flags: [
          { flag: "-p", description: "Cria diretórios intermediários se necessário (ex: mkdir -p a/b/c)" },
        ],
      },
      {
        command: "cp",
        description: "Copia arquivos ou diretórios de um lugar para outro",
        example: "cp arquivo.txt /home/estudante/backup/",
        flags: [
          { flag: "-r", description: "Copia diretórios recursivamente (obrigatório para pastas)" },
          { flag: "-i", description: "Pede confirmação antes de sobrescrever" },
          { flag: "-v", description: "Modo verboso — mostra o que está sendo copiado" },
        ],
      },
      {
        command: "mv",
        description: "Move ou renomeia arquivos e diretórios",
        example: "mv antigo.txt novo.txt",
        flags: [
          { flag: "-i", description: "Pede confirmação antes de sobrescrever" },
          { flag: "-v", description: "Modo verboso — mostra a operação" },
        ],
      },
      {
        command: "rm",
        description: "Remove (apaga permanentemente) arquivos e diretórios",
        example: "rm arquivo_inutil.txt",
        flags: [
          { flag: "-r", description: "Remove diretórios recursivamente" },
          { flag: "-f", description: "Força a remoção sem pedir confirmação" },
          { flag: "-i", description: "Pede confirmação para cada arquivo (mais seguro)" },
          { flag: "-rf", description: "⚠️ PERIGOSO: Remove tudo sem perguntar" },
        ],
      },
      {
        command: "cat",
        description: "Exibe o conteúdo de um arquivo no terminal",
        example: "cat /etc/hostname",
        output: "fedora-workstation",
      },
      {
        command: "head / tail",
        description: "Exibe as primeiras (head) ou últimas (tail) linhas de um arquivo",
        example: "head -n 20 arquivo.log\ntail -f /var/log/messages",
        flags: [
          { flag: "-n X", description: "Mostra X linhas" },
          { flag: "-f (tail)", description: "Acompanha o arquivo em tempo real (ideal para logs)" },
        ],
      },
      {
        command: "nano / vim",
        description: "Editores de texto no terminal. Nano é mais simples, Vim é mais poderoso",
        example: "nano arquivo.txt\nvim arquivo.txt",
      },
    ],
    exercises: [
      { id: 1, question: "Crie uma pasta chamada 'projeto' com subpastas 'src' e 'docs' em um único comando", answer: "mkdir -p projeto/src projeto/docs" },
      { id: 2, question: "Como copiar uma pasta inteira 'fotos' para 'backup_fotos'?", answer: "cp -r fotos backup_fotos" },
      { id: 3, question: "Renomeie o arquivo 'relatorio.txt' para 'relatorio_final.txt'", answer: "mv relatorio.txt relatorio_final.txt" },
      { id: 4, question: "Como ver as últimas 10 linhas de um arquivo de log em tempo real?", answer: "tail -f arquivo.log", hint: "Use tail com a flag que acompanha mudanças" },
    ],
  },
  {
    id: "permissoes",
    title: "Permissões e Usuários",
    icon: "🔐",
    description: "Entenda o sistema de permissões do Linux",
    content: [
      "O Linux é um sistema multiusuário com um robusto sistema de permissões. Cada arquivo tem um dono (user), um grupo (group) e permissões para outros (others).",
      "As permissões são: r (read/leitura=4), w (write/escrita=2), x (execute/execução=1). Ao usar 'ls -l', você vê algo como '-rwxr-xr--', que significa: dono pode tudo, grupo pode ler e executar, outros só podem ler.",
      "O comando 'sudo' (Super User DO) permite executar comandos como administrador (root). Use com responsabilidade! O root tem poder total sobre o sistema.",
    ],
    commands: [
      {
        command: "chmod",
        description: "Altera as permissões de arquivos e diretórios",
        example: "chmod 755 script.sh\nchmod u+x script.sh",
        flags: [
          { flag: "755", description: "Dono: rwx, Grupo: r-x, Outros: r-x" },
          { flag: "644", description: "Dono: rw-, Grupo: r--, Outros: r--" },
          { flag: "u+x", description: "Adiciona permissão de execução para o dono" },
          { flag: "-R", description: "Aplica recursivamente em diretórios" },
        ],
      },
      {
        command: "chown",
        description: "Altera o dono e/ou grupo de um arquivo",
        example: "sudo chown estudante:estudante arquivo.txt",
        flags: [
          { flag: "-R", description: "Altera recursivamente" },
        ],
      },
      {
        command: "sudo",
        description: "Executa um comando com privilégios de administrador (root)",
        example: "sudo dnf update",
      },
      {
        command: "su",
        description: "Troca para outro usuário (su - troca para root)",
        example: "su - root",
      },
      {
        command: "useradd / userdel",
        description: "Cria ou remove usuários do sistema",
        example: "sudo useradd -m novo_aluno\nsudo userdel -r aluno_antigo",
        flags: [
          { flag: "-m", description: "Cria o diretório home do usuário" },
          { flag: "-r (userdel)", description: "Remove também o diretório home" },
        ],
      },
      {
        command: "passwd",
        description: "Altera a senha de um usuário",
        example: "passwd\nsudo passwd outro_usuario",
      },
      {
        command: "groups",
        description: "Mostra os grupos aos quais o usuário pertence",
        example: "groups estudante",
        output: "estudante : estudante wheel",
      },
    ],
    exercises: [
      { id: 1, question: "Dê permissão de execução a um script chamado 'deploy.sh' apenas para o dono", answer: "chmod u+x deploy.sh" },
      { id: 2, question: "Qual permissão numérica corresponde a: dono lê/escreve, grupo lê, outros lê?", answer: "644" },
      { id: 3, question: "Como criar um novo usuário 'aluno01' com diretório home?", answer: "sudo useradd -m aluno01" },
      { id: 4, question: "Como alterar a senha do usuário 'aluno01'?", answer: "sudo passwd aluno01" },
    ],
  },
  {
    id: "pacotes",
    title: "Gerenciamento de Pacotes",
    icon: "📦",
    description: "Instale, atualize e remova programas com DNF",
    content: [
      "O DNF (Dandified YUM) é o gerenciador de pacotes do Fedora. Com ele você pode instalar, atualizar e remover programas de forma segura a partir dos repositórios oficiais.",
      "O Fedora também suporta Flatpak para aplicativos sandboxed (isolados), RPM Fusion para pacotes adicionais (codecs, drivers proprietários) e COPR para repositórios da comunidade.",
      "Sempre mantenha seu sistema atualizado! Atualizações trazem correções de segurança e bugs importantes.",
    ],
    commands: [
      {
        command: "sudo dnf update",
        description: "Atualiza todos os pacotes instalados para suas versões mais recentes",
        example: "sudo dnf update",
      },
      {
        command: "sudo dnf install",
        description: "Instala um ou mais pacotes a partir dos repositórios",
        example: "sudo dnf install vim htop neofetch",
      },
      {
        command: "sudo dnf remove",
        description: "Remove um pacote do sistema",
        example: "sudo dnf remove pacote_antigo",
      },
      {
        command: "dnf search",
        description: "Busca pacotes por nome ou descrição nos repositórios",
        example: "dnf search editor",
      },
      {
        command: "dnf info",
        description: "Exibe informações detalhadas sobre um pacote",
        example: "dnf info firefox",
      },
      {
        command: "dnf list installed",
        description: "Lista todos os pacotes atualmente instalados no sistema",
        example: "dnf list installed | grep python",
      },
      {
        command: "sudo dnf autoremove",
        description: "Remove pacotes órfãos (dependências que não são mais necessárias)",
        example: "sudo dnf autoremove",
      },
      {
        command: "sudo dnf clean all",
        description: "Limpa o cache do DNF (útil para liberar espaço ou resolver problemas)",
        example: "sudo dnf clean all",
      },
      {
        command: "flatpak install",
        description: "Instala aplicativos via Flatpak (sandboxed)",
        example: "flatpak install flathub com.spotify.Client",
      },
    ],
    exercises: [
      { id: 1, question: "Como instalar o editor de texto vim e o monitor htop juntos?", answer: "sudo dnf install vim htop" },
      { id: 2, question: "Como buscar por editores de texto nos repositórios?", answer: "dnf search editor" },
      { id: 3, question: "Qual comando remove dependências que não são mais necessárias?", answer: "sudo dnf autoremove" },
      { id: 4, question: "Como atualizar todos os pacotes do sistema?", answer: "sudo dnf update" },
    ],
  },
  {
    id: "processos",
    title: "Processos e Sistema",
    icon: "⚙️",
    description: "Monitore e gerencie processos do sistema",
    content: [
      "Todo programa em execução no Linux é um processo com um PID (Process ID) único. Você pode listar, monitorar, pausar e encerrar processos pelo terminal.",
      "Processos podem rodar em foreground (primeiro plano) ou background (segundo plano). Use '&' no final do comando para rodar em background, e 'Ctrl+Z' para pausar um processo em foreground.",
      "Sinais são mensagens enviadas a processos. O mais comum é SIGTERM (15) para pedir encerramento educado e SIGKILL (9) para forçar o encerramento.",
    ],
    commands: [
      {
        command: "ps",
        description: "Lista os processos em execução",
        example: "ps aux",
        flags: [
          { flag: "aux", description: "Mostra todos os processos de todos os usuários com detalhes" },
          { flag: "-ef", description: "Formato completo de todos os processos" },
        ],
      },
      {
        command: "top / htop",
        description: "Monitor de processos em tempo real (htop é mais visual — instale com dnf install htop)",
        example: "htop",
      },
      {
        command: "kill",
        description: "Envia um sinal a um processo pelo seu PID",
        example: "kill 1234\nkill -9 1234",
        flags: [
          { flag: "-9", description: "SIGKILL — força o encerramento imediato" },
          { flag: "-15", description: "SIGTERM — pede encerramento educado (padrão)" },
        ],
      },
      {
        command: "killall",
        description: "Encerra todos os processos com determinado nome",
        example: "killall firefox",
      },
      {
        command: "bg / fg",
        description: "bg retoma um processo pausado em background; fg traz para foreground",
        example: "bg %1\nfg %1",
      },
      {
        command: "df",
        description: "Mostra o uso de espaço em disco das partições montadas",
        example: "df -h",
        output: "Filesystem  Size  Used Avail Use% Mounted on\n/dev/sda1   50G   22G   26G  46% /",
      },
      {
        command: "du",
        description: "Mostra o tamanho de arquivos e diretórios",
        example: "du -sh ~/Documents",
        flags: [
          { flag: "-s", description: "Mostra apenas o total" },
          { flag: "-h", description: "Tamanhos legíveis" },
        ],
      },
      {
        command: "free",
        description: "Exibe informações de uso de memória RAM e swap",
        example: "free -h",
      },
    ],
    exercises: [
      { id: 1, question: "Como listar todos os processos do sistema com detalhes?", answer: "ps aux" },
      { id: 2, question: "Como forçar o encerramento de um processo com PID 5678?", answer: "kill -9 5678" },
      { id: 3, question: "Qual comando mostra o uso de disco em formato legível?", answer: "df -h" },
      { id: 4, question: "Como verificar o uso de memória RAM?", answer: "free -h" },
    ],
  },
  {
    id: "rede",
    title: "Rede e Conectividade",
    icon: "🌐",
    description: "Configure e diagnostique redes no Fedora",
    content: [
      "O Fedora usa o NetworkManager para gerenciar conexões de rede. Você pode usar tanto a interface gráfica quanto o terminal (nmcli) para configurar redes.",
      "Diagnóstico de rede é uma habilidade essencial. Comandos como ping, curl, ss e ip ajudam a identificar problemas de conectividade, DNS e portas.",
    ],
    commands: [
      {
        command: "ip addr",
        description: "Exibe as interfaces de rede e seus endereços IP (substituto do ifconfig)",
        example: "ip addr show",
      },
      {
        command: "ping",
        description: "Testa a conectividade com outro host enviando pacotes ICMP",
        example: "ping -c 4 google.com",
        flags: [
          { flag: "-c N", description: "Envia apenas N pacotes" },
        ],
      },
      {
        command: "curl",
        description: "Transfere dados de/para URLs. Útil para testar APIs e baixar arquivos",
        example: "curl -I https://fedoraproject.org",
        flags: [
          { flag: "-I", description: "Mostra apenas os headers HTTP" },
          { flag: "-o arquivo", description: "Salva a saída em um arquivo" },
          { flag: "-O", description: "Salva com o nome original do arquivo" },
        ],
      },
      {
        command: "wget",
        description: "Baixa arquivos da internet",
        example: "wget https://exemplo.com/arquivo.tar.gz",
      },
      {
        command: "ss",
        description: "Mostra portas e conexões de rede ativas (substituto do netstat)",
        example: "ss -tulnp",
        flags: [
          { flag: "-t", description: "Conexões TCP" },
          { flag: "-u", description: "Conexões UDP" },
          { flag: "-l", description: "Apenas portas em escuta (listening)" },
          { flag: "-n", description: "Mostra números ao invés de nomes" },
          { flag: "-p", description: "Mostra o processo associado" },
        ],
      },
      {
        command: "nmcli",
        description: "Interface de linha de comando do NetworkManager",
        example: "nmcli device status\nnmcli connection show",
      },
      {
        command: "systemctl",
        description: "Controla serviços do systemd (iniciar, parar, habilitar, desabilitar)",
        example: "sudo systemctl status firewalld\nsudo systemctl restart NetworkManager",
      },
    ],
    exercises: [
      { id: 1, question: "Como testar se você consegue acessar o Google enviando 3 pacotes?", answer: "ping -c 3 google.com" },
      { id: 2, question: "Qual comando mostra o endereço IP das suas interfaces de rede?", answer: "ip addr" },
      { id: 3, question: "Como ver quais portas estão abertas e escutando no sistema?", answer: "ss -tulnp" },
      { id: 4, question: "Como verificar se o serviço de firewall está ativo?", answer: "sudo systemctl status firewalld" },
    ],
  },
  {
    id: "extras",
    title: "Dicas e Comandos Extras",
    icon: "💡",
    description: "Atalhos, pipes, redirecionamento e produtividade",
    content: [
      "O verdadeiro poder do terminal Linux está em combinar comandos. Pipes (|) enviam a saída de um comando como entrada de outro. Redirecionamento (>, >>) envia saídas para arquivos.",
      "Dominar esses conceitos transforma você de usuário básico em power user. Atalhos de teclado no terminal também aumentam muito sua produtividade.",
    ],
    commands: [
      {
        command: "| (pipe)",
        description: "Envia a saída de um comando como entrada de outro",
        example: "ls -la | grep '.txt'\nps aux | grep firefox\ncat log.txt | sort | uniq",
      },
      {
        command: "> e >>",
        description: "> redireciona a saída para um arquivo (sobrescreve). >> adiciona ao final (append)",
        example: "echo 'Hello' > arquivo.txt\necho 'World' >> arquivo.txt",
      },
      {
        command: "grep",
        description: "Filtra linhas que contêm um padrão (texto ou regex)",
        example: "grep -i 'erro' /var/log/messages",
        flags: [
          { flag: "-i", description: "Ignora maiúsculas/minúsculas" },
          { flag: "-r", description: "Busca recursivamente em diretórios" },
          { flag: "-n", description: "Mostra o número da linha" },
          { flag: "-c", description: "Conta o número de ocorrências" },
        ],
      },
      {
        command: "wc",
        description: "Conta linhas, palavras e caracteres",
        example: "wc -l arquivo.txt",
        flags: [
          { flag: "-l", description: "Conta apenas linhas" },
          { flag: "-w", description: "Conta apenas palavras" },
        ],
      },
      {
        command: "sort / uniq",
        description: "sort ordena linhas; uniq remove duplicatas consecutivas (use após sort)",
        example: "sort nomes.txt | uniq",
      },
      {
        command: "history",
        description: "Mostra o histórico de comandos digitados. Use !número para repetir um comando",
        example: "history | tail -20",
      },
      {
        command: "alias",
        description: "Cria atalhos para comandos longos (adicione ao ~/.bashrc para persistir)",
        example: "alias ll='ls -lah'\nalias update='sudo dnf update'",
      },
      {
        command: "man",
        description: "Abre o manual completo de um comando. A documentação definitiva!",
        example: "man grep\nman chmod",
      },
      {
        command: "tar",
        description: "Compacta e descompacta arquivos .tar, .tar.gz, .tar.bz2",
        example: "tar -czf backup.tar.gz minha_pasta/\ntar -xzf backup.tar.gz",
        flags: [
          { flag: "-c", description: "Cria um novo arquivo tar" },
          { flag: "-x", description: "Extrai um arquivo tar" },
          { flag: "-z", description: "Usa gzip para compressão" },
          { flag: "-f", description: "Especifica o nome do arquivo" },
          { flag: "-v", description: "Modo verboso" },
        ],
      },
    ],
    exercises: [
      { id: 1, question: "Como contar quantos arquivos .txt existem no diretório atual?", answer: "ls *.txt | wc -l" },
      { id: 2, question: "Salve a lista de processos em um arquivo chamado 'processos.txt'", answer: "ps aux > processos.txt" },
      { id: 3, question: "Como buscar a palavra 'error' (ignorando maiúsculas) em todos os arquivos de /var/log/?", answer: "grep -ri 'error' /var/log/" },
      { id: 4, question: "Crie um alias chamado 'atualizar' para o comando 'sudo dnf update -y'", answer: "alias atualizar='sudo dnf update -y'" },
      { id: 5, question: "Como compactar a pasta 'projeto' em um arquivo 'projeto.tar.gz'?", answer: "tar -czf projeto.tar.gz projeto/" },
    ],
  },
];
