export interface Placeholder {
  animation: 'pulse' | null;
  styles: PlaceholderStyle;
}

export type PlaceholderStyle =
  | {
      [klass: string]: any;
    }
  | undefined
  | null;
