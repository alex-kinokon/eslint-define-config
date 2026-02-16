import type { RulesObject } from '../rule-config';

/**
 * All ReactRefresh rules.
 */
export interface ReactRefreshRules {
  /**
   * @preset `react-refresh/recommended`, `react-refresh/vite`, `react-refresh/next`
   */
  'react-refresh/only-export-components': [
    {
      extraHOCs?: string[];
      allowExportNames?: string[];
      allowConstantExport?: boolean;
      checkJS?: boolean;
    }?,
  ];
}

export type ReactRefreshRulesObject = RulesObject<ReactRefreshRules>;
