export type Project = {
  id: number;
  title: string;
  description: {
    time: number;
    blocks: {
      id: string;
      data: {
        text: string;
        level?: number;
        link?: string;
        items?: string[];
        style?: string;
      },
      type: string;
    }[],
    version: string;
  },
  slug: string;
  works: string;
  equipment: string;
  short_description: {
    time: number;
    blocks: {
      id: string;
      data: {
        text: string;
      },
      type: string;
    }[],
    version: string;
  },
  customer: string;
  date: string;
  published: boolean;
  photos: {
    id: number;
    catalog: string;
    name: string;
    project_files: {
      id: number;
      fileId: number;
      projectId: number;
    }
  }[]
}