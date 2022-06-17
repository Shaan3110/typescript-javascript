export interface tasks {
    id: number,
    title: string,
    content: string
}

export interface tasklist extends Array<tasks>{}