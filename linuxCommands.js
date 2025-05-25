// Database dei comandi Linux
const commands = {
    'a': [
        {
            name: 'adduser',
            description: 'Aggiunge un nuovo utente al sistema',
            options: [
                'adduser username : crea nuovo utente interattivamente',
                'adduser --system username : crea utente di sistema',
                'adduser --disabled-password username : senza password'
            ]
        },
        {
            name: 'alias',
            description: 'Crea un alias per un comando',
            options: [
                'alias nome="comando" : crea un nuovo alias',
                'alias : mostra tutti gli alias esistenti'
            ]
        },
        {
            name: 'apropos',
            description: 'Cerca nelle pagine del manuale per parole chiave',
            options: [
                'apropos keyword : cerca comandi correlati',
                'apropos -a word1 word2 : cerca con AND logico'
            ]
        },
        {
            name: 'at',
            description: 'Programma esecuzione di comandi',
            options: [
                'at 14:30 : programma per le 14:30',
                'at now + 1 hour : tra un\'ora',
                'atq : mostra job programmati',
                'atrm jobid : rimuove job'
            ]
        },
        {
            name: 'awk',
            description: 'Linguaggio di programmazione per elaborazione di testi',
            options: [
                'awk \'{print $1}\' file : stampa la prima colonna',
                'awk -F: \'{print $1}\' : usa : come separatore'
            ]
        }
    ],
    'b': [
        {
            name: 'basename',
            description: 'Estrae il nome del file dal percorso',
            options: [
                'basename /path/to/file.txt : restituisce "file.txt"',
                'basename /path/to/file.txt .txt : restituisce "file"'
            ]
        },
        {
            name: 'bash',
            description: 'Shell Bourne Again',
            options: [
                'bash script.sh : esegue uno script bash',
                'bash -x script.sh : esegue con debug',
                'bash -n script.sh : controlla sintassi senza eseguire'
            ]
        },
        {
            name: 'bc',
            description: 'Calcolatrice da linea di comando',
            options: [
                'bc : avvia calcolatrice interattiva',
                'echo "2+3" | bc : calcolo semplice',
                'echo "scale=2; 10/3" | bc : con decimali'
            ]
        },
        {
            name: 'bg',
            description: 'Mette un processo in background',
            options: [
                'bg : mette l\'ultimo job in background',
                'bg %1 : mette il job 1 in background'
            ]
        }
    ],
    'c': [
        {
            name: 'cal',
            description: 'Mostra calendario',
            options: [
                'cal : calendario del mese corrente',
                'cal 2024 : calendario dell\'anno',
                'cal 12 2024 : dicembre 2024'
            ]
        },
        {
            name: 'cat',
            description: 'Visualizza il contenuto di un file',
            options: [
                'cat file.txt : mostra il contenuto del file',
                'cat -n file.txt : mostra con numeri di riga',
                'cat file1 file2 : concatena più file',
                'cat > file.txt : crea un nuovo file'
            ]
        },
        {
            name: 'cd',
            description: 'Cambia directory',
            options: [
                'cd /path : va alla directory specificata',
                'cd .. : va alla directory padre',
                'cd ~ : va alla home directory',
                'cd - : torna alla directory precedente'
            ]
        },
        {
            name: 'chgrp',
            description: 'Cambia il gruppo di file e directory',
            options: [
                'chgrp gruppo file : cambia gruppo',
                'chgrp -R gruppo dir/ : ricorsivamente',
                'chgrp :gruppo file : usando i due punti'
            ]
        },
        {
            name: 'chmod',
            description: 'Cambia i permessi di file e directory',
            options: [
                'chmod 755 file : rwxr-xr-x',
                'chmod +x file : aggiunge permesso di esecuzione',
                'chmod -w file : rimuove permesso di scrittura',
                'chmod -R 644 dir/ : applica ricorsivamente'
            ]
        },
        {
            name: 'chown',
            description: 'Cambia il proprietario di file e directory',
            options: [
                'chown user file : cambia proprietario',
                'chown user:group file : cambia proprietario e gruppo',
                'chown -R user dir/ : applica ricorsivamente'
            ]
        },
        {
            name: 'cp',
            description: 'Copia file e directory',
            options: [
                'cp file1 file2 : copia file1 in file2',
                'cp -r dir1/ dir2/ : copia directory ricorsivamente',
                'cp -p file1 file2 : preserva attributi',
                'cp *.txt /dest/ : copia tutti i file .txt'
            ]
        },
        {
            name: 'crontab',
            description: 'Gestisce i job schedulati',
            options: [
                'crontab -e : modifica il crontab',
                'crontab -l : lista i job schedulati',
                'crontab -r : rimuove tutti i job'
            ]
        },
        {
            name: 'curl',
            description: 'Trasferisce dati da/verso server',
            options: [
                'curl url : scarica contenuto da URL',
                'curl -O url : salva con nome originale',
                'curl -X POST url : effettua richiesta POST',
                'curl -H "Header: value" url : aggiunge header'
            ]
        },
        {
            name: 'cut',
            description: 'Estrae colonne da file di testo',
            options: [
                'cut -d: -f1 /etc/passwd : prima colonna con : come delimitatore',
                'cut -c1-10 file : caratteri da 1 a 10',
                'cut -f2,4 file : seconda e quarta colonna'
            ]
        }
    ],
    'd': [
        {
            name: 'date',
            description: 'Mostra o imposta la data di sistema',
            options: [
                'date : mostra data e ora corrente',
                'date +%Y-%m-%d : formato personalizzato',
                'date -d "yesterday" : data di ieri',
                'date -s "2023-01-01" : imposta data'
            ]
        },
        {
            name: 'df',
            description: 'Mostra lo spazio disco utilizzato',
            options: [
                'df : mostra utilizzo disco',
                'df -h : formato human-readable',
                'df -i : mostra utilizzo inode',
                'df /path : mostra info per path specifico'
            ]
        },
        {
            name: 'diff',
            description: 'Confronta due file',
            options: [
                'diff file1 file2 : mostra differenze',
                'diff -u file1 file2 : formato unified',
                'diff -r dir1/ dir2/ : confronta directory',
                'diff -i file1 file2 : ignora maiuscole/minuscole'
            ]
        },
        {
            name: 'dirname',
            description: 'Estrae la directory dal percorso',
            options: [
                'dirname /path/to/file.txt : restituisce "/path/to"',
                'dirname file.txt : restituisce "."'
            ]
        },
        {
            name: 'dmesg',
            description: 'Mostra messaggi del kernel',
            options: [
                'dmesg : tutti i messaggi del kernel',
                'dmesg | tail : ultimi messaggi',
                'dmesg -w : modalità watch',
                'dmesg --level=err : solo errori'
            ]
        },
        {
            name: 'du',
            description: 'Mostra l\'utilizzo dello spazio disco',
            options: [
                'du : mostra dimensioni directory',
                'du -h : formato human-readable',
                'du -s : solo il totale',
                'du -a : include i file'
            ]
        }
    ],
    'e': [
        {
            name: 'echo',
            description: 'Stampa testo',
            options: [
                'echo "testo" : stampa il testo',
                'echo -n "testo" : senza newline finale',
                'echo -e "line1\\nline2" : interpreta escape',
                'echo $VAR : stampa variabile'
            ]
        },
        {
            name: 'env',
            description: 'Mostra o modifica variabili d\'ambiente',
            options: [
                'env : mostra tutte le variabili',
                'env VAR=value comando : esegue con variabile',
                'env -i comando : esegue senza eredità ambiente'
            ]
        },
        {
            name: 'exit',
            description: 'Esce dalla shell o script',
            options: [
                'exit : esce con codice 0',
                'exit 1 : esce con codice di errore',
                'exit $? : esce con ultimo codice di ritorno'
            ]
        },
        {
            name: 'expr',
            description: 'Valuta espressioni',
            options: [
                'expr 5 + 3 : operazioni aritmetiche',
                'expr length "stringa" : lunghezza stringa',
                'expr "stringa" : "pattern" : matching pattern'
            ]
        }
    ],
    'f': [
        {
            name: 'find',
            description: 'Cerca file e directory',
            options: [
                'find /path -name "*.txt" : cerca per nome',
                'find . -type f : solo file',
                'find . -type d : solo directory',
                'find . -size +100M : file più grandi di 100MB',
                'find . -mtime -7 : modificati negli ultimi 7 giorni'
            ]
        },
        {
            name: 'fg',
            description: 'Porta un processo in foreground',
            options: [
                'fg : porta l\'ultimo job in foreground',
                'fg %1 : porta il job 1 in foreground'
            ]
        },
        {
            name: 'file',
            description: 'Determina il tipo di file',
            options: [
                'file filename : mostra tipo di file',
                'file -b filename : solo la descrizione',
                'file * : analizza tutti i file'
            ]
        },
        {
            name: 'free',
            description: 'Mostra utilizzo memoria',
            options: [
                'free : utilizzo memoria',
                'free -h : formato human-readable',
                'free -m : in megabyte',
                'free -s 2 : aggiorna ogni 2 secondi'
            ]
        },
        {
            name: 'fsck',
            description: 'Controlla e ripara filesystem',
            options: [
                'fsck /dev/sda1 : controlla il filesystem',
                'fsck -y /dev/sda1 : ripara automaticamente',
                'fsck -N : mostra cosa fare senza eseguire',
                'fsck -f /dev/sda1 : forza controllo'
            ]
        },
        {
            name: 'ftp',
            description: 'Client FTP per trasferimento file',
            options: [
                'ftp host : connessione a un server FTP',
                'ftp -p host : connessione passiva',
                'ftp -n host : disabilita login automatico',
                'put file : carica file sul server',
                'get file : scarica file dal server'
            ]
        }
    ],
    'g': [
        {
            name: 'getent',
            description: 'Interroga database di sistema',
            options: [
                'getent passwd : tutti gli utenti',
                'getent group : tutti i gruppi',
                'getent hosts hostname : risoluzione DNS'
            ]
        },
        {
            name: 'grep',
            description: 'Cerca pattern nei file',
            options: [
                'grep "pattern" file : cerca pattern nel file',
                'grep -r "pattern" dir/ : ricerca ricorsiva',
                'grep -i "pattern" file : ignora maiuscole/minuscole',
                'grep -n "pattern" file : mostra numeri di riga',
                'grep -v "pattern" file : linee che NON contengono pattern'
            ]
        },
        {
            name: 'groups',
            description: 'Mostra gruppi di un utente',
            options: [
                'groups : gruppi dell\'utente corrente',
                'groups username : gruppi di utente specifico'
            ]
        },
        {
            name: 'gunzip',
            description: 'Decomprime file .gz',
            options: [
                'gunzip file.gz : decomprime il file',
                'gunzip -c file.gz : output su stdout',
                'gunzip -t file.gz : testa l\'integrità'
            ]
        },
        {
            name: 'gzip',
            description: 'Comprime file',
            options: [
                'gzip file : comprime il file',
                'gzip -9 file : massima compressione',
                'gzip -d file.gz : decomprime (come gunzip)'
            ]
        }
    ],
    'h': [
        {
            name: 'head',
            description: 'Mostra le prime righe di un file',
            options: [
                'head file : prime 10 righe',
                'head -n 20 file : prime 20 righe',
                'head -c 100 file : primi 100 caratteri'
            ]
        },
        {
            name: 'history',
            description: 'Mostra la cronologia dei comandi',
            options: [
                'history : mostra tutta la cronologia',
                'history 10 : ultimi 10 comandi',
                'history -c : cancella cronologia'
            ]
        },
        {
            name: 'hostname',
            description: 'Mostra o imposta il nome host',
            options: [
                'hostname : mostra nome host',
                'hostname -f : nome completo (FQDN)',
                'hostname -i : indirizzo IP'
            ]
        },
        {
            name: 'htop',
            description: 'Monitor processi migliorato',
            options: [
                'htop : interfaccia interattiva migliorata',
                'htop -u username : processi di utente specifico',
                'htop -p PID : monitora processo specifico'
            ]
        }
    ],
    'i': [
        {
            name: 'id',
            description: 'Mostra ID utente e gruppo',
            options: [
                'id : mostra UID, GID correnti',
                'id username : info per utente specifico',
                'id -u : solo UID',
                'id -g : solo GID'
            ]
        },
        {
            name: 'ifconfig',
            description: 'Configura interfacce di rete',
            options: [
                'ifconfig : mostra tutte le interfacce',
                'ifconfig eth0 : info su interfaccia specifica',
                'ifconfig eth0 up : attiva interfaccia',
                'ifconfig eth0 down : disattiva interfaccia'
            ]
        },
        {
            name: 'iostat',
            description: 'Statistiche I/O dispositivi',
            options: [
                'iostat : statistiche I/O',
                'iostat -x : statistiche estese',
                'iostat 2 : aggiorna ogni 2 secondi'
            ]
        },
        {
            name: 'ip',
            description: 'Configurazione rete avanzata',
            options: [
                'ip addr show : mostra indirizzi IP',
                'ip route show : mostra tabella routing',
                'ip link show : mostra interfacce di rete',
                'ip addr add 192.168.1.100/24 dev eth0 : aggiunge IP'
            ]
        }
    ],
    'j': [
        {
            name: 'jobs',
            description: 'Mostra i job attivi',
            options: [
                'jobs : lista job attivi',
                'jobs -l : con PID',
                'jobs -p : solo PID'
            ]
        },
        {
            name: 'journalctl',
            description: 'Visualizza log systemd',
            options: [
                'journalctl : tutti i log',
                'journalctl -f : segue i log',
                'journalctl -u service : log di servizio specifico',
                'journalctl --since "1 hour ago" : log dell\'ultima ora'
            ]
        }
    ],
    'k': [
        {
            name: 'kill',
            description: 'Termina processi',
            options: [
                'kill PID : termina processo',
                'kill -9 PID : termina forzatamente',
                'kill -STOP PID : sospende processo',
                'kill -CONT PID : riprende processo',
                'killall nome : termina per nome'
            ]
        }
    ],
    'l': [
        {
            name: 'less',
            description: 'Visualizza file pagina per pagina',
            options: [
                'less file : visualizza file',
                'less +G file : inizia dalla fine',
                'less -N file : con numeri di riga'
            ]
        },
        {
            name: 'ln',
            description: 'Crea link',
            options: [
                'ln target link : crea hard link',
                'ln -s target link : crea symbolic link',
                'ln -sf target link : forza sovrascrittura'
            ]
        },
        {
            name: 'locate',
            description: 'Trova file rapidamente',
            options: [
                'locate filename : cerca file',
                'locate -i filename : ignora maiuscole/minuscole',
                'updatedb : aggiorna database'
            ]
        },
        {
            name: 'ls',
            description: 'Elenca contenuto directory',
            options: [
                'ls : elenca file e directory',
                'ls -la : dettagli inclusi file nascosti',
                'ls -lh : dimensioni human-readable',
                'ls -lt : ordina per data modifica',
                'ls -lS : ordina per dimensione',
                'ls -R : ricorsivo'
            ]
        },
        {
            name: 'lsof',
            description: 'Lista file aperti',
            options: [
                'lsof : tutti i file aperti',
                'lsof -u username : file aperti da utente',
                'lsof -i :80 : connessioni su porta 80',
                'lsof /path/file : chi ha aperto il file'
            ]
        },
        {
            name: 'lscpu',
            description: 'Informazioni CPU',
            options: [
                'lscpu : informazioni dettagliate CPU',
                'lscpu -e : formato esteso'
            ]
        },
        {
            name: 'lsblk',
            description: 'Lista dispositivi a blocchi',
            options: [
                'lsblk : struttura ad albero dispositivi',
                'lsblk -f : con filesystem',
                'lsblk -m : con permessi'
            ]
        }
    ],
    'm': [
        {
            name: 'man',
            description: 'Mostra il manuale dei comandi',
            options: [
                'man comando : mostra manuale',
                'man -k keyword : cerca per parola chiave',
                'man 5 file : sezione specifica del manuale'
            ]
        },
        {
            name: 'md5sum',
            description: 'Calcola hash MD5',
            options: [
                'md5sum file : calcola MD5 del file',
                'md5sum -c file.md5 : verifica hash',
                'md5sum * > checksums.md5 : hash di tutti i file'
            ]
        },
        {
            name: 'mkdir',
            description: 'Crea directory',
            options: [
                'mkdir dir : crea directory',
                'mkdir -p path/to/dir : crea path completo',
                'mkdir -m 755 dir : con permessi specifici'
            ]
        },
        {
            name: 'mkfs',
            description: 'Crea filesystem',
            options: [
                'mkfs.ext4 /dev/sdb1 : crea filesystem ext4',
                'mkfs -t ext4 /dev/sdb1 : specifica tipo',
                'mkfs.xfs /dev/sdb1 : crea filesystem XFS'
            ]
        },
        {
            name: 'more',
            description: 'Visualizza file pagina per pagina',
            options: [
                'more file : visualizza file',
                'more +10 file : inizia dalla riga 10'
            ]
        },
        {
            name: 'mount',
            description: 'Monta filesystem',
            options: [
                'mount : mostra filesystem montati',
                'mount /dev/sdb1 /mnt : monta dispositivo',
                'mount -t ext4 device mountpoint : specifica tipo'
            ]
        },
        {
            name: 'mv',
            description: 'Sposta/rinomina file e directory',
            options: [
                'mv file1 file2 : rinomina file',
                'mv file dir/ : sposta file in directory',
                'mv *.txt dir/ : sposta tutti i .txt'
            ]
        }
    ],
    'n': [
        {
            name: 'nano',
            description: 'Editor di testo semplice',
            options: [
                'nano file : apre file nell\'editor',
                'nano +10 file : va alla riga 10',
                'nano -w file : disabilita word wrap'
            ]
        },
        {
            name: 'netstat',
            description: 'Mostra connessioni di rete',
            options: [
                'netstat -a : tutte le connessioni',
                'netstat -l : solo listening',
                'netstat -n : indirizzi numerici',
                'netstat -p : con PID dei processi'
            ]
        },
        {
            name: 'nohup',
            description: 'Esegue comandi ignorando SIGHUP',
            options: [
                'nohup comando & : esegue in background persistente',
                'nohup comando > output.log 2>&1 & : con redirect'
            ]
        },
        {
            name: 'nslookup',
            description: 'Query DNS',
            options: [
                'nslookup hostname : risoluzione DNS',
                'nslookup hostname server : usa server DNS specifico',
                'nslookup -type=MX domain : record MX'
            ]
        }
    ],
    'o': [
        {
            name: 'od',
            description: 'Dump ottale/esadecimale di file',
            options: [
                'od file : dump ottale',
                'od -x file : dump esadecimale',
                'od -c file : caratteri ASCII'
            ]
        }
    ],
    'p': [
        {
            name: 'passwd',
            description: 'Cambia password utente',
            options: [
                'passwd : cambia propria password',
                'passwd username : cambia password utente',
                'passwd -l username : blocca account'
            ]
        },
        {
            name: 'pgrep',
            description: 'Cerca processi per nome',
            options: [
                'pgrep nome : trova PID per nome processo',
                'pgrep -u username nome : di utente specifico',
                'pgrep -f pattern : cerca nel comando completo'
            ]
        },
        {
            name: 'ping',
            description: 'Testa connettività di rete',
            options: [
                'ping host : ping continuo',
                'ping -c 4 host : 4 ping',
                'ping -i 2 host : intervallo 2 secondi'
            ]
        },
        {
            name: 'pkill',
            description: 'Termina processi per nome',
            options: [
                'pkill nome : termina processi per nome',
                'pkill -u username : termina processi di utente',
                'pkill -9 nome : termina forzatamente'
            ]
        },
        {
            name: 'ps',
            description: 'Mostra processi in esecuzione',
            options: [
                'ps : processi della sessione corrente',
                'ps aux : tutti i processi con dettagli',
                'ps -ef : formato completo',
                'ps -u username : processi di un utente'
            ]
        },
        {
            name: 'pwd',
            description: 'Mostra directory corrente',
            options: [
                'pwd : percorso directory corrente',
                'pwd -P : percorso fisico (risolve symlink)'
            ]
        }
    ],
    'q': [
        {
            name: 'quota',
            description: 'Mostra quote disco utente',
            options: [
                'quota : mostra quote correnti',
                'quota -u username : quote utente specifico'
            ]
        }
    ],
    'r': [
        {
            name: 'rev',
            description: 'Inverte caratteri di ogni riga',
            options: [
                'rev file : inverte ogni riga del file',
                'echo "hello" | rev : output "olleh"'
            ]
        },
        {
            name: 'rm',
            description: 'Rimuove file e directory',
            options: [
                'rm file : rimuove file',
                'rm -r dir/ : rimuove directory ricorsivamente',
                'rm -f file : forza rimozione',
                'rm -rf dir/ : rimuove tutto forzatamente',
                'rm -i file : chiede conferma'
            ]
        },
        {
            name: 'rmdir',
            description: 'Rimuove directory vuote',
            options: [
                'rmdir dir : rimuove directory vuota',
                'rmdir -p path/to/dir : rimuove path vuoto'
            ]
        },
        {
            name: 'rsync',
            description: 'Sincronizza file e directory',
            options: [
                'rsync -av src/ dest/ : sincronizza con archivio e verbose',
                'rsync -avz src/ user@host:dest/ : sincronizza via SSH',
                'rsync --delete src/ dest/ : rimuove file extra in dest',
                'rsync -n src/ dest/ : dry run'
            ]
        }
    ],
    's': [
        {
            name: 'sed',
            description: 'Editor di stream per filtrare e trasformare testo',
            options: [
                'sed \'s/old/new/\' file : sostituisce testo',
                'sed \'s/old/new/g\' file : sostituisce tutte le occorrenze',
                'sed -i \'s/old/new/g\' file : modifica file in place',
                'sed -n \'1,5p\' file : stampa righe 1-5'
            ]
        },
        {
            name: 'sort',
            description: 'Ordina righe di testo',
            options: [
                'sort file : ordina alfabeticamente',
                'sort -n file : ordine numerico',
                'sort -r file : ordine inverso',
                'sort -u file : rimuove duplicati',
                'sort -k2 file : ordina per seconda colonna'
            ]
        },
        {
            name: 'ssh',
            description: 'Connessione sicura remota',
            options: [
                'ssh user@host : connessione SSH',
                'ssh -p 2222 user@host : porta specifica',
                'ssh -i keyfile user@host : usa chiave specifica',
                'ssh -X user@host : forwarding X11'
            ]
        },
        {
            name: 'sudo',
            description: 'Esegue comandi come altro utente',
            options: [
                'sudo comando : esegue come root',
                'sudo -u user comando : esegue come utente specifico',
                'sudo -i : shell interattiva come root',
                'sudo -l : mostra permessi sudo'
            ]
        },
        {
            name: 'systemctl',
            description: 'Controlla servizi systemd',
            options: [
                'systemctl status service : stato del servizio',
                'systemctl start service : avvia servizio',
                'systemctl stop service : ferma servizio',
                'systemctl enable service : abilita all\'avvio',
                'systemctl list-units : lista unità attive'
            ]
        },
        {
            name: 'su',
            description: 'Cambia utente',
            options: [
                'su : diventa root',
                'su username : diventa utente specifico',
                'su - username : con ambiente completo'
            ]
        },
        {
            name: 'scp',
            description: 'Copia file via SSH',
            options: [
                'scp file user@host:/path : copia file remoto',
                'scp user@host:/path file : scarica file',
                'scp -r dir/ user@host:/path : copia directory'
            ]
        },
        {
            name: 'stat',
            description: 'Mostra statistiche dettagliate file',
            options: [
                'stat file : informazioni dettagliate',
                'stat -c "%s" file : solo dimensione',
                'stat -c "%a" file : permessi ottali'
            ]
        }
    ],
    't': [
        {
            name: 'tail',
            description: 'Mostra le ultime righe di un file',
            options: [
                'tail file : ultime 10 righe',
                'tail -n 20 file : ultime 20 righe',
                'tail -f file : segue il file in tempo reale',
                'tail -F file : come -f ma riapre se ricreato'
            ]
        },
        {
            name: 'tar',
            description: 'Archivia e estrae file',
            options: [
                'tar -czf archive.tar.gz dir/ : crea archivio compresso',
                'tar -xzf archive.tar.gz : estrae archivio',
                'tar -tzf archive.tar.gz : lista contenuti',
                'tar -xzf archive.tar.gz -C /dest : estrae in directory specifica'
            ]
        },
        {
            name: 'top',
            description: 'Mostra processi in tempo reale',
            options: [
                'top : monitor processi interattivo',
                'top -u username : processi di utente specifico',
                'top -p PID : monitora processo specifico'
            ]
        },
        {
            name: 'touch',
            description: 'Crea file vuoti o aggiorna timestamp',
            options: [
                'touch file : crea file vuoto o aggiorna timestamp',
                'touch -t 202301011200 file : imposta timestamp specifico',
                'touch -r reference file : copia timestamp da reference'
            ]
        },
        {
            name: 'tr',
            description: 'Traduce o elimina caratteri',
            options: [
                'tr "a-z" "A-Z" : converte in maiuscolo',
                'tr -d "aeiou" : rimuove vocali',
                'tr -s " " : comprime spazi multipli',
                'tr "\\n" " " : sostituisce newline con spazio'
            ]
        },
        {
            name: 'tee',
            description: 'Scrive output su file e stdout',
            options: [
                'comando | tee file : scrive su file e mostra',
                'comando | tee -a file : appende a file',
                'comando | tee file1 file2 : scrive su più file'
            ]
        },
        {
            name: 'time',
            description: 'Misura tempo di esecuzione comando',
            options: [
                'time comando : tempo di esecuzione',
                '/usr/bin/time -v comando : statistiche dettagliate'
            ]
        }
    ],
    'u': [
        {
            name: 'umount',
            description: 'Smonta filesystem',
            options: [
                'umount /mountpoint : smonta filesystem',
                'umount -f /mountpoint : smonta forzatamente',
                'umount -l /mountpoint : lazy unmount'
            ]
        },
        {
            name: 'uniq',
            description: 'Rimuove righe duplicate consecutive',
            options: [
                'uniq file : rimuove duplicati consecutivi',
                'uniq -c file : conta occorrenze',
                'uniq -d file : mostra solo duplicati',
                'uniq -u file : mostra solo righe uniche'
            ]
        },
        {
            name: 'uptime',
            description: 'Mostra tempo di attività del sistema',
            options: [
                'uptime : tempo attività e carico medio',
                'uptime -p : formato human-readable',
                'uptime -s : data/ora di avvio'
            ]
        },
        {
            name: 'uname',
            description: 'Informazioni sistema',
            options: [
                'uname : nome del sistema',
                'uname -a : tutte le informazioni',
                'uname -r : versione kernel',
                'uname -m : architettura'
            ]
        },
        {
            name: 'useradd',
            description: 'Aggiunge utente (basso livello)',
            options: [
                'useradd username : crea utente base',
                'useradd -m username : con home directory',
                'useradd -s /bin/bash username : con shell specifica'
            ]
        },
        {
            name: 'usermod',
            description: 'Modifica account utente',
            options: [
                'usermod -aG gruppo username : aggiunge a gruppo',
                'usermod -s /bin/bash username : cambia shell',
                'usermod -l newname oldname : rinomina utente'
            ]
        }
    ],
    'v': [
        {
            name: 'vi',
            description: 'Editor di testo vi/vim',
            options: [
                'vi file : apre file nell\'editor',
                'vi +10 file : va alla riga 10',
                'vim file : versione migliorata di vi'
            ]
        },
        {
            name: 'vmstat',
            description: 'Statistiche memoria virtuale',
            options: [
                'vmstat : statistiche sistema',
                'vmstat 2 : aggiorna ogni 2 secondi',
                'vmstat -d : statistiche disco'
            ]
        }
    ],
    'w': [
        {
            name: 'wc',
            description: 'Conta righe, parole e caratteri',
            options: [
                'wc file : conta righe, parole, caratteri',
                'wc -l file : conta solo righe',
                'wc -w file : conta solo parole',
                'wc -c file : conta solo caratteri'
            ]
        },
        {
            name: 'wget',
            description: 'Scarica file da web',
            options: [
                'wget url : scarica file',
                'wget -O nome url : salva con nome specifico',
                'wget -r url : download ricorsivo',
                'wget -c url : riprende download interrotto'
            ]
        },
        {
            name: 'which',
            description: 'Mostra percorso di un comando',
            options: [
                'which comando : mostra percorso completo',
                'which -a comando : mostra tutti i percorsi'
            ]
        },
        {
            name: 'who',
            description: 'Mostra utenti loggati',
            options: [
                'who : utenti attualmente loggati',
                'who -a : informazioni dettagliate',
                'whoami : mostra utente corrente'
            ]
        },
        {
            name: 'watch',
            description: 'Esegue comando ripetutamente',
            options: [
                'watch comando : esegue ogni 2 secondi',
                'watch -n 5 comando : ogni 5 secondi',
                'watch -d comando : evidenzia differenze'
            ]
        },
        {
            name: 'whoami',
            description: 'Mostra nome utente corrente',
            options: [
                'whoami : nome utente corrente'
            ]
        }
    ],
    'x': [
        {
            name: 'xargs',
            description: 'Costruisce ed esegue comandi da input',
            options: [
                'find . -name "*.tmp" | xargs rm : rimuove file trovati',
                'echo "1 2 3" | xargs -n 1 echo : un argomento per riga',
                'ls | xargs -I {} mv {} {}.bak : rinomina con backup'
            ]
        },
        {
            name: 'xdg-open',
            description: 'Apre file o URL con applicazione predefinita',
            options: [
                'xdg-open file : apre file con applicazione predefinita',
                'xdg-open http://example.com : apre URL nel browser',
                'xdg-open /path/to/directory : apre directory nel file manager',
                'xdg-open index.html : apre file HTML nel browser'
            ]
        },
        {
            name: 'xxd',
            description: 'Dump esadecimale',
            options: [
                'xxd file : dump esadecimale',
                'xxd -r file : reverse (da hex a binario)',
                'xxd -l 100 file : primi 100 byte'
            ]
        }
    ],
    'y': [
        {
            name: 'yes',
            description: 'Ripete una stringa infinitamente',
            options: [
                'yes : stampa "y" infinitamente',
                'yes "testo" : stampa "testo" infinitamente',
                'yes | comando : fornisce "y" a tutti i prompt'
            ]
        }
    ],
    'z': [
        {
            name: 'zip',
            description: 'Comprime file in archivi ZIP',
            options: [
                'zip archive.zip file1 file2 : crea archivio',
                'zip -r archive.zip dir/ : include directory',
                'unzip archive.zip : estrae archivio',
                'zip -u archive.zip newfile : aggiunge/aggiorna file'
            ]
        },
        {
            name: 'zcat',
            description: 'Visualizza file compressi',
            options: [
                'zcat file.gz : mostra contenuto file compresso',
                'zcat file.gz | grep pattern : cerca in file compresso'
            ]
        }
    ]
};

const moreLinuxCommands = {
    'a': [
        {
            name: 'arp',
            description: 'Visualizza/modifica tabella ARP',
            options: [
                'arp -a : mostra tabella ARP',
                'arp -d host : rimuove entry ARP',
                'arp -s host mac : aggiunge entry statica'
            ]
        },
        {
            name: 'arch',
            description: 'Mostra architettura macchina',
            options: [
                'arch : architettura del processore'
            ]
        }
    ],
    'b': [
        {
            name: 'blkid',
            description: 'Identifica dispositivi a blocchi',
            options: [
                'blkid : lista tutti i dispositivi',
                'blkid /dev/sda1 : info su dispositivo specifico',
                'blkid -s UUID /dev/sda1 : solo UUID'
            ]
        },
        {
            name: 'base64',
            description: 'Codifica/decodifica base64',
            options: [
                'base64 file : codifica file',
                'base64 -d file : decodifica file',
                'echo "testo" | base64 : codifica stringa'
            ]
        }
    ],
    'c': [
        {
            name: 'cmp',
            description: 'Confronta due file byte per byte',
            options: [
                'cmp file1 file2 : confronta file',
                'cmp -l file1 file2 : mostra tutte le differenze',
                'cmp -s file1 file2 : modalità silenziosa'
            ]
        },
        {
            name: 'column',
            description: 'Formatta testo in colonne',
            options: [
                'column -t file : allinea colonne',
                'column -s: -t file : usa : come separatore',
                'ls -l | column -t : formatta output ls'
            ]
        },
        {
            name: 'comm',
            description: 'Confronta file ordinati riga per riga',
            options: [
                'comm file1 file2 : mostra linee uniche/comuni',
                'comm -12 file1 file2 : solo linee comuni',
                'comm -3 file1 file2 : rimuove linee comuni'
            ]
        }
    ],
    'd': [
        {
            name: 'dig',
            description: 'Tool DNS avanzato',
            options: [
                'dig hostname : query DNS completa',
                'dig @8.8.8.8 hostname : usa server DNS specifico',
                'dig MX domain : record MX',
                'dig +short hostname : output conciso'
            ]
        },
        {
            name: 'dpkg',
            description: 'Gestore pacchetti Debian',
            options: [
                'dpkg -l : lista pacchetti installati',
                'dpkg -i package.deb : installa pacchetto',
                'dpkg -r package : rimuove pacchetto',
                'dpkg -L package : lista file del pacchetto'
            ]
        }
    ],
    'e': [
        {
            name: 'ethtool',
            description: 'Configura interfacce Ethernet',
            options: [
                'ethtool eth0 : info interfaccia',
                'ethtool -s eth0 speed 100 : imposta velocità',
                'ethtool -k eth0 : mostra funzionalità'
            ]
        },
        {
            name: 'expand',
            description: 'Converte tab in spazi',
            options: [
                'expand file : converte tab in spazi',
                'expand -t 4 file : usa 4 spazi per tab'
            ]
        }
    ],
    'f': [
        {
            name: 'fdisk',
            description: 'Gestisce partizioni disco',
            options: [
                'fdisk -l : lista partizioni',
                'fdisk /dev/sda : modifica partizioni',
                'fdisk -s /dev/sda1 : dimensione partizione'
            ]
        },
        {
            name: 'fmt',
            description: 'Formatta paragrafi di testo',
            options: [
                'fmt file : formatta con larghezza 75',
                'fmt -w 60 file : larghezza 60 caratteri',
                'fmt -s file : divide solo su spazi'
            ]
        },
        {
            name: 'fuser',
            description: 'Identifica processi che usano file',
            options: [
                'fuser file : PID processi che usano file',
                'fuser -k file : termina processi',
                'fuser -m /mnt : processi che usano mountpoint'
            ]
        }
    ],
    'g': [
        {
            name: 'gpg',
            description: 'Crittografia GNU Privacy Guard',
            options: [
                'gpg --gen-key : genera chiave',
                'gpg -c file : cripta file',
                'gpg -d file.gpg : decripta file',
                'gpg --list-keys : lista chiavi'
            ]
        }
    ],
    'h': [
        {
            name: 'hexdump',
            description: 'Dump esadecimale di file',
            options: [
                'hexdump file : dump esadecimale',
                'hexdump -C file : formato canonico',
                'hexdump -n 100 file : primi 100 byte'
            ]
        },
        {
            name: 'host',
            description: 'DNS lookup semplice',
            options: [
                'host hostname : risoluzione DNS',
                'host -t MX domain : record MX',
                'host -a hostname : tutti i record'
            ]
        }
    ],
    'i': [
        {
            name: 'iconv',
            description: 'Conversione encoding caratteri',
            options: [
                'iconv -f utf8 -t latin1 file : converte encoding',
                'iconv -l : lista encoding supportati'
            ]
        },
        {
            name: 'iotop',
            description: 'Monitor I/O per processi',
            options: [
                'iotop : monitor I/O processi',
                'iotop -o : solo processi attivi I/O',
                'iotop -u user : processi di utente specifico'
            ]
        }
    ],
    'j': [
        {
            name: 'join',
            description: 'Unisce righe di due file su campo comune',
            options: [
                'join file1 file2 : unisce su primo campo',
                'join -t: -1 2 -2 3 file1 file2 : campo 2 di file1 con campo 3 di file2',
                'join -v 1 file1 file2 : righe solo in file1'
            ]
        }
    ],
    'l': [
        {
            name: 'last',
            description: 'Mostra ultimi login',
            options: [
                'last : ultimi login utenti',
                'last username : login di utente specifico',
                'last -n 10 : ultimi 10 login'
            ]
        },
        {
            name: 'ldd',
            description: 'Mostra dipendenze librerie condivise',
            options: [
                'ldd /bin/ls : dipendenze del comando ls',
                'ldd -v binary : output verbose'
            ]
        },
        {
            name: 'logrotate',
            description: 'Ruota log file',
            options: [
                'logrotate /etc/logrotate.conf : ruota log',
                'logrotate -d config : test configurazione',
                'logrotate -f config : forza rotazione'
            ]
        }
    ],
    'm': [
        {
            name: 'make',
            description: 'Utility di build',
            options: [
                'make : compila usando Makefile',
                'make target : compila target specifico',
                'make -j4 : usa 4 job paralleli',
                'make clean : pulisce file compilati'
            ]
        },
        {
            name: 'mmv',
            description: 'Rinomina multipli file',
            options: [
                'mmv "*.txt" "#1.bak" : rinomina .txt in .bak',
                'mmv "*" "prefix_#1" : aggiunge prefisso'
            ]
        }
    ],
    'n': [
        {
            name: 'nc',
            description: 'Netcat - TCP/UDP swiss army knife',
            options: [
                'nc -l 8080 : ascolta su porta 8080',
                'nc host 80 : connette a host porta 80',
                'nc -z host 22-80 : scan porte',
                'nc -u host 53 : connessione UDP'
            ]
        },
        {
            name: 'nice',
            description: 'Esegue comando con priorità modificata',
            options: [
                'nice -n 10 comando : priorità bassa',
                'nice -n -5 comando : priorità alta',
                'renice 5 -p PID : cambia priorità processo esistente'
            ]
        },
        {
            name: 'nl',
            description: 'Numera righe di file',
            options: [
                'nl file : numera tutte le righe',
                'nl -b a file : numera anche righe vuote',
                'nl -n rz file : padding zeri'
            ]
        }
    ],
    'o': [
        {
            name: 'openssl',
            description: 'Toolkit crittografico',
            options: [
                'openssl genrsa -out key.pem 2048 : genera chiave RSA',
                'openssl req -new -key key.pem -out cert.csr : genera CSR',
                'openssl x509 -in cert.pem -text : mostra certificato',
                'openssl enc -aes256 -in file -out file.enc : cripta file'
            ]
        }
    ],
    'p': [
        {
            name: 'paste',
            description: 'Unisce righe di file',
            options: [
                'paste file1 file2 : unisce per colonne',
                'paste -d: file1 file2 : usa : come separatore',
                'paste -s file : tutte righe su una riga'
            ]
        },
        {
            name: 'pidof',
            description: 'Trova PID di un processo',
            options: [
                'pidof nome : trova PID per nome',
                'pidof -s nome : solo primo PID'
            ]
        }
    ],
    'r': [
        {
            name: 'route',
            description: 'Visualizza/modifica tabella routing',
            options: [
                'route -n : tabella routing numerica',
                'route add default gw gateway : aggiunge route default',
                'route del -net network : rimuove route'
            ]
        },
        {
            name: 'rpm',
            description: 'Gestore pacchetti RPM',
            options: [
                'rpm -qa : lista tutti i pacchetti',
                'rpm -i package.rpm : installa pacchetto',
                'rpm -e package : rimuove pacchetto',
                'rpm -ql package : lista file del pacchetto'
            ]
        }
    ],
    's': [
        {
            name: 'screen',
            description: 'Multiplexer terminale',
            options: [
                'screen : avvia nuova sessione',
                'screen -S nome : sessione con nome',
                'screen -ls : lista sessioni',
                'screen -r nome : riattacca sessione'
            ]
        },
        {
            name: 'seq',
            description: 'Genera sequenze numeriche',
            options: [
                'seq 10 : numeri da 1 a 10',
                'seq 5 15 : da 5 a 15',
                'seq 1 2 10 : da 1 a 10 step 2'
            ]
        },
        {
            name: 'sha256sum',
            description: 'Calcola hash SHA256',
            options: [
                'sha256sum file : calcola SHA256',
                'sha256sum -c checksums.sha256 : verifica hash'
            ]
        },
        {
            name: 'strings',
            description: 'Estrae stringhe da file binari',
            options: [
                'strings binary : estrae stringhe',
                'strings -n 6 binary : minimo 6 caratteri',
                'strings -t x binary : offset esadecimali'
            ]
        },
        {
            name: 'strace',
            description: 'Traccia system call',
            options: [
                'strace comando : traccia system call',
                'strace -p PID : traccia processo esistente',
                'strace -e open comando : solo chiamate open'
            ]
        }
    ],
    't': [
        {
            name: 'tcpdump',
            description: 'Cattura pacchetti di rete',
            options: [
                'tcpdump -i eth0 : cattura su interfaccia',
                'tcpdump port 80 : solo traffico HTTP',
                'tcpdump -w file.pcap : salva su file',
                'tcpdump -r file.pcap : legge da file'
            ]
        },
        {
            name: 'tmux',
            description: 'Terminal multiplexer',
            options: [
                'tmux : avvia nuova sessione',
                'tmux new -s nome : sessione con nome',
                'tmux list-sessions : lista sessioni',
                'tmux attach -t nome : attacca a sessione'
            ]
        },
        {
            name: 'tree',
            description: 'Visualizza directory ad albero',
            options: [
                'tree : struttura ad albero',
                'tree -a : include file nascosti',
                'tree -L 2 : massimo 2 livelli',
                'tree -d : solo directory'
            ]
        }
    ],
    'u': [
        {
            name: 'unexpand',
            description: 'Converte spazi in tab',
            options: [
                'unexpand file : converte spazi in tab',
                'unexpand -t 4 file : usa tab ogni 4 spazi'
            ]
        },
        {
            name: 'units',
            description: 'Conversione unità di misura',
            options: [
                'units : conversione interattiva',
                'units "100 km" "miles" : converte km in miglia'
            ]
        }
    ],
    'w': [
        {
            name: 'wall',
            description: 'Invia messaggio a tutti gli utenti',
            options: [
                'wall "messaggio" : invia a tutti',
                'echo "msg" | wall : da stdin'
            ]
        },
        {
            name: 'whatis',
            description: 'Breve descrizione comando',
            options: [
                'whatis comando : descrizione breve',
                'whatis -w pattern : con wildcard'
            ]
        },
        {
            name: 'whereis',
            description: 'Localizza binario, sorgente e manuale',
            options: [
                'whereis comando : trova binario/manuale',
                'whereis -b comando : solo binario',
                'whereis -m comando : solo manuale'
            ]
        }
    ],
    'x': [
        {
            name: 'xz',
            description: 'Compressione XZ',
            options: [
                'xz file : comprime file',
                'xz -d file.xz : decomprime',
                'xz -9 file : massima compressione'
            ]
        }
    ],
    'y': [
        {
            name: 'yum',
            description: 'Gestore pacchetti YUM (RedHat/CentOS)',
            options: [
                'yum install package : installa pacchetto',
                'yum update : aggiorna sistema',
                'yum search keyword : cerca pacchetti',
                'yum remove package : rimuove pacchetto'
            ]
        }
    ],
    'z': [
        {
            name: 'zgrep',
            description: 'Grep su file compressi',
            options: [
                'zgrep pattern file.gz : cerca in file compresso',
                'zgrep -i pattern file.gz : ignora maiuscole/minuscole'
            ]
        }
    ]
};