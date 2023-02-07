import { PerJobPost } from "./per-job-post.model";

export class PerJobCv {
    id?: number;
    userId!: number;
    jobId!: number;
    status!: boolean;
    perJobPost!: PerJobPost;
}
