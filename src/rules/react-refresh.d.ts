import type { RulesObject } from '../rule-config';

/**
 * All ReactRefresh rules.
 */
export interface ReactRefreshRules {
  'react-refresh/only-export-components': [
    {
      allowConstantExport?: boolean;
      checkJS?: boolean;
      allowExportNames?: string[];
    }?,
  ];
}

export type ReactRefreshRulesObject = RulesObject<ReactRefreshRules>;
