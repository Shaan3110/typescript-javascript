export interface Tasks {
    id: number,
    title: string,
    content: string
}

export interface TaskList extends Array<Tasks>{}

export interface TasksProps {
    d: TaskList | undefined,
    changed: Function
  }