import Input from "./Step1_Inputs";

let Step1 = () => {
  const inputs = [
    {
      id: "name",
      type: "text",
      placeholder: "e.g. Stephen King",
      labelName: "Name",
    },
    {
      id: "email",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
      labelName: "Email Address",
    },
    {
      id: "name",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
      labelName: "Phone Number",
    },
  ];

  return (
    <>
      <form
        className="px-3 py-4 p-sm-5 mx-auto d-flex flex-column bg-light rounded-4"
        action=""
      >
        <h1 className="fs-1 my-2 text-dark fw-bolder">Personal Info</h1>
        <p className="text-muted my-2 mb-5">
          Please provide your name, email address, and phone number
        </p>

        {inputs.map((element, index) => (
          <Input
            key={index}
            id={element.id}
            type={element.type}
            placeholder={element.placeholder}
            labelName={element.labelName}
          />
        ))}
      </form>
    </>
  );
};

export default Step1;
