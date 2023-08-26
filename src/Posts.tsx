export function Posts() {
  return (
    <>
      <div className="posts mt-8">
        <span className="posts sub-title">Posts</span>
        <div className="box grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10 mt-4"></div>
        <div className="loading text-gray-300 text-3xl font-header">
          loading...
        </div>
      </div>
    </>
  );
}
