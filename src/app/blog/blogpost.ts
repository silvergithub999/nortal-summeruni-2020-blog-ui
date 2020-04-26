export class Blogpost {
  title: string;
  content: string;
  author: string;
  timeOfCreation?: string;
  id?: number;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
