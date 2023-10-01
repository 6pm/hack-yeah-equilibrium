type Props = {
  url: string;
  title: string;
  description: string;
};

export default function TitleLink({ url, title, description }: Props) {
  return (
    <a
      href={url}
      className="flex flex-col items-center justify-center group rounded-lg  border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className="mb-3 text-xl font-semibold">
        {`${title} `}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`max-w-[30ch] text-sm justify-center opacity-50`}>
        {description}
      </p>
    </a>
  );
}
