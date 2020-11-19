export interface MoneyItem {
    id: string,
    price: number;
    description: string;
    date: Date;
}

export function createUniqueId(): string {
    const t = new Date().getTime();
    return t + '_' + Math.random().toString(36).substr(2, 9);
}