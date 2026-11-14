# Documentació dels formularis

## Formulari de filtres i cerca

El formulari de cerca es troba al component:

`src/app/components/exercici-filters/exercici-filters.component.ts`

Utilitza formularis reactius d'Angular mitjançant `ReactiveFormsModule`.

### Camps del formulari

- `textCerca`: permet cercar exercicis pel nom o la descripció.
- `categoriaSeleccionada`: permet seleccionar una categoria d'exercicis.

### Validacions

El camp de cerca incorpora:

- `Validators.required`: obliga a introduir un terme.
- `Validators.minLength(3)`: exigeix un mínim de tres caràcters.
- Validació asíncrona: comprova mitjançant el servei si existeixen exercicis que coincideixin amb el terme introduït.

La validació asíncrona aplica un retard de 500 mil·lisegons abans de consultar l'API.

Es mostren missatges d'error quan el camp no compleix les validacions o quan no es troben resultats.

## Historial de cerques

Les cerques vàlides s'emmagatzemen a `localStorage`.

Característiques:

- Es conserven les cinc cerques més recents.
- S'eviten duplicats consecutius.
- Es poden recuperar cerques anteriors.
- Les operacions de lectura i escriptura utilitzen `try/catch` per gestionar possibles errors d'emmagatzematge.

## Formulari de creació d'exercicis

El formulari de creació es troba a:

`src/app/app.component.html`

Utilitza formularis basats en plantilles d'Angular mitjançant `FormsModule` i `ngModel`.

Permet introduir:

- Nom de l'exercici.
- Descripció.
- Categoria.
- Data.
- Nombre de sèries.
- Indicador d'exercici destacat.

Quan s'envia el formulari, es crida el mètode `crearExercici()` del component, que utilitza `ExercicisService` per enviar les dades a l'API mitjançant una petició POST.

## Accessibilitat

Els formularis incorporen etiquetes associades als camps mitjançant els atributs `for` i `id`.

Els missatges de validació utilitzen `role="alert"` i els missatges d'estat utilitzen `role="status"` i `aria-live="polite"`.