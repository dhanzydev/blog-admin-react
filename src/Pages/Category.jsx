import Table from "../Components/Table";

const Category = () => {
  const dataTable = {
    btnText: "Add Category",
    tableHead: ["Nama Kategori", "Action"],
    useFilter: false,
  };

  return (
    <>
      <Table data={dataTable} />
    </>
  );
};

export default Category;
