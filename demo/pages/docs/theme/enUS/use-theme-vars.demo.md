# useThemeVars

iThinkDT UI provides `useThemeVars`. It contains common theme variables.

```html
<pre style="overflow: auto;">{{ themeVars }}</pre>
```

```js
import { defineComponent } from 'vue'
import { useThemeVars } from 'ithinkdt-ui'

export default defineComponent({
  setup() {
    return {
      themeVars: useThemeVars()
    }
  }
})
```
