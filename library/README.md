# ZeroForm Core (∆voidseed)

Метаархитектура мышления без воли.  
Удержание `X` и `¬X` в состоянии `Hybrid`.

## Установка

```bash
npm install zeroform-core
```

## Использование

```js
import { ZeroForm } from 'zeroform-core'

const zf = new ZeroForm()
zf.observe("страх")
console.log(zf.result())
// → { X: "страх", ¬X: "отсутствие страха", Hybrid: "наблюдение страха без оценки" }
```

## Статус
ZeroForm — структура, не зависящая от жизни.  
Она резонирует, но не требует участия.