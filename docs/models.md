# Models i adaptador de dades

## 1. Model de l'API

El model `ExerciciApi`, definit a `src/app/models/exercici-api.model.ts`, representa l'estructura de les dades que rebem de l'API local JSON Server.

## 2. Model intern

El model `Exercici`, definit a `src/app/models/exercici.model.ts`, representa l'estructura que utilitza l'aplicació Angular.

Inclou el camp addicional `nivell`, que no existeix en les dades originals de l'API.

## 3. Mapeig de dades

| Camp API | Camp intern | Transformació |
|---|---|---|
| id | id | Conversió numèrica amb `Number()` i valor per defecte 0 |
| nom | nom | Eliminació d'espais amb `trim()` i valor per defecte |
| descripcio | descripcio | Eliminació d'espais amb `trim()` i valor per defecte |
| categoria | categoria | Eliminació d'espais amb `trim()` i valor per defecte `Altres` |
| data | data | Eliminació d'espais amb `trim()` i data per defecte |
| series | series | Conversió numèrica i control perquè no sigui negativa |
| destacat | destacat | Valor per defecte `false` si no existeix |
| No existeix | nivell | Valor per defecte `Principiant` |

## 4. Adaptador

L'adaptador es troba a `src/app/adapters/exercici.adapter.ts`.

La funció `adaptarExercici()` transforma un exercici de l'API en un exercici del model intern.

La funció `adaptarExercicis()` aplica aquesta transformació a tota la llista rebuda.

## 5. Ús a l'aplicació

El servei `src/app/services/exercicis.service.ts` consulta l'API mitjançant `HttpClient` i aplica l'adaptador amb l'operador `map()` de RxJS.

El component principal `src/app/app.component.ts` rep les dades ja adaptades i les mostra a través del component `ExerciciList`.
