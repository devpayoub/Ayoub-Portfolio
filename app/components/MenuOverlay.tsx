import { Navlink } from "./Navlink";

interface Links {
  path: string;
  title: string;
}

export const MenuOverlay = ({ links }: { links: Links[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links?.map((link, index) => (
        <li key={index}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
