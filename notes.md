## Arquitectura basada en módulos (Modular/Feature-based Architecture)

### 🧩 ¿Qué es la arquitectura basada en módulos (feature-based)?
Es un enfoque donde se organiza la aplicación por funcionalidades (features), no por tipos de archivos (como componentes o servicios). Cada módulo contiene todo lo necesario para funcionar de forma autónoma: componentes, servicios, modelos, rutas, etc.

### Folders
```
src/
│
├── app/
│   ├── core/                      # 🧠 Servicios de configuración global
│   │   ├── services/              # AuthService, Interceptors, Guards
│   │   └── core.module.ts
│   │
│   ├── shared/                    # 📦 Componentes, pipes y directivas reutilizables
│   │   ├── components/
│   │   ├── pipes/
│   │   └── shared.module.ts
│   │
│   ├── features/                  # 🌟 Módulos funcionales (organizados por dominio)
│   │   ├── auth/
│   │   │   ├── pages/             # LoginPage, RegisterPage
│   │   │   ├── components/        # LoginFormComponent
│   │   │   ├── services/          # AuthService
│   │   │   ├── models/            # User model, AuthRequest
│   │   │   ├── store/             # Opcional: NgRx o Signals para estado
│   │   │   └── auth.module.ts
│   │   │
│   │   ├── dashboard/
│   │   ├── profile/
│   │   └── products/
│   │
│   ├── layout/                    # 📐 Componentes globales como navbar, sidebar, footer
│   │   ├── layout.component.ts
│   │   └── layout.module.ts
│   │
│   ├── app-routing.module.ts     # Rutas principales que importan módulos por lazy load
│   └── app.module.ts             # Importa core, layout, etc.
│
├── assets/
└── environments/
```

### 🧱 Principios clave
1. División por características, no por tipo de archivo.

2. Encapsulamiento de lógica por módulo.

3. Separación clara entre core, shared, y features.

4. Alta cohesión y bajo acoplamiento.


### 🧠 Roles de cada carpeta

| Carpeta                 | Función                                                                |
| ----------------------- | ---------------------------------------------------------------------- |
| `core/`                 | Código singleton global: interceptors, guards, config, servicios base. |
| `shared/`               | Componentes, pipes, directivas y módulos compartidos entre features.   |
| `features/`             | Contiene módulos aislados por dominio funcional.                       |
| `layout/`               | Layout general que envuelve toda la app (navbar, sidebar, etc.).       |
| `app-routing.module.ts` | Define rutas principales y lazy loading.                               |


### 📦 Ejemplo: features/products/

```
products/
├── components/
│   └── product-card.component.ts
├── pages/
│   ├── product-list.page.ts
│   └── product-detail.page.ts
├── services/
│   └── product.service.ts
├── models/
│   └── product.model.ts
├── store/                      # Opcional
│   ├── product.actions.ts
│   ├── product.reducer.ts
│   └── product.selectors.ts
├── products-routing.module.ts
└── products.module.ts

```

### ✅ Ventajas de esta arquitectura
- Escalable: puedes agregar nuevas features como módulos independientes.

- Reutilizable: compartes solo lo necesario en shared/.

- Legible: todo lo relacionado a una feature está en un solo lugar.

- Permite lazy loading fácilmente.

- Excelente para equipos distribuidos o colaborativos.