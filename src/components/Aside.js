import AsideItem from "./AsideItem";

let Aside = ({ step }) => {
  let steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  return (
    <aside className="d-flex rounded-lg-3 m-lg-3 pt-lg-5 px-lg-4 h-lg-100">
      <ol className="d-flex flex-row flex-lg-column mx-auto mx-lg-0">
        {steps.map((title, index) => {
          return <AsideItem title={title} itemStep={index} isActive={step===index} />;
        })}
      </ol>
    </aside>
  );
};

export default Aside;
