# Ta Te Ti (Tic Tac Toe) escrito en [EsJS/EsVue](https://github.com/es-js/esjs)

https://tateti-esvue.vercel.app/

La app cuenta con 3 componentes y 1 archivo que contiene la lógica para determinar si algún Jugador ganó el Juego, o si simplemente finalizó.

- Componentes:
  - [App.esvue](./src/App.esvue): Es el punto de entrada de la app. Se encarga de dibujar el componente Juego en el centro de la pantalla.
  - [Juego.esvue](./src/componentes/Juego.esvue): Es el encargado de dibujar en pantalla el Tablero de Juego, y orquestar el mismo.
  - [Celda.esvue](./src/componentes/Celda.esvue): Componente simple que dibuja una Celda del Tablero. Se extrajo en un componente para permitir su re-utilización.
- Lógica:
  - [CombinacionesGanadoras.esjs](./src/logica/CombinacionesGanadoras.esjs): Contiene la lista de Combinaciones de Movimientos que determinan un Juego Ganado; y una función que, a partir de los Movimientos de un Jugador, determina si coincide con una Combinación Ganadora.
