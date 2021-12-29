import { UsePaginationOptions, UseRowSelectHooks, UseSortByOptions } from "react-table"

declare module "react-table" {
  export interface TableOptions<D extends Record<string, unknown>>
    extends UseRowSelectHooks<D>,
      UseFiltersOptions<D>,
      UsePaginationOptions<D>,
      UseSortByOptions<D>,
      UseGroupByColumnOptions<D>,
      UseGroupByOptions<D>,
      UseGlobalFiltersOptions<D> {}

  export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>> extends UseSortByHooks<D>, UseRowSelectHooks<D> {}

  export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseSortByInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UseColumnOrderInstanceProps<D> {}

  export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersState<D>,
      UseRowSelectState<D>,
      UsePaginationState<D>,
      UseSortByInstanceProps<D> {}

  export interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersColumnOptions<D>,
      UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersColumnProps<D>,
      UseSortByColumnProps<D> {}
}
