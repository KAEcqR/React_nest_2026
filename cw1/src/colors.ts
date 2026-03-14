export const colors: string[] = ["red", "blue", "green"];

export const actualDate = new Date();

export function getColor(index: number): string {
    return colors[index] || "color not found";
}