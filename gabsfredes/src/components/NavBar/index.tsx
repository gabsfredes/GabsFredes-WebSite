import BarLinks from "./navLinksComponent";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full flex box-border justify-between items-center gap-1 py-8 px-10 md:gap-3 md:px-12 lg:gap-10">
      <div className="flex-col text-center items-center">
        <p className="gradient font-bold text-2xl md:text-2xl lg:text-4xl tracking-wider">
          &#123;GF&#125;
        </p>
        <p className="gradient font-semibold text-lg md:text-xl lg:text-2xl">
          gabsfredes
        </p>
      </div>
      <BarLinks />
    </nav>
  );
};

export default NavBar;
