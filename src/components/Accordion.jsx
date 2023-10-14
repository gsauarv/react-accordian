import { useState } from "react";

const Accordion = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[40dvw] bg-white min-h-[50dvh] shadow-md rounded-md px-12 py-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Accordion</h1>
            <p className="text-gray-600">
              The Accordion is a graphical control element comprising a
              vertically stacked list of items,such as labels or thumbnails.
            </p>
          </div>

          {/* list of accordions */}

          <div className="mt-10 border-t-2">
            <AccordionList
              title={"What is Lorem Ipsum?"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />

            <AccordionList
              title={"Why do we use it?"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              isOpen={true}
            />

            <AccordionList
              title={"Where can I get some?"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;

const AccordionList = ({ title, description, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);
  const handleOpenClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={() => handleOpenClose()}
        className="flex items-center gap-3 mt-5 cursor-pointer"
      >
        <button className="w-[20] h-[20]">
          <span className="material-symbols-outlined">
            {open ? "expand_less" : "expand_more"}
          </span>
        </button>

        <h2 className="p-0 m-0 text-lg font-semibold">{title}</h2>
      </div>

      {open && (
        <div className="p-6 bg-slate-100 text-[14px] mt-2 rounded-md ">
          {description}
        </div>
      )}
    </>
  );
};
