import { useHead } from "@fixit/ui";

type PageHeadTitleProps = {
  title?: string;
  description?: string;
};

export const PageHead: React.FC<PageHeadTitleProps> = (props) => {
  const { title } = props;

  useHead({ title });

  return null;
};
