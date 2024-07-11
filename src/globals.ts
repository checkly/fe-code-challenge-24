import { pascalCase } from '@/formatters'
import type { App } from 'vue'

interface ModuleImportInterface {
  default: object
}

export const GlobalComponents = {
  install(app: App) {
    register(import.meta.glob('./components/library/**/*.vue', { eager: true }), 'Base')

    function register(
      files: Record<string, ModuleImportInterface>,
      prefix: string | undefined = ''
    ) {
      Object.entries(files).forEach(([filePath, module]) => {
        const componentName = filePath
          .split('/')
          .pop()
          ?.replace(/\.\w+$/, '')
        if (!componentName) {
          return
        }
        app.component(prefix + pascalCase(componentName), (module as ModuleImportInterface).default)
      })
    }
  }
}
