export class SubjectNotFoundError extends Error {
  constructor() {
    super('Subject not found');
    this.name = 'SubjectNotFoundError';
  }
}
