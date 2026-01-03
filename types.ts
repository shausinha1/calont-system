
export interface Pillar {
  title: string;
  description: string;
  color: string;
}

export interface SectionProps {
  id: string;
  onDownload?: (id: string) => void;
}
