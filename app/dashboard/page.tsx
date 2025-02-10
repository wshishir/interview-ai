import NewInterview from "./_components/NewInterview";

const page = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">Start a new Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5">
        <NewInterview/>
      </div>

    </div>
  );
};

export default page;
