import { Module } from "@/types/module";

export const modules: Module[] = [
  // ═══════════════════════════════════════════════════════
  // PARTE 1 — FUNDAMENTOS TEÓRICOS
  // ═══════════════════════════════════════════════════════
  {
    id: "linux-gnu",
    title: "O que é Linux e GNU",
    icon: "🐧",
    category: "Fundamentos Teóricos",
    description: "A história do Linux, o projeto GNU e o conceito de software livre",
    content: [
      "O Linux não é um sistema operacional completo — é um kernel (núcleo). O kernel é o componente que faz a ponte entre o hardware (processador, memória, disco) e os programas que você usa. Ele gerencia processos, memória, dispositivos e chamadas de sistema.",
      "O kernel Linux foi criado por Linus Torvalds em 1991, como um projeto pessoal inspirado no MINIX. Ele foi publicado com uma licença livre (GPL), permitindo que qualquer pessoa estudasse, modificasse e redistribuísse o código-fonte.",
      "O projeto GNU (GNU's Not Unix) foi iniciado por Richard Stallman em 1983 com o objetivo de criar um sistema operacional completamente livre. O GNU desenvolveu ferramentas essenciais: o compilador GCC, o editor Emacs, o shell Bash, as coreutils (ls, cp, mv, rm, cat, etc.) e as bibliotecas C (glibc).",
      "Quando o kernel Linux se uniu às ferramentas GNU, nasceu o sistema GNU/Linux — um sistema operacional completo e livre. É por isso que muitos puristas chamam de 'GNU/Linux' e não apenas 'Linux'. Na prática, a maioria das pessoas diz simplesmente 'Linux'.",
      "Software livre não significa gratuito. Significa liberdade: liberdade de usar, estudar, modificar e distribuir. A licença GPL garante essas 4 liberdades fundamentais. Isso é diferente de 'open source', que foca no aspecto prático do código aberto.",
      "Uma distribuição Linux (distro) é uma combinação do kernel Linux + ferramentas GNU + gerenciador de pacotes + ambiente gráfico + configurações específicas. Exemplos: Debian, Ubuntu, Fedora, Arch Linux, openSUSE, CentOS Stream e muitas outras.",
    ],
    commands: [
      {
        command: "uname -r",
        description: "Exibe a versão do kernel Linux em uso",
        example: "uname -r",
        output: "6.1.0-18-amd64",
      },
      {
        command: "uname -a",
        description: "Exibe todas as informações do sistema: kernel, hostname, arquitetura, data de compilação",
        example: "uname -a",
        output: "Linux debian 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1 x86_64 GNU/Linux",
      },
      {
        command: "cat /proc/version",
        description: "Mostra detalhes sobre o kernel, compilador usado e versão do sistema",
        example: "cat /proc/version",
        output: "Linux version 6.1.0-18-amd64 (gcc-12 (Debian 12.2.0-14) 12.2.0)",
      },
      {
        command: "lsb_release -a",
        description: "Exibe informações sobre a distribuição (pode precisar instalar: sudo apt install lsb-release)",
        example: "lsb_release -a",
        output: "Distributor ID: Debian\nDescription:    Debian GNU/Linux 12 (bookworm)\nRelease:        12\nCodename:       bookworm",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é a diferença entre Linux e GNU/Linux?", answer: "Linux é apenas o kernel. GNU/Linux é o sistema completo: kernel Linux + ferramentas GNU (bash, gcc, coreutils, etc.)", hint: "Pense no que cada projeto contribui" },
      { id: 2, question: "Quem criou o kernel Linux e em que ano?", answer: "Linus Torvalds, em 1991" },
      { id: 3, question: "Quais são as 4 liberdades do software livre?", answer: "Usar, estudar, modificar e distribuir" },
      { id: 4, question: "Qual comando mostra a versão do kernel em uso?", answer: "uname -r" },
    ],
  },
  {
    id: "projeto-debian",
    title: "O Projeto Debian",
    icon: "🌀",
    category: "Fundamentos Teóricos",
    description: "Conheça o Debian, sua filosofia e seu papel no ecossistema Linux",
    content: [
      "O Debian é uma das distribuições Linux mais antigas e influentes, criada por Ian Murdock em 1993. O nome vem da combinação de 'Deb' (Debra, sua esposa na época) e 'Ian'. É mantido inteiramente pela comunidade, sem empresa por trás (diferente do Ubuntu/Canonical ou Fedora/Red Hat).",
      "O Debian segue o Contrato Social Debian e as Diretrizes Debian de Software Livre (DFSG). Esses documentos garantem que o Debian será sempre 100% livre. Software não-livre é disponibilizado em repositórios separados (non-free e contrib), mas nunca faz parte do sistema base.",
      "O Debian é conhecido pela sua estabilidade excepcional. Uma nova versão estável (stable) é lançada a cada ~2 anos e recebe suporte por ~5 anos (incluindo LTS). Isso o torna a escolha #1 para servidores em produção.",
      "O Debian usa DEB (.deb) como formato de pacote e APT (Advanced Package Tool) como gerenciador de pacotes. O sistema de inicialização é o systemd. O filesystem padrão é o ext4.",
      "O Debian é a 'mãe' de centenas de distribuições derivadas, incluindo Ubuntu, Linux Mint, Pop!_OS, Kali Linux, Raspberry Pi OS e muitas outras. Aprender Debian é aprender a base de toda essa família.",
      "A comunidade Debian é organizada democraticamente. Desenvolvedores Debian (DD) votam em decisões técnicas e elegem o Líder do Projeto Debian (DPL) anualmente.",
    ],
    commands: [
      {
        command: "cat /etc/debian_version",
        description: "Mostra a versão do Debian instalada",
        example: "cat /etc/debian_version",
        output: "12.5",
      },
      {
        command: "cat /etc/os-release",
        description: "Informações detalhadas da distribuição (nome, versão, codinome)",
        example: "cat /etc/os-release",
        output: "PRETTY_NAME=\"Debian GNU/Linux 12 (bookworm)\"\nNAME=\"Debian GNU/Linux\"\nVERSION_ID=\"12\"\nVERSION_CODENAME=bookworm",
      },
      {
        command: "hostnamectl",
        description: "Exibe informações do host, kernel, arquitetura e sistema operacional",
        example: "hostnamectl",
      },
      {
        command: "dpkg -l | wc -l",
        description: "Conta quantos pacotes DEB estão instalados no sistema",
        example: "dpkg -l | wc -l",
        output: "1847",
      },
    ],
    exercises: [
      { id: 1, question: "Quem criou o Debian e em que ano?", answer: "Ian Murdock, em 1993" },
      { id: 2, question: "Qual a principal característica que diferencia o Debian de outras distros?", answer: "É mantido inteiramente pela comunidade (sem empresa por trás) e prioriza estabilidade e software livre." },
      { id: 3, question: "Qual é o filesystem padrão do Debian?", answer: "ext4" },
      { id: 4, question: "Qual comando mostra informações detalhadas da distribuição?", answer: "cat /etc/os-release" },
      { id: 5, question: "Cite 3 distribuições derivadas do Debian.", answer: "Ubuntu, Linux Mint, Kali Linux (ou Pop!_OS, Raspberry Pi OS, etc.)" },
    ],
  },
  {
    id: "versoes-debian",
    title: "Versões e Branches do Debian",
    icon: "💿",
    category: "Fundamentos Teóricos",
    description: "Stable, Testing, Unstable (Sid) e os codinomes do Debian",
    content: [
      "O Debian possui 3 branches (ramos) principais que coexistem simultaneamente. Cada um tem um propósito diferente. Entender isso é fundamental para usar o Debian corretamente.",
      "**Stable (Estável)** — É a versão oficial recomendada. Recebe apenas atualizações de segurança e correções críticas. Os pacotes são 'congelados' no lançamento — são mais antigos, mas extremamente confiáveis. Ideal para servidores e ambientes de produção. Versão atual: Debian 12 'Bookworm'.",
      "**Testing** — Contém pacotes mais recentes que o Stable. É a próxima versão estável em desenvolvimento. Pacotes migram do Unstable após ~10 dias sem bugs críticos. Bom equilíbrio entre novidade e estabilidade. Ideal para desktops de uso diário. Versão atual: 'Trixie'.",
      "**Unstable (Sid)** — Sempre chamado de 'Sid' (personagem de Toy Story que destruía brinquedos). Recebe as versões mais recentes dos pacotes. Pode quebrar ocasionalmente. Usado por desenvolvedores e empacotadores Debian. NÃO recomendado para produção.",
      "**Codinomes do Debian:** Todos vêm de personagens do filme Toy Story! Buzz (1.1), Rex (1.2), Bo (1.3), Hamm (2.0), Slink (2.1), Potato (2.2), Woody (3.0), Sarge (3.1), Etch (4.0), Lenny (5.0), Squeeze (6.0), Wheezy (7), Jessie (8), Stretch (9), Buster (10), Bullseye (11), Bookworm (12), Trixie (13).",
      "**Oldstable** — A versão estável anterior. Ainda recebe atualizações de segurança por um tempo. Quando uma nova stable sai, a anterior vira oldstable.",
      "**Debian Live** — Imagens que permitem testar o Debian sem instalar, rodando direto do pendrive/DVD. Disponíveis com GNOME, KDE, XFCE, LXDE, MATE e Cinnamon.",
      "**Resumo para a prova:** Stable = servidores/produção (seguro, pacotes mais antigos). Testing = desktop (equilíbrio). Unstable/Sid = desenvolvimento (mais novo, pode quebrar). Codinomes = Toy Story. Filesystem = ext4. Pacotes = .deb + APT.",
    ],
    commands: [
      {
        command: "cat /etc/debian_version",
        description: "Verifica qual versão do Debian está instalada",
        example: "cat /etc/debian_version",
        output: "12.5",
      },
      {
        command: "cat /etc/apt/sources.list",
        description: "Mostra os repositórios configurados (revela se está usando stable, testing ou sid)",
        example: "cat /etc/apt/sources.list",
        output: "deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware",
      },
      {
        command: "apt policy",
        description: "Mostra prioridades dos repositórios e qual branch está sendo usado",
        example: "apt policy",
      },
    ],
    exercises: [
      { id: 1, question: "Quais são os 3 branches principais do Debian?", answer: "Stable (estável), Testing (em teste) e Unstable/Sid (instável)" },
      { id: 2, question: "Qual branch é recomendado para servidores de produção?", answer: "Stable" },
      { id: 3, question: "De onde vêm os codinomes do Debian?", answer: "Personagens do filme Toy Story" },
      { id: 4, question: "Qual é o codinome do Debian 12?", answer: "Bookworm" },
      { id: 5, question: "O que é o Sid?", answer: "É o branch Unstable (instável) do Debian, que sempre tem esse nome. Recebe as versões mais recentes dos pacotes." },
      { id: 6, question: "Qual branch oferece o melhor equilíbrio para uso em desktop?", answer: "Testing" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 2 — INSTALAÇÃO E AMBIENTE GRÁFICO
  // ═══════════════════════════════════════════════════════
  {
    id: "instalacao",
    title: "Instalando o Debian",
    icon: "💻",
    category: "Instalação e Ambiente",
    description: "Passo a passo completo para download, criação de USB e instalação do Debian",
    content: [
      "**Passo 1 — Download da ISO:** Acesse https://www.debian.org/distrib/ e baixe a ISO. Existem 2 tipos: netinst (~600MB, baixa pacotes pela internet durante instalação) e live (~3GB, com ambiente gráfico para testar). Para a maioria dos casos, use a netinst.",
      "**Passo 2 — Criar pendrive bootável:** Use o balenaEtcher (multiplataforma), Rufus (Windows) ou o comando 'dd' no terminal para gravar a ISO em um pendrive USB de pelo menos 2GB. ATENÇÃO: isso apaga tudo no pendrive!",
      "**Passo 3 — Configurar o BIOS/UEFI:** Reinicie o computador e entre no BIOS (geralmente F2, F12, Del ou Esc). Desative o Secure Boot se necessário. Configure a ordem de boot para iniciar pelo USB.",
      "**Passo 4 — Instalador Debian:** O Debian oferece 2 instaladores: Graphical Install (com mouse) e Install (modo texto). Ambos fazem a mesma coisa. O modo texto é mais leve.",
      "**Passo 5 — Configuração:** Idioma → teclado → hostname → domínio → senha do root → criar usuário → fuso horário → particionamento. O particionamento automático usa ext4. Para avançado: /boot (512MB, ext4), / (raiz, ext4), /home (ext4) e swap.",
      "**Passo 6 — Particionamento:** Esquema recomendado: /boot/efi (512MB, FAT32, para UEFI), /boot (512MB, ext4), / (pelo menos 15GB, ext4), /home (restante do disco, ext4), swap (igual à RAM para hibernação ou 2-4GB).",
      "**Passo 7 — Seleção de software:** O instalador pergunta quais componentes instalar. Escolha o ambiente gráfico (GNOME, KDE, XFCE, etc.), utilitários padrão do sistema e servidor SSH (se quiser acesso remoto). O tasksel gerencia essas seleções.",
      "**Passo 8 — GRUB e Finalização:** O instalador configura o GRUB (bootloader). Após concluir, remova o pendrive e reinicie. O Debian está pronto!",
      "**Pós-instalação essencial:** Atualize o sistema com 'sudo apt update && sudo apt upgrade'. Habilite repositórios contrib e non-free se precisar de drivers proprietários. Instale firmware: 'sudo apt install firmware-linux-nonfree'.",
    ],
    commands: [
      {
        command: "sha256sum debian-12.5.0-amd64-netinst.iso",
        description: "Verifica o checksum SHA256 do arquivo ISO baixado (compare com o site oficial)",
        example: "sha256sum debian-12.5.0-amd64-netinst.iso",
      },
      {
        command: "sudo dd if=debian.iso of=/dev/sdX bs=4M status=progress",
        description: "Grava a ISO no pendrive via terminal (substitua /dev/sdX pelo seu pendrive — CUIDADO!)",
        example: "sudo dd if=debian-12.5.0-amd64-netinst.iso of=/dev/sdb bs=4M status=progress",
      },
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco (discos, partições, pendrives) para identificar o pendrive",
        example: "lsblk",
        output: "sda    8:0  0  500G  0 disk\n├─sda1 8:1  0  512M  0 part /boot/efi\n├─sda2 8:2  0  512M  0 part /boot\n└─sda3 8:3  0  499G  0 part /\nsdb    8:16 1   16G  0 disk  ← pendrive",
      },
      {
        command: "fdisk -l",
        description: "Lista partições detalhadas de todos os discos",
        example: "sudo fdisk -l",
      },
      {
        command: "sudo apt update && sudo apt upgrade -y",
        description: "Primeira coisa a fazer após instalar: atualiza a lista de pacotes e todos os pacotes do sistema",
        example: "sudo apt update && sudo apt upgrade -y",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é a diferença entre a ISO netinst e a live do Debian?", answer: "Netinst (~600MB) baixa pacotes pela internet durante instalação. Live (~3GB) permite testar sem instalar." },
      { id: 2, question: "Quais são os 2 tipos de instalador do Debian?", answer: "Graphical Install (com mouse) e Install (modo texto)" },
      { id: 3, question: "Qual filesystem é usado por padrão no Debian?", answer: "ext4" },
      { id: 4, question: "Qual comando lista os discos e partições do sistema?", answer: "lsblk" },
      { id: 5, question: "Qual deve ser o primeiro comando após instalar o Debian?", answer: "sudo apt update && sudo apt upgrade -y" },
    ],
  },
  {
    id: "gnome",
    title: "Ambientes Gráficos no Debian",
    icon: "🖥️",
    category: "Instalação e Ambiente",
    description: "GNOME, KDE, XFCE e outros ambientes gráficos disponíveis no Debian",
    content: [
      "O Debian suporta vários ambientes gráficos. O padrão na instalação é o GNOME, mas você pode escolher KDE Plasma, XFCE, LXQt, MATE, Cinnamon ou LXDE durante a instalação ou instalar depois.",
      "O **GNOME** é o ambiente padrão do Debian. No Debian 12, usa Wayland por padrão (substituto do X11/Xorg). Se algum aplicativo não funcionar em Wayland, escolha 'GNOME on Xorg' na tela de login.",
      "**Atalhos essenciais do GNOME:** Super (tecla Windows) = abre Activities/visão geral. Super+A = abre a grade de aplicativos. Alt+Tab = alterna entre janelas. Super+setas = organiza janelas. Ctrl+Alt+T = abre o terminal.",
      "**Nautilus (Files):** Gerenciador de arquivos gráfico. Suporta abas, favoritos, acesso a servidores remotos (sftp://), lixeira e busca integrada.",
      "**GNOME Software:** Loja de aplicativos para instalar programas graficamente. Suporta pacotes DEB (APT) e Flatpak.",
      "**XFCE** — Ambiente leve, ideal para computadores com pouca RAM (funciona bem com 512MB). Instale: 'sudo apt install task-xfce-desktop'.",
      "**KDE Plasma** — Ambiente completo e personalizável. Mais pesado que XFCE, mas mais leve que GNOME. Instale: 'sudo apt install task-kde-desktop'.",
      "**LXQt** — Ultra-leve, ideal para hardware antigo. Instale: 'sudo apt install task-lxqt-desktop'.",
      "**Alternando entre ambientes:** Na tela de login (GDM/SDDM/LightDM), clique no ícone de engrenagem para escolher qual ambiente usar.",
    ],
    commands: [
      {
        command: "gnome-shell --version",
        description: "Mostra a versão do GNOME Shell instalada",
        example: "gnome-shell --version",
        output: "GNOME Shell 43.9",
      },
      {
        command: "echo $XDG_SESSION_TYPE",
        description: "Verifica se está usando Wayland ou X11",
        example: "echo $XDG_SESSION_TYPE",
        output: "wayland",
      },
      {
        command: "sudo apt install gnome-tweaks",
        description: "Instala o GNOME Tweaks para configurações avançadas",
        example: "sudo apt install gnome-tweaks",
      },
      {
        command: "sudo tasksel",
        description: "Ferramenta para instalar/remover ambientes gráficos e grupos de pacotes",
        example: "sudo tasksel",
      },
      {
        command: "sudo apt install task-xfce-desktop",
        description: "Instala o ambiente XFCE completo",
        example: "sudo apt install task-xfce-desktop",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é o ambiente gráfico padrão do Debian?", answer: "GNOME" },
      { id: 2, question: "Qual protocolo de exibição o GNOME usa por padrão no Debian 12?", answer: "Wayland" },
      { id: 3, question: "Como verificar se você está usando Wayland ou X11?", answer: "echo $XDG_SESSION_TYPE" },
      { id: 4, question: "Qual ambiente gráfico é recomendado para hardware com pouca RAM?", answer: "XFCE ou LXQt" },
      { id: 5, question: "Qual ferramenta permite instalar ambientes gráficos no Debian?", answer: "tasksel (sudo tasksel)" },
    ],
  },
  {
    id: "terminal-basico",
    title: "Primeiros Passos no Terminal",
    icon: "⌨️",
    category: "Instalação e Ambiente",
    description: "O terminal, o shell Bash e os comandos mais fundamentais",
    content: [
      "O terminal (emulador de terminal) é o aplicativo gráfico que dá acesso ao shell. No Debian com GNOME, o terminal padrão é o GNOME Terminal. Abra com Ctrl+Alt+T ou buscando 'Terminal' no menu.",
      "O shell é o interpretador de comandos — o programa que lê o que você digita e executa. O shell padrão do Debian é o Bash (Bourne Again Shell). Outros shells populares: Zsh, Fish.",
      "**Entendendo o prompt:** Quando você abre o terminal, aparece algo como: estudante@debian:~$ — Isso significa: 'estudante' é o seu nome de usuário, 'debian' é o nome do computador (hostname), '~' é o diretório onde você está (~ = pasta home) e '$' indica que você é um usuário comum. Se aparecer '#' em vez de '$', você está como root (administrador).",
      "**Root vs Usuário Comum:** O root é o superusuário — tem poder TOTAL sobre o sistema (pode apagar tudo, inclusive o próprio sistema!). O usuário comum tem restrições que o protegem de fazer besteira. Nunca use o root para tarefas do dia a dia. Use 'sudo' antes de comandos que precisam de permissão especial.",
      "**CUIDADO com o root!** No Debian, durante a instalação você define uma senha para o root. Se você definiu a senha do root, o sudo pode NÃO estar configurado por padrão! Para configurar: 'su -' (vire root), depois 'apt install sudo' e 'usermod -aG sudo seu_usuario'. Se você deixou a senha do root em branco na instalação, o sudo já vem configurado.",
      "Conceitos fundamentais: comandos seguem o formato 'comando [opções] [argumentos]'. Opções curtas usam um traço (-l), opções longas usam dois (--list). Argumentos são os alvos do comando (arquivos, diretórios).",
      "Dica: Use Tab para autocompletar comandos e caminhos. Seta ↑ e ↓ navegam pelo histórico. Ctrl+R faz busca reversa no histórico. Ctrl+C cancela o comando atual. Ctrl+L limpa a tela.",
    ],
    commands: [
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
        output: "debian-workstation",
      },
      {
        command: "date",
        description: "Exibe a data e hora atual do sistema",
        example: "date",
        output: "Seg Fev 10 14:30:25 -03 2026",
      },
      {
        command: "uptime",
        description: "Mostra há quanto tempo o sistema está ligado, número de usuários e carga média",
        example: "uptime",
        output: " 14:30:25 up 2:15, 1 user, load average: 0.52, 0.48, 0.39",
      },
      {
        command: "echo",
        description: "Imprime texto ou variáveis no terminal",
        example: "echo 'Olá, Debian!'\necho $HOME\necho $SHELL",
        output: "Olá, Debian!",
      },
      {
        command: "clear",
        description: "Limpa a tela do terminal (atalho: Ctrl+L)",
        example: "clear",
      },
      {
        command: "exit",
        description: "Fecha a sessão do terminal",
        example: "exit",
      },
      {
        command: "man",
        description: "Abre o manual completo de qualquer comando. Use q para sair.",
        example: "man ls\nman chmod",
      },
      {
        command: "which / type",
        description: "Mostra onde um comando está localizado no sistema",
        example: "which bash\ntype ls",
        output: "/usr/bin/bash",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é o shell padrão do Debian?", answer: "Bash (Bourne Again Shell)" },
      { id: 2, question: "O que o símbolo '$' no prompt indica?", answer: "Que o usuário é um usuário normal (não root)" },
      { id: 3, question: "Qual atalho autocompleta comandos e caminhos no terminal?", answer: "Tab" },
      { id: 4, question: "Como cancelar um comando em execução?", answer: "Ctrl+C" },
      { id: 5, question: "Qual comando abre o manual de um comando?", answer: "man" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 3 — COMANDOS ESSENCIAIS
  // ═══════════════════════════════════════════════════════
  {
    id: "navegacao",
    title: "Navegação no Sistema de Arquivos",
    icon: "📂",
    category: "Comandos Essenciais",
    description: "Estrutura de diretórios do Linux e comandos para navegar",
    content: [
      "No Linux, tudo é organizado em uma árvore de diretórios que começa na raiz '/'. Diferente do Windows, não existem letras de unidade (C:, D:). Tudo — incluindo discos externos, pendrives e partições — é montado dentro de '/'. Para ir até a raiz, digite: cd /",
      "**A árvore de diretórios raiz (cd /) — DECORE ISSO:** Quando você digita 'cd /' e depois 'ls', verá todos os diretórios principais do sistema. Cada um tem uma função específica.",
      "**/ (raiz)** — O diretório raiz. Tudo no Linux está dentro dele.",
      "**/home** — Pasta dos usuários. Cada usuário tem uma pasta aqui: /home/estudante, /home/joao, etc. Quando você abre o terminal, começa em /home/seu_usuario (representado por ~).",
      "**Como navegar na /home:** Para ir à sua home: 'cd ~' ou 'cd /home/seu_usuario'. Para ver as pastas de todos os usuários: 'ls /home'.",
      "**/root** — Pasta home do superusuário root (NÃO é a raiz /). Fica em /root e só o root acessa.",
      "**/etc** — Configurações do sistema. Aqui ficam TODOS os arquivos de configuração: /etc/fstab (montagens), /etc/hostname (nome do PC), /etc/passwd (usuários), /etc/shadow (senhas), /etc/resolv.conf (DNS), /etc/apt/ (repositórios APT).",
      "**/var** — Dados variáveis. Logs do sistema (/var/log), cache de pacotes (/var/cache/apt), spool de emails e impressão, bancos de dados.",
      "**/tmp** — Arquivos temporários. Qualquer usuário pode escrever aqui. É limpo a cada boot.",
      "**/usr** — Programas e bibliotecas do sistema. /usr/bin (programas de todos os usuários), /usr/sbin (programas administrativos), /usr/lib (bibliotecas), /usr/share (dados compartilhados).",
      "**/bin** — Comandos essenciais do sistema (ls, cp, mv, rm, cat, etc.). No Debian moderno, /bin é um link simbólico para /usr/bin.",
      "**/sbin** — Comandos administrativos (fdisk, mkfs, iptables). No Debian moderno, /sbin é um link para /usr/sbin.",
      "**/boot** — Arquivos de inicialização: kernel, initramfs e configuração do GRUB (bootloader).",
      "**/dev** — Dispositivos de hardware representados como arquivos. /dev/sda = primeiro disco, /dev/sda1 = primeira partição, /dev/null = buraco negro.",
      "**/proc** — Sistema de arquivos virtual com informações do kernel e processos em tempo real.",
      "**/sys** — Similar ao /proc, mas para dispositivos de hardware e módulos do kernel.",
      "**/mnt e /media** — Pontos de montagem. /media é usado para mídias removíveis montadas automaticamente (pendrives, CDs). /mnt é usado para montagens manuais temporárias.",
      "**/opt** — Programas de terceiros que não seguem o padrão do sistema.",
      "**/srv** — Dados de serviços do sistema (sites web, FTP).",
      "O diretório home do seu usuário é representado por '~' (til). Caminhos absolutos começam com / (ex: /home/estudante/docs). Caminhos relativos começam do diretório atual (ex: ./docs ou ../outro).",
      "O '.' representa o diretório atual. O '..' representa o diretório pai (um nível acima). Arquivos que começam com '.' são ocultos. Para ver ocultos: ls -a.",
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
          { flag: "-t", description: "Ordena por data de modificação (mais recente primeiro)" },
          { flag: "-S", description: "Ordena por tamanho (maior primeiro)" },
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
        description: "Exibe a estrutura de diretórios em forma de árvore visual (instale: sudo apt install tree)",
        example: "tree -L 2",
        output: ".\n├── Desktop\n├── Documents\n│   ├── projeto1\n│   └── notas.txt\n└── Downloads",
        flags: [
          { flag: "-L N", description: "Limita a profundidade a N níveis" },
          { flag: "-d", description: "Mostra apenas diretórios" },
        ],
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
          { flag: "-mtime -7", description: "Modificados nos últimos 7 dias" },
          { flag: "-exec", description: "Executa um comando em cada resultado" },
        ],
      },
      {
        command: "locate",
        description: "Busca rápida usando banco de dados indexado (instale: sudo apt install mlocate && sudo updatedb)",
        example: "locate firefox",
      },
    ],
    exercises: [
      { id: 1, question: "Como listar todos os arquivos (incluindo ocultos) com detalhes em tamanhos legíveis?", answer: "ls -lah" },
      { id: 2, question: "Qual comando leva você de volta para sua pasta home?", answer: "cd ~", hint: "Use cd com um caractere especial" },
      { id: 3, question: "Como encontrar todos os arquivos .pdf dentro de /home?", answer: "find /home -name '*.pdf'" },
      { id: 4, question: "Qual comando mostra o diretório atual?", answer: "pwd" },
      { id: 5, question: "O que representa o '..' em um caminho?", answer: "O diretório pai (um nível acima)" },
      { id: 6, question: "Qual diretório armazena as configurações do sistema?", answer: "/etc" },
    ],
  },
  {
    id: "arquivos",
    title: "Manipulação de Arquivos",
    icon: "📄",
    category: "Comandos Essenciais",
    description: "Crie, copie, mova, renomeie e remova arquivos e diretórios",
    content: [
      "No Linux, manipular arquivos pelo terminal é extremamente eficiente. Você pode criar, copiar, mover, renomear e remover arquivos e diretórios com poucos comandos.",
      "ATENÇÃO: O Linux não tem lixeira no terminal! Quando você remove um arquivo com 'rm', ele é apagado permanentemente. Sempre tenha cuidado, especialmente com 'rm -rf'.",
      "**Removendo múltiplos arquivos e pastas com rm:** Você pode apagar vários itens de uma vez: 'rm arquivo1.txt arquivo2.txt'. Para apagar todos os .log: 'rm *.log'. Para apagar tudo dentro de uma pasta: 'rm -rf pasta/*'. CUIDADO: 'rm -rf /' apaga TODO o sistema — NUNCA rode isso!",
      "**Cenários práticos:** Para limpar Downloads: 'rm ~/Downloads/*.zip ~/Downloads/*.tar.gz'. Para apagar interativamente (perguntando um por um): 'rm -ri pasta/'. Dica de segurança: sempre use 'ls' antes de 'rm' para ver o que será apagado.",
      "Dica: Use o comando 'man' seguido do nome de qualquer comando para ver seu manual completo.",
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
          { flag: "-a", description: "Modo archive — preserva permissões, dono, timestamps" },
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
        description: "Remove (apaga permanentemente) arquivos e diretórios. Sem lixeira!",
        example: "rm arquivo.txt\nrm -rf pasta_inteira/\nrm -ri pasta/",
        flags: [
          { flag: "-r", description: "Remove diretórios recursivamente (obrigatório para pastas)" },
          { flag: "-f", description: "Força a remoção sem pedir confirmação" },
          { flag: "-i", description: "Pede confirmação para CADA arquivo (mais seguro)" },
          { flag: "-rf", description: "⚠️ PERIGOSO: Remove tudo recursivamente sem perguntar" },
          { flag: "-v", description: "Modo verboso — mostra o que está sendo apagado" },
        ],
      },
      {
        command: "cat",
        description: "Exibe o conteúdo de um arquivo no terminal",
        example: "cat /etc/hostname",
        output: "debian-workstation",
      },
      {
        command: "less / more",
        description: "Exibe o conteúdo de arquivos grandes com paginação",
        example: "less /var/log/syslog",
      },
      {
        command: "head / tail",
        description: "Exibe as primeiras (head) ou últimas (tail) linhas de um arquivo",
        example: "head -n 20 arquivo.log\ntail -f /var/log/syslog",
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
      {
        command: "diff",
        description: "Compara dois arquivos e mostra as diferenças linha a linha",
        example: "diff arquivo1.txt arquivo2.txt",
      },
    ],
    exercises: [
      { id: 1, question: "Como criar um diretório com subdiretórios que ainda não existem?", answer: "mkdir -p pai/filho/neto" },
      { id: 2, question: "Como copiar uma pasta inteira para /tmp preservando permissões?", answer: "cp -a pasta/ /tmp/" },
      { id: 3, question: "Como acompanhar um log em tempo real?", answer: "tail -f /var/log/syslog" },
      { id: 4, question: "Qual a diferença entre 'mv' e 'cp'?", answer: "mv move (ou renomeia) — o original some. cp copia — o original permanece." },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 4 — PERMISSÕES E USUÁRIOS
  // ═══════════════════════════════════════════════════════
  {
    id: "permissoes",
    title: "Permissões e Propriedade",
    icon: "🔒",
    category: "Permissões e Usuários",
    description: "Entenda e configure as permissões de arquivos e diretórios no Linux",
    content: [
      "Todo arquivo/diretório no Linux tem 3 tipos de permissão: leitura (r=4), escrita (w=2) e execução (x=1). Essas permissões se aplicam a 3 categorias: dono (u), grupo (g) e outros (o).",
      "O formato é: -rwxrwxrwx. O primeiro caractere indica o tipo (- arquivo, d diretório, l link). Os 3 seguintes são do dono, os 3 do grupo e os 3 dos outros.",
      "Para calcular permissões numéricas: r=4, w=2, x=1. Somando: 7=rwx, 6=rw-, 5=r-x, 4=r--, 0=---. Exemplo: 755 = dono (rwx), grupo (r-x), outros (r-x).",
      "chmod altera permissões. chown altera dono e grupo. chgrp altera apenas o grupo.",
      "Permissões especiais: SUID (4000) — executa com permissão do dono. SGID (2000) — executa com permissão do grupo. Sticky Bit (1000) — só o dono pode apagar (usado em /tmp).",
    ],
    commands: [
      {
        command: "chmod",
        description: "Altera permissões de arquivos e diretórios",
        example: "chmod 755 script.sh\nchmod u+x arquivo\nchmod -R 644 pasta/",
        flags: [
          { flag: "755", description: "Dono: rwx, Grupo: r-x, Outros: r-x" },
          { flag: "644", description: "Dono: rw-, Grupo: r--, Outros: r--" },
          { flag: "700", description: "Dono: rwx, Grupo: ---, Outros: ---" },
          { flag: "u+x", description: "Adiciona execução para o dono" },
          { flag: "-R", description: "Aplica recursivamente em pastas" },
        ],
      },
      {
        command: "chown",
        description: "Altera o dono e/ou grupo de arquivos",
        example: "sudo chown estudante:estudante arquivo.txt\nsudo chown -R www-data:www-data /var/www/",
        flags: [
          { flag: "-R", description: "Altera recursivamente" },
          { flag: "user:group", description: "Define dono e grupo simultaneamente" },
        ],
      },
      {
        command: "ls -la",
        description: "Lista arquivos com permissões detalhadas",
        example: "ls -la",
        output: "drwxr-xr-x 2 estudante estudante 4096 Feb 10 14:30 Documents\n-rw-r--r-- 1 estudante estudante  123 Feb 10 14:31 notas.txt",
      },
      {
        command: "umask",
        description: "Define permissões padrão para novos arquivos (subtrai da permissão máxima)",
        example: "umask 022",
      },
    ],
    exercises: [
      { id: 1, question: "O que significa a permissão 755?", answer: "Dono pode tudo (rwx=7), grupo pode ler e executar (r-x=5), outros podem ler e executar (r-x=5)" },
      { id: 2, question: "Como dar permissão de execução a um script?", answer: "chmod +x script.sh (ou chmod 755 script.sh)" },
      { id: 3, question: "Como mudar o dono de um arquivo para 'www-data'?", answer: "sudo chown www-data:www-data arquivo" },
      { id: 4, question: "O que é o Sticky Bit e onde é usado?", answer: "Permissão especial que impede que outros apaguem arquivos que não são seus. Usado no /tmp (chmod 1777)." },
    ],
  },
  {
    id: "usuarios",
    title: "Gestão de Usuários e Grupos",
    icon: "👥",
    category: "Permissões e Usuários",
    description: "Crie, gerencie e remova usuários e grupos no sistema",
    content: [
      "O Linux é multiusuário — vários usuários podem usar o mesmo sistema com permissões diferentes. Cada usuário tem um UID (User ID) único. O root sempre tem UID 0.",
      "Usuários são armazenados em /etc/passwd. Senhas criptografadas ficam em /etc/shadow. Grupos ficam em /etc/group.",
      "No Debian, para um usuário ter permissão de usar 'sudo', ele deve pertencer ao grupo 'sudo' (diferente do Fedora que usa 'wheel').",
      "Tipos de usuários: root (UID 0), usuários de sistema (UID 1-999, para serviços) e usuários normais (UID >= 1000).",
    ],
    commands: [
      {
        command: "sudo adduser",
        description: "Cria um novo usuário interativamente (Debian-way, mais amigável que useradd)",
        example: "sudo adduser joao",
        output: "Adding user 'joao' ...\nNew password: ****\nFull Name []: João Silva\n...\nIs the information correct? [Y/n] Y",
      },
      {
        command: "sudo useradd",
        description: "Cria um novo usuário (forma tradicional, menos interativa)",
        example: "sudo useradd -m -s /bin/bash -G sudo joao",
        flags: [
          { flag: "-m", description: "Cria o diretório home" },
          { flag: "-s /bin/bash", description: "Define o shell padrão" },
          { flag: "-G sudo", description: "Adiciona ao grupo sudo (permissão de administrador)" },
          { flag: "-c 'Nome'", description: "Define o nome completo" },
        ],
      },
      {
        command: "sudo deluser / userdel",
        description: "Remove um usuário do sistema",
        example: "sudo deluser joao\nsudo deluser --remove-home joao",
        flags: [
          { flag: "--remove-home", description: "Remove também o diretório home" },
        ],
      },
      {
        command: "sudo passwd",
        description: "Define ou altera a senha de um usuário",
        example: "sudo passwd joao\npasswd",
      },
      {
        command: "groups / id",
        description: "Mostra os grupos do usuário atual ou de outro usuário",
        example: "groups\nid joao",
        output: "estudante : estudante sudo cdrom floppy audio dip video plugdev netdev",
      },
      {
        command: "sudo usermod -aG sudo usuario",
        description: "Adiciona um usuário ao grupo sudo (permissão de administrador no Debian)",
        example: "sudo usermod -aG sudo joao",
      },
      {
        command: "su - usuario",
        description: "Troca para outro usuário (com ambiente completo)",
        example: "su - joao\nsu -",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é o grupo que dá permissão de administrador no Debian?", answer: "sudo (diferente do Fedora que usa 'wheel')" },
      { id: 2, question: "Qual a diferença entre adduser e useradd?", answer: "adduser é interativo e mais amigável (Debian-way). useradd é tradicional e precisa de flags manuais." },
      { id: 3, question: "Como adicionar o usuário 'joao' ao grupo sudo?", answer: "sudo usermod -aG sudo joao" },
      { id: 4, question: "Onde ficam as senhas criptografadas dos usuários?", answer: "/etc/shadow" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 5 — ADMINISTRAÇÃO DO SISTEMA
  // ═══════════════════════════════════════════════════════
  {
    id: "gerenciamento-pacotes",
    title: "Gerenciamento de Pacotes com APT",
    icon: "📦",
    category: "Administração do Sistema",
    description: "Instale, remova e atualize programas usando APT e dpkg",
    content: [
      "O Debian usa o formato de pacote DEB (.deb) e o APT (Advanced Package Tool) como gerenciador de pacotes. O APT resolve dependências automaticamente — se um programa precisa de bibliotecas, o APT instala tudo junto.",
      "O APT usa repositórios configurados em /etc/apt/sources.list e /etc/apt/sources.list.d/. Os repositórios principais são: main (software livre), contrib (software livre que depende de não-livre), non-free (software proprietário) e non-free-firmware (firmwares proprietários).",
      "Sempre execute 'sudo apt update' antes de instalar ou atualizar pacotes! Esse comando atualiza a lista de pacotes disponíveis nos repositórios. Sem isso, o APT pode não encontrar pacotes novos.",
      "O dpkg é a ferramenta de baixo nível para gerenciar pacotes .deb. O APT usa o dpkg internamente, mas adiciona resolução de dependências e download automático.",
      "**apt vs apt-get:** 'apt' é a interface mais moderna e recomendada (barra de progresso, saída colorida). 'apt-get' é a interface clássica (mais usado em scripts). Ambos fazem a mesma coisa.",
    ],
    commands: [
      {
        command: "sudo apt update",
        description: "Atualiza a lista de pacotes disponíveis (SEMPRE faça isso antes de instalar!)",
        example: "sudo apt update",
      },
      {
        command: "sudo apt upgrade -y",
        description: "Atualiza todos os pacotes instalados para as versões mais recentes",
        example: "sudo apt upgrade -y",
      },
      {
        command: "sudo apt full-upgrade",
        description: "Atualização completa — pode instalar/remover pacotes para resolver dependências",
        example: "sudo apt full-upgrade",
      },
      {
        command: "sudo apt install",
        description: "Instala um ou mais pacotes",
        example: "sudo apt install vim htop curl wget\nsudo apt install -y firefox-esr",
        flags: [
          { flag: "-y", description: "Responde 'sim' automaticamente (sem confirmação)" },
        ],
      },
      {
        command: "sudo apt remove",
        description: "Remove um pacote do sistema (mantém as configurações)",
        example: "sudo apt remove pacote_antigo",
      },
      {
        command: "sudo apt purge",
        description: "Remove um pacote E suas configurações (remoção completa)",
        example: "sudo apt purge pacote_antigo",
      },
      {
        command: "apt search",
        description: "Busca pacotes por nome ou descrição nos repositórios",
        example: "apt search editor",
      },
      {
        command: "apt show",
        description: "Exibe informações detalhadas sobre um pacote (versão, tamanho, descrição)",
        example: "apt show firefox-esr",
      },
      {
        command: "dpkg -l",
        description: "Lista todos os pacotes atualmente instalados no sistema",
        example: "dpkg -l | grep python",
      },
      {
        command: "dpkg -i pacote.deb",
        description: "Instala um pacote .deb baixado manualmente (pode ter dependências faltando!)",
        example: "sudo dpkg -i google-chrome-stable.deb\nsudo apt install -f",
      },
      {
        command: "apt-file search",
        description: "Descobre qual pacote fornece um arquivo específico (instale: sudo apt install apt-file && sudo apt-file update)",
        example: "apt-file search /usr/bin/wget",
      },
      {
        command: "sudo apt autoremove",
        description: "Remove pacotes órfãos (dependências que não são mais necessárias)",
        example: "sudo apt autoremove",
      },
      {
        command: "sudo apt clean",
        description: "Limpa o cache do APT (remove .deb baixados em /var/cache/apt/archives/)",
        example: "sudo apt clean",
      },
    ],
    exercises: [
      { id: 1, question: "Como instalar vim e htop juntos?", answer: "sudo apt install vim htop" },
      { id: 2, question: "Qual a diferença entre 'apt remove' e 'apt purge'?", answer: "remove mantém as configurações do pacote. purge remove tudo, incluindo configurações." },
      { id: 3, question: "Qual comando remove dependências que não são mais necessárias?", answer: "sudo apt autoremove" },
      { id: 4, question: "Por que devemos rodar 'apt update' antes de instalar?", answer: "Para atualizar a lista de pacotes disponíveis. Sem isso, o APT pode não encontrar pacotes novos." },
      { id: 5, question: "Como instalar um pacote .deb baixado manualmente?", answer: "sudo dpkg -i pacote.deb && sudo apt install -f (para resolver dependências)" },
    ],
  },
  {
    id: "flatpak-backports",
    title: "Flatpak e Backports",
    icon: "🏪",
    category: "Administração do Sistema",
    description: "Instale aplicativos Flatpak e use Backports para pacotes mais recentes",
    content: [
      "O Flatpak é um sistema de distribuição de aplicativos que roda programas em sandbox (isolados do sistema). Os apps Flatpak funcionam em qualquer distribuição Linux e são atualizados independentemente.",
      "O Flathub (https://flathub.org) é o maior repositório de Flatpaks. Lá você encontra Spotify, Discord, Steam, OBS Studio, VS Code, GIMP, Blender e milhares de outros.",
      "**Backports** são pacotes mais recentes compilados para a versão estável do Debian. Se você precisa de uma versão mais nova de um programa sem mudar para Testing, use backports. Adicione ao sources.list: 'deb http://deb.debian.org/debian bookworm-backports main contrib non-free'.",
      "**Habilitando repositórios non-free:** No Debian 12+, edite /etc/apt/sources.list e adicione 'contrib non-free non-free-firmware' às linhas existentes. Isso permite instalar drivers proprietários, codecs e firmwares.",
    ],
    commands: [
      {
        command: "sudo apt install flatpak gnome-software-plugin-flatpak",
        description: "Instala o Flatpak e integração com GNOME Software",
        example: "sudo apt install flatpak gnome-software-plugin-flatpak",
      },
      {
        command: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo",
        description: "Adiciona o repositório Flathub (reinicie após adicionar)",
        example: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo",
      },
      {
        command: "flatpak install flathub",
        description: "Instala um aplicativo Flatpak do Flathub",
        example: "flatpak install flathub com.spotify.Client\nflatpak install flathub com.discordapp.Discord",
      },
      {
        command: "flatpak list",
        description: "Lista todos os Flatpaks instalados",
        example: "flatpak list",
      },
      {
        command: "flatpak update",
        description: "Atualiza todos os Flatpaks instalados",
        example: "flatpak update",
      },
      {
        command: "flatpak uninstall",
        description: "Remove um Flatpak instalado",
        example: "flatpak uninstall com.spotify.Client",
      },
      {
        command: "sudo apt install -t bookworm-backports pacote",
        description: "Instala um pacote da versão backports (mais recente que o stable)",
        example: "sudo apt install -t bookworm-backports linux-image-amd64",
      },
    ],
    exercises: [
      { id: 1, question: "Como instalar o Flatpak no Debian?", answer: "sudo apt install flatpak gnome-software-plugin-flatpak" },
      { id: 2, question: "Como listar todos os Flatpaks instalados?", answer: "flatpak list" },
      { id: 3, question: "Para que servem os Backports no Debian?", answer: "Permitem instalar versões mais recentes de pacotes na versão estável, sem precisar mudar para Testing." },
      { id: 4, question: "Como atualizar todos os Flatpaks?", answer: "flatpak update" },
    ],
  },
  {
    id: "processos",
    title: "Processos e Monitoramento",
    icon: "⚙️",
    category: "Administração do Sistema",
    description: "Gerencie processos, monitore recursos do sistema (CPU, RAM, disco)",
    content: [
      "Todo programa em execução no Linux é um processo com um PID (Process ID) único. Processos podem rodar em foreground (primeiro plano) ou background (segundo plano).",
      "Use '&' no final do comando para rodar em background. Ctrl+Z pausa um processo em foreground. 'bg' retoma em background e 'fg' traz para foreground.",
      "Sinais são mensagens enviadas a processos. SIGTERM (15) pede encerramento educado. SIGKILL (9) força o encerramento. SIGHUP (1) reinicia o processo.",
      "**Quando um programa trava:** 1) Descubra o PID: 'pgrep firefox' ou 'ps aux | grep firefox'. 2) Tente encerrar: 'kill PID'. 3) Force: 'kill -9 PID'. 4) Por nome: 'killall firefox' ou 'pkill firefox'.",
      "**Monitoramento de recursos:** Use 'htop' (instale: sudo apt install htop) para monitor visual. Use 'free -h' para RAM. Use 'df -h' para disco. Use 'du -sh pasta/' para tamanho de pasta.",
      "**Desligando e reiniciando:** 'sudo shutdown -h now' (desliga), 'sudo reboot' (reinicia), 'sudo shutdown -h +10' (desliga em 10 min).",
      "**Atualizando o sistema:** 'sudo apt update && sudo apt upgrade -y'. SEMPRE atualize após instalar!",
      "**TTY — Ctrl+Alt+F3:** Terminal virtual puro sem interface gráfica. Para voltar: Ctrl+Alt+F1 ou F7.",
    ],
    commands: [
      {
        command: "ps aux",
        description: "Lista todos os processos de todos os usuários com detalhes (PID, CPU%, MEM%, comando)",
        example: "ps aux\nps aux | grep firefox",
        output: "USER  PID %CPU %MEM  VSZ  RSS TTY STAT START TIME COMMAND\nroot    1  0.0  0.1 2345 1234 ?   Ss   10:00 0:01 /usr/lib/systemd/systemd\naluno 5678  5.2  3.1 9999 8888 ?   Sl   10:05 1:23 /usr/lib/firefox-esr/firefox-esr",
        flags: [
          { flag: "a", description: "Todos os usuários" },
          { flag: "u", description: "Formato detalhado com dono, CPU%, MEM%" },
          { flag: "x", description: "Inclui processos sem terminal" },
        ],
      },
      {
        command: "top / htop",
        description: "Monitor de processos em tempo real. htop é mais visual (instale: sudo apt install htop)",
        example: "htop",
      },
      {
        command: "kill / killall / pkill",
        description: "kill envia sinal por PID; killall e pkill enviam por nome do processo",
        example: "kill 1234\nkill -9 1234\nkillall firefox-esr\npkill -9 firefox",
        flags: [
          { flag: "-9", description: "SIGKILL — força encerramento imediato (último recurso!)" },
          { flag: "-15", description: "SIGTERM — encerramento educado (padrão)" },
        ],
      },
      {
        command: "pgrep / pidof",
        description: "Descobre o PID de um processo pelo nome",
        example: "pgrep firefox\npidof firefox-esr",
      },
      {
        command: "pstree",
        description: "Mostra a árvore de processos — quem gerou quem",
        example: "pstree\npstree -p",
      },
      {
        command: "bg / fg / jobs",
        description: "bg retoma em background; fg traz para foreground; jobs lista processos do shell",
        example: "bg %1\nfg %1\njobs",
      },
      {
        command: "df -h",
        description: "Mostra o uso de espaço em disco de cada partição montada",
        example: "df -h",
        output: "Filesystem  Size  Used Avail Use% Mounted on\n/dev/sda1   50G   22G   26G  46% /",
      },
      {
        command: "du -sh",
        description: "Mostra o tamanho de um diretório ou arquivo específico",
        example: "du -sh ~/Documents\ndu -sh /var/log",
      },
      {
        command: "free -h",
        description: "Exibe uso de memória RAM e swap",
        example: "free -h",
        output: "              total   used   free  shared  buff/cache  available\nMem:          16Gi   4.2Gi  8.1Gi   512Mi      3.7Gi     11Gi\nSwap:         8.0Gi     0B   8.0Gi",
      },
      {
        command: "lscpu",
        description: "Mostra informações detalhadas do processador",
        example: "lscpu",
      },
      {
        command: "shutdown / reboot / poweroff",
        description: "Desliga, reinicia ou agenda o desligamento do computador",
        example: "sudo shutdown -h now\nsudo reboot\nsudo shutdown -h +10\nsudo shutdown -c",
      },
      {
        command: "sudo apt update && sudo apt upgrade -y",
        description: "ESSENCIAL: Atualiza todos os pacotes do sistema",
        example: "sudo apt update && sudo apt upgrade -y",
      },
      {
        command: "neofetch",
        description: "Exibe informações do sistema de forma visual (instale: sudo apt install neofetch)",
        example: "neofetch",
      },
    ],
    exercises: [
      { id: 1, question: "Como listar todos os processos do sistema?", answer: "ps aux" },
      { id: 2, question: "Como forçar o encerramento de um processo com PID 5678?", answer: "kill -9 5678" },
      { id: 3, question: "Qual comando mostra o uso de disco?", answer: "df -h" },
      { id: 4, question: "Como verificar o uso de memória RAM?", answer: "free -h" },
      { id: 5, question: "Como encontrar o PID de um processo pelo nome?", answer: "pgrep nome_do_processo" },
      { id: 6, question: "Como desligar o computador pelo terminal?", answer: "sudo shutdown -h now (ou sudo poweroff)" },
      { id: 7, question: "Como acessar um terminal puro (TTY)?", answer: "Ctrl+Alt+F3 (para voltar: Ctrl+Alt+F1 ou F7)" },
      { id: 8, question: "Como atualizar o sistema no Debian?", answer: "sudo apt update && sudo apt upgrade -y" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 5 — REDE E SEGURANÇA
  // ═══════════════════════════════════════════════════════
  {
    id: "rede",
    title: "Rede e Conectividade",
    icon: "🌐",
    category: "Rede e Segurança",
    description: "Configure redes, diagnostique problemas e gerencie conectividade",
    content: [
      "O Debian pode usar o NetworkManager (desktop) ou configuração manual via /etc/network/interfaces (servidores). No desktop com GNOME, o NetworkManager gerencia tudo.",
      "Conceitos importantes: IP (endereço do dispositivo na rede), máscara de sub-rede, gateway (roteador), DNS (traduz nomes para IPs).",
      "O arquivo /etc/resolv.conf contém os servidores DNS. O arquivo /etc/hosts permite mapear nomes para IPs manualmente. O /etc/network/interfaces é o arquivo tradicional de configuração de rede no Debian.",
    ],
    commands: [
      {
        command: "ip addr",
        description: "Exibe as interfaces de rede e seus endereços IP",
        example: "ip addr show",
      },
      {
        command: "ip route",
        description: "Mostra a tabela de rotas (gateway padrão)",
        example: "ip route show",
        output: "default via 192.168.1.1 dev eth0",
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
        command: "nmcli",
        description: "Gerencia conexões via terminal (NetworkManager)",
        example: "nmcli device status\nnmcli con show\nnmcli device wifi list\nnmcli device wifi connect 'MinhaRede' password 'senha123'",
      },
      {
        command: "ss -tulnp",
        description: "Mostra portas abertas e serviços escutando",
        example: "ss -tulnp",
      },
      {
        command: "dig / nslookup",
        description: "Consulta DNS — resolve nomes de domínio para IPs",
        example: "dig google.com\nnslookup google.com",
      },
      {
        command: "traceroute",
        description: "Mostra a rota que os pacotes fazem até o destino (instale: sudo apt install traceroute)",
        example: "traceroute google.com",
      },
      {
        command: "cat /etc/network/interfaces",
        description: "Arquivo de configuração de rede tradicional do Debian (servidores)",
        example: "cat /etc/network/interfaces",
        output: "auto lo\niface lo inet loopback\n\nauto eth0\niface eth0 inet dhcp",
      },
    ],
    exercises: [
      { id: 1, question: "Como ver o IP do seu computador?", answer: "ip addr show" },
      { id: 2, question: "Como testar se há conectividade com a internet?", answer: "ping -c 4 google.com" },
      { id: 3, question: "Qual comando lista as portas abertas?", answer: "ss -tulnp" },
      { id: 4, question: "Qual arquivo configura a rede no Debian servidor?", answer: "/etc/network/interfaces" },
      { id: 5, question: "Como conectar a uma rede Wi-Fi pelo terminal?", answer: "nmcli device wifi connect 'NomeDaRede' password 'senha'" },
    ],
  },
  {
    id: "firewall",
    title: "Firewall com UFW e iptables",
    icon: "🛡️",
    category: "Rede e Segurança",
    description: "Proteja seu sistema controlando o tráfego de rede com UFW e iptables",
    content: [
      "O firewall controla quais conexões de rede são permitidas ou bloqueadas. No Debian, as ferramentas principais são o UFW (Uncomplicated Firewall, interface amigável) e o iptables (mais poderoso e complexo).",
      "**UFW** é a forma mais fácil de gerenciar firewall no Debian. É uma interface simplificada para o iptables. Instale: 'sudo apt install ufw'. Habilite: 'sudo ufw enable'.",
      "**iptables** é a ferramenta clássica e poderosa. O nftables é seu sucessor moderno (padrão no Debian 11+). O iptables ainda funciona como camada de compatibilidade.",
      "**AppArmor** é o módulo de segurança obrigatória (MAC) do Debian (similar ao SELinux do Fedora/Red Hat). Ele restringe o que cada programa pode fazer, mesmo que o programa seja executado como root.",
    ],
    commands: [
      {
        command: "sudo ufw enable",
        description: "Habilita o firewall UFW",
        example: "sudo ufw enable",
        output: "Firewall is active and enabled on system startup",
      },
      {
        command: "sudo ufw status verbose",
        description: "Mostra o estado do firewall e todas as regras",
        example: "sudo ufw status verbose",
      },
      {
        command: "sudo ufw allow",
        description: "Permite um serviço ou porta específica",
        example: "sudo ufw allow ssh\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw allow from 192.168.1.0/24",
      },
      {
        command: "sudo ufw deny",
        description: "Bloqueia um serviço ou porta específica",
        example: "sudo ufw deny 23/tcp\nsudo ufw deny from 10.0.0.5",
      },
      {
        command: "sudo ufw delete",
        description: "Remove uma regra do firewall",
        example: "sudo ufw delete allow 80/tcp\nsudo ufw status numbered\nsudo ufw delete 3",
      },
      {
        command: "sudo iptables -L",
        description: "Lista todas as regras do iptables (firewall clássico)",
        example: "sudo iptables -L -n -v",
      },
      {
        command: "sudo aa-status",
        description: "Mostra o estado do AppArmor (módulo de segurança obrigatória do Debian)",
        example: "sudo aa-status",
      },
      {
        command: "sudo aa-enforce / aa-complain",
        description: "Define perfil AppArmor para enforce (bloqueia) ou complain (apenas registra)",
        example: "sudo aa-enforce /etc/apparmor.d/usr.bin.firefox\nsudo aa-complain /etc/apparmor.d/usr.bin.firefox",
      },
    ],
    exercises: [
      { id: 1, question: "Como habilitar o firewall UFW?", answer: "sudo ufw enable" },
      { id: 2, question: "Como liberar SSH no UFW?", answer: "sudo ufw allow ssh (ou sudo ufw allow 22/tcp)" },
      { id: 3, question: "Qual é o módulo de segurança obrigatória do Debian?", answer: "AppArmor (similar ao SELinux do Fedora/Red Hat)" },
      { id: 4, question: "Como ver o estado do firewall e suas regras?", answer: "sudo ufw status verbose" },
      { id: 5, question: "Qual a diferença entre UFW e iptables?", answer: "UFW é uma interface simplificada para o iptables. iptables é mais poderoso mas mais complexo." },
    ],
  },
  {
    id: "systemd",
    title: "Systemd e Serviços",
    icon: "🔧",
    category: "Rede e Segurança",
    description: "Gerencie serviços, targets e logs do sistema com systemd e journalctl",
    content: [
      "O systemd é o sistema de inicialização padrão do Debian (desde o Debian 8 'Jessie'). Ele gerencia a inicialização do sistema, serviços (daemons), targets (alvos de boot), timers e logs.",
      "Serviços são programas que rodam em segundo plano. Exemplos: ssh (acesso remoto), apache2 (servidor web), mariadb (banco de dados), cron (tarefas agendadas).",
      "Targets são agrupamentos de serviços que definem o estado do sistema. multi-user.target = modo texto (sem GUI). graphical.target = modo gráfico. rescue.target = modo de recuperação.",
      "O journalctl é a ferramenta do systemd para ler logs. Substitui a leitura manual de /var/log/syslog.",
    ],
    commands: [
      {
        command: "systemctl status",
        description: "Mostra o estado de um serviço (rodando, parado, erro)",
        example: "systemctl status ssh\nsystemctl status apache2",
      },
      {
        command: "sudo systemctl start / stop / restart",
        description: "Inicia, para ou reinicia um serviço",
        example: "sudo systemctl start ssh\nsudo systemctl stop apache2\nsudo systemctl restart ssh",
      },
      {
        command: "sudo systemctl enable / disable",
        description: "Habilita/desabilita o serviço para iniciar automaticamente no boot",
        example: "sudo systemctl enable ssh\nsudo systemctl disable apache2",
      },
      {
        command: "systemctl list-units --type=service",
        description: "Lista todos os serviços carregados e seus estados",
        example: "systemctl list-units --type=service --state=running",
      },
      {
        command: "systemctl get-default / set-default",
        description: "Mostra/altera o target padrão do boot",
        example: "systemctl get-default\nsudo systemctl set-default multi-user.target\nsudo systemctl set-default graphical.target",
      },
      {
        command: "journalctl",
        description: "Mostra logs do sistema (substitui /var/log/syslog)",
        example: "journalctl -xe\njournalctl -u ssh\njournalctl --since '1 hour ago'",
        flags: [
          { flag: "-xe", description: "Mostra os logs mais recentes com detalhes" },
          { flag: "-u serviço", description: "Filtra logs de um serviço específico" },
          { flag: "-f", description: "Acompanha logs em tempo real" },
          { flag: "--since", description: "Filtra por período de tempo" },
          { flag: "-b", description: "Logs do boot atual" },
        ],
      },
    ],
    exercises: [
      { id: 1, question: "Como verificar se o SSH está rodando?", answer: "systemctl status ssh" },
      { id: 2, question: "Como habilitar um serviço para iniciar no boot?", answer: "sudo systemctl enable nome_do_servico" },
      { id: 3, question: "Como mudar o sistema para iniciar sem interface gráfica?", answer: "sudo systemctl set-default multi-user.target" },
      { id: 4, question: "Como ver logs de um serviço específico?", answer: "journalctl -u nome_do_servico" },
      { id: 5, question: "Qual a diferença entre 'start' e 'enable'?", answer: "start inicia agora. enable configura para iniciar automaticamente no próximo boot." },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 6 — PRODUTIVIDADE E SHELL
  // ═══════════════════════════════════════════════════════
  {
    id: "pipes-redirecionamento",
    title: "Pipes e Redirecionamento",
    icon: "🔀",
    category: "Produtividade e Shell",
    description: "Combine comandos com pipes (|), redirecione saída e use grep, awk, sed",
    content: [
      "Pipes (|) conectam a saída de um comando à entrada de outro. Isso permite criar pipelines poderosos combinando ferramentas simples. Exemplo: ls -la | grep '.txt' | wc -l",
      "Redirecionamento: > envia saída para arquivo (sobrescreve), >> adiciona ao final (append), < lê entrada de arquivo, 2> redireciona erros, &> redireciona tudo.",
      "Filosofia Unix: cada comando faz uma coisa bem feita. Combinados via pipes, resolvem problemas complexos com elegância.",
    ],
    commands: [
      {
        command: "| (pipe)",
        description: "Envia a saída de um comando como entrada do próximo",
        example: "ls -la | grep '.txt'\nps aux | grep firefox\ncat log.txt | sort | uniq -c | sort -rn",
      },
      {
        command: "> e >>",
        description: "> sobrescreve arquivo, >> adiciona ao final",
        example: "echo 'Hello' > arquivo.txt\necho 'World' >> arquivo.txt\nls -la > listagem.txt",
      },
      {
        command: "2> e &>",
        description: "2> redireciona erros (stderr), &> redireciona tudo (stdout + stderr)",
        example: "find / -name '*.conf' 2>/dev/null\ncomando &> log_completo.txt",
      },
      {
        command: "grep",
        description: "Filtra linhas que contêm um padrão (texto ou regex)",
        example: "grep -i 'erro' /var/log/syslog",
        flags: [
          { flag: "-i", description: "Ignora maiúsculas/minúsculas" },
          { flag: "-r", description: "Busca recursivamente em diretórios" },
          { flag: "-n", description: "Mostra o número da linha" },
          { flag: "-c", description: "Conta ocorrências" },
          { flag: "-v", description: "Mostra linhas que NÃO contêm o padrão" },
          { flag: "-E", description: "Usa regex estendida (egrep)" },
        ],
      },
      {
        command: "wc",
        description: "Conta linhas, palavras e caracteres",
        example: "wc -l arquivo.txt",
        flags: [
          { flag: "-l", description: "Conta linhas" },
          { flag: "-w", description: "Conta palavras" },
          { flag: "-c", description: "Conta bytes" },
        ],
      },
      {
        command: "sort",
        description: "Ordena linhas de um arquivo ou stream",
        example: "sort nomes.txt",
        flags: [
          { flag: "-r", description: "Ordena invertido (decrescente)" },
          { flag: "-n", description: "Ordena numericamente" },
          { flag: "-k 2", description: "Ordena pela 2ª coluna" },
        ],
      },
      {
        command: "uniq",
        description: "Remove linhas duplicadas consecutivas (use após sort)",
        example: "sort dados.txt | uniq -c",
      },
      {
        command: "cut",
        description: "Extrai colunas/campos de texto",
        example: "cut -d':' -f1 /etc/passwd",
      },
      {
        command: "awk",
        description: "Linguagem de processamento de texto — extrai e manipula dados por colunas",
        example: "awk '{print $1, $3}' arquivo.txt\ndf -h | awk '{print $1, $5}'",
      },
      {
        command: "sed",
        description: "Editor de stream — substitui texto via regex",
        example: "sed 's/antigo/novo/g' arquivo.txt\nsed -i 's/erro/corrigido/g' arquivo.txt",
      },
      {
        command: "tee",
        description: "Lê da entrada padrão e escreve tanto na tela quanto em arquivo",
        example: "ls -la | tee listagem.txt",
      },
      {
        command: "xargs",
        description: "Constrói e executa comandos a partir da entrada padrão",
        example: "find . -name '*.log' | xargs rm\ncat urls.txt | xargs wget",
      },
    ],
    exercises: [
      { id: 1, question: "Como contar quantos arquivos .txt existem no diretório atual?", answer: "ls *.txt | wc -l" },
      { id: 2, question: "Salve a lista de processos em 'processos.txt'", answer: "ps aux > processos.txt" },
      { id: 3, question: "Busque 'error' (ignorando maiúsculas) recursivamente em /var/log/", answer: "grep -ri 'error' /var/log/" },
      { id: 4, question: "Como listar apenas os nomes de usuários do sistema?", answer: "cut -d':' -f1 /etc/passwd" },
      { id: 5, question: "Substitua todas as ocorrências de 'http' por 'https' em um arquivo", answer: "sed -i 's/http/https/g' arquivo.txt" },
    ],
  },
  {
    id: "atalhos-produtividade",
    title: "Atalhos e Produtividade",
    icon: "⚡",
    category: "Produtividade e Shell",
    description: "History, alias, variáveis de ambiente, compactação e SSH",
    content: [
      "Dominar atalhos e truques do Bash transforma sua eficiência no terminal.",
      "O arquivo ~/.bashrc é executado toda vez que um terminal é aberto. Use-o para definir alias, variáveis e configurações persistentes. Após editar, execute 'source ~/.bashrc'.",
      "Variáveis de ambiente são valores acessíveis por todos os processos. As mais importantes: $HOME, $PATH, $USER, $SHELL.",
    ],
    commands: [
      {
        command: "history",
        description: "Mostra o histórico de comandos. !N repete o comando N. !! repete o último",
        example: "history | tail -20\n!55\n!!",
      },
      {
        command: "alias",
        description: "Cria atalhos para comandos longos (adicione ao ~/.bashrc para persistir)",
        example: "alias ll='ls -lah'\nalias update='sudo apt update && sudo apt upgrade -y'\nalias cls='clear'",
      },
      {
        command: "export",
        description: "Define variáveis de ambiente (adicione ao ~/.bashrc para persistir)",
        example: "export EDITOR=vim\nexport PATH=$PATH:/usr/local/bin",
      },
      {
        command: "env / printenv",
        description: "Lista todas as variáveis de ambiente",
        example: "env\nprintenv HOME",
      },
      {
        command: "source / .",
        description: "Recarrega um arquivo de configuração",
        example: "source ~/.bashrc",
      },
      {
        command: "tar",
        description: "Empacota e desempacota arquivos. Compactação: -z (gzip), -j (bzip2), -J (xz)",
        example: "tar -czf backup.tar.gz pasta/\ntar -xzf backup.tar.gz\ntar -xJf backup.tar.xz\ntar -tf arquivo.tar.gz",
        flags: [
          { flag: "-c", description: "Cria (Create) um novo arquivo tar" },
          { flag: "-x", description: "Extrai (eXtract) um arquivo tar" },
          { flag: "-z", description: "Usa gzip (.tar.gz ou .tgz)" },
          { flag: "-j", description: "Usa bzip2 (.tar.bz2)" },
          { flag: "-J", description: "Usa xz (.tar.xz) — melhor taxa de compactação" },
          { flag: "-f", description: "Especifica o nome do arquivo (SEMPRE por último!)" },
          { flag: "-v", description: "Modo verboso" },
          { flag: "-t", description: "Lista o conteúdo sem extrair" },
        ],
      },
      {
        command: "zip / unzip",
        description: "Compacta e descompacta arquivos .zip (compatível com Windows)",
        example: "zip -r fotos.zip pasta_fotos/\nunzip fotos.zip",
      },
      {
        command: "gzip / gunzip",
        description: "Compacta/descompacta arquivos individuais em .gz",
        example: "gzip arquivo.txt\ngunzip arquivo.txt.gz\ngzip -k arquivo.txt",
      },
      {
        command: "7z (p7zip)",
        description: "Compacta/descompacta .7z (instale: sudo apt install p7zip-full)",
        example: "7z a backup.7z pasta/\n7z x backup.7z",
      },
      {
        command: "ssh",
        description: "Conecta remotamente a outro computador via SSH",
        example: "ssh usuario@192.168.1.100\nssh -p 2222 usuario@servidor.com",
      },
      {
        command: "scp",
        description: "Copia arquivos entre computadores via SSH",
        example: "scp arquivo.txt usuario@servidor:/home/usuario/\nscp usuario@servidor:/tmp/log.txt .",
      },
      {
        command: "rsync",
        description: "Sincroniza arquivos/diretórios (local ou remoto). Só copia o que mudou!",
        example: "rsync -avz pasta/ usuario@servidor:/backup/",
        flags: [
          { flag: "-a", description: "Modo archive (preserva tudo)" },
          { flag: "-v", description: "Verboso" },
          { flag: "-z", description: "Comprime durante transferência" },
          { flag: "--delete", description: "Remove no destino o que não existe na origem" },
        ],
      },
    ],
    exercises: [
      { id: 1, question: "Crie um alias chamado 'atualizar' para o comando de atualização do Debian", answer: "alias atualizar='sudo apt update && sudo apt upgrade -y'" },
      { id: 2, question: "Como compactar a pasta 'projeto' em 'projeto.tar.gz'?", answer: "tar -czf projeto.tar.gz projeto/" },
      { id: 3, question: "Como conectar via SSH ao servidor 192.168.1.50 com o usuário 'admin'?", answer: "ssh admin@192.168.1.50" },
      { id: 4, question: "Como aplicar mudanças do .bashrc sem fechar o terminal?", answer: "source ~/.bashrc" },
      { id: 5, question: "Qual variável de ambiente contém os diretórios onde o sistema busca comandos?", answer: "$PATH" },
      { id: 6, question: "Como descompactar um arquivo .tar.xz?", answer: "tar -xJf arquivo.tar.xz" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 7 — SHELL SCRIPTING
  // ═══════════════════════════════════════════════════════
  {
    id: "shell-scripting",
    title: "Shell Scripting Básico",
    icon: "📜",
    category: "Shell Scripting",
    description: "Automatize tarefas com scripts Bash: variáveis, condicionais, loops e funções",
    content: [
      "Shell scripts são arquivos de texto com sequências de comandos que o Bash executa automaticamente. Permitem automatizar tarefas repetitivas.",
      "Todo script começa com o shebang: #!/bin/bash. Salve com extensão .sh e dê permissão de execução: chmod +x script.sh. Execute com: ./script.sh",
      "Variáveis: nome=valor (sem espaços!). Acesse com $nome. $1, $2 são argumentos. $# é o número de argumentos. $? é o código de retorno.",
      "Estruturas de controle: if/elif/else/fi, for/while/until, case/esac. Funções: function nome() { comandos; }",
      "Condições de teste: [ -f arquivo ] testa se arquivo existe. [ -d dir ] testa diretório. [ -z string ] testa string vazia. [ $a -eq $b ] compara números.",
    ],
    commands: [
      {
        command: "#!/bin/bash",
        description: "Shebang — primeira linha de todo script, indica o interpretador",
        example: "#!/bin/bash\necho 'Meu primeiro script!'",
      },
      {
        command: "chmod +x script.sh && ./script.sh",
        description: "Dá permissão de execução e roda o script",
        example: "chmod +x meu_script.sh\n./meu_script.sh",
      },
      {
        command: "read",
        description: "Lê entrada do usuário e armazena em variável",
        example: "echo 'Qual seu nome?'\nread nome\necho \"Olá, $nome!\"",
      },
      {
        command: "if [ condição ]; then ... fi",
        description: "Estrutura condicional (if/elif/else)",
        example: "if [ -f /etc/debian_version ]; then\n  echo 'É Debian!'\nelse\n  echo 'Não é Debian'\nfi",
      },
      {
        command: "for ... in ... ; do ... done",
        description: "Loop for — itera sobre uma lista",
        example: "for i in 1 2 3 4 5; do\n  echo \"Número: $i\"\ndone",
      },
      {
        command: "while [ condição ]; do ... done",
        description: "Loop while — repete enquanto condição for verdadeira",
        example: "count=1\nwhile [ $count -le 5 ]; do\n  echo \"Contagem: $count\"\n  ((count++))\ndone",
      },
      {
        command: "case $var in ... esac",
        description: "Seleção múltipla (switch/case)",
        example: "case $1 in\n  start) echo 'Iniciando...' ;;\n  stop) echo 'Parando...' ;;\n  *) echo 'Uso: script {start|stop}' ;;\nesac",
      },
      {
        command: "function nome() { ... }",
        description: "Define uma função reutilizável no script",
        example: "function saudacao() {\n  echo \"Olá, $1!\"\n}\nsaudacao 'Estudante'",
      },
      {
        command: "crontab -e",
        description: "Edita tarefas agendadas (cron jobs)",
        example: "crontab -e\n# Formato: minuto hora dia_mes mes dia_semana comando\n# Backup diário às 2h:\n0 2 * * * /home/estudante/backup.sh",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é a primeira linha de todo script Bash?", answer: "#!/bin/bash" },
      { id: 2, question: "Como dar permissão de execução a um script?", answer: "chmod +x script.sh" },
      { id: 3, question: "Como acessar o primeiro argumento passado a um script?", answer: "$1" },
      { id: 4, question: "Escreva um for que imprima os números de 1 a 5", answer: "for i in 1 2 3 4 5; do echo $i; done" },
      { id: 5, question: "Como testar se um arquivo existe em um script Bash?", answer: "if [ -f arquivo ]; then echo 'existe'; fi" },
      { id: 6, question: "O que faz o crontab?", answer: "Agenda tarefas para execução automática em horários/datas definidos" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 8 — ARMAZENAMENTO
  // ═══════════════════════════════════════════════════════
  {
    id: "armazenamento",
    title: "Armazenamento e Partições",
    icon: "💾",
    category: "Armazenamento",
    description: "Discos, partições, filesystems, montagem e LVM",
    content: [
      "No Linux, dispositivos de armazenamento aparecem em /dev. Discos: /dev/sda, /dev/sdb (SATA/USB) ou /dev/nvme0n1 (NVMe). Partições: /dev/sda1, /dev/sda2, etc.",
      "Filesystems organizam os dados no disco. O Debian usa ext4 por padrão. Outros: XFS (servidores), Btrfs (experimental no Debian), FAT32/NTFS (Windows), swap (memória virtual).",
      "Montar um filesystem significa torná-lo acessível. O fstab (/etc/fstab) define montagens automáticas no boot.",
      "LVM (Logical Volume Manager) permite criar volumes lógicos flexíveis que podem ser redimensionados sem desligar o sistema.",
    ],
    commands: [
      {
        command: "lsblk",
        description: "Lista todos os dispositivos de bloco com partições e pontos de montagem",
        example: "lsblk",
      },
      {
        command: "fdisk / gdisk",
        description: "Gerencia partições (fdisk para MBR, gdisk para GPT)",
        example: "sudo fdisk /dev/sda\nsudo gdisk /dev/sda",
      },
      {
        command: "mkfs",
        description: "Cria/formata um filesystem em uma partição",
        example: "sudo mkfs.ext4 /dev/sda3\nsudo mkfs.xfs /dev/sdb1",
      },
      {
        command: "mount / umount",
        description: "Monta/desmonta um filesystem em um diretório",
        example: "sudo mount /dev/sdb1 /mnt/dados\nsudo umount /mnt/dados",
      },
      {
        command: "cat /etc/fstab",
        description: "Arquivo de montagens automáticas no boot",
        example: "cat /etc/fstab",
      },
      {
        command: "blkid",
        description: "Mostra UUID e tipo de filesystem das partições",
        example: "sudo blkid",
      },
      {
        command: "pvs / vgs / lvs",
        description: "Mostra volumes físicos, grupos e volumes lógicos (LVM)",
        example: "sudo pvs\nsudo vgs\nsudo lvs",
      },
    ],
    exercises: [
      { id: 1, question: "Qual filesystem é usado por padrão no Debian?", answer: "ext4" },
      { id: 2, question: "Como montar uma partição /dev/sdb1 em /mnt/dados?", answer: "sudo mount /dev/sdb1 /mnt/dados" },
      { id: 3, question: "Qual arquivo define as montagens automáticas no boot?", answer: "/etc/fstab" },
      { id: 4, question: "Como formatar uma partição com ext4?", answer: "sudo mkfs.ext4 /dev/sdXN" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 9 — AUTOAJUDA
  // ═══════════════════════════════════════════════════════
  {
    id: "autoajuda",
    title: "Autoajuda no Linux",
    icon: "❓",
    category: "Autoajuda e Referência",
    description: "Aprenda a se ajudar: --help, man, info, apropos e which",
    content: [
      "A habilidade MAIS IMPORTANTE de um administrador Linux é saber se ajudar. Existem várias ferramentas de consulta embutidas no sistema.",
      "**--help** é o mais rápido. Quase todo comando aceita 'comando --help' ou 'comando -h'. Mostra um resumo das opções.",
      "**man** (manual) é a referência completa. 'man comando' abre a documentação detalhada. Navegue com setas, busque com /, saia com q.",
      "**apropos** busca por palavra-chave. Se você não sabe o nome do comando, use 'apropos palavra'. Ex: 'apropos compress' mostra todos os comandos de compressão.",
      "**which** e **type** mostram onde um comando está localizado e se é um builtin, alias ou arquivo.",
    ],
    commands: [
      {
        command: "comando --help",
        description: "Mostra ajuda rápida de qualquer comando",
        example: "ls --help\nchmod --help\ntar --help",
      },
      {
        command: "man comando",
        description: "Abre o manual completo do comando",
        example: "man ls\nman chmod\nman apt",
      },
      {
        command: "info comando",
        description: "Documentação GNU extendida com navegação por hyperlinks",
        example: "info coreutils\ninfo bash",
      },
      {
        command: "whatis comando",
        description: "Mostra uma descrição de uma linha sobre o que o comando faz",
        example: "whatis ls\nwhatis chmod",
        output: "ls (1)   - list directory contents\nchmod (1) - change file mode bits",
      },
      {
        command: "apropos palavra",
        description: "Busca todos os comandos relacionados a uma palavra-chave",
        example: "apropos compress\napropos network\napropos user",
      },
      {
        command: "type comando",
        description: "Mostra o tipo do comando: builtin, alias ou arquivo",
        example: "type ls\ntype cd\ntype python",
        output: "ls is aliased to 'ls --color=auto'\ncd is a shell builtin",
      },
      {
        command: "which comando",
        description: "Mostra o caminho completo do executável",
        example: "which bash\nwhich python3",
        output: "/usr/bin/bash",
      },
    ],
    exercises: [
      { id: 1, question: "Você esqueceu as flags do comando 'tar'. Como ver rapidamente?", answer: "tar --help (ou man tar)" },
      { id: 2, question: "Como abrir o manual completo do comando 'chmod'?", answer: "man chmod" },
      { id: 3, question: "Como sair do man?", answer: "Pressione q" },
      { id: 4, question: "Você quer comprimir um arquivo mas não sabe o comando. Como buscar?", answer: "apropos compress" },
      { id: 5, question: "Como saber se 'ls' é um comando, alias ou builtin?", answer: "type ls" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 10 — ACESSO REMOTO E SSH
  // ═══════════════════════════════════════════════════════
  {
    id: "ssh-conexao",
    title: "SSH: Conexão Remota Segura",
    icon: "🔐",
    category: "Acesso Remoto e SSH",
    description: "Conecte-se a outros computadores, transfira arquivos e administre servidores remotamente",
    content: [
      "**O que é SSH?** SSH (Secure Shell) é um protocolo que permite acessar o terminal de outro computador pela rede, de forma criptografada. Porta padrão: 22.",
      "**Como funciona:** 'ssh usuario@ip_do_servidor'. O servidor precisa ter o serviço 'sshd' rodando. Após autenticar, você recebe um terminal remoto.",
      "**Descobrindo seu IP:** 'ip addr' para IP local. 'curl ifconfig.me' para IP público.",
      "**Verificando se o SSH está rodando:** 'systemctl status ssh' (no Debian o serviço chama 'ssh', não 'sshd'!).",
      "**Instalando o servidor SSH no Debian:** 'sudo apt install openssh-server'. Depois: 'sudo systemctl start ssh' e 'sudo systemctl enable ssh'.",
      "**Liberando SSH no firewall:** 'sudo ufw allow ssh' (se usar UFW).",
      "**Cenário prático — VirtualBox:** Configure a rede da VM como 'Bridge Adapter' para receber IP na mesma rede. No Windows, use PuTTY ou ssh nativo para conectar.",
    ],
    commands: [
      {
        command: "ssh usuario@ip",
        description: "Conecta ao terminal remoto de outro computador via SSH",
        example: "ssh aluno@192.168.1.100\nssh -p 2222 admin@servidor.com",
        flags: [
          { flag: "-p porta", description: "Conecta em porta diferente da 22" },
          { flag: "-v", description: "Modo verboso (útil para debug)" },
        ],
      },
      {
        command: "ip addr",
        description: "Mostra seu IP local",
        example: "ip addr show\nip addr | grep inet",
      },
      {
        command: "curl ifconfig.me",
        description: "Mostra seu IP público",
        example: "curl ifconfig.me",
      },
      {
        command: "systemctl status ssh",
        description: "Verifica se o servidor SSH está rodando (no Debian é 'ssh', não 'sshd'!)",
        example: "systemctl status ssh\nsudo systemctl start ssh\nsudo systemctl enable ssh",
      },
      {
        command: "sudo apt install openssh-server",
        description: "Instala o servidor SSH no Debian",
        example: "sudo apt install openssh-server\nsudo systemctl start ssh\nsudo systemctl enable ssh",
      },
      {
        command: "ss -tulnp | grep :22",
        description: "Verifica se a porta 22 (SSH) está aberta",
        example: "ss -tulnp | grep :22",
      },
      {
        command: "sudo ufw allow ssh",
        description: "Libera SSH no firewall UFW",
        example: "sudo ufw allow ssh",
      },
      {
        command: "scp arquivo usuario@ip:/caminho/",
        description: "Copia arquivos entre computadores via SSH",
        example: "scp trabalho.pdf aluno@192.168.1.100:/home/aluno/\nscp -r pasta/ aluno@192.168.1.100:/home/aluno/",
        flags: [
          { flag: "-r", description: "Copia diretórios recursivamente" },
          { flag: "-P porta", description: "Porta SSH alternativa" },
        ],
      },
    ],
    exercises: [
      { id: 1, question: "Como conectar via SSH ao computador 192.168.1.50 com o usuário 'estudante'?", answer: "ssh estudante@192.168.1.50" },
      { id: 2, question: "O SSH não está rodando no seu Debian. Quais comandos executar?", answer: "sudo apt install openssh-server && sudo systemctl start ssh && sudo systemctl enable ssh" },
      { id: 3, question: "Como ver seu IP local?", answer: "ip addr" },
      { id: 4, question: "No Debian, o serviço SSH chama 'sshd' ou 'ssh'?", answer: "ssh (diferente do Fedora/Red Hat que usa 'sshd')" },
      { id: 5, question: "Como liberar SSH no firewall UFW?", answer: "sudo ufw allow ssh" },
    ],
  },
  {
    id: "ssh-chaves",
    title: "Chaves SSH e Autenticação Segura",
    icon: "🔑",
    category: "Acesso Remoto e SSH",
    description: "Gere chaves SSH, configure login sem senha e proteja seu acesso remoto",
    content: [
      "**Por que usar chaves SSH?** Autenticação por senha é vulnerável a força bruta. Chaves SSH usam criptografia assimétrica (pública + privada) e são muito mais seguras.",
      "**Como funciona:** 1) Gere um par de chaves (ssh-keygen). 2) Copie a pública para o servidor (ssh-copy-id). 3) Conecte sem senha.",
      "**Gerando chaves:** 'ssh-keygen -t ed25519' (moderno) ou 'ssh-keygen -t rsa -b 4096' (compatível).",
      "**Arquivos:** ~/.ssh/id_ed25519 = privada (NUNCA compartilhe!). ~/.ssh/id_ed25519.pub = pública. ~/.ssh/authorized_keys = chaves autorizadas no servidor.",
      "**Desabilitando login por senha:** Edite /etc/ssh/sshd_config: 'PasswordAuthentication no'. Depois: 'sudo systemctl restart ssh'.",
    ],
    commands: [
      {
        command: "ssh-keygen -t ed25519",
        description: "Gera um par de chaves SSH com algoritmo moderno",
        example: "ssh-keygen -t ed25519\nssh-keygen -t ed25519 -C \"email@aluno.edu.br\"",
      },
      {
        command: "ssh-copy-id usuario@ip",
        description: "Copia sua chave pública para o servidor (login sem senha)",
        example: "ssh-copy-id aluno@192.168.1.100",
      },
      {
        command: "cat ~/.ssh/id_ed25519.pub",
        description: "Mostra sua chave pública (para copiar para servidores ou GitHub)",
        example: "cat ~/.ssh/id_ed25519.pub",
      },
      {
        command: "ls -la ~/.ssh/",
        description: "Lista os arquivos de chaves SSH",
        example: "ls -la ~/.ssh/",
      },
    ],
    exercises: [
      { id: 1, question: "Qual comando gera um par de chaves SSH moderno?", answer: "ssh-keygen -t ed25519" },
      { id: 2, question: "Onde fica a chave privada?", answer: "~/.ssh/id_ed25519 (nunca compartilhe!)" },
      { id: 3, question: "Como copiar sua chave pública para o servidor 192.168.1.50?", answer: "ssh-copy-id usuario@192.168.1.50" },
      { id: 4, question: "Qual permissão a chave privada deve ter?", answer: "600 (chmod 600 ~/.ssh/id_ed25519)" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE 11 — SERVIÇOS LINUX
  // ═══════════════════════════════════════════════════════
  {
    id: "servidor-web",
    title: "Servidor Web Apache",
    icon: "🌍",
    category: "Serviços Linux",
    description: "Instale e configure o Apache para servir páginas web no Debian",
    content: [
      "O Apache HTTP Server (apache2) é o servidor web mais utilizado no mundo. No Debian, o pacote chama 'apache2' (no Fedora é 'httpd').",
      "**Instalação:** 'sudo apt install apache2'. Após instalar, o Apache já inicia automaticamente. Acesse http://localhost para ver a página padrão do Debian.",
      "**Diretório dos arquivos do site:** /var/www/html/ — Coloque seus arquivos HTML, CSS e JS aqui. O arquivo padrão é index.html.",
      "**Configuração:** O Apache no Debian usa uma estrutura diferente do Fedora: sites-available/ (sites configurados), sites-enabled/ (sites ativos, links simbólicos), mods-available/ e mods-enabled/ (módulos).",
      "**Habilitando sites e módulos:** Use 'a2ensite' para habilitar sites, 'a2dissite' para desabilitar. 'a2enmod' para módulos, 'a2dismod' para desabilitar módulos. Essas ferramentas são exclusivas do Debian!",
      "**Virtual Hosts:** Permitem servir múltiplos sites no mesmo servidor. Configure em /etc/apache2/sites-available/ e habilite com a2ensite.",
    ],
    commands: [
      {
        command: "sudo apt install apache2",
        description: "Instala o servidor web Apache no Debian",
        example: "sudo apt install apache2",
      },
      {
        command: "sudo systemctl status apache2",
        description: "Verifica se o Apache está rodando",
        example: "sudo systemctl status apache2\nsudo systemctl start apache2\nsudo systemctl enable apache2",
      },
      {
        command: "sudo ufw allow 'Apache Full'",
        description: "Libera HTTP (80) e HTTPS (443) no firewall UFW",
        example: "sudo ufw allow 'Apache Full'\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp",
      },
      {
        command: "sudo a2ensite / a2dissite",
        description: "Habilita/desabilita um site no Apache (Debian-specific!)",
        example: "sudo a2ensite meusite.conf\nsudo a2dissite 000-default.conf\nsudo systemctl reload apache2",
      },
      {
        command: "sudo a2enmod / a2dismod",
        description: "Habilita/desabilita um módulo do Apache",
        example: "sudo a2enmod rewrite\nsudo a2enmod ssl\nsudo systemctl restart apache2",
      },
      {
        command: "sudo apt install php libapache2-mod-php php-mysql",
        description: "Instala PHP e integração com Apache e MySQL/MariaDB",
        example: "sudo apt install php libapache2-mod-php php-mysql\nsudo systemctl restart apache2",
      },
      {
        command: "tail -f /var/log/apache2/error.log",
        description: "Monitora erros do Apache em tempo real",
        example: "sudo tail -f /var/log/apache2/error.log\nsudo tail -f /var/log/apache2/access.log",
      },
      {
        command: "apachectl configtest",
        description: "Testa a configuração do Apache sem reiniciar",
        example: "sudo apachectl configtest",
        output: "Syntax OK",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é o nome do pacote do Apache no Debian?", answer: "apache2 (no Fedora é 'httpd')" },
      { id: 2, question: "Em qual diretório ficam os arquivos do site?", answer: "/var/www/html/" },
      { id: 3, question: "Qual comando habilita um site no Apache Debian?", answer: "sudo a2ensite nome_do_site.conf" },
      { id: 4, question: "Como liberar o Apache no firewall UFW?", answer: "sudo ufw allow 'Apache Full'" },
      { id: 5, question: "Onde ficam os logs de erro do Apache no Debian?", answer: "/var/log/apache2/error.log" },
    ],
  },
  {
    id: "servidor-banco-dados",
    title: "Servidor de Banco de Dados",
    icon: "🗄️",
    category: "Serviços Linux",
    description: "Instale e configure MariaDB e PostgreSQL no Debian",
    content: [
      "**Bancos de dados no Linux:** Os dois mais comuns open source são MariaDB (fork do MySQL) e PostgreSQL.",
      "**MariaDB:** 100% compatível com MySQL. É o padrão no Debian para substituir o MySQL. Instale: 'sudo apt install mariadb-server'. Execute segurança: 'sudo mysql_secure_installation'.",
      "**PostgreSQL:** Mais avançado, ideal para aplicações complexas. Instale: 'sudo apt install postgresql'. Conecte: 'sudo -u postgres psql'.",
      "**Liberando acesso pela rede:** Por padrão, só aceitam conexões locais. Libere portas no UFW: 3306 (MariaDB) ou 5432 (PostgreSQL).",
    ],
    commands: [
      {
        command: "sudo apt install mariadb-server",
        description: "Instala o servidor MariaDB",
        example: "sudo apt install mariadb-server\nsudo systemctl start mariadb\nsudo systemctl enable mariadb",
      },
      {
        command: "sudo mysql_secure_installation",
        description: "Script de segurança pós-instalação",
        example: "sudo mysql_secure_installation",
      },
      {
        command: "sudo mysql -u root -p",
        description: "Conecta ao MariaDB como root",
        example: "sudo mysql -u root -p\nSHOW DATABASES;\nCREATE DATABASE escola;\nUSE escola;",
      },
      {
        command: "sudo apt install postgresql",
        description: "Instala o PostgreSQL",
        example: "sudo apt install postgresql\nsudo systemctl start postgresql\nsudo systemctl enable postgresql",
      },
      {
        command: "sudo -u postgres psql",
        description: "Conecta ao PostgreSQL como DBA padrão",
        example: "sudo -u postgres psql\n\\l\nCREATE DATABASE meubd;\n\\c meubd\n\\q",
      },
      {
        command: "sudo ufw allow 3306/tcp",
        description: "Libera MariaDB no firewall. PostgreSQL usa 5432.",
        example: "sudo ufw allow 3306/tcp\nsudo ufw allow 5432/tcp",
      },
    ],
    exercises: [
      { id: 1, question: "Como instalar o MariaDB no Debian?", answer: "sudo apt install mariadb-server" },
      { id: 2, question: "Qual comando roda o script de segurança do MariaDB?", answer: "sudo mysql_secure_installation" },
      { id: 3, question: "Como conectar ao PostgreSQL?", answer: "sudo -u postgres psql" },
      { id: 4, question: "Qual é a porta padrão do MariaDB? E do PostgreSQL?", answer: "MariaDB = 3306, PostgreSQL = 5432" },
    ],
  },
  {
    id: "iac-servidor-web",
    title: "IaC: Script de Provisionamento de Servidor Web",
    icon: "⚙️",
    category: "Infraestrutura como Código",
    description: "Automatize a instalação e configuração completa de um servidor Apache com script Bash",
    content: [
      "**Objetivo:** Criar um script que automatiza TODA a configuração de um servidor web Apache no Debian.",
      "**O que o script faz:** 1) Atualiza o sistema. 2) Instala Apache + PHP. 3) Configura o firewall (UFW). 4) Cria a estrutura do site. 5) Define permissões. 6) Inicia serviços. 7) Testa tudo.",
      "**Por que isso importa?** Scripts IaC garantem que todos os servidores são configurados de forma idêntica. É a base para Ansible, Terraform e Puppet.",
    ],
    commands: [
      {
        command: "Script Completo de Provisionamento",
        description: "Script Bash que instala e configura um servidor web Apache completo no Debian",
        example: "#!/bin/bash\n# ============================================\n# SCRIPT DE PROVISIONAMENTO - SERVIDOR WEB\n# ============================================\nset -e\n\nif [ \"$EUID\" -ne 0 ]; then\n  echo \"Execute como root: sudo bash $0\"\n  exit 1\nfi\n\necho \"=== [1/7] Atualizando sistema ===\"\napt update && apt upgrade -y\n\necho \"=== [2/7] Instalando Apache e PHP ===\"\napt install -y apache2 php libapache2-mod-php php-mysql\n\necho \"=== [3/7] Configurando firewall ===\"\nufw allow 'Apache Full'\nufw --force enable\n\necho \"=== [4/7] Criando estrutura do site ===\"\nmkdir -p /var/www/html/meusite\ncat > /var/www/html/meusite/index.html <<EOF\n<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head><title>Servidor Provisionado!</title></head>\n<body>\n<h1>Servidor Web Funcionando!</h1>\n<p>Provisionado automaticamente via script IaC.</p>\n<p>Data: $(date)</p>\n</body>\n</html>\nEOF\n\necho \"=== [5/7] Definindo permissões ===\"\nchown -R www-data:www-data /var/www/html/\nchmod -R 755 /var/www/html/\n\necho \"=== [6/7] Iniciando serviços ===\"\nsystemctl start apache2\nsystemctl enable apache2\n\necho \"=== [7/7] Verificando ===\"\nif systemctl is-active --quiet apache2; then\n  echo \"✅ Apache rodando!\"\nelse\n  echo \"❌ Apache NÃO iniciou!\"\n  exit 1\nfi\n\nIP=$(hostname -I | awk '{print $1}')\necho \"\"\necho \"============================================\"\necho \"Servidor pronto! Acesse:\"\necho \"  Local:  http://localhost/meusite/\"\necho \"  Rede:   http://$IP/meusite/\"\necho \"============================================\"",
        output: "# Execute com: sudo bash provisionar_web.sh",
      },
      {
        command: "cat > arquivo <<EOF ... EOF",
        description: "Heredoc — cria um arquivo com conteúdo inline no script",
        example: "cat > /tmp/teste.html <<EOF\n<h1>Olá!</h1>\nEOF",
      },
      {
        command: "curl -s -o /dev/null -w '%{http_code}' URL",
        description: "Testa se um URL retorna status 200 (OK)",
        example: "curl -s -o /dev/null -w '%{http_code}' http://localhost/",
        output: "200",
      },
    ],
    exercises: [
      { id: 1, question: "Qual é a vantagem de usar um script IaC?", answer: "Garantir que todos os servidores são configurados de forma idêntica, rápida e sem erros manuais" },
      { id: 2, question: "O que o heredoc (<<EOF) faz em um script?", answer: "Permite criar conteúdo multilinha em um arquivo dentro do script" },
      { id: 3, question: "Como verificar se o Apache está rodando em um script?", answer: "systemctl is-active --quiet apache2" },
      { id: 4, question: "Quais ferramentas profissionais fazem IaC em larga escala?", answer: "Ansible, Terraform, Puppet, Chef, SaltStack" },
    ],
  },
  {
    id: "materiais-complementares",
    title: "Materiais Complementares e Revisão",
    icon: "📚",
    category: "Materiais Complementares",
    description: "Resumos consolidados, dicas extras e referências para aprofundamento",
    content: [
      "**Arquivos e Diretórios — Dicas extras:** Use 'stat arquivo' para metadados completos. Use 'file arquivo' para tipo real. 'rename' renomeia em lote.",
      "**Usuários e Grupos — Dicas extras:** 'chage -l usuario' mostra política de senha. 'last' mostra últimos logins. 'w' mostra quem está logado agora.",
      "**Pacotes e Discos — Dicas extras:** 'dpkg -l' lista pacotes. 'dpkg -L pacote' lista arquivos. 'apt-file search arquivo' descobre qual pacote fornece um arquivo.",
      "**Serviços — Dicas extras:** 'systemctl list-unit-files --type=service' lista serviços. 'journalctl --disk-usage' mostra espaço dos logs.",
      "**Referências:** Documentação oficial: wiki.debian.org. Debian Handbook: debian-handbook.info (gratuito). Linux Foundation: training.linuxfoundation.org. OverTheWire: overthewire.org/wargames.",
    ],
    commands: [
      {
        command: "stat arquivo",
        description: "Mostra metadados completos: permissões, inode, tamanho, datas",
        example: "stat /etc/hostname",
      },
      {
        command: "chage -l usuario",
        description: "Mostra política de senha do usuário",
        example: "sudo chage -l estudante",
      },
      {
        command: "last",
        description: "Mostra histórico de logins no sistema",
        example: "last\nlast -n 10",
      },
      {
        command: "w",
        description: "Mostra quem está logado agora",
        example: "w",
      },
      {
        command: "dpkg -l / dpkg -L",
        description: "Lista pacotes instalados / Lista arquivos de um pacote",
        example: "dpkg -l | wc -l\ndpkg -L bash",
      },
      {
        command: "xdg-open",
        description: "Abre arquivo/URL com o programa padrão",
        example: "xdg-open documento.pdf\nxdg-open https://google.com",
      },
    ],
    exercises: [
      { id: 1, question: "Qual comando mostra metadados completos de um arquivo?", answer: "stat arquivo" },
      { id: 2, question: "Como ver quem está logado agora?", answer: "w (ou who)" },
      { id: 3, question: "Como ver os últimos logins?", answer: "last" },
      { id: 4, question: "Como descobrir qual pacote fornece o arquivo /usr/bin/git?", answer: "apt-file search /usr/bin/git (precisa instalar apt-file)" },
      { id: 5, question: "Qual comando mostra a política de senha?", answer: "sudo chage -l usuario" },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PARTE FINAL — PREPARAÇÃO PARA A PROVA
  // ═══════════════════════════════════════════════════════
  {
    id: "revisao-prova",
    title: "Revisão para a Prova",
    icon: "📝",
    category: "Preparação para a Prova",
    description: "Resumo dos comandos mais cobrados e simulado de exercícios",
    content: [
      "Esta seção reúne os comandos e conceitos mais importantes para a prova. Revise e pratique no terminal!",
      "**Teoria essencial:** Linux é o kernel, GNU são as ferramentas. Debian é a 'mãe' de Ubuntu e muitas distros. Usa APT, systemd, ext4 e AppArmor. Stable = servidores, Testing = desktop, Sid = desenvolvimento.",
      "**Permissões:** rwx = 421. chmod 755 = dono faz tudo, outros leem e executam. sudo = executar como root. Grupo 'sudo' dá permissão de administrador.",
      "**Gerenciamento:** apt install/remove/update/upgrade para pacotes. systemctl start/stop/enable/status para serviços. ufw para firewall.",
      "**Navegação:** pwd, ls, cd, find, grep. Pipes (|) combinam comandos. > redireciona saída.",
      "**Processos:** ps aux, kill -9 PID, top/htop. df -h para disco, free -h para RAM.",
      "Dica final: pratique todos os comandos no terminal!",
    ],
    commands: [
      {
        command: "Resumo: Informações do Sistema",
        description: "uname -a | cat /etc/debian_version | cat /etc/os-release | hostnamectl | whoami | uptime",
        example: "uname -a\ncat /etc/debian_version\nhostnamectl\nwhoami\nuptime",
      },
      {
        command: "Resumo: Navegação",
        description: "pwd | ls -la | cd | find | locate | tree",
        example: "pwd\nls -lah\ncd ~/Documents\nfind /home -name '*.txt'",
      },
      {
        command: "Resumo: Arquivos",
        description: "touch | mkdir -p | cp -r | mv | rm -rf | cat | less | head | tail -f | nano | vim",
        example: "mkdir -p projeto/src\ncp -r pasta backup\nrm -rf lixo/",
      },
      {
        command: "Resumo: Permissões",
        description: "chmod 755 | chown user:group | sudo | adduser | passwd | groups | id",
        example: "chmod 755 script.sh\nsudo chown user:user arquivo\nsudo adduser aluno",
      },
      {
        command: "Resumo: Pacotes (APT)",
        description: "apt update | apt upgrade | apt install | apt remove | apt purge | apt search | apt autoremove",
        example: "sudo apt update\nsudo apt install vim\nsudo apt upgrade -y\napt search editor",
      },
      {
        command: "Resumo: Processos e Recursos",
        description: "ps aux | kill -9 | htop | df -h | free -h | du -sh | lsblk",
        example: "ps aux | grep firefox\nkill -9 1234\ndf -h\nfree -h",
      },
      {
        command: "Resumo: Autoajuda",
        description: "comando --help | man comando | apropos palavra | whatis | type | which",
        example: "tar --help\nman chmod\napropos compress\nwhatis ls",
      },
      {
        command: "Resumo: SSH e Acesso Remoto",
        description: "ssh user@ip | scp | ssh-keygen | ssh-copy-id | systemctl status ssh",
        example: "ssh aluno@192.168.1.100\nscp arquivo.txt aluno@192.168.1.100:/tmp/\nssh-keygen -t ed25519",
      },
      {
        command: "Resumo: Firewall (UFW)",
        description: "ufw enable | ufw allow | ufw deny | ufw status | ufw delete",
        example: "sudo ufw enable\nsudo ufw allow ssh\nsudo ufw allow 80/tcp\nsudo ufw status verbose",
      },
      {
        command: "Resumo: Serviços",
        description: "systemctl start/stop/restart/enable/disable/status | journalctl -u serviço",
        example: "sudo systemctl start apache2\nsudo systemctl enable ssh\njournalctl -u apache2",
      },
    ],
    exercises: [
      { id: 1, question: "Qual gerenciador de pacotes o Debian usa?", answer: "APT (Advanced Package Tool)" },
      { id: 2, question: "Qual comando atualiza todos os pacotes no Debian?", answer: "sudo apt update && sudo apt upgrade -y" },
      { id: 3, question: "Qual a diferença entre 'apt remove' e 'apt purge'?", answer: "remove mantém configurações. purge remove tudo." },
      { id: 4, question: "Qual grupo dá permissão de admin no Debian?", answer: "sudo (no Fedora é 'wheel')" },
      { id: 5, question: "Como habilitar o firewall UFW?", answer: "sudo ufw enable" },
      { id: 6, question: "Qual branch do Debian é recomendado para servidores?", answer: "Stable" },
      { id: 7, question: "De onde vêm os codinomes do Debian?", answer: "Personagens do Toy Story" },
      { id: 8, question: "Qual é o módulo de segurança obrigatória do Debian?", answer: "AppArmor" },
      { id: 9, question: "No Debian, o serviço SSH chama...?", answer: "ssh (e não sshd como no Fedora)" },
      { id: 10, question: "Como instalar o Apache no Debian?", answer: "sudo apt install apache2" },
      { id: 11, question: "Qual comando habilita um site no Apache Debian?", answer: "sudo a2ensite nome.conf" },
      { id: 12, question: "Como criar um usuário interativamente no Debian?", answer: "sudo adduser nome_do_usuario" },
    ],
  },
];
