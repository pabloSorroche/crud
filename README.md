/src
├── domain
│   ├── models          # Lógica de negocio pura
│   ├── value-objects   # Tipos con lógica interna (ej: Email)
│   ├── repositories    # Interfaces abstractas
│   └── services        # Casos de uso del dominio
│
├── application
│   ├── use-cases       # Coordinan operaciones del dominio
│   └── dto             # Data Transfer Objects
│
├── infrastructure
│   ├── db              # Conexión y modelos de BD
│   ├── repositories    # Implementaciones reales de interfaces
│   └── services        # Servicios externos (por ejemplo, email)
│
├── interfaces
│   └── http
│       ├── routes      # Definición de endpoints
│       ├── controllers # Controladores que llaman a los use-cases
│       └── middlewares
│
├── shared              # Errores, tipos comunes, helpers
└── index.ts            # Punto de entrada