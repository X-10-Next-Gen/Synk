import { useState } from "react";

interface Tool {
  id: number;
  name: string;
  category: string;
  price: string;
}

const ManageTools = () => {
  const [tools, setTools] = useState<Tool[]>([
    { id: 1, name: "AI Image Enhancer", category: "Image Processing", price: "$25" },
    { id: 2, name: "Chatbot API", category: "Natural Language Processing", price: "$50" },
    { id: 3, name: "Text-to-Speech Engine", category: "Voice Processing", price: "$30" },
    { id: 4, name: "AI Voice Cloning", category: "Voice Processing", price: "$40" },
    { id: 5, name: "Sentiment Analysis", category: "Natural Language Processing", price: "$35" },
    { id: 6, name: "Face Recognition API", category: "Image Processing", price: "$60" },
  ]);

  const [newTool, setNewTool] = useState({ name: "", category: "", price: "" });
  const [editTool, setEditTool] = useState<Tool | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 5;

  // Filter tools based on search and category
  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || tool.category === selectedCategory)
  );

  // Pagination Logic
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);

  const addTool = () => {
    if (newTool.name && newTool.category && newTool.price) {
      setTools([...tools, { id: tools.length + 1, ...newTool }]);
      setNewTool({ name: "", category: "", price: "" });
    }
  };

  const deleteTool = (id: number) => {
    setTools(tools.filter((tool) => tool.id !== id));
  };

  const startEditing = (tool: Tool) => {
    setEditTool(tool);
  };

  const saveEdit = () => {
    if (editTool) {
      setTools(tools.map((tool) => (tool.id === editTool.id ? editTool : tool)));
      setEditTool(null);
    }
  };

  const nextPage = () => {
    if (indexOfLastTool < filteredTools.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Get unique categories for dropdown
  const uniqueCategories = ["All", ...new Set(tools.map((tool) => tool.category))];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Manage Your AI Tools</h1>
      <p className="text-gray-300 mb-6">Add, edit, and remove your AI tools here.</p>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded w-full md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded w-full md:w-1/4"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Add or Edit Tool Form */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl text-white mb-2">{editTool ? "Edit Tool" : "Add New Tool"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Tool Name"
            value={editTool ? editTool.name : newTool.name}
            onChange={(e) =>
              editTool
                ? setEditTool({ ...editTool, name: e.target.value })
                : setNewTool({ ...newTool, name: e.target.value })
            }
            className="p-2 bg-gray-700 text-white rounded w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={editTool ? editTool.category : newTool.category}
            onChange={(e) =>
              editTool
                ? setEditTool({ ...editTool, category: e.target.value })
                : setNewTool({ ...newTool, category: e.target.value })
            }
            className="p-2 bg-gray-700 text-white rounded w-full"
          />
          <input
            type="text"
            placeholder="Price"
            value={editTool ? editTool.price : newTool.price}
            onChange={(e) =>
              editTool
                ? setEditTool({ ...editTool, price: e.target.value })
                : setNewTool({ ...newTool, price: e.target.value })
            }
            className="p-2 bg-gray-700 text-white rounded w-full"
          />
          {editTool ? (
            <button
              onClick={saveEdit}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={addTool}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Add Tool
            </button>
          )}
        </div>
      </div>

      {/* Tool List */}
      <h2 className="text-2xl text-white mb-4">Your AI Tools</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="hidden md:grid grid-cols-5 bg-gray-700 text-white py-3 px-4 font-semibold rounded-t-lg">
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Actions</div>
        </div>

        {currentTools.map((tool) => (
          <div
            key={tool.id}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 border-b border-gray-700 py-3 px-4 text-white"
          >
            <div className="font-semibold md:font-normal">{tool.name}</div>
            <div>{tool.category}</div>
            <div className="text-green-400">{tool.price}</div>
            <div className="flex gap-2">
              <button
                onClick={() => startEditing(tool)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded w-full md:w-auto"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTool(tool.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded w-full md:w-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"} text-white`}
          >
            Previous
          </button>
          <span className="text-white">Page {currentPage}</span>
          <button
            onClick={nextPage}
            disabled={indexOfLastTool >= filteredTools.length}
            className={`px-4 py-2 rounded ${indexOfLastTool >= filteredTools.length ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"} text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageTools;
