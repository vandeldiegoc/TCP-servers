### TCP-Service


![](https://assets.website-files.com/5ff66329429d880392f6cba2/627cb3f27138814b179c1d86_tcp%20Preview.jpg)


![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge) ![Python Badge](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge)
Este es un sencillo cliente TCP implementado en Python que permite enviar mensajes a un servicio server en Node.js para recivir y transmitir entre ellos actualizar el estado de equipos mediante un CLI (Command-line interface).


## **inicializar  servidor **

navega hacia el directorio server y corre el comando:
```bash
npm i
npm run tsc 
node dist/server.js 
```


## **inicializar al cliente**
navega hacia el directorio client y corre el comando:
```bash
python3 client.py
```

##  Como user el  CLIENT CLI
```bash
Conexión establecida con localhost:8000
Ingrese el código del equipo en decimal: 3003 
¿El equipo está conectado? (1 para conectado, 0 para desconectado, D para eliminar): 1
{"equipo":"bbb","estado":"conectado"}
Ingrese el código del equipo en decimal: 3002
¿El equipo está conectado? (1 para conectado, 0 para desconectado, D para eliminar): 0
{"equipo":"bba","estado":"desconectado"}
Ingrese el código del equipo en decimal: show
database  show
{"bbb":{"equipo":"bbb","estado":"conectado"},"bba":{"equipo":"bba","estado":"desconectado"}}
Ingrese el código del equipo en decimal: 3002
¿El equipo está conectado? (1 para conectado, 0 para desconectado, D para eliminar): D
{"status":"delete"}
Ingrese el código del equipo en decimal: show
database  show
{"bbb":{"equipo":"bbb","estado":"conectado"}}
```
