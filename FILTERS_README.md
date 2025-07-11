# Sistema de Filtros para Data Table

## Descripción

Se ha implementado un sistema completo de filtros para el Data Table que permite filtrar los procesos según los siguientes criterios:

### Query Parameters Soportados

- `no_id_paciente`: ID del paciente (opcional)
- `estado`: Estado del proceso (por defecto: "PENDIENTE")
- `fecha_inicio`: Fecha de inicio del rango (por defecto: primer día del mes actual)
- `fecha_fin`: Fecha de fin del rango (por defecto: fecha actual)
- `skip`: Número de registros a saltar para paginación (por defecto: 0)
- `take`: Número de registros a tomar para paginación (por defecto: 10)

## Componentes Implementados

### 1. `processService.ts`
Servicio que maneja las peticiones HTTP con los filtros:

```typescript
export interface ProcessFilters {
  no_id_paciente?: string;
  estado?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  skip?: number;
  take?: number;
}
```

### 2. `data-table-filter-form.tsx`
Formulario de filtros con los siguientes campos:
- **ID del Paciente**: Input de texto para filtrar por ID
- **Estado**: Select con opciones (DIRECCIONADO, PENDIENTE, ANULADO)
- **Rango de Fechas**: Dos inputs de tipo date para fecha inicio y fin

### 3. `data-table-filters-drawer.tsx`
Drawer que contiene el formulario de filtros con:
- Botón "Filtrar" para aplicar los filtros
- Botón "Cancelar" para cerrar el drawer
- Valores por defecto configurados

### 4. `data-table.tsx`
Data Table actualizado que:
- Maneja el estado de los filtros
- Realiza peticiones automáticas cuando cambian los filtros
- Soporta paginación con `skip` y `take`
- Notifica cambios de datos al componente padre

## Valores por Defecto

- **ID del Paciente**: Vacío
- **Estado**: "PENDIENTE"
- **Fecha Inicio**: Primer día del mes actual
- **Fecha Fin**: Fecha actual
- **Skip**: 0
- **Take**: 10

## Uso

### En un Componente Padre

```typescript
import { DataTable } from "@/components/tasks/components/data-table";
import { columns } from "@/components/tasks/components/columns";
import { useState } from "react";

export default function MyPage() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const handleDataChange = (newData, newTotal) => {
    setData(newData);
    setTotal(newTotal);
  };

  return (
    <DataTable 
      data={data} 
      columns={columns} 
      onDataChange={handleDataChange}
    />
  );
}
```

## Flujo de Funcionamiento

1. **Inicialización**: El Data Table se inicializa con los valores por defecto
2. **Carga Inicial**: Se realiza la primera petición con los filtros por defecto
3. **Filtros**: El usuario puede abrir el drawer y modificar los filtros
4. **Aplicación**: Al hacer clic en "Filtrar", se actualizan los filtros y se realiza una nueva petición
5. **Paginación**: Los controles de paginación actualizan `skip` y `take` automáticamente
6. **Actualización**: Cada cambio en filtros o paginación dispara una nueva petición

## URL de Ejemplo

```
http://localhost:3000/consulta/procesos?no_id_paciente=123456&estado=PENDIENTE&fecha_inicio=2024-01-01&fecha_fin=2024-01-31&skip=0&take=10
```

## Características

- ✅ Filtros por ID de paciente
- ✅ Filtros por estado
- ✅ Filtros por rango de fechas
- ✅ Paginación automática
- ✅ Valores por defecto configurados
- ✅ Interfaz de usuario intuitiva
- ✅ Manejo de errores
- ✅ Tipado TypeScript completo 