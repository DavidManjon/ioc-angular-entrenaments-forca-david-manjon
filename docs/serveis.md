# Documentació dels serveis

## Servei d'exercicis

El servei principal de comunicació amb l'API és `ExercicisService`, ubicat a:

`src/app/services/exercicis.service.ts`

Aquest servei centralitza les peticions HTTP i evita que els components hagin de construir URLs o comunicar-se directament amb l'API.

## Configuració de l'API

La URL base es defineix a:

`src/app/core/config/api.config.ts`

```ts
export const API_BASE_URL = 'http://localhost:3000';
```

L'endpoint utilitzat per gestionar els exercicis és:

`http://localhost:3000/exercicis`

## Operacions disponibles

- **GET:** obté el llistat d'exercicis de l'API.
- **POST:** crea un exercici nou.
- **Adaptació de dades:** transforma les respostes del model API al model intern mitjançant els adaptadors.
- **Reintentar:** permet repetir l'última consulta al llistat.

## Gestió dels estats

El servei exposa els observables següents:

- `exercicis$`: llistat d'exercicis adaptats.
- `carregant$`: indica si s'està carregant informació.
- `error$`: informa dels errors de comunicació amb l'API.

La càrrega de dades utilitza RxJS, especialment `switchMap`, `catchError`, `finalize` i `shareReplay`.

## Gestió d'errors

Quan l'API no respon, el servei actualitza l'estat d'error i el component mostra un missatge accessible amb un botó per tornar a intentar la consulta.

## Inici de l'API local

Per iniciar el servidor JSON:

```bash
npm run api
```

L'API queda disponible al port 3000.