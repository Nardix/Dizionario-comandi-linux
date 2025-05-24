# Usa una immagine base di nginx per servire i file statici
FROM nginx:alpine

# Copia tutti i file del dizionario nella directory di default di nginx
COPY . /usr/share/nginx/html

# Espone la porta 80
EXPOSE 80

# Nginx parte automaticamente come entrypoint