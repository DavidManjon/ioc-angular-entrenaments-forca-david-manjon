# Entrenaments de força

## Autor

David Manjon

## Descripció

Aplicació web desenvolupada amb Angular per consultar, cercar, filtrar i crear exercicis relacionats amb els entrenaments de força.

L'aplicació es comunica amb una API REST local mitjançant serveis Angular i utilitza formularis reactius i formularis basats en plantilles.

## Versions utilitzades

- Node.js 24.22.2
- npm 11.11.0
- Angular 22.2.4
- Angular CLI 22.2.5
- TypeScript 6.0.3
- Git 2.x

## Branca de treball

`ra3-serveis`

## Instal·lació i execució

Per instal·lar les dependències:

```bash
npm install
```

Per iniciar el servidor de desenvolupament d'Angular:

```bash
npm start
```

L'aplicació estarà disponible a:

http://localhost:4200

## API local

El projecte utilitza `json-server` per simular una API REST local.

Les dades inicials es troben al fitxer `db.json`.

Per iniciar el servidor de l'API:

```bash
npm run api
```

L'API estarà disponible a:

http://localhost:3000/exercicis

Cal mantenir oberts dos terminals: un per a l'API i un altre per al servidor d'Angular.

## Serveis

El servei principal és `ExercicisService`, ubicat a:

`src/app/services/exercicis.service.ts`

S'encarrega de:

- Consultar els exercicis mitjançant peticions HTTP GET.
- Crear exercicis mitjançant peticions HTTP POST.
- Adaptar les dades de l'API al model intern.
- Gestionar els estats de càrrega i error.
- Permetre repetir l'última consulta.
- Utilitzar RxJS per gestionar les operacions asíncrones.

La URL base de l'API està centralitzada a:

`src/app/core/config/api.config.ts`

## Models i adaptadors

El projecte separa el model de dades de l'API del model intern de l'aplicació.

- `exercici-api.model.ts`: defineix l'estructura de les dades rebudes de l'API.
- `exercici.model.ts`: defineix el model intern.
- `exercici.adapter.ts`: transforma i normalitza les dades rebudes.

## Components creats

- `ExerciciList`: mostra el llistat d'exercicis.
- `ExerciciCard`: mostra la informació de cada exercici i permet seleccionar-lo.
- `CategoriaBadge`: mostra la categoria de l'exercici.
- `ExerciciFilters`: permet cercar exercicis i filtrar-los per categoria.

## Formularis

El projecte incorpora dos tipus de formularis:

- Formulari de filtres amb formularis reactius d'Angular (`ReactiveFormsModule`).
- Formulari de creació d'exercicis amb formularis basats en plantilles (`FormsModule` i `ngModel`).

El formulari de cerca incorpora validacions síncrones i asíncrones, retard de 500 mil·lisegons abans de consultar l'API i historial de cerques mitjançant `localStorage`.

L'historial conserva les cinc cerques més recents i permet recuperar-les.

## Funcionalitats implementades

- Consulta d'exercicis des de l'API local.
- Creació de nous exercicis mitjançant una petició POST.
- Adaptació de dades entre el model API i el model intern.
- Cerca per nom i descripció.
- Filtratge per categoria.
- Validacions síncrones i asíncrones.
- Historial de cerques amb `localStorage`.
- Gestió dels estats de càrrega i error.
- Banner d'error amb botó per reintentar la consulta.
- Control de flux amb `@if`, `@else` i `@for`.
- Selecció d'un exercici i visualització del seu detall.
- Format de dates amb `DatePipe`.

## Accessibilitat i disseny responsive

S'ha incorporat:

- Enllaç per saltar directament al contingut principal.
- Etiquetes associades als camps dels formularis.
- Estils de focus visibles per a la navegació amb teclat.
- Missatges d'error amb `role="alert"`.
- Missatges d'estat amb `role="status"` i `aria-live`.
- Disseny adaptable a escriptori i dispositius mòbils.

## Documentació tècnica

La documentació addicional es troba a la carpeta `docs`:

- `docs/models.md`: documentació dels models i adaptadors.
- `docs/serveis.md`: documentació del servei i de la comunicació amb l'API.
- `docs