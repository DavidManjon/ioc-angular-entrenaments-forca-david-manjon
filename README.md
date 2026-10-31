# Entrenaments de forca

## Autor/a

David Manjon

## Descripcio

Aplicacio Angular.

Versions utilitzades

- Node.js 24.22.2
- npm
- Angular 22.2.4
- Angular CLI 22.2.5
- TypeScript 6.0.3
- Git 2.x

Branca de treball

ra2-components

Instal·lació i execució

Per instal·lar les dependències:

- npm install

Per iniciar el servidor de desenvolupament:

- npx ng serve

L'aplicació estarà disponible a:

http://localhost:4200

Per compilar el projecte:

- npx ng build

Components creats

- ExerciciList: mostra el llistat d'exercicis.
- ExerciciCard: mostra la informació de cada exercici i permet seleccionar-lo.
- CategoriaBadge: mostra la categoria de l'exercici.
- ExerciciFilters: permet cercar exercicis per nom i filtrar-los per categoria mitjançant un formulari validat.

Funcionalitats implementades

- Model de dades Exercici i dades fictícies.
- Comunicació entre components mitjançant @Input i @Output.
- Formulari de filtres amb validació.
- Control de flux amb @if, @else i @for.
- Comptador de resultats i missatge quan no hi ha coincidències.
- Selecció d'un exercici i visualització del seu detall.
- Format de dates amb el pipe DatePipe.
- Accessibilitat mitjançant enllaç de salt, focus visible, etiquetes associades i avisos d'estat.
- Disseny responsive per a escriptori i dispositius mòbils.

Accessibilitat i disseny responsive

S'ha incorporat un enllaç per saltar directament al contingut principal, estils de focus visibles per a la navegació amb teclat i associació entre els camps del formulari i les seves etiquetes.

El comptador de resultats utilitza role="status" i aria-live="polite" per els canvis.

El llistat mostra dues columnes en escriptori i una columna en pantalles de fins a 700 px.

Compilació

El projecte s'ha comprovat amb:

- npx ng build