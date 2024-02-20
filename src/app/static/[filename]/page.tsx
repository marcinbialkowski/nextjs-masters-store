import { notFound } from 'next/navigation';
import { type ComponentType } from 'react';

interface StaticPageProps {
  params: { filename: string };
}

const StaticPage = async ({ params }: StaticPageProps) => {
  const Content = await import(`./${params.filename}.mdx`).then(
    (module: { default: ComponentType }) => module.default,
    () => notFound(),
  );

  return (
    <article className="prose mx-auto pt-14">
      <Content />
    </article>
  );
};

export default StaticPage;
