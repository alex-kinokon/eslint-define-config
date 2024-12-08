import type { RulesObject } from '../rule-config';

/**
 * All ReactRefresh rules.
 */
export interface ReactRefreshRules {
  'react-refresh/only-export-components': [
    {
      allowExportNames?: string[];
      allowConstantExport?: boolean;
      customHOCs?: string[];
      checkJS?: boolean;
    }?,
  ];
}

export type ReactRefreshRulesObject = RulesObject<ReactRefreshRules>;
