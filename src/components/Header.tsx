interface HeaderProps {
  title: string;
  lead: string;
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <header className="py-0 mb-0">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-0">
            <h1 className="display-4 text-white mt-0 mb-0">{title}</h1>
            <p className="lead mb-5 text-white-50">{lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
