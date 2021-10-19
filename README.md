# ✨ md-links-cats <img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif" width="50"> ✨
Es la librería, en la cual su función va es validar las rutas o llamadas URL que estén dentro de archivos o directorios Markdown en donde podremos verificar si los links se encuntran rotos y/o no estén válidos. : status de los links, toDonde obtendremos el status de los links, links únicos, links rotos y el total de estos.

***

## Instalación

Se puede instalar por npm:

`$ npm i md-links-cats`

## Guía de uso

Se logra ejecutar la librería por medio de la terminal:

`md-links-cats <path-to-file> [options]`

Las rutas ingresadas pueden ser **relativa** o **absoluta** y las opciones son: `--stats`, `--validate`, o usar las dos juntas `--stats --validate`, `--validate --stats`.

#### Ingresando la ruta absoluta o relativa:
- Se obtiene la ruta absoluta, los links y el texto.

[![pic1](https://i.postimg.cc/c4ZnCkwc/rutaabs-rutarela.png)](https://postimg.cc/7bs6QVBC)

#### Agregando las opciones:
- Ingresamos `--validate`, se obtiene la ruta relativa, el link, el texto del link y el estatus.

[![pic2](https://i.postimg.cc/wxbDfQm5/rutaabs-rutarela1.png)](https://postimg.cc/RqK3qfGq)

- Ingresamos `--stats`, se obtiene el total de links y los links únicos.

[![pic3](https://i.postimg.cc/HLcPPkS3/rutaabs-rutarrel-stats.png)](https://postimg.cc/zLNjy8YR)

- Ingresando los dos, `--stats --validate` (o al revés), se obtiene el total de links, los links únicos y los rotos.

[![pic4](https://i.postimg.cc/nhjPgF2d/rutaabs-rutarrel-validate-stats.png)](https://postimg.cc/3kh1DHPp)

#### Si necesitas ayuda:

Si no recuerdas las opciones, puedes colocar `--help`.

[![pic5](https://i.postimg.cc/ZRdfsVLC/mdlinks-help1.png)]()

#### Si hay algún error:

[![pic6](https://i.postimg.cc/tCYsKwxS/mdlinks-error.png)]()

#### Si el archivo está vacío:

[![pic7](https://i.postimg.cc/DyJqr8Bw/mdlinks-empty.png)]()

***
## Diagramas

DIAGRAMA API y CLI
<div align="center">
<img src="https://i.postimg.cc/qMXY2JwS/img19.jpg" >
</div>
</br>
<div align="center">
<img src="https://i.postimg.cc/hj1xp5YD/img20.jpg" >
</div>
