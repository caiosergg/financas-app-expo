export interface MovementItem {
  id: number;
  label: string;
  value: string;
  date: string;
  type: 0 | 1; // 0 = gasto, 1 = entrada
}
