import { AxiosInstance } from 'axios';
import { ServiceBase } from './base';
import { ITask } from '~/components/task/model';
import { WorkerContext } from '~/@types/app';

export class TasksService extends ServiceBase<ITask> {
    constructor(axios: AxiosInstance, ctx: WorkerContext) {
        super(axios, 'tasks', ctx);
    }
}
